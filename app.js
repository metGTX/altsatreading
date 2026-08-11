
let currentIndex = 0;
let selected = null;
let answered = false;
let correctCount = 0;
let attemptedCount = 0;
const marked = new Set();

const els = {
  topicFilter: document.getElementById("topicFilter"),
  skillFilter: document.getElementById("skillFilter"),
  topicBadge: document.getElementById("topicBadge"),
  skillBadge: document.getElementById("skillBadge"),
  difficultyBadge: document.getElementById("difficultyBadge"),
  passage: document.getElementById("passage"),
  questionNumber: document.getElementById("questionNumber"),
  questionText: document.getElementById("questionText"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackBody: document.getElementById("feedbackBody"),
  checkBtn: document.getElementById("checkBtn"),
  nextBtn: document.getElementById("nextBtn"),
  randomBtn: document.getElementById("randomBtn"),
  markBtn: document.getElementById("markBtn"),
  scoreText: document.getElementById("scoreText")
};

function uniqueValues(key) {
  return [...new Set(QUESTIONS.map(q => q[key]))].sort();
}

function populateFilters() {
  uniqueValues("topic").forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    els.topicFilter.appendChild(option);
  });

  uniqueValues("skill").forEach(skill => {
    const option = document.createElement("option");
    option.value = skill;
    option.textContent = skill;
    els.skillFilter.appendChild(option);
  });
}

function filteredQuestions() {
  return QUESTIONS.filter(q => {
    const topicOK = els.topicFilter.value === "all" || q.topic === els.topicFilter.value;
    const skillOK = els.skillFilter.value === "all" || q.skill === els.skillFilter.value;
    return topicOK && skillOK;
  });
}

function currentQuestion() {
  const list = filteredQuestions();
  if (!list.length) return null;
  currentIndex = Math.min(currentIndex, list.length - 1);
  return list[currentIndex];
}

function renderQuestion() {
  const q = currentQuestion();

  if (!q) {
    els.passage.textContent = "No questions match those filters.";
    els.questionText.textContent = "";
    els.choices.innerHTML = "";
    return;
  }

  selected = null;
  answered = false;

  els.topicBadge.textContent = q.topic;
  els.skillBadge.textContent = q.skill;
  els.difficultyBadge.textContent = q.difficulty;
  els.passage.textContent = q.passage;
  els.questionNumber.textContent = q.id;
  els.questionText.textContent = q.question;
  els.feedback.classList.add("hidden");

  els.markBtn.classList.toggle("marked", marked.has(q.id));
  els.markBtn.textContent = marked.has(q.id) ? "★ Marked" : "☆ Mark for Review";

  els.choices.innerHTML = "";

  Object.entries(q.choices).forEach(([letter, text]) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.dataset.letter = letter;
    btn.innerHTML = `
      <span class="letter">${letter}</span>
      <span class="choice-text">${text}</span>
    `;
    btn.addEventListener("click", () => choose(letter));
    els.choices.appendChild(btn);
  });
}

function choose(letter) {
  if (answered) return;
  selected = letter;
  document.querySelectorAll(".choice").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.letter === letter);
  });
}

function checkAnswer() {
  const q = currentQuestion();
  if (!q || answered || !selected) return;

  answered = true;
  attemptedCount++;

  if (selected === q.answer) {
    correctCount++;
    els.feedbackTitle.textContent = "Correct ✓";
  } else {
    els.feedbackTitle.textContent = `Not quite — answer: ${q.answer}`;
  }

  document.querySelectorAll(".choice").forEach(btn => {
    const letter = btn.dataset.letter;
    btn.classList.remove("selected");
    if (letter === q.answer) btn.classList.add("correct");
    if (letter === selected && selected !== q.answer) btn.classList.add("incorrect");
  });

  els.feedbackBody.innerHTML = Object.entries(q.explanations)
    .map(([letter, text]) => `<p><strong>${letter}:</strong> ${text}</p>`)
    .join("");

  els.feedback.classList.remove("hidden");
  els.scoreText.textContent = `${correctCount} / ${attemptedCount}`;
}

function nextQuestion() {
  const list = filteredQuestions();
  if (!list.length) return;
  currentIndex = (currentIndex + 1) % list.length;
  renderQuestion();
}

function randomQuestion() {
  const list = filteredQuestions();
  if (!list.length) return;
  currentIndex = Math.floor(Math.random() * list.length);
  renderQuestion();
}

els.checkBtn.addEventListener("click", checkAnswer);
els.nextBtn.addEventListener("click", nextQuestion);
els.randomBtn.addEventListener("click", randomQuestion);

els.markBtn.addEventListener("click", () => {
  const q = currentQuestion();
  if (!q) return;
  if (marked.has(q.id)) marked.delete(q.id);
  else marked.add(q.id);
  renderQuestion();
});

[els.topicFilter, els.skillFilter].forEach(select => {
  select.addEventListener("change", () => {
    currentIndex = 0;
    renderQuestion();
  });
});

populateFilters();
renderQuestion();
