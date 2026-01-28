function scrollContato() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

// ====== SUPABASE (só pra usar a ANON KEY nos headers) ======
const supabaseUrl = "https://twmbrdmkfchdspheofwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bWJyZG1rZmNoZHNwaGVvZndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NzcwNTAsImV4cCI6MjA4NTE1MzA1MH0.a199T3-ho2p4NQV2ROdkj0jIUOh752gOB0LaIbVp7qc";

const form = document.getElementById("formContato");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const mensagem = form.querySelector("textarea").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos.");
    return;
  }

// Substitua o bloco do fetch por este:
const resp = await fetch("https://twmbrdmkfchdspheofwl.supabase.co/functions/v1/resend-email", {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
    "Authorization": `Bearer ${supabaseKey}` // Esta linha é essencial
  },
  body: JSON.stringify({ nome, email, mensagem }),
});

  const text = await resp.text();

  if (!resp.ok) {
    alert("Erro ao enviar:\n" + text);
    return;
  }

  alert("Mensagem enviada!");
  form.reset();
});