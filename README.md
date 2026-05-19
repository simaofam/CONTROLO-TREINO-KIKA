# 🏊 KIKA · Dashboard de Controlo de Treino 25-26

Dashboard web para monitorização diária do treino — Época 2025-26 · FLG247

---

## 📁 Ficheiros

```
index.html        ← o dashboard (não alterar)
kika_treino.csv   ← os dados (atualizar diariamente)
README.md
```

---

## 🚀 Como publicar no GitHub Pages

1. Cria um repositório no GitHub (ex: `kika-treino`)
2. Faz upload dos dois ficheiros: `index.html` e `kika_treino.csv`
3. Vai a **Settings → Pages**
4. Em **Source**, seleciona `Deploy from a branch` → branch `main` → pasta `/ (root)`
5. Clica **Save**
6. O site fica disponível em: `https://[teu-username].github.io/kika-treino`

---

## 🔄 Como atualizar os dados diariamente

### Método simples (browser)
1. Abre o Excel `CONTROLO_TREINO_KIKA_25-26`
2. Na 1ª folha (dados), vai a **Ficheiro → Guardar Como**
3. Escolhe formato **CSV (separado por vírgulas)**
4. Guarda com o nome exato: `kika_treino.csv`
5. No GitHub, abre o ficheiro `kika_treino.csv` → clica no ✏️ (editar) → faz upload do novo ficheiro → **Commit changes**
6. O dashboard atualiza automaticamente (pode demorar 1-2 minutos)

### Método com GitHub Desktop (mais rápido)
1. Clona o repositório com o GitHub Desktop
2. Exporta o CSV e substitui o ficheiro na pasta local
3. No GitHub Desktop: **Commit to main → Push origin**

---

## 📊 O que mostra o dashboard

- **Visão Geral**: KPIs principais, carga diária, aguda vs crónica, resumo mensal
- **Carga**: ACWR, Strain, Monotonia, carga por período
- **Recuperação**: FC Basal, qualidade do sono, score de prontidão
- **Alertas**: distribuição de conselhos técnicos, tabela dos últimos 15 treinos

---

## ⚠️ Notas

- O ficheiro CSV deve ter exatamente as colunas geradas pelo script de exportação
- O nome do ficheiro CSV deve ser sempre `kika_treino.csv` (minúsculas)
- O dashboard carrega sempre os dados mais recentes do CSV automaticamente
