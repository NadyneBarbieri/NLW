var a = 0;

document.querySelector("#cards").innerHTML=
Card("24/11","quinta",
Jogo("Brasil","Armênia","12:00")+ 
Jogo("Camarões","Colômbia","13:00")+ 
Jogo("India","Japan","14:00"))+

Card("28/11","segunda",
Jogo("Jordania","Argentina","15:00")+
Jogo("Hungria","Brasil","16:00")+
Jogo("Camarões","Colômbia","17:00"))+

Card("02/12","sexta",
Jogo("India","Japan","18:00")+ 
Jogo("Jordania","Argentina","19:00")+
Jogo("Hungria","Armênia","20:00"))+

Card("02/12","sexta",
Jogo("India","Japan","18:00")+ 
Jogo("Jordania","Argentina","19:00")+
Jogo("Hungria","Armênia","20:00"))+

Card("02/12","sexta",
Jogo("India","Japan","18:00")+ 
Jogo("Jordania","Argentina","19:00")+
Jogo("Hungria","Armênia","20:00"))

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


