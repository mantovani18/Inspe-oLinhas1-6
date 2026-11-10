# Sistema Web de Análise de Máquinas

Aplicação estática em HTML, CSS e JavaScript para GitHub Pages. O formulário foi transcrito do Google Forms informado e os dados são gravados por Google Apps Script em uma planilha Google Sheets.

## 1. Criar a planilha

1. Crie uma planilha Google Sheets vazia.
2. Abra **Extensões > Apps Script**.
3. Cole o conteúdo de [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
4. Salve e execute `initialize` uma vez, autorizando o script. A aba `Análises` será criada.

## 2. Publicar a API

1. No Apps Script, clique em **Implantar > Nova implantação**.
2. Tipo: **Aplicativo da Web**.
3. Executar como: **Eu**.
4. Quem tem acesso: **Qualquer pessoa**.
5. Copie a URL `/exec` e cole em [`config.js`](config.js), substituindo `COLE_A_URL_DO_WEB_APP_AQUI`.
6. Se alterar o código depois, crie uma nova versão da implantação.

O envio usa `POST` com `text/plain` para evitar preflight. Como a resposta do POST pode ser opaca no navegador, o frontend confirma o ID com uma consulta JSONP (`doGet`) antes de mostrar sucesso. O ID também torna reenvios idempotentes e `LockService` protege envios simultâneos.

## 3. Publicar no GitHub Pages

1. Crie um repositório público e envie os arquivos desta pasta.
2. Em **Settings > Pages**, escolha a branch e a pasta raiz.
3. Aguarde a URL do site.

Não há credenciais administrativas no frontend. A URL da API é apenas o endereço público da implantação.

## 4. QR Codes

Use a URL do site com os parâmetros:

* `?linha=1` — Linha 1 - Instantâneo
* `?linha=2` — Linha 2 - Ninho
* `?linha=3` — Linha 3 - Cortados
* `?linha=4` — Linha 4 - Longa
* `?linha=5` — Linha 5 - Longa
* `?linha=6` — Linha 8 - Cortados

Exemplo: `https://USUARIO.github.io/REPOSITORIO/?linha=1`. Parâmetro ausente ou inválido mostra a seleção manual com todas as alternativas originais da pergunta de linha.

## 5. Teste operacional

Antes de distribuir os QR Codes, abra a URL em um celular e verifique: cada linha, campos obrigatórios, envio, ID exibido, nova linha na aba `Análises`, reenvio com o mesmo ID (não duplica) e comportamento quando a URL da API está incorreta. Faça o primeiro teste com uma cópia da planilha.
