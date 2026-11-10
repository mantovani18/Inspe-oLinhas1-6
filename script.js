const state = { selectedLine: null, items: [], analysisId: null };
const lineMap = {
  1: 'LINHA 1 - INSTANTÂNEO',
  2: 'LINHA 2 - NINHO',
  3: 'LINHA 3 - CORTADOS',
  4: 'LINHA  4 - LONGA',
  5: 'LINHA 5 - LONGA',
  6: 'LINHA 8 - CORTADOS'
};
const sectionIds = { 1: 300895436, 2: 334828210, 3: 504805187, 4: 1433985433, 5: 1297059648, 6: 487755452 };
const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function getQueryLine() {
  const value = Number(new URLSearchParams(location.search).get('linha'));
  return Number.isInteger(value) && lineMap[value] ? value : null;
}

function setupLineScreen() {
  $('lineSelect').innerHTML = '<option value="">Selecione...</option>' +
    Object.entries(lineMap).map(([code, name]) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  const queryLine = getQueryLine();
  if (queryLine) {
    $('lineSelect').value = lineMap[queryLine];
    $('lineSelect').disabled = true;
  }
}

function activeItems(lineCode) {
  const start = FORM_ITEMS.findIndex((item) => item.id === sectionIds[lineCode]) >= 0
    ? FORM_ITEMS.findIndex((item) => item.id === sectionIds[lineCode])
    : FORM_ITEMS.findIndex((item) => item.type === 8 && item.title === lineMap[lineCode]);
  if (start < 0) return [];
  const end = FORM_ITEMS.findIndex((item, index) => index > start && item.type === 8);
  return FORM_ITEMS.slice(start + 1, end < 0 ? FORM_ITEMS.length : end).filter((item) => item.type !== 11);
}

function fieldName(item, groupIndex) { return `q-${item.id}-${groupIndex}`; }

function optionMarkup(item, groupIndex) {
  return item.options.filter((option) => option !== undefined).map((option) => {
    const other = option === '';
    const label = other ? 'Outro (especifique)' : option;
    const otherInput = other ? `<input class="other-input" type="text" data-other-for="${fieldName(item, groupIndex)}" aria-label="Especifique outro valor" disabled>` : '';
    return `<label class="option"><input type="${item.type === 4 ? 'checkbox' : 'radio'}" name="${fieldName(item, groupIndex)}" value="${escapeHtml(option)}" ${item.type !== 4 && item.required ? 'required' : ''}><span>${escapeHtml(label)}</span>${otherInput}</label>`;
  }).join('');
}

function renderItem(item, groupIndex) {
  if (item.type === 6) return `<div class="section-heading"><h3>${escapeHtml(item.title)}</h3></div>`;
  const required = item.required ? ' *' : '';
  if (item.type === 1) return `<div class="card question-card"><label for="${fieldName(item, groupIndex)}">${escapeHtml(item.title)}${required}</label><input id="${fieldName(item, groupIndex)}" name="${fieldName(item, groupIndex)}" type="text" ${item.required ? 'required' : ''}></div>`;
  return `<div class="card question-card"><fieldset><legend>${escapeHtml(item.title)}${required}</legend>${optionMarkup(item, groupIndex)}</fieldset></div>`;
}

function renderGroup(groupIndex) {
  return `<div class="product-group">${state.items.map((item) => renderItem(item, groupIndex)).join('')}</div>`;
}

function startForm() {
  const code = Object.keys(lineMap).find((key) => lineMap[key] === $('lineSelect').value);
  if (!code) { $('lineSelect').focus(); return; }
  state.selectedLine = lineMap[code];
  state.items = activeItems(Number(code));
  if (!state.items.some((item) => [1, 2, 4].includes(item.type))) {
    $('formError').textContent = 'Não foi possível carregar as perguntas desta linha. Atualize os arquivos do site e tente novamente.';
    return;
  }
  $('lineTitle').textContent = state.selectedLine;
  $('formFields').innerHTML = `<div class="card question-card"><label for="q-1579813740">1. NOME DO AVALIADOR: *</label><input id="q-1579813740" name="q-1579813740" type="text" required></div><div id="productGroups">${renderGroup(0)}</div>`;
  $('lineScreen').classList.add('hidden');
  $('formScreen').classList.remove('hidden');
  $('stepLabel').textContent = 'Preenchimento da análise';
  $('progressBar').style.width = '55%';
  window.scrollTo(0, 0);
}

function collectAnswers() {
  const answers = { 1579813740: document.querySelector('[name="q-1579813740"]').value.trim() };
  const headers = [{ id: 1579813740, title: '1. NOME DO AVALIADOR:', required: true }];
  [...document.querySelectorAll('.product-group')].forEach((group, groupIndex) => state.items.forEach((item) => {
    if (![1, 2, 4].includes(item.type)) return;
    const name = fieldName(item, groupIndex);
    const fields = [...document.querySelectorAll(`[name="${name}"]`)];
    let value = item.type === 4 ? fields.filter((field) => field.checked).map((field) => field.value) : (fields.find((field) => field.checked)?.value || fields[0]?.value || '');
    const other = document.querySelector(`[data-other-for="${name}"]`);
    if (other?.value.trim()) value = Array.isArray(value) ? value.map((v) => v || `Outro: ${other.value.trim()}`) : `Outro: ${other.value.trim()}`;
    const id = `${item.id}-${groupIndex}`;
    answers[id] = value;
    headers.push({ id, title: `${item.title} (produto ${groupIndex + 1})`, required: item.required });
  }));
  return { answers, headers };
}

function validateCheckboxes() {
  for (const item of state.items) {
    if (item.type === 4 && item.required && !document.querySelector(`[name^="q-${item.id}-"]:checked`)) return item.title;
  }
  return '';
}

function checkRecord(id) {
  return new Promise((resolve, reject) => {
    const callback = `check_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement('script');
    const cleanup = () => { clearTimeout(timer); delete window[callback]; script.remove(); };
    const timer = setTimeout(() => { cleanup(); reject(new Error('Tempo esgotado ao consultar a planilha.')); }, 10000);
    window[callback] = (result) => { cleanup(); resolve(Boolean(result?.ok && result.exists)); };
    script.onerror = () => { cleanup(); reject(new Error('Não foi possível consultar a planilha.')); };
    script.src = `${API_URL}?id=${encodeURIComponent(id)}&callback=${callback}`;
    document.body.appendChild(script);
  });
}

async function submitAnalysis(event) {
  event.preventDefault();
  $('formError').textContent = '';
  if (!$('analysisForm').reportValidity()) return;
  const missing = validateCheckboxes();
  if (missing) { $('formError').textContent = `Responda ao campo obrigatório: ${missing}`; return; }
  const button = $('submitButton');
  button.disabled = true;
  button.textContent = 'Enviando...';
  const analysisId = `AN-${Date.now()}-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  const collected = collectAnswers();
  const code = Object.keys(lineMap).find((key) => lineMap[key] === state.selectedLine);
  try {
    await fetch(API_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ analysisId, lineCode: Number(code), line: state.selectedLine, answers: collected.answers, headers: collected.headers }) });
    for (let attempt = 0; attempt < 12; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, attempt ? 1000 : 1500));
      if (await checkRecord(analysisId)) {
        $('analysisId').textContent = analysisId;
        $('formScreen').classList.add('hidden');
        $('successScreen').classList.remove('hidden');
        $('progressBar').style.width = '100%';
        $('stepLabel').textContent = 'Concluído';
        return;
      }
    }
    throw new Error('O registro não foi confirmado pela planilha.');
  } catch (error) {
    $('formError').textContent = `Falha no envio: ${error.message}`;
    button.disabled = false;
    button.textContent = 'Enviar análise';
  }
}

function resetForm() {
  $('successScreen').classList.add('hidden');
  $('formScreen').classList.add('hidden');
  $('lineScreen').classList.remove('hidden');
  $('stepLabel').textContent = 'Identificação da linha';
  $('progressBar').style.width = '12%';
}

setupLineScreen();
$('startButton').addEventListener('click', startForm);
$('backButton').addEventListener('click', resetForm);
$('newButton').addEventListener('click', resetForm);
$('analysisForm').addEventListener('submit', submitAnalysis);

document.addEventListener('change', (event) => {
  const control = event.target;
  if (!(control instanceof HTMLInputElement) || !control.name || !control.name.startsWith('q-')) return;
  const otherInput = document.querySelector(`[data-other-for="${control.name}"]`);
  if (!otherInput) return;
  const otherOption = [...document.querySelectorAll(`[name="${control.name}"]`)]
    .find((input) => input.value === '');
  otherInput.disabled = !otherOption?.checked;
  if (otherInput.disabled) otherInput.value = '';
});
