//  letter 
const letters = "ABCDEFGHIJKLMNOPQRSTUWYZ";

//GET arrey From Letter 
let lettersArray = Array.from(letters);

//Select Letters Containr
let lettersContenir = document.querySelector (".letters");

//genertre letter 
lettersArray.forEach(letter => {
    
    //create Span
    let span = document.createElement("span");

    //Create leter Nooode 
    let theLetter = document.createTextNode(letter);

    //Append  
    span.appendChild(theLetter);
    //Append The Letter To span
    span.className = "leter-box";
    // Append Span To the letters container
    lettersContenir.appendChild(span);
});
// Object of words 
const words = {
    programing :["js " , "python ", "php " , "css" , "html" , "sql" ],
    tv : ["tr" , "ru" , 'rus' , 'bt' , 'tyt' ],
    corses : ["godzella" , "cs50",  "cs50x" , "yazilm"],
    contre : ["londen" , "rus " , "turye" , "neywork" ],
}

// let get Object
let allnots = Object.keys(words);
// kes length
let nombersnod = Math.floor (Math.random()* allnots.length);
//catgory
let nombertext = allnots[nombersnod];
//catgory words
let nombervalue = words[nombertext];
//Random Numbers 
let  randomvaluenomber = Math.floor (Math.random() * nombervalue.length);
// words
let randomvalue = nombervalue [randomvaluenomber];
//set Category Info
document.querySelector(".game-info .category  span" ).innerHTML = nombertext ;
































































