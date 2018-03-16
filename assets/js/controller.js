$(document).ready(function () {

    //we get language from quiz.php
    var script = $('script[src*=controller]');
    var lang = script.attr('data-lang');
    if (typeof lang == "undefined" ) {
        lang = 'en';
    }

    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;

    $.getJSON('assets/data/'+lang+'/quiz.json', function(data) {
        for(i=0; i<data.quizlist.length; i++){
            questionBank[i]=new Array;
            questionBank[i][0]=data.quizlist[i].question;
            questionBank[i][1]=data.quizlist[i].option1;
            questionBank[i][2]=data.quizlist[i].option2;
            questionBank[i][3]=data.quizlist[i].option3;
            questionBank[i][4]=data.quizlist[i].option4;
            // questionBank[i][5]=data.quizlist[i].imagen;
        }

    numberOfQuestions=questionBank.length;
	scrambleDatabase();
	displayQuestion();
	})


    function scrambleDatabase(){
	    for(i=0; i<50; i++){
            var rnd1=Math.floor(Math.random()*questionBank.length);
            var rnd2=Math.floor(Math.random()*questionBank.length);

            var temp=questionBank[rnd1];
            questionBank[rnd1]=questionBank[rnd2];
            questionBank[rnd2]=temp;
        }

    numberOfQuestions = 5;
    }



    function displayQuestion(){
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
        else if(rnd==2){
            q2=questionBank[questionNumber][1];
            q3=questionBank[questionNumber][2];
            q1=questionBank[questionNumber][3];
        }
        else if(rnd==3){
            q3=questionBank[questionNumber][1];
            q1=questionBank[questionNumber][2];
            q2=questionBank[questionNumber][3];
        }

        // $('html, body').css('overflow-y','visible');

        $(stage).append('<div class="enunciado">'+questionBank[questionNumber][4]+'</div><div id="numeration">'+ (questionNumber+1) +' / '+numberOfQuestions+'</div><div class="image_question"><img  src="'+ questionBank[questionNumber][5] +'"></div><br><div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');

        $('.option').click(function(){
        if(questionLock==false){
            questionLock=true;
            //correct answer
            if(this.id==rnd){
                $(this).css("background-color", "#00ca00");
                $(stage).append('<div class="feedback1"><img src="../img/icon_ok.png">Correcto</div>');
                score++;
            }
            //wrong answer
            if(this.id!=rnd){
                $(this).css("background-color", "#e30613");
            }

        setTimeout(function(){
            changeQuestion()
        },1000);
        }})
    }//display question

	function changeQuestion(){

		questionNumber++;

	    if(stage=="#game1"){
            stage2="#game1";
            stage="#game2";
        }else{
            stage2="#game2";
            stage="#game1";
        }

        $(stage2).animate({"right": "+=100%"},"slow", function() {$(stage2).css('right','-100%');$(stage2).empty(); });
        $(stage).animate({"right": "+=100%"},"slow", function() {questionLock=false; });

	    if(questionNumber<numberOfQuestions){
            displayQuestion();
        }else{
            displayFinalSlide();
        }


	}//change question




    function displayFinalSlide() {
        var note = (score * 10) / numberOfQuestions;
        var note_parse = note.toFixed(2);
        var degree_id = 1;
        var lesson_id = 36;




        $(stage).append('<div class="questionText2"><p id="nota"><span id="nota">TU NOTA: </span>' + note_parse + '</p>' +
            '<img src="../img/trophy.png"><br><br><p id="firstSentence">' +
            '' + score + '<span> Respuestas correctas de </span>' +
            '' + numberOfQuestions + '<span> Preguntas. </span></p><br><p id="lastSentence">' +
            'Consigue una puntuación más alta en la próxima lección !</p></div>');
        setTimeout(function () {
            $("html, body").css("background-color", "#1d1d1b");
        }, 500);

    }

});