playername = localStorage.getItem("playername");
// random value generated
var y= Math.floor(Math.random() * 10 + 1 );
// counting the number of guesses
var guess= 1;
// made for correct Guess

  
// function for number guessed by user
function submit(){
    var x = document.getElementById("guessField").value;

    if (x==y){
        alert("Congrats " + playername + "! You got the number correct in " + guess + " guess(es)!" );
    }
    else if(x>y){
        guess++;
        alert("Ooops! Try a smaller number!");
    }
    else{
        guess++;
        alert("Ooops! Try a larger number!");
    }
}

function play_again(){
     y= Math.floor(Math.random() * 10 + 1 );
}

