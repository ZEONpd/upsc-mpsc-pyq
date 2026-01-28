// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Toggle Mobile Menu (Basic)
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Show/Hide Sections
function showSection(section) {
    document.querySelectorAll('.content').forEach(el => el.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

// Load Year Content (Placeholder)
function loadYear(year) {
    const content = document.querySelector('.year-content p');
    content.textContent = `Download ${year} Papers: PDF Link`;
}

// Toggle Checklist
function toggleChecklist() {
    document.getElementById('checklist').classList.toggle('hidden');
}

// Quiz Modal
function openQuiz() {
    document.getElementById('quiz-modal').classList.remove('hidden');
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

function answer(choice) {
    const result = document.getElementById('result');
    result.textContent = choice === 'Delhi' ? 'Correct! 🎉' : 'Wrong! Try again.';
}

// Start Daily Challenge (Alias for Quiz)
function startQuiz() {
    openQuiz();
}
