

function scrollContato() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

const supabaseUrl = "https://twmbrdmkfchdspheofwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bWJyZG1rZmNoZHNwaGVvZndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NzcwNTAsImV4cCI6MjA4NTE1MzA1MH0.a199T3-ho2p4NQV2ROdkj0jIUOh752gOB0LaIbVp7qc";
window._supabaseClient =
  window._supabaseClient || window.supabase.createClient(supabaseUrl, supabaseKey);

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

  const { error } = await window._supabaseClient
    .from("contatos")
    .insert([{ nome, email, mensagem }]);

  if (error) {
    console.error(error);
    alert("Erro ao enviar: " + error.message);
    return;
  }

  alert("Entraremos em contato por email!");
  form.reset();
});

// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      navMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

