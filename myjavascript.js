var app = new Vue({
    el: "#root",
    data: {
        cards : [
            {
                title : 'Svezia',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                items :'img/01.jpg',
            },
            {
                title : 'Svizzera',
                text : 'Lorem ipsum',
                items :'img/02.jpg',
            },
            {
                title : 'Gran Bretagna',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                items :'img/03.jpg',
            },
            {
                title : 'Germania',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                items :'img/04.jpg',
            },
            {
                title : 'Paradise',
                text : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                items :'img/05.jpg',
            }
        ]
    } ,
    methods : {
        prossimo: function(){
            console.log("ciao")
        }
    }
})



/*
const card = [
    
];
  
    ]    


    const title = [];
    const text = [];
    const items = [];

    const containerLeft = document.getElementsByClassName("container")[0];
    const containerRight = document.getElementsByClassName("container")[1];
    const btnup = document.getElementById("up")
    //console.log(btnup)
    const btndown = document.getElementById("down")
    let currentIndex


for ( let i=0; i < card.length ; i++){

    const {title, text, items} = card[i]

    const nuovaImgNuovoDiv = document.createElement("img")
    nuovaImgNuovoDiv.src = items
    const nuovoDiv = document.createElement("div")
    nuovoDiv.classList.add("not-active")
    containerLeft.append(nuovoDiv)
    nuovoDiv.append(nuovaImgNuovoDiv)
    
    if (i===0){
        nuovoDiv.classList.add("active")
        currentIndex = 0
    }

    const titolo = document.createElement("h3")
    titolo.append(title)
    const testo = document.createElement("p")
    testo.append(text)
    const divText = document.createElement("div");
    divText.append(titolo)
    divText.append(testo)
    nuovoDiv.append(divText)

    const div = document.createElement("div")
    containerLeft.append(div)
    containerRight.append(div)

    const nuovaImg = document.createElement('img');
    nuovaImg.src = items;
    nuovaImg.append(title)
    div.append(nuovaImg);   
}

btnup.addEventListener("click", function() {
})
*/