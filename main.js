//  letter 
const letters = "ABCDEFGHIJKLMNOPQRSTUWYZ1234567890";

//GET arrey From Letter 
let lettersArray = Array.from(letters);

//Select Letters Containr
let lettersContainer = document.querySelector (".letters");

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
    lettersContainer.appendChild(span);
});
// Object of words 
const words = {
    programing : ["js" , "python", "php" , "css" , "html" , "sql"],
    tv : ["tr" , "ru" , 'rus' , 'bt' , 'tyt' ],
    corses : ["godzella" , "cs50",  "cs50x" , "yazilm"],
    contre : ["londen" , "rus" , "turye" , "neywork" ],
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

//Selct Gues Span
let guessSpan = document.querySelectorAll(".letters-guess span")

// Set Wrong Attent 
let worngAtttemet = 0;

// Slet The drow Elmanet 
let theDrow = document.querySelector(".hangman-draw")
//Set the Chose Status
let theStatus = false;
//Hndle Cike       
document.addEventListener("click", (e) => {
    //Set the Chose Status
    let theStatus = false;
    if (e.target.className === 'leter-box' && !lettersContainer.classList.contains("finished")) {
        e.target.classList.add("clicked");
        //GET CLICKED LETTER
        let theClikedLink = e.target.innerHTML.toLowerCase();

        //the Chosen Word
        let theChoseword = Array.from(randomvalue.toLowerCase());

        // lettersandcpes 
        theChoseword.forEach((wordLetter, WonrdIndex) => {
            //if CLInde letter equal to ONE 
            if (theClikedLink == wordLetter) {
                //Set satus To Correk 
                theStatus = true;
                // endGame1()
                guessSpan.forEach((span, spanIndex) => {
                    //if span world 
                    if (WonrdIndex === spanIndex) {
                        span.innerHTML = theClikedLink
                    };
                });
            }
        });

        // if leter is true
        if (theStatus === true) {

        }

        //if letter is word
        if (theStatus !== true) {
            //inert 
            worngAtttemet++;

            //add Class Wrong 
            theDrow.classList.add(`wrong-${worngAtttemet}`);
            //Play Fail Sond 
            document.getElementById("fail").play();

            if (worngAtttemet === 9) {
                endGame("Game Over, You Lose! The Word Was: " + randomvalue);
                lettersContainer.classList.add("finished");
            }

        } else {
            document.getElementById("success").play();
            checkGameStatus();
        }
    }
});

function checkGameStatus() {
    // Check if all letters are guessed
    let allLettersGuessed = [...guessSpan].every(span => span.innerHTML !== '&nbsp;');

    if (allLettersGuessed) {
        endGame("Congratulations, You Win! The Word Is: " + randomvalue);
    }
}

function endGame(message) {
    //cretet Poupup Div
    let div = document.createElement("div");

    //Create Text Elmetnt
    let divText = document.createTextNode(message);

    //Apped child To tve 
    div.appendChild(divText);

    //add Class On div 
    div.className = 'hode ';

    //Append To the body 
    document.body.appendChild(div);
};





































