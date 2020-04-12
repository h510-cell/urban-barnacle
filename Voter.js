class Voter {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var votersCountRef = database.ref('votersCount');
      votersCountRef.on("value",(data)=>{
        votersCount = data.val();
      })
    }

    getAnswer(){
      var votersAnswerRef = database.ref('votersAnswer');
      votersAnswerRef.on("value",(data)=>{
        votersAnswer = ["Yes","No","Yes","No"];
      })
    }  
    updateCount(count){
      database.ref('/').update({
        votersCount: count
      });
    }

    updateAnswer(answer){
      database.ref('/').update({
        votersAnswer: answer
      });
    }
    update(){
      var votersIndex = "voters/voter" + this.index;
      database.ref(votersIndex).set({
        name:this.name,
      });
    }
  
    static getVoterInfo(){
      var votersInfoRef = database.ref('voters');
      votersInfoRef.on("value",(data)=>{
        allvoters = data.val();
      })
    }
  }
  