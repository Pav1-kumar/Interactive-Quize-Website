
const correctAnswers = ['B', 'B', 'B', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
   e.preventDefault();

   let score = 0;
   const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

   // check answers
   userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
         score += 20;
      }
   });

   // show result
   result.classList.remove('hidden');
   scrollTo(0, 0);

   let output = 0;
   const timer = setInterval(() => {
      result.querySelector('.score').textContent = `${output}%`;
      if (output === score) {
         clearInterval(timer);
      } else {
         output++;
      }
   }, 20);
});
