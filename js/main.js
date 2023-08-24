// ! MILESTONE 0: crea oggetto con le informazioni dei membri
const team = {
    member1 : {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    member2 : {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    member3 : {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    member4 : {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    member5 : {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    member6 : {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
}

let container_m2 = document.getElementById("milestone2")
let card_template = document.querySelector(".card")


function renderString(member) {
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `<b>Nome:</b> ${member.name} | 
    <b>Ruolo:</b> ${member.role} | 
    <b>Foto:</b> <img src="./img/${member.img}" alt="${member.name}, ${member.role}"> <hr>`
    paragraph.innerHTML = `<b>Nome:</b> ${member.name} |
     <b>Ruolo:</b> ${member.role} |
      <b>Foto:</b> <img src="./img/${member.img}" alt="${member.name}, ${member.role}"> <hr>`
    container_m2.append(paragraph)
}

function renderCard(member) {
    let card = card_template.cloneNode(true)
    card.querySelector(".card-img-top").setAttribute("src","./img/"+member.img)
    card.querySelector(".card-title").innerHTML = member.name
    card.querySelector(".card-subtitle").innerHTML = member.role
    card.classList.remove("d-none")
    container_m2.append(card)
}


// ! MILESTONE 1: Stampare per ogni membro del team le informazioni di nome, ruolo e la stringa della foto
console.log(team)

for (let person in team) {
    let member = team[person]
    console.log(member.name)
    console.log(member.role)
    console.log(member.img)

    // ! MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    renderString(member)

    // ! BONUS 2: Organizzare i singoli membri in card/schede
    renderCard(member)
}