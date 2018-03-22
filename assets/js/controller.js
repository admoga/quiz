$(document).ready(function () {

    //we get language from quiz.php
    var script = $('script[src*=controller]');
    var lang = script.attr('data-lang');
    if (typeof lang == "undefined" ) {
    }

    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
    
    $.getJSON('assets/data/'+lang+'/quiz.json',{
        format: "json"
    }).done(function(data){
        for(i=0; i<data.quizlist.length; i++){
            questionBank[i]=new Array;
            questionBank[i][0]=data.quizlist[i].question;
            questionBank[i][1]=data.quizlist[i].option1;
            questionBank[i][2]=data.quizlist[i].option2;
            questionBank[i][3]=data.quizlist[i].option3;
            questionBank[i][4]=data.quizlist[i].picture;
        }
        numberOfQuestions=questionBank.length;
        disorder();
        displayQuestion();
    });

    //function to disorder the questions
    function disorder(){
        for(i=0; i<50; i++){
            var rnd1=Math.floor(Math.random()*questionBank.length);
            var rnd2=Math.floor(Math.random()*questionBank.length);

            var temp=questionBank[rnd1];
            questionBank[rnd1]=questionBank[rnd2];
            questionBank[rnd2]=temp;

        }
        numberOfQuestions = 10;
    }

    //function to show the question
    function displayQuestion(){

        //disorder the answers
        var rnd=Math.random()*3;
        rnd=Math.ceil(rnd);
        var q1;
        var q2;
        var q3;

        if(rnd==1){
            q1=questionBank[questionNumber][1];
            q2=questionBank[questionNumber][2];
            q3=questionBank[questionNumber][3];
        }
        if(rnd==2){
            q2=questionBank[questionNumber][1];
            q3=questionBank[questionNumber][2];
            q1=questionBank[questionNumber][3];
        }
        if(rnd==3){
            q3=questionBank[questionNumber][1];
            q1=questionBank[questionNumber][2];
            q2=questionBank[questionNumber][3];
        }

        $(stage).append('<div id="container"> ' +
            '<div id="header"><a href="start.php?lang='+lang+'"><img src="/assets/img/logo.png"></a>' +
            '<div id="numeration">'+ (questionNumber+1) +' / '+numberOfQuestions+'</div></div>' +
            '<div id="picture"><img id="image" src="'+ questionBank[questionNumber][4] +'">' +
            '</div><div id="container2"><div class="questionText">'+questionBank[questionNumber][0]+'</div><br>' +
            '<div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div>' +
            '<div id="3" class="option">'+q3+'</div></div></div>');

        //function to answer the questions
        $('.option').click(function(){
            if(questionLock==false){questionLock=true;
                //correct answer
                if(this.id==rnd){
                    $(this).css("background-color", "#00ca00");
                    $("#container").append('<div class="feedback1"><img src="/assets/img/icon_ok.png"></div>');
                    score++;
                }
                //wrong answer
                if(this.id!=rnd){
                    $(this).css("background-color", "#e30613");
                    $("#container").append('<div class="feedback2"><img src="/assets/img/icon_ko.png"></div>');
                }
                setTimeout(function(){
                    changeQuestion()
                },1000);
            }})
    }

    function changeQuestion(){

        questionNumber++;

        if(stage=="#game1"){stage2="#game1";stage="#game2";}
        else{stage2="#game2";stage="#game1";}

        $(stage2).animate({"right": "+=100%"},"slow", function() {$(stage2).css('right','-100%');$(stage2).empty(); });
        $(stage).animate({"right": "+=100%"},"slow", function() {questionLock=false; });

        if(questionNumber<numberOfQuestions){
            displayQuestion();
        }else{
            displayFinalSlide();
        }
    }

    //Results
    function displayFinalSlide() {
        $(stage).load("results.php?lang="+lang+"&score="+score);
    }

});