const menuBtn = document.querySelector (".main-btn")
const closeBtn = document.querySelector (".xmarkbtn")
const menu = document.querySelector (".header-menu")
const UserInput = document.querySelector (".user-input-section")
const Start = document.querySelector (".start-btn")

function UserInputVisible () {
    UserInput.classList.add ("active");
}
    Start.addEventListener ("click", () => {
        UserInput.style.display = "flex";
    })

function menuOpen () {
    menu.classList.add ("active");
}
    menuBtn.addEventListener("click", menuOpen);

function menuClose () {
    menu.classList.remove ("active");
}
    closeBtn.addEventListener("click", menuClose);

//Quiz Function
const FemaleQuestions = document.querySelectorAll (".question-section-female")
const MaleQuestions = document.querySelectorAll (".question-section-male")
const FemaleBtn = document.getElementById ("female-section")
const MaleBtn = document.getElementById ("male-section")
const Questions = document.querySelectorAll (".question")
const UserName = document.getElementById ("user-name")

//Female Part
FemaleQuestions.forEach (Questions => {
    Questions.style.display = "none";
})

//Male Part
MaleQuestions.forEach (Questions => {
    Questions.style.display = "none";
})

//Female Questions
let userName = "";
function activeFemale () {
    MaleQuestions.forEach (Questions => {
    Questions.style.display = "none";
})
    FemaleQuestions.forEach (Questions => {
    Questions.style.display = "none";
})
    FemaleQuestions[0].style.display = "flex";
    userName = UserName.value //User Name
}
    FemaleBtn.addEventListener ("click", activeFemale);

//Male Questions
function activeMale () {
    FemaleQuestions.forEach (Questions => {
        Questions.style.display = "none";
    })
    MaleQuestions.forEach (Questions => {
    Questions.style.display = "none";
    })
    MaleQuestions[0].style.display = "flex";
    userName = UserName.value;
}
    MaleBtn.addEventListener ("click", activeMale);


let currentFQuestion = 0;
let currentMQuestion = 0;
const FemaleOptions = document.querySelectorAll (".female-option")
const MaleOptions = document.querySelectorAll (".male-option")
//Female Quiz Female Characters
const FemaleScores = {
    Penny: 0,
    Jessica: 0,
    Leslie: 0,
    Samantha: 0,
    Pam: 0,
    Robin: 0,
    Tahani: 0,
    Elaine: 0,
    Gloria: 0,
    Amy: 0
}

//Male Quiz Male Characters
const MaleScores = {
    Joey: 0,
    Ted: 0,
    Sheldon: 0,
    Barney: 0,
    Jim: 0,
    Ron: 0,
    Tom: 0,
    Jake: 0,
    Phill: 0,
    Chandler: 0
}

//Female Characters Object
const FemaleCharacterData = {
    Penny: {
        fullName: "Penny",
        showName: "The Big Bang Theory"
    },
    Jessica: {
        fullName: "Jessica Day",
        showName: "New Girl"
    },
    Leslie: {
        fullName: "Leslie Knope",
        showName: "Parks and Recreation"
    },
    Samantha: {
        fullName: "Samantha Jones",
        showName: "Sex and the City"
    },
    Pam: {
        fullName: "Pam Beesly",
        showName: "The Office"
    },
    Robin: {
        fullName: "Robin Scherbatsky",
        showName: "How I Met Your Mother"
    },
    Tahani: {
        fullName: "Tahani Al-Jamil",
        showName: "The Good Place"
    },
    Elaine: {
        fullName: "Elaine Benes",
        showName: "Seinfeld"
    },
    Gloria: {
        fullName: "Gloria Dalgado-Pritchett",
        showName: "Modern Family"
    },
    Amy: {
        fullName: "Amy Farrah Fowler",
        showName: "The Big Bang Theory"
    }
}

//Male Character Object
const MaleCharacterData = {
    Joey: {
        fullName: "Joey Tribbiani",
        showName: "Friends"
    },
    Ted: {
        fullName: "Ted Mosby",
        showName: "How I Met Your Mother"
    },
    Sheldon: {
        fullName: "Sheldon Cooper",
        showName: "The Big Bang Theory"
    },
    Barney: {
        fullName: "Barney Stinson",
        showName: "How I Met Your Mother"
    },
    Jim: {
        fullName: "Jim Halpert",
        showName: "The Office"
    },
    Ron: {
        fullName: "Ron Swanson",
        showName: "Parks and Recreation"
    },
    Tom: {
        fullName: "Tom Haverford",
        showName: "Parks and Recreation"
    },
    Jake: {
        fullName: "Jake Peralta",
        showName: "Brooklyn Nine-Nine"
    },
    Phill: {
        fullName: "Phil Dunphy",
        showName: "Modern Family"
    },
    Chandler: {
        fullName: "Chandler Bing",
        showName: "Friends"
    }
}

//Quiz Function - Female
    let Fwinner = "";
    let Fhighscore = 0;

FemaleOptions.forEach (option => { 

    option.addEventListener ("click", () => {

        const selectedFemaleCharacter = option.dataset.femalecharacter;
        FemaleScores[selectedFemaleCharacter]++;

    FemaleQuestions[currentFQuestion].style.display = "none";
    currentFQuestion++;

    if (currentFQuestion < FemaleQuestions.length) {
        FemaleQuestions[currentFQuestion].style.display = "flex";
    }
    else {
        for (let character in FemaleScores) {
        if (FemaleScores[character]>Fhighscore) {
            Fhighscore = FemaleScores[character];
            Fwinner = character;
        }
    }

    document.getElementById ("user-input-section").style.display = "none";
    document.getElementById ("home").style.display = "none";  

    //Female Result Section
    document.getElementById ("m-img").style.display = "none"
    document.getElementById("result-section").style.display = "flex";
    document.getElementById("username").innerText = userName;
    document.getElementById("charactername").innerText = FemaleCharacterData[Fwinner].fullName;
    document.getElementById("showname").innerText = FemaleCharacterData[Fwinner].showName;
}
})
})

//Quiz Function Male
    let Mwinner = "";
    let Mhighscore = 0;

    MaleOptions.forEach (option => {
        option.addEventListener ("click", () => {
            const selectedMaleCharacter = option.dataset.malecharacter;
            MaleScores[selectedMaleCharacter]++;

    MaleQuestions[currentMQuestion].style.display = "none";
    currentMQuestion++;

    if (currentMQuestion < MaleQuestions.length) {
        MaleQuestions[currentMQuestion].style.display = "flex";
    }
    else {
        for (let character in MaleScores) {
        if (MaleScores[character]>Mhighscore) {
            Mhighscore = MaleScores[character];
            Mwinner = character;
        }
    }

    document.getElementById ("user-input-section").style.display = "none";
    document.getElementById ("home").style.display = "none";  

    //Male Result Section
    document.getElementById ("f-img").style.display = "none"
    document.getElementById("result-section").style.display = "flex";
    document.getElementById("username").innerText = userName;
    document.getElementById("charactername").innerText = MaleCharacterData[Mwinner].fullName;
    document.getElementById("showname").innerText = MaleCharacterData[Mwinner].showName;
}
    })
    })

//Reset Everything 
document.getElementById ("go-back").addEventListener ("click", (event) => {
    event.preventDefault ();
    location.reload ();
})