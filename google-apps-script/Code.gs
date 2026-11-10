const SPREADSHEET_ID = '1-AZhGTmxWvnG4W4zCcS6Wc9ffdbieS1Q36U2I2TSKHs';
const SHEET_NAME = 'Análises';
const REQUIRED_KEYS = ['analysisId', 'answers', 'headers'];
const ALLOWED_LINES = [
  'LINHA 1 - INSTANTÂNEO', 'LINHA 2 - NINHO', 'LINHA 3 - CORTADOS',
  'LINHA  4 - LONGA', 'LINHA 5 - LONGA', 'LINHA 8 - CORTADOS',
  'LINHA 1 - MISTURA PARA BOLO', 'LINHA 2 - PAPEL', 'LINHA 3 - PLÁSTICO'
];

function normalizeText_(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/\s+/g, ' ').trim();
}

function canonicalLine_(value) {
  const normalized = normalizeText_(value);
  for (let i = 0; i < ALLOWED_LINES.length; i += 1) {
    if (normalizeText_(ALLOWED_LINES[i]) === normalized) return ALLOWED_LINES[i];
  }
  if (normalized.indexOf('LINHA 1 - INSTANT') === 0) return ALLOWED_LINES[0];
  if (normalized.indexOf('LINHA 2 - NINHO') === 0) return ALLOWED_LINES[1];
  if (normalized.indexOf('LINHA 3 - CORTADOS') === 0) return ALLOWED_LINES[2];
  if (normalized.indexOf('LINHA 4 - LONGA') === 0) return ALLOWED_LINES[3];
  if (normalized.indexOf('LINHA 5 - LONGA') === 0) return ALLOWED_LINES[4];
  if (normalized.indexOf('LINHA 8 - CORTADOS') === 0) return ALLOWED_LINES[5];
  if (normalized.indexOf('LINHA 1 - MISTURA PARA BOLO') === 0) return ALLOWED_LINES[6];
  if (normalized.indexOf('LINHA 2 - PAPEL') === 0) return ALLOWED_LINES[7];
  if (normalized.indexOf('LINHA 3 - PLASTICO') === 0) return ALLOWED_LINES[8];
  return '';
}

function lineFromCode_(value) {
  const lines = {
    1: ALLOWED_LINES[0], 2: ALLOWED_LINES[1], 3: ALLOWED_LINES[2],
    4: ALLOWED_LINES[3], 5: ALLOWED_LINES[4], 6: ALLOWED_LINES[5]
  };
  return lines[Number(value)] || '';
}

function sheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheetByName(SHEET_NAME)
    || spreadsheet.insertSheet(SHEET_NAME);
}

function initialize() {
  const sheet = sheet_();
  const headers = ['ID', 'Data', 'Horário', 'Linha'];
  const saved = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  if (saved.length === 0 || !saved[0]) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  return 'Planilha inicializada. Os cabeçalhos das perguntas são adicionados no primeiro envio.';
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const id = e.parameter.id || '';
  const exists = id ? findRow_(id) > 1 : false;
  const result = { ok: true, exists: exists, id: id };
  if (e.parameter.callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(e.parameter.callback)) {
    return ContentService.createTextOutput(`${e.parameter.callback}(${JSON.stringify(result)})`).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(result);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    if (!e || !e.postData || !e.postData.contents) throw new Error('O corpo da requisição está vazio.');
    const payload = JSON.parse(e.postData.contents);
    REQUIRED_KEYS.forEach(function (key) {
      if (payload[key] === undefined || payload[key] === null) {
        throw new Error(`Campo ausente: ${key}`);
      }
    });
    if (!/^AN-[0-9]+-[A-Z0-9]+$/.test(payload.analysisId)) throw new Error('ID inválido.');
    const line = lineFromCode_(payload.lineCode) || canonicalLine_(payload.line);
    if (!line) throw new Error('Linha inválida.');
    payload.line = line;
    if (findRow_(payload.analysisId) > 1) return json_({ ok: true, duplicate: true, id: payload.analysisId });
    if (!Array.isArray(payload.headers) || !payload.answers ||
      typeof payload.answers !== 'object' || Array.isArray(payload.answers)) {
      throw new Error('Estrutura das respostas inválida.');
    }
    if (payload.headers.length < 2) {
      throw new Error('Nenhuma pergunta da linha foi enviada.');
    }
    const sheet = sheet_();
    const baseHeaders = ['ID', 'Data', 'Horário', 'Linha'];
    const current = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    payload.headers.forEach(function (item) {
      const value = payload.answers[item.id];
      const empty = Array.isArray(value) ? value.length === 0 : !String(value || '').trim();
      if (item.required && empty) throw new Error(`Resposta obrigatória ausente: ${item.title}`);
    });
    const headers = payload.headers.map(function (item) { return `${item.id}: ${item.title}`; });
    if (current[4] === 'NOME DO AVALIADOR:' || current[4] === '1. NOME DO AVALIADOR:') {
      current[4] = '1579813740: 1. NOME DO AVALIADOR:';
    }
    const newHeaders = headers.filter(function (header) { return current.indexOf(header) === -1; });
    const finalHeaders = current.length ? current.concat(newHeaders) : baseHeaders.concat(headers);
    if (!current.length || finalHeaders.length > current.length || current[4] === '1579813740: 1. NOME DO AVALIADOR:') {
      sheet.getRange(1, 1, 1, finalHeaders.length).setValues([finalHeaders]);
    }
    const allHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = allHeaders.map(function (header, index) {
      if (index === 0) return payload.analysisId;
      if (index === 1) return new Date();
      if (index === 2) return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'HH:mm:ss');
      if (index === 3) return payload.line;
      const id = String(header).split(':')[0];
      const value = payload.answers[id];
      return Array.isArray(value) ? value.join('; ') : (value || '');
    });
    sheet.appendRow(row);
    return json_({ ok: true, id: payload.analysisId });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: error.message });
  } finally {
    lock.releaseLock();
  }
}

function findRow_(id) {
  const sheet = sheet_();
  if (sheet.getLastRow() < 2) return -1;
  const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues();
  for (let i = 0; i < values.length; i += 1) if (String(values[i][0]) === id) return i + 2;
  return -1;
}
