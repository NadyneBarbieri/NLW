var a = 0;

document.querySelector("#cards").innerHTML=
Card("24/11","quinta",
Jogo("brasil","india","12:00")+ 
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00"))+

Card("28/11","segunda",
Jogo("japan","india","13:00")+
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+

Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+

Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00")) +
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00")) +
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00"))+
Card("02/12","sexta",
Jogo("brasil","india","13:00")+ 
Jogo("brasil","india","13:00")+
Jogo("brasil","india","13:00")) 






function Card(data, dia,i){ 
console.log(a)
   a = a + 0.3;
    return`
    <div class="card" style="animation-delay: ${a}s">
        <h2>
            ${data}
            <span>${dia}</span> 
        </h2>
        ${i}
    </div>`
}

function Jogo(pais1,pais2, hora){
    return`
        <ul>
            <li>
                <img src="./assets/icon-${pais1}.svg" alt="Bandeira do ${pais1}" />
                    <strong>${hora}</strong>
                <img src="./assets/icon-${pais2}.svg" alt="Bandeira do ${pais2}" />
            </li>
        </ul>
    `
}


