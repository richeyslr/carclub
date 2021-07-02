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

while(backgroundChanger() == false){
} 
 

function starGenerator(){
   var rating = prompt('Leave a rating 1-5 to see a talking car!');
    for (let i = 0; i < rating; i++){
        var starCount = document.createElement('img');
        starCount.setAttribute("src", "images/mcqueen.jpeg");
        starCount.setAttribute("height", "200");
        starCount.setAttribute("width", "200");
        starCount.setAttribute("alt", "stars");
        document.body.appendChild(starCount);    
    }
} 
