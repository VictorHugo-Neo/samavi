# Samavi Comercial

Site da Samavi Comercial composto por duas aplicações:

- **Frontend:** site institucional da empresa.
- **Admin:** painel administrativo para gerenciamento de produtos e lives.

Ambas as aplicações utilizam o mesmo banco de dados PostgreSQL.

## Tecnologias

- Astro (SSR)
- Tailwind CSS
- PostgreSQL 15
- Node.js 18+
- pnpm

## Estrutura do projeto

```text
samavi/
├── admin/                  # Painel administrativo
├── frontend/               # Site institucional
├── database/
│   └── init.sql            # Estrutura do banco de dados
├── .env.example
└── README.md
```

## Pré-requisitos

Antes de iniciar, instale:

- Node.js 18 ou superior
- pnpm
- PostgreSQL
- Git

---

# Configuração do ambiente local

## 1. Clonar o projeto

```bash
git clone https://github.com/SEU_USUARIO/samavi.git
cd samavi
```

## 2. Criar o banco de dados

Crie um banco chamado:

```
samavi_admin_db
```

Depois execute o script:

```
database/init.sql
```

Esse script criará o schema e todas as tabelas necessárias.

---

## 3. Configurar as variáveis de ambiente

### Admin

Crie o arquivo:

```
admin/.env
```

Conteúdo:

```env
DATABASE_URL=postgresql://USUARIO:SENHA@localhost:5432/samavi_admin_db
ORIGIN=http://localhost:4322
```

### Frontend

Crie o arquivo:

```
frontend/.env
```

Conteúdo:

```env
DATABASE_URL=postgresql://USUARIO:SENHA@localhost:5432/samavi_admin_db
ORIGIN=http://localhost:4321
PUBLIC_ADMIN_URL=http://localhost:4322
```

Substitua `USUARIO` e `SENHA` pelas credenciais do seu PostgreSQL.

---

## 4. Instalar as dependências

### Admin

```bash
cd admin
pnpm install
```

### Frontend

```bash
cd frontend
pnpm install
```

---

## 5. Executar as aplicações

São necessários dois terminais.

### Terminal 1

```bash
cd admin
pnpm dev
```

Admin disponível em:

```
http://localhost:4322
```

### Terminal 2

```bash
cd frontend
pnpm dev
```

Frontend disponível em:

```
http://localhost:4321
```

---

# Testando

1. Acesse:

```
http://localhost:4322
```

2. Faça login no painel administrativo.

3. Cadastre um produto ou uma live.

4. Abra:

```
http://localhost:4321
```

Os dados cadastrados deverão aparecer automaticamente no site.

---

# Variáveis de ambiente

## Admin

| Variável | Descrição |
|----------|-----------|
| DATABASE_URL | Conexão com o PostgreSQL |
| ORIGIN | URL da aplicação Admin |

## Frontend

| Variável | Descrição |
|----------|-----------|
| DATABASE_URL | Conexão com o PostgreSQL |
| ORIGIN | URL do Frontend |
| PUBLIC_ADMIN_URL | URL pública do Admin utilizada para carregar as imagens |

---

# Observações

- O frontend e o admin compartilham o mesmo banco de dados.
- As imagens enviadas pelo painel administrativo são servidas pelo Admin através da variável `PUBLIC_ADMIN_URL`.