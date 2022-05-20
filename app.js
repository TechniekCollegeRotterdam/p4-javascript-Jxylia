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

