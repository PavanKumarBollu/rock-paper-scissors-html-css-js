
//score text for updating the score
let scoreText = document.querySelector(".score-value");





let userChoice ;//user clicked item
let houseChoice;//computer chosed item

let userisAlreadyClicked =false;//For preventing the multiple clicks



// userChoiceText
let userChoiceText = document.getElementById("userChoiceText");
//houseChoiceText
let houseChoiceText = document.getElementById("houseChoiceText");

//winner text 
let winnerText = document.getElementById("winner-text");
//play agian button
let playAgainButton = document.getElementById("play-again");

//rock-paper-scissor- container

let rockpaperscissorContainer = document.querySelector(".rock-paper-scissor-container");


//rock paper scissor container

let rockContainer = document.querySelector(".rock-container");
let paperContainer = document.querySelector(".paper-container");
let scissorContainer = document.querySelector(".scissor-container");

//game item container
let itemContainer ;


// rockContainer.addEventListener('click', userClick('rock'))






function userClick(input){

    userChoice = input;
    console.log(userisAlreadyClicked);
    if(!userisAlreadyClicked){

        console.log("Executed");
        document.querySelector(`.${input}-container`).classList.add("active");
        if(input == "rock")
        {
            console.log("inside rock")
            paperContainer.classList.add("non-active");
            scissorContainer.classList.add("non-active");
        }
        else if(input == "paper")
        {
            
            rockContainer.classList.add("non-active");
            scissorContainer.classList.add("non-active");
        }
        else if(input == "scissor")
        {
          
            paperContainer.classList.add("non-active");
            rockContainer.classList.add("non-active");
        }
        //setting the userclicked to true to prevent next execution
        userisAlreadyClicked = true;

        setTimeout(houseChoiceSelection, 1000);
    }


   
}

function houseChoiceSelection(){

    houseChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let color = "";

    if(houseChoice == 1)
    {
        houseChoice = "rock";
        color = "blue";
        createGameItem(houseChoice, color);
    }
    else if(houseChoice == 2)
    {
        houseChoice = "paper";
        color = "yellow";
        createGameItem(houseChoice, color);
    }
    else if(houseChoice == 3)
    {
        houseChoice = "scissor";
        color = "red";
        createGameItem(houseChoice, color);
    }


    //setting the user choice and computer choice text
    userChoiceText.classList.add("your-choice");
    houseChoiceText.classList.add("house-choice");

    setTimeout(winnerAnounce, 1000, userChoice, houseChoice);
}



function createGameItem(itemType , itemColor)
{
    // icon img 
    let iconImg = document.createElement("img");
    iconImg.src = `Assets/Icons/icon-${itemType}.svg`;
    iconImg.classList.add("icon");


    // tiny-circle-light-white
    let tinyCircleLightWhite = document.createElement("div");
    tinyCircleLightWhite.classList.add("tiny-circle-light-white");
    tinyCircleLightWhite.appendChild(iconImg);

    //tiny-circle-dark-white
    let tinyCircleDarkWhite = document.createElement("div");
    tinyCircleDarkWhite.classList.add("tiny-circle-dark-white");
    tinyCircleDarkWhite.appendChild(tinyCircleLightWhite);
    
    //big-circle-light-${houseChoice}
    let bigCircleLightDiv = document.createElement("div");
    bigCircleLightDiv.classList.add(`big-circle-light-${itemColor}`);
    bigCircleLightDiv.appendChild(tinyCircleDarkWhite);


    //big-circle-dark-${houseChoice}
    let bigCircleDarkDiv = document.createElement("div");
    bigCircleDarkDiv.classList.add(`big-circle-dark-${itemColor}`);
    bigCircleDarkDiv.appendChild(bigCircleLightDiv);


    //container

    itemContainer = document.createElement("div");
    itemContainer.classList.add(`${itemType}-container`);
    itemContainer.classList.add("active")
    itemContainer.appendChild(bigCircleDarkDiv);
    rockpaperscissorContainer.appendChild(itemContainer);

}




function winnerAnounce(userChoice, houseChoice){

    let winner = "";

    if(userChoice == "rock")
    {
        switch(houseChoice)
        {
            case "rock":
                winner = "It's A Tie..!";
                break;
            case "paper":
                winner = "House won..!";
                break;
            case "scissor":
                winner = "You Won..!";
                break;
        }
    }
    else if(userChoice == "paper")
    {
        
        switch(houseChoice)
        {
            case "rock":
                winner = "You Won..!";
                break;
            case "paper":
                winner = "It's A Tie..!";
                break;
            case "scissor":
                winner = "House won..!";
                break;
        }

    }
    else if(userChoice == "scissor")
    {
        switch(houseChoice)
        {
            case "rock":
                winner = "House won..!";
                break;
            case "paper":
                winner = "You Won..!";
                break;
            case "scissor":
                winner = "It's A Tie..!";
                break;
        }
    }
    //setiing the winner text and play again button text
    winnerText.classList.add("winner-active");
    winnerText.textContent = winner;
    playAgainButton.classList.add("play-again-active");

}

playAgainButton.addEventListener('click', ()=>{


    while(rockpaperscissorContainer.hasChildNodes())
    {
        rockpaperscissorContainer.removeChild(rockpaperscissorContainer.firstChild)
    }
    

    winnerText.classList.remove("winner-active");
    playAgainButton.classList.remove("play-again-active");

    userChoiceText.classList.remove("your-choice");
    houseChoiceText.classList.remove("house-choice");


    let gameItems = ["rock", "paper", "scissor"];
    let gameItemColors = ["blue", "yellow", "red"];

    for(i = 0; i < gameItems.length; i++)
    {
        function createGameItem(itemType, itemColor) {
            const template = `
              <div class="${itemType}-container active">
                <div class="big-circle-dark-${itemColor}">
                  <div class="big-circle-light-${itemColor}">
                    <div class="tiny-circle-dark-white">
                      <div class="tiny-circle-light-white">
                        <img class="icon" src="Assets/Icons/icon-${itemType}.svg">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;

                      
            const itemContainer = document.createElement("div");
            itemContainer.innerHTML = template;
            rockpaperscissorContainer.appendChild(itemContainer);
          }
    }

});