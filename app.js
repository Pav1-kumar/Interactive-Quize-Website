const correctAnswers= ['B','B','B','C','B','A','A','C','D','D'];
const form=document.querySelector('.quize-form');
const result=document.querySelector('.result');

form.addEventListener('submit', e => {
   e.preventDefault();

   let score=0;
   const userAnswers=[form.q1.value , form.q2.value ,form.q3.value ,form.q4.value, form.q5.value ,form.q6.value ,form.q7.value ,form.q8.value,form.q9.value,form.q10.value];

   //check answers
   userAnswers.forEach((answer, index) => {
   if(answer===correctAnswers[index])
   {
      score+=10;
   }
   else{

      
   }
   });

   //results
   scrollTo(0,0);  //window object or global object
  // result.querySelector('span').textContent = `${score}%`;
   result.classList.remove('d-none');

   let output=0;
   let timer= setInterval(()=> {
    result.querySelector('span').textContent = `${output}%`;
    if(output===score)
    {
        clearInterval(timer);
    }
    else
    {
       output++;
    }

   },10)


}




);
