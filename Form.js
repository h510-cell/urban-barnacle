class Form{

    constructor(){
        this.input=createInput("Name");
        this.button=createButton('Vote');
        this.greeting=createElement('h2');
        this.title=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        var title=createElement('h2');
        title.html("Survey On Education");
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         voters.name=this.input.value();
         votersCount+=1;
         voters.index=votersCount;
         voters.update();
         voters.updateCount(votersCount);
         this.greeting.html("Hello"+voters.name);
         this.greeting.position(displayWidth,2-70,displayHeight/4);
        });

    }
}