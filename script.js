alert("You can now change the background color to gold, purple, red, or blue");
var backgroundChoice = prompt("What color do you want your background?");

function backgroundChanger(){
    if (backgroundChoice == 'gold'){
        document.body.style.backgroundColor = 'gold';
    }
    else if (backgroundChoice == 'purple'){
        document.body.style.backgroundColor = 'purple';
    }
    else if (backgroundChoice == 'red'){
        document.body.style.backgroundColor = 'red';
    }
    else if (backgroundChoice == 'blue'){
        document.body.style.backgroundColor = 'blue';
    }
}
backgroundChanger();
