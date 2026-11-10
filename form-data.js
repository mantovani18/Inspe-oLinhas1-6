const FORM_ITEMS = [
  {
    "id": 1579813740,
    "title": "1. NOME DO AVALIADOR:",
    "type": 1,
    "required": true,
    "options": []
  },
  {
    "id": 294505146,
    "title": "2. LINHA DE PRODUÇÃO AVALIADA:",
    "type": 2,
    "required": true,
    "options": [
      "LINHA 1 - INSTANTÂNEO",
      "LINHA 2 - NINHO",
      "LINHA 3 - CORTADOS",
      "LINHA  4 - LONGA",
      "LINHA 5 - LONGA",
      "LINHA 8 - CORTADOS",
      "LINHA 1 - MISTURA PARA BOLO",
      "LINHA 2 - PAPEL",
      "LINHA 3 - PLÁSTICO"
    ]
  },
  {
    "id": 300895436,
    "title": "LINHA 1 - INSTANTÂNEO",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 1199854620,
    "title": "1 . PRODUTO:",
    "type": 4,
    "required": true,
    "options": [
      "CARNE COM TOMATE RENATA EXPRESS",
      "CARNE RENATA EXPRESS",
      "DIVERTIX CARNE SUAVE RENATA",
      "DIVERTIX GALINHA SUAVE RENATA",
      "FEIJÃO COM BACON RENATA EXPRESS",
      "FRANGO CREMOSO RENATA",
      "GALINHA RENATA EXPRESS",
      "GALINHA CAIPIRA RENATA EXPRESS",
      "4 QUEIJOS CREMOSO RENATA",
      "LEGUMES RENATA EXPRESS",
      "PICANHA CREMOSO RENATA",
      "CARNE TODESCHINI",
      "GALINHA CAIPIRA TODESCHINI",
      "GALINHA TODESCHINI",
      "LEGUMES TODESCHINI",
      ""
    ]
  },
  {
    "id": 1545907818,
    "title": "2. EMBALAGEM PRIMÁRIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1179700064,
    "title": "DEFEITOS EMBALAGEM PRIMÁRIA:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PRADÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 214251205,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 2119783813,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "CAMADAS SEPARADAS",
      "COR DA MASSA (COMENTAR)",
      "EXCESSO DE ÓLEO NA SUPERFICIAL",
      "FRITURA IRREGULAR (COMENTAR)",
      "GRAXA",
      "INSETOS",
      "PONTOS PRETOS",
      "PONTOS BRANCOS (COMENTAR)",
      "PONTOS DE RETALHOS",
      "MANCHAS ESCURAS",
      "ÍNDICE DE QUEBRA (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1152681122,
    "title": "FORMATO DO PRODUTO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 586542463,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1353371115,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "CAMADAS SEPARADAS",
      "DEFORMIDADES (COMENTAR)",
      "FORMATO NÃO CARACTERÍSTICO (COMENTAR)",
      "MUITO COMPACTO",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1143556836,
    "title": "SACHÊ INSTANTÂNEO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 153932958,
    "title": "SACHÊ TEMPERO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 627823866,
    "title": "DEFEITOS SACHÊ TEMPERO:",
    "type": 4,
    "required": true,
    "options": [
      "ESTUFADO",
      "ABERTO",
      "DESALINHADO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "TEMPERO NÃO COMPATÍVEL COM PRODUTO",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1941465830,
    "title": "ODOR",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1543160140,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1982300625,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2120076138,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 334828210,
    "title": "LINHA 2 - NINHO",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 169092079,
    "title": "1. PRODUTO:",
    "type": 2,
    "required": true,
    "options": [
      "ALETRIA SÊMOLA GALO",
      "FITILHOS DE OURO SÊMOLA TODESCHINI",
      "ALETRIA COM OVOS RENATA",
      "FITILHOS DE OURO COM OVOS TODESCHINI",
      "NINHO 2 SEMOLADO AZUL GALO",
      "NINHO 2 SÊMOLA GALO",
      "FETTUCCINE NINHOS SÊMOLA TODESCHINI",
      "NINHO 2 COM OVOS RENATA",
      "FETTUCCINE NINHOS COM OVOS TODESCHINI",
      "NINHO 3 SÊMOLA GALO",
      "NINHO 3 COM OVOS RENATA",
      "PAPPARDELLE COM OVOS RENATA",
      "PAPPARDELLE TEXTURIZADO SUPERIORE RENATA",
      "SPAGHETTI NIDO SÊMOLA GALO",
      ""
    ]
  },
  {
    "id": 113397856,
    "title": "2. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4  - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1806630911,
    "title": "DEFEITOS EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM FRACA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1166906062,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1031689947,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "CONDENSA",
      "COR DA MASSA (COMENTAR)",
      "GRAXA",
      "INSETOS",
      "MATERIAIS ESTRANHOS (COMENTAR)",
      "PONTOS BRANCOS (COMENTAR)",
      "PONTOS ESCUROS",
      "PONTOS DE RETALHOS",
      "ÍNDICE DE QUEBRA (COMENTAR)",
      "SECAGEM IRREGULAR (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 94934537,
    "title": "FORMATO DO MACARRÃO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 2133174505,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 2096638560,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "FORMATO NÃO CARACTERÍSTICO (COMENTAR)",
      "NINHO DEFORMADO",
      "NINHO MUITO COMPRIMIDO",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 239904116,
    "title": "ODOR:",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1287143820,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 411121581,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1676228501,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 504805187,
    "title": "LINHA 3 - CORTADOS",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 1588737034,
    "title": "AVALIAÇÃO DO PRODUTO FINAL.",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1420443029,
    "title": "1 . PRODUTO:",
    "type": 2,
    "required": true,
    "options": [
      "ARGOLA SÊMOLA GALO",
      "ALFABETO SÊMOLA GALO",
      "ALFABETO COM OVOS RENATA",
      "AVE MARIA SEMOLADO GALO",
      "AVE MARIA SÊMOLA GALO",
      "AVE MARIA COM OVOS RENATA",
      "AVE MARIA COM OVOS TODESCHINI",
      "CONCHA SÊMOLA GALO",
      "CONCHA COM OVOS RENATA",
      "PADRE NOSSO SÊMOLA GALO",
      "PADRE NOSSO SÊMOLA TODESCHINI",
      "PADRE NOSSO SEMOLADO GALO",
      "PADRE NOSSO COM OVOS RENATA",
      "PADRE NOSSO COM OVOS TODESCHINI",
      "PARAFUSO SÊMOLA GALO 500g",
      "PARAFUSO SÊMOLA TODESCHINI 500g",
      "PARAFUSO SÊMOLA GALO 1Kg",
      "PARAFUSO SÊMOLA TODESCHINI 1Kg",
      "PARAFUSO SEMOLADO GALO",
      "PARAFUSO COM OVOS RENATA",
      "PARAFUSO COM OVOS TODESCHINI",
      "PARAFUSO COMUM GALO",
      "PENA SEMOLADO GALO",
      "PENA SÊMOLA GALO",
      "PENA SÊMOLA TODESCHINI",
      "PENA COM OVOS RENATA",
      "PENA COM OVOS TODESCHINI",
      "NHOQUE COM OVOS RENATA",
      "NHOQUE SÊMOLA GALO",
      "RIGATONE SÊMOLA GALO",
      "TORTIGLIONE SÊMOLA GALO",
      ""
    ]
  },
  {
    "id": 1751819999,
    "title": "2. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 2078590399,
    "title": "DEFEITO EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PRÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "VALIDADE, LOTE FORA DESCENTRALIZADA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 742849457,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1858375648,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "CONDENSA",
      "COR DA MASSA (COMENTAR )",
      "CONTAMINAÇÃO POR OUTRO FORMATO (COMENTAR)",
      "GRAXA",
      "INSETOS",
      "MATERIAIS ESTRANHOS (COMENTAR)",
      "PONTOS BRANCOS (COMENTAR)",
      "PONTOS ESCUROS",
      "PONTOS DE RETALHO",
      "ÍNDICE DE QUEBRAS (COMENTAR)",
      "SECAGEM IRREGULAR \"DEFEITOS\" (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1929850623,
    "title": "FORMATO DO MACARRÃO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1727729316,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1606025555,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "CAVIDADE FECHADA/AMASSADA",
      "CORTE IRREGULAR",
      "DEFORMIDADES (COMENTAR)",
      "PEQUENOS FRAGMENTOS (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1844951356,
    "title": "ODOR",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 142487245,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 609005032,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1201599306,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 1433985433,
    "title": "LINHA 4 - MASSA LONGA",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 1058553903,
    "title": "1. PRODUTO:",
    "type": 2,
    "required": true,
    "options": [
      "ESPAGUETE 8 SÊMOLA GALO 500g",
      "SPAGHETTI 5 SÊMOLA TODESCHINI 500g",
      "ESPAGUETE 8 SÊMOLA GALO 1kg",
      "ESPAGUETE 8 SÊMOLA NORDESTE 1Kg",
      "SPAGHETTI 5 SÊMOLA TODESCHINI 1Kg",
      "ESPAGUETE 8 SEMOLADO GALO 500G",
      "ESPAGUETE 8 SEMOLADO GALO 1Kg",
      "ESPAGUETE 8 COM OVOS RENATA",
      "ESPAGUETE 8 COM OVOS LUCIANA",
      "ESPAGUETE 8 COM OVOS NORDESTE",
      "SPAGHETTI 5 COM OVOS TODESCHINI",
      "ESPAGUETE 9 COMUM GALO",
      "ESPAGUETINHO 9 SÊMOLA GALO",
      "SPAGHETTINI 6 SÊMOLA TODESCHINI",
      "ESPAGUETINHO 9 COM OVOS RENATA",
      "SPAGHETTINI 6 COM OVOS TODESCHINI",
      "FIDELINHO 10 SÊMOLA GALO",
      "FIDELINHO 10 SEMOLADO GALO",
      "FIDELINHO 10 COM OVOS RENATA",
      "FURADINHO 5 SÊMOLA GALO 500g",
      "FURADINHO 3 SÊMOLA TODESCHINI 500g",
      "FURADINHO 5 SÊMOLA GALO 1Kg",
      "FURADINHO 3 SÊMOLA TODESCHINI 1Kg",
      "FURADINHO 5 SEMOLADO GALO",
      "FURADINHO 5 COM OVOS RENATA",
      "FURADINHO 3 COM OVOS TODESCHINI",
      "LINGUINE SÊMOLA GALO",
      "LINGUINE COM OVOS RENATA",
      "LINGUINE COM OVOS TODESCHINI",
      ""
    ]
  },
  {
    "id": 1949771948,
    "title": "2. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 45386113,
    "title": "DEFEITO EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTES RASGADO;FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 766402289,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 379153926,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "CONDENSA",
      "COR DA MASSA (COMENTAR)",
      "ENCANOADO",
      "GRAXA",
      "INSETOS",
      "MATERIAIS ESTRANHOS (COMENTAR)",
      "PONTOS BRANCOS ( COMENTAR)",
      "PONTOS ESCUROS",
      "PONTOS DE RETALHO",
      "ÍNDÍCE DE QUEBRA (COMENTAR)",
      "SECAGEM IRREGULAR  \"DEFEITOS\" (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 320015559,
    "title": "FORMATO DO PRODUTO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1635377988,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 2081836030,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "FIOS DEFORMADOS",
      "FIOS COLADOS ENTRE SI",
      "ENCANOADO",
      "DESPONTADO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1431999230,
    "title": "ODOR",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 297818256,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1717507595,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 615193343,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 1297059648,
    "title": "LINHA 5 - MASSA LONGA",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 251315617,
    "title": "1. PRODUTO:",
    "type": 2,
    "required": true,
    "options": [
      "ESPAGUETE 8 SÊMOLA GALO 500g",
      "SPAGHETTI 5 SÊMOLA TODESCHINI 500g",
      "ESPAGUETE 8 SÊMOLA GALO 1Kg",
      "ESPAGUETE 8 SÊMOLA NORDESTE 1Kg",
      "SPAGHETTI 5 SÊMOLA TODESCHINI 1 Kg",
      "ESPAGUETE 8 SEMOLADO GALO 500g",
      "ESPAGUETE 8 SEMOLADO GALO 1 Kg",
      "ESPAGUETE 8 COM OVOS RENATA",
      "ESPAGUETE 8 COM OVOS LUCIANA",
      "ESPAGUETE 8 COM OVOS NORDESTE",
      "SPAGHETTI 5 COM OVOS TODESCHINI",
      "ESPAGUETE 9 COMUM GALO",
      "ESPAGUETINHO 9 SÊMOLA GALO",
      "SPAGHETTINI 6 SÊMOLA TODESCHINI",
      "ESPAGUETINHO 9 COM OVOS RENATA",
      "SPAGUETTINI 6 COM OVOS TODESCHINI",
      "FIDELINHO 10 SÊMOLADO GALO",
      "FIDELINHO 10 SÊMOLA GALO",
      "FIDELINHO 10 COM OVOS RENATA",
      "FURADINHO 5 SEMOLADO GALO",
      "FURADINHO 5 SÊMOLA GALO 500g",
      "FURADINHO 3 SÊMOLA TODESCHINI 500g",
      "FURADINHO 5 SÊMOLA GALO 1Kg",
      "FURADINHO 5 SÊMOLA TODESCHINI 1Kg",
      "FURADINHO 5 COM OVOS RENATA",
      "FURADINHO 3 COM OVOS TODESCHINI",
      "LINGUINE SÊMOLA GALO",
      "LINGUINE COM OVOS RENATA",
      "LINGUINE COM OVOS TODESCHINI",
      ""
    ]
  },
  {
    "id": 1168867547,
    "title": "2. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 221253405,
    "title": "DEFEITO EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 82141047,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 199036859,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "CONDENSA",
      "COR DA MASSA (COMENTAR)",
      "ENCANOADO",
      "GRAXA",
      "INSETOS",
      "MATERIAIS ESTRANHOS (COMENTAR)",
      "PONTOS BRANCOS ( COMENTAR)",
      "PONTOS ESCUROS",
      "PONTOS DE RETALHO",
      "ÍNDÍCE DE QUEBRA (COMENTAR)",
      "SECAGEM IRREGULAR  \"DEFEITOS\" (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2051447777,
    "title": "FORMATO DO PRODUTO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1615853984,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 697284655,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "FIOS DEFORMADOS",
      "FIOS COLADOS ENTRE SI",
      "ENCANOADO",
      "DESPONTADO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1109059828,
    "title": "ODOR",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1380450058,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 128875684,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2113413662,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 487755452,
    "title": "LINHA 8 - CORTADOS",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 1297885433,
    "title": "AVALIAÇÃO DO PRODUTO FINAL.",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1480478579,
    "title": "1. PRODUTO:",
    "type": 2,
    "required": true,
    "options": [
      "PARAFUSO SEMOLADO GALO",
      "PARAFUSO COMUM GALO",
      "PARAFUSO SÊMOLA GALO 500g",
      "PARAFUSO SÊMOLA TODESCHINI 500g",
      "PARAFUSO SÊMOLA GALO 1Kg",
      "PARAFUSO SÊMOLA TODESCHINI 1Kg",
      "PARAFUSO SÊMOLA NORDESTE 1Kg",
      "PARAFUSO COM OVOS RENATA",
      "PARAFUSO COM OVOS TODESCHINI",
      "PARAFUSO COM OVOS LUCIANA",
      "PARAFUSO COM OVOS NORDESTE 500g",
      "PADRE NOSSO SEMOLADO AZUL GALO",
      "PADRE NOSSO SÊMOLA GALO",
      "PADRE NOSSO SÊMOLA TODESCHINI",
      "PADRE NOSSO COM OVOS RENATA",
      "PADRE NOSSO COM OVOS TODESCHINI",
      "PENA SEMOLADO AZUL GALO",
      "PENA SÊMOLA GALO",
      "PENA SÊMOLA TODESCHINI",
      "PENA COM OVOS RENATA",
      "PENA COM OVOS TODESCHINI",
      ""
    ]
  },
  {
    "id": 1951784902,
    "title": "2. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1898925032,
    "title": "DEFEITO EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTO",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE FORA DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 83409677,
    "title": "COMENTÁRIO:",
    "type": 1,
    "required": false,
    "options": []
  },
  {
    "id": 633719221,
    "title": "3. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 2115995880,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "COR DA MASSA (COMENTAR)",
      "CONTAMINAÇÃO POR OUTRO FORMATO",
      "CONDENSA",
      "GRAXA",
      "INSETOS",
      "MATERIAIS ESTRANHOS (COMENTAR)",
      "PONTOS ESCUROS",
      "PONTOS BRANCOS (COMENTAR)",
      "PONTOS DE RETALHOS",
      "ÍNDICE DE QUEBRA (COMENTAR)",
      "SECAGEM IRREGULAR \"DEFEITOS\" (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 483890841,
    "title": "FORMATO DO PRODUTO",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 704248973,
    "title": "4. FORMATO NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1781243304,
    "title": "DEFEITOS FORMATO:",
    "type": 4,
    "required": true,
    "options": [
      "CAVIDADE FECHADA/AMASSADA",
      "CORTE IRREGULAR",
      "DEFORMIDADES",
      "FORMATO NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 143725480,
    "title": "ODOR",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 327614084,
    "title": "5. ODOR NOTA (1-5) :",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1096964231,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "MOFO",
      "RANÇO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1235485688,
    "title": "DESEJA AVALIAR OUTRO PRODUTO ?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 1511809344,
    "title": "AVALIAÇÃO DA QUALIDADE DE FARINHAS",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 509085254,
    "title": "1. PRODUTO:",
    "type": 4,
    "required": true,
    "options": [
      "FARINHA RENATA DIA a DIA (papel) 1kg",
      "FARINHA RENATA DIA a DIA (papel) 5kg",
      "FARINHA RENATA DIA a DIA (plástico) 1kg",
      ""
    ]
  },
  {
    "id": 97834711,
    "title": "AVALIE O PRODUTO FINAL",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 1836864027,
    "title": "1. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1734888991,
    "title": "DEFEITOS EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PEQUENAS ABERTURAS",
      "PACOTE RASGADO/ FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM ABERTA",
      "SELAGEM FRACA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTOS",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2098496738,
    "title": "2. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 507325127,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "COR MUITO ESCURA",
      "COR MUITO CLARA",
      "MANCHAS (COMENTAR)",
      "INSETOS",
      "PARTÍCULAS ESTRANHAS (COMENTAR)",
      "PONTOS ESCUROS NA FARINHA",
      "CONTAMINAÇÃO DO PROCESSO (COMENTAR)",
      "GRANULOMETRIA (COMENTAR )",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 837925804,
    "title": "3. ODOR NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 128369574,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "ÁCIDO",
      "ENVELHECIDO",
      "FERMENTADO",
      "QUÍMICO",
      "MOFO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 970424674,
    "title": "4. TEXTURA \"TOQUE\"  NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 20638017,
    "title": "DEFEITOS TEXTURA:",
    "type": 4,
    "required": true,
    "options": [
      "FARINHA EMPEDRADA",
      "PRESENÇA DE GRUMOS",
      "FARINHA ÚMIDA",
      "TEXTURA IRREGULAR (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1618782644,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  },
  {
    "id": 222802350,
    "title": "AVALIAÇÃO DA QUALIDADE DE MISTURA PARA BOLO",
    "type": 8,
    "required": false,
    "options": []
  },
  {
    "id": 559055863,
    "title": "1. PRODUTO:",
    "type": 4,
    "required": true,
    "options": [
      "ABACAXI",
      "AIPIM",
      "BAUNILHA",
      "BRIGADEIRO",
      "BROWNIE",
      "CENOURA",
      "CHOCOLATE",
      "COCO",
      "FUBÁ",
      "LARANJA",
      "LIMÃO",
      ""
    ]
  },
  {
    "id": 812755671,
    "title": "AVALIE O PRODUTO FINAL",
    "type": 6,
    "required": false,
    "options": []
  },
  {
    "id": 422384331,
    "title": "1. EMBALAGEM NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 578491652,
    "title": "DEFEITOS EMBALAGEM:",
    "type": 4,
    "required": true,
    "options": [
      "ABERTA",
      "DESALINHADA",
      "PACOTE RASGADO/FURADO",
      "INFORMAÇÕES FORA DO PAINEL FRONTAL",
      "SELAGEM QUEIMADA",
      "SELAGEM COM FUROS",
      "SELAGEM ABERTA",
      "SELAGEM LONGITUDINAL FORA DO PADRÃO",
      "SOLDA CONTAMINADA COM PRODUTOS",
      "SELAGEM LONGITUDINAL FRACA",
      "SELAGEM TRANSVERSAL FRACA",
      "IMPRESSÃO VALIDADE, LOTE APAGADA",
      "VALIDADE, LOTE DESCENTRALIZADA",
      "VAZAMENTO DE AR",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 939267731,
    "title": "2. APARÊNCIA NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1767585353,
    "title": "DEFEITOS APARÊNCIA:",
    "type": 4,
    "required": true,
    "options": [
      "COR MUITO ESCURA",
      "COR MUITO CLARA",
      "MANCHAS (COMENTAR)",
      "INSETOS",
      "PARTÍCULAS ESTRANHAS (COMENTAR)",
      "CONTAMINAÇÃO DO PROCESSO (COMENTAR)",
      "GRANULOMETRIA (COMENTAR )",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2088049366,
    "title": "3. ODOR NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 1709558713,
    "title": "DEFEITOS ODOR:",
    "type": 4,
    "required": true,
    "options": [
      "ÁCIDO",
      "ENVELHECIDO",
      "FERMENTADO",
      "QUÍMICO",
      "MOFO",
      "NÃO CARACTERÍSTICO (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 2135325097,
    "title": "4. TEXTURA \"TOQUE\"  NOTA (1-5):",
    "type": 2,
    "required": true,
    "options": [
      "1 - MUITO RUIM",
      "2 - RUIM",
      "3 - REGULAR",
      "4 - BOM",
      "5 - ÓTIMO"
    ]
  },
  {
    "id": 396923252,
    "title": "DEFEITOS TEXTURA:",
    "type": 4,
    "required": true,
    "options": [
      "MISTURA EMPEDRADA",
      "MISTURA ÚMIDA",
      "TEXTURA IRREGULAR (COMENTAR)",
      "NENHUM DEFEITO",
      ""
    ]
  },
  {
    "id": 1322750091,
    "title": "DESEJA AVALIAR OUTRO PRODUTO?",
    "type": 2,
    "required": true,
    "options": [
      "Sim",
      "Não"
    ]
  }
];