var canvas;
var votersCount;
var allvoters;
var database;
var position;
var form,voters;

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
}

function draw(){
    if (votersCount===4){
        game.update(1);
    }


    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        text("Are E-books important for students"
        -"Yes"
        -"No"
        ),0,200;
    }
    else if(keyDown(RIGHT_ARROW)){
        text("Are History,Civics and Geography needed in future life"
        -"Yes"
        -"No"
        ),0,300;
    }
    else if(keyDown(UP_ARROW)){
        text("Are tutions necessary for students of 5th and 6th class"
        -"Yes"
        -"No"
        )
        ,0,400;
    }
    else if(keyDown(DOWN_ARROW)){
        text("Thank you for participating in our survey"),0,500;
    }
    drawSprites();
}
}