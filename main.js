const btnWallpaper = document.querySelector("#ludo-club-button");
btnWallpaper.addEventListener('click', (event) => {
  document.getElementById("club-wallpaper").style.display = "none";
  document.getElementById("club-wallpaper").style.zIndex = "-10";
  // document.getElementsByClassName("button::after ludo-club-btn").style.animation = "none";
  // document.getElementById("ludo-club-button").style.animation = "none";
  // document.getElementById("club-wallpaper").style.animation = "none";
})

var sumFirstPlayer = 0;
var sumSecondPlayer = 0;
document.getElementById("sumFirstPlayer").innerHTML = sumFirstPlayer;
document.getElementById("sumSecondPlayer").innerHTML = sumSecondPlayer;


//generating randon numbers and claiming the winner
function ludoGame(){ 
    const play1 = Math.floor(Math.random() * 6) + 1; 
    const play1dice = `images/dice${play1}.jpg`;
    document.getElementById('check1').setAttribute('src', play1dice);

    const play2 = Math.floor(Math.random() * 6) + 1; 
    const play2dice = `images/dice${play2}.jpg`;
    document.getElementById('check2').setAttribute('src', play2dice);


    sumFirstPlayer += play1;
    document.getElementById("sumFirstPlayer").innerHTML = sumFirstPlayer;

    sumSecondPlayer +=play2;
    document.getElementById("sumSecondPlayer").innerHTML = sumSecondPlayer;

    if(sumFirstPlayer > sumSecondPlayer) 
     { document.querySelector('h1').innerHTML="Player 1 is wining :)";
    } else if(sumFirstPlayer < sumSecondPlayer) {
      document.querySelector('h1').innerHTML="Player 2 is wining :)";
    } else{ document.querySelector('h1').innerHTML="DRAW "; }

 }

 //Reset function
function resetGame(){
  sumFirstPlayer = 0;
  sumSecondPlayer = 0;
  document.getElementById("check1").setAttribute('src', 'images/dice1.jpg');
  document.getElementById("check2").setAttribute('src', 'images/dice1.jpg');
  document.getElementById("sumFirstPlayer").innerHTML = 0;
  document.getElementById("sumSecondPlayer").innerHTML = 0;
  document.querySelector('h1').innerHTML = "Let's start again";
}
  

const btn = document.querySelector('#submit');
var checkboxes;
btn.addEventListener('click', (event) => {
  document.getElementById("container-reward").style.display = "block";
    // checkboxes = document.querySelectorAll('input[name="present"]:checked');
    // checkboxes.forEach((checkbox) => {
    //     console.log(checkbox.value);
    //     if (checkbox.value == "yes"){
            
    //     } else if (checkbox.value == "no"){
    //         document.getElementById("reject-present").innerHTML = "Ok, as you wish :/ Let's play another game";
    //     }

    });
// }); 


function closePresent(){
  document.getElementById("container-reward").style.display = "none";
}