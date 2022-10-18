let reiniciar=document.getElementById('reset')


document.querySelector('.iniciar').addEventListener('click',()=>{
    const segundo=document.querySelector('#datos').value;
    const timepo=document.querySelector('#resultado');

    function temporizador(segundos) {
        console.log(segundos)
        if (segundos===0) {
            return timepo.value='despierta!';
        }else{
            timepo.value=segundos
            setTimeout(temporizador,1000,segundos-1)
        }
    }
    temporizador(segundo);
})

let resetear = function () {
    document.getElementById('resultado').value=``
    document.getElementById('datos').value=``
}

reiniciar.addEventListener('click',resetear)

