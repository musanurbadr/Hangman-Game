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

//select Letters Guess Element 
let letterssContainr = document.querySelector(".letters-guess");

//Convert Chosen Word To Arry 
let letterArrySpce = Array.from(randomvalue);

//Crete Span Depend On word 

letterArrySpce.forEach(letter => {
    let emptySpan = document.createElement("span");

    // if letter 
    if (letter === ''){
        //add Class to the Span
        emptyStor.className ='with-space';
    }
    //Append Span To The letter 
    letterssContainr.appendChild(emptySpan);
});

//Hndle Cike 
document.addEventListener ("click" , (e) =>{
    if(e.target.className === 'leter-box'){

        e.target.classList.add("clicked");

        //GET CLICKED LETTER
        let theClikedLink = e.target.innerHTML.toLowerCase();

        //the Chosen Word
        let theChoseword = Array.from(randomvalue.toLowerCase());

        // lettersandcpes 
        theClikedLink.forEach((wordLetter , index )=> {
            //if CLInde letter equal to ONE 
            if(theChoseword == wordLetter ) {
                console.log(`he ${index}`);
            }
        });
    }
});




















































