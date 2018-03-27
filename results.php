<?php
use quiz\assets\data\Translation;
include "assets/data/Translation.php";

$tranlations = Translation::$translations;

$lang = $_GET['lang'];
$score = $_GET['score'];
$stage = $_GET['stage'];

?>
<script>
    $("#<?php echo $stage; ?>").css('background-image', 'url(/assets/img/results_bg_desktop.jpg)');
</script>

<div align="center" class="container-results">
    <div class="results" id="container-firstsentence">
        <p id="firstSentence"><b><?php echo $score?><span style="color: #eaa939"> <?php echo $tranlations[$lang]["correct answers of"]?> </span>10<span style="color: #eaa939"> <?php echo $tranlations[$lang]["questions"]?> </span></b></p>
    </div>

    <div class="results" id="container-trophy">
        <img id="trophy" src="assets/img/trophy.png">
    </div>

    <div class="results" id="container-lastsentence">
        <?php
        if ($score<5){
            echo "<p id='lastSentence'><b>".$tranlations[$lang]["sorry, get a higher score next time"]."</b></p>";
        }else if ($score>=5 && $score<8){
            echo "<p id='lastSentence'><b>".$tranlations[$lang]["very good! try to improve later"]."</b></p>";
        }else if ($score>7 && $score<10){
            echo "<p id='lastSentence'><b>".$tranlations[$lang]["great! you are very intelligent!"]."</b></p>";
        }else{
            echo "<p id='lastSentence'><b>".$tranlations[$lang]["amazing! nobody knows more than you!"]."</b></p>";
        }
        ?>
    </div>

    <div class="results" id="final-container" align="center">
        <div id="btn-container">
            <a href="quiz.php?lang=<?php echo $lang ?>" id="btn"><label id="final"><?php echo $tranlations[$lang]["try again"];?></label></a>
            <a href="start.php?lang=<?php echo $lang ?>" id="btn"><label id="final"><?php echo $tranlations[$lang]["exit"];?></label></a>
        </div>
    </div>
</div>

