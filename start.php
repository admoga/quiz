<?php
    use quiz\assets\data\Translation;
    include "assets/data/Translation.php";

    $tranlations = Translation::$translations;
    
    $lang = $_GET['lang'];
?>
<html style="background-color: black">
<head>
    <link href="/assets/css/style.css" rel="stylesheet" type="text/css"/>
    <title>Quiz Celebrities</title>
</head>
<body>
<div id="language">
    <a href="index.php"><img src="/assets/img/language_icon.png"/><i id="lng"><?php echo $tranlations[$lang]["language"];?></i></a>
</div>
<div id="starter">
    <a href="quiz.php?lang=<?php echo $lang ?>" id="start"><?php echo $tranlations[$lang]["play"];?></a>
</div>
</body>
</html>
