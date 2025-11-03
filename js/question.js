(function(){
    const titleQuestion = [...document.querySelectorAll('.question_title')];/* tres puntos convierten en un array*/

    titleQuestion.forEach(question=>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;/*muestra el siguiente elemento de la pregunta osea el parrago*/
            let addPading = question.parentElement.parentElement;


            addPading.classList.toggle('question_padding--add');
            question.children[0].classList.toggle('question_arrow--rotate')

            if(answer.clientHeight===0){
                height = answer.scrollHeight; /*muestra el alto minimo para mostrar*/

            }
            answer.style.height = `${height}px`;
        });

    });

})();