function backgroundChanger(){
    alert("You can now change the background color to gold, purple, red, or blue.");
    var backgroundChoice = prompt("What color do you want your background?" );
    if (backgroundChoice == 'gold'){
        document.body.style.backgroundColor = 'gold';
        return true;
    }
    else if (backgroundChoice == 'purple'){
        document.body.style.backgroundColor = 'purple';
        return true;
    }
    else if (backgroundChoice == 'red'){
        document.body.style.backgroundColor = 'red';
        return true;
    }
    else if (backgroundChoice == 'blue'){
        document.body.style.backgroundColor = 'blue';
        return true;
    }
    else {
        alert ("I didn't have time for that color. Please choose a listed color.");
        return false;
    }
}

backgroundChanger();
while(backgroundChanger() == false){
backgroundChanger();
}