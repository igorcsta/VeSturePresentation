# Relatório de Gestão de Tráfego - VeSture

Este projeto contém uma página web interativa para apresentação do relatório de gestão de tráfego para a empresa VeSture, com foco em campanhas de Instagram Ads para junho de 2025.

## Conteúdo do Relatório

O relatório apresenta:
- Visão geral do plano de marketing
- Objetivos e KPIs
- Público-alvo e segmentação
- Estratégias de campanhas
- Cronograma detalhado
- Orçamento e investimento

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Chart.js para visualização de dados
- React Icons para ícones

## Instruções para Publicação no GitHub Pages

### 1. Criar um repositório no GitHub

Crie um novo repositório no GitHub chamado `relatorio-marketing` ou o nome que preferir.

### 2. Inicializar Git e fazer o primeiro commit

```bash
cd relatorio-marketing-app
git init
git add .
git commit -m "Primeira versão do relatório de gestão de tráfego"
```

### 3. Conectar ao repositório remoto

```bash
git remote add origin https://github.com/seu-usuario/relatorio-marketing.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages

Existem duas opções para publicar no GitHub Pages:

#### Opção 1: Usando a branch gh-pages

Instale o pacote gh-pages:

```bash
npm install --save-dev gh-pages
```

Adicione os seguintes scripts ao package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

Execute o comando de deploy:

```bash
npm run deploy
```

#### Opção 2: Configuração manual

1. Faça o push da pasta build para uma branch chamada gh-pages:

```bash
git subtree push --prefix build origin gh-pages
```

2. No GitHub, vá para Settings > Pages e selecione a branch gh-pages como source.

### 5. Acessar o site publicado

Após a configuração, o site estará disponível em:
https://seu-usuario.github.io/relatorio-marketing/

## Desenvolvimento Local

Para executar o projeto localmente:

```bash
npm install
npm start
```

Para gerar uma build de produção:

```bash
npm run build
```

## Estrutura do Projeto

- `src/App.js`: Componente principal com toda a interface do relatório
- `src/index.css`: Estilos CSS e configurações do Tailwind
- `build/`: Pasta com os arquivos otimizados para produção
