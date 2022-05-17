// Event aangemaakt van nameChanged
// const nameChanged = function (event) {
//    name = event.target.value;
//    changeInput();
// }

// // Event aangemaakt van countryChange
// const countryChange = function (event) {
//     country = event.target.value;
//     console.log();
//     changeInput();
// }

// Event aangemaakt van changeInput
const changeInput = function (event) {
    // console.log();
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}

// Variabelen aanmaken
let name;
let country;
let p = document.getElementById("output");
let nameChange = document.getElementById("nameChange");
let countryChange = document.getElementById("countryChange");

nameChange.addEventListener("change", funtion(){
    name = event.target.value;
      changeInput();
})

countryChange.addEventListener("change", function(){
    country = event.target.value;
    changeInput();
});



