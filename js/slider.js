(function(){
    //llamar los elementos con la clase testimony_body
    ///... generan un array en lugar de un nodo
    const slider = [...document.querySelectorAll('.testimony_body')];
    //llamar un elemento por su id
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    //ejecutar funcion al click al boton
    buttonNext.addEventListener('click', ()=> {
        changeposition(1);
    });
    buttonBefore.addEventListener('click', ()=> {
        changeposition(-1);
    });

    const changeposition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        slider[Number(currentTestimony)-1].classList.remove('testimony_body--show')
        if(value === slider.length+1 || value === 0){/*si el valor es 4 rebasa el valor de sliders*/
            value = value===0 ? slider.length : 1;/*si se retrocede del 1 llegara al 3*/
            
        }
        slider[value-1].classList.add('testimony_body--show');

    }
})();  