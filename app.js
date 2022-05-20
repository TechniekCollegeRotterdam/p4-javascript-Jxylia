//. is voor class
//# is voor id
//niks is voor html-tags
//de image opgehaald uit de html

const bird = document.querySelector(".bird");
let px = 0;

//voeg een click event toe aan de bird afbeelding
// (dus je kunt erop klikken)
bird.addEventListener('click', function() {
    //elke keer als ik op de bird klik, wordt der 50 opgeteld
    // bij de variabele px
    // px = px + 50;
    px += 50;
    //voeg styling toe aan ke bird classs met als property
    //left: 50px
    bird.style.left = px + "px";
})

window.addEventListener("keydown", function(e){
    console.log(e.key);
//Als mijn key geljk is aan de tekst arrowright, dan voert het die code uit van opdracht 1
    if(e.key == "ArrowRight"){
        px += 50;
        bird.style.left = px + "px";
    }

    if(e.key == "ArrowUp"){
        px += 50;
        bird.style.bottom = px + "px";
    }

    if(e.key == "ArrowDown"){
        px += 50;
        bird.style.top = px + "px";
    }

    if(e.key == "ArrowLeft"){
        px += 50;
        bird.style.right = px + "px";
    }
})
