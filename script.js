// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

// ===== Home: Show Another Tip =====
const tips = [
  "Pomodoro technique try karo: 25 minutes focus, 5 minutes break. Consistency is key!",
  "Subah uth ke pehle 30 minutes difficult subject padho — dimagh fresh hota hai.",
  "Phone silent mode mein rakho study time pe. Notifications focus kill karte hain.",
  "Har topic ke baad 2–3 questions khud se banao aur solve karo.",
  "Weekly review day rakho — poore hafte ka revision ek din mein.",
  "Group study helpful ho sakti hai, lekin sirf focused friends ke saath.",
  "Handwritten notes memory mein better rehte hain typing se."
];

const tipText = document.getElementById('tipText');
const showTipBtn = document.getElementById('showTipBtn');

if (showTipBtn && tipText) {
  let lastIndex = 0;
  showTipBtn.addEventListener('click', () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * tips.length);
    } while (newIndex === lastIndex && tips.length > 1);
    lastIndex = newIndex;
    tipText.textContent = tips[newIndex];
  });
}

// ===== Resources: Show / Hide Checklist =====
const toggleChecklistBtn = document.getElementById('toggleChecklist');
const checklist = document.querySelector('.checklist');

if (toggleChecklistBtn && checklist) {
  toggleChecklistBtn.addEventListener('click', () => {
    if (checklist.style.display === 'none') {
      checklist.style.display = 'block';
      toggleChecklistBtn.textContent = 'Hide Checklist';
    } else {
      checklist.style.display = 'none';
      toggleChecklistBtn.textContent = 'Show Checklist';
    }
  });
}

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').hidden = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
      document.getElementById('nameError').textContent = 'Naam zaroori hai.';
      isValid = false;
    }

    if (email === '') {
      document.getElementById('emailError').textContent = 'Email zaroori hai.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Sahi email address likhein.';
      isValid = false;
    }

    if (message === '') {
      document.getElementById('messageError').textContent = 'Message zaroori hai.';
      isValid = false;
    }

    if (isValid) {
      document.getElementById('formSuccess').hidden = false;
      contactForm.reset();
    }
  });
}
