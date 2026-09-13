const experience = document.getElementById("experience");
const question = document.getElementById("question");
const experienceCount = document.getElementById("experienceCount");
const questionCount = document.getElementById("questionCount");

function bindCounter(field, counter) {
  const update = () => {
    counter.textContent = field.value.length;
  };
  field.addEventListener("input", update);
  update();
}

bindCounter(experience, experienceCount);
bindCounter(question, questionCount);
