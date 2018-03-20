<?php
use quiz\assets\data\Translation;
include "assets/data/Translation.php";

$tranlations = Translation::$translations;

$lang = $_GET['lang'];
$score = $_GET['score'];
?>
<div class="questionText2">
    <p id="nota"><span id="nota"><?php echo $tranlations[$lang]["your result"]?> </span></p>
    <img src="assets/img/trophy.png"><br>
    <p id="firstSentence"><?php echo $score?><span> <?php echo $tranlations[$lang]["correct answers of"]?> </span>10<span> <?php echo $tranlations[$lang]["questions"]?> </span></p><br>
    <?php
        if ($score<5){
            echo "<p id='lastSentence'>".$tranlations[$lang]["sorry, get a higher score next time"]."</p>";
        }else if ($score>=5 && $score<8){
            echo "<p id='lastSentence'>".$tranlations[$lang]["very good! try to improve later"]."</p>";
        }else if ($score>7 && $score<10){
            echo "<p id='lastSentence'>".$tranlations[$lang]["great! you are very intelligent!"]."</p>";
        }else{
            echo "<p id='lastSentence'>".$tranlations[$lang]["amazing! nobody knows more than you!"]."</p>";
        }
    ?>
</div>
