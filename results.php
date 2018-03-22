<?php
use quiz\assets\data\Translation;
include "assets/data/Translation.php";

$tranlations = Translation::$translations;

$lang = $_GET['lang'];
$score = $_GET['score'];
?>

<div class="results">
    <p id="nota"><span id="nota"><b><?php echo $tranlations[$lang]["your result"]?></b> </span></p>
    <img src="assets/img/trophy.png"><br>
    <p id="firstSentence"><b><?php echo $score?><span style="color: hotpink"> <?php echo $tranlations[$lang]["correct answers of"]?> </span>10<span style="color: hotpink"> <?php echo $tranlations[$lang]["questions"]?> </span></b></p><br>
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


    <div align="center">
        <a href="quiz.php?lang=<?php echo $lang ?>"><input type="button" id="btn" value="<?php echo $tranlations[$lang]["try again"];?>"></a>
    </div>
</div>

