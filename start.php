<?php
    use quiz\assets\data\Translation;
    include "assets/data/Translation.php";

    $tranlations = Translation::$translations;
    
    $lang = $_GET['lang'];
?>
<html>
<head>
    <title>Quiz Celebrities</title>
</head>
<body>
<div align="center">
    <a href="index.php" class="button"><?php echo $tranlations[$lang]["language"]?></a>
    <a href="quiz.php?lang=<?php echo $lang ?>" class="button"><?php echo $tranlations[$lang]["play"]?></a>
</div>
</body>
</html>
