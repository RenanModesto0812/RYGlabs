# 🚀 RYG LABS — Website Institucional

Website institucional da **RYG LABS**, desenvolvido com HTML, CSS e JavaScript, contendo seções de apresentação, serviços, projetos, representantes e um formulário de contato integrado ao Supabase.

O formulário salva automaticamente os contatos enviados em um banco de dados Supabase.

---

## 📸 Preview

Projeto com layout moderno, responsivo e foco em apresentação profissional de serviços digitais.

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Supabase (Database + API)
- Google Fonts (Poppins)

---

## 📂 Estrutura do projeto

/
├── index.html
├── style.css
├── script.js
└── assets/
├── logo2.png
├── projetos/
└── representantes/


---

## ✨ Funcionalidades

✅ Layout responsivo  
✅ Navegação por âncoras (scroll suave)  
✅ Cards de serviços, projetos e equipe  
✅ Formulário de contato  
✅ Salvamento direto no Supabase  
✅ Feedback visual ao enviar formulário  

---

## 📩 Como funciona o formulário de contato

Quando o usuário envia o formulário:

1. O JavaScript captura nome, email e mensagem
2. Os dados são enviados para o Supabase
3. Um registro é criado na tabela `contatos`
4. Você pode visualizar tudo no painel do Supabase

---

## 🧩 Estrutura da tabela no Supabase

Crie a tabela assim no **SQL Editor**:

```sql
create table contatos (
  id uuid default gen_random_uuid() primary key,
  nome text,
  email text,
  mensagem text,
  created_at timestamp default now()
);
