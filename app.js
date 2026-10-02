(() => {
  let currentIndex = 0;
  let locked = false;

  const $ = (id) => document.getElementById(id);

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
    $("screen-" + name).classList.add("active");
  }

  function renderQuestion() {
    const q = QUESTIONS[currentIndex];
    locked = false;
    $("progress").textContent = `第 ${currentIndex + 1} 問 / 全 ${QUESTIONS.length} 問`;
    $("question-text").textContent = q.question;
    $("feedback").textContent = "";
    $("feedback").className = "feedback";

    const choices = $("choices");
    choices.innerHTML = "";
    q.choices.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "btn choice";
      btn.textContent = text;
      btn.addEventListener("click", () => answer(i, btn));
      choices.appendChild(btn);
    });
    showScreen("question");
  }

  function answer(choiceIndex, btn) {
    if (locked) return;
    locked = true;
    const q = QUESTIONS[currentIndex];

    if (choiceIndex === q.answer) {
      btn.classList.add("correct");
      $("feedback").textContent = "正解！";
      $("feedback").className = "feedback ok";
      setTimeout(() => {
        if (currentIndex === QUESTIONS.length - 1) {
          showClear();
        } else {
          currentIndex++;
          renderQuestion();
        }
      }, 900);
    } else {
      btn.classList.add("incorrect");
      setTimeout(() => showScreen("wrong"), 600);
    }
  }

  function showClear() {
    $("reward-image").src = REWARD.image;
    $("reward-message").textContent = REWARD.message;
    showScreen("clear");
    launchConfetti();
  }

  function launchConfetti() {
    const box = $("confetti");
    box.innerHTML = "";
    const colors = ["#ff6b8b", "#ffd166", "#06d6a0", "#4cc9f0", "#b388ff"];
    for (let i = 0; i < 80; i++) {
      const p = document.createElement("span");
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 2 + "s";
      p.style.animationDuration = 2.5 + Math.random() * 2 + "s";
      box.appendChild(p);
    }
    setTimeout(() => (box.innerHTML = ""), 7000);
  }

  $("btn-start").addEventListener("click", () => {
    currentIndex = 0;
    renderQuestion();
  });
  // 不正解時は同じ問題 (currentIndex はそのまま) からやり直し
  $("btn-retry").addEventListener("click", renderQuestion);
  $("btn-restart").addEventListener("click", () => showScreen("start"));
})();
