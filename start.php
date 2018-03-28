<?php
    use quiz\assets\data\Translation;
    include "assets/data/Translation.php";

    $tranlations = Translation::$translations;
    
    $lang = $_GET['lang'];
?>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
    <title>Quiz Celebrities</title>
</head>
<body id="cover">
<div id="language">
    <a href="index.php"><img src="assets/img/language_icon.png"/><i id="lng"><?php echo $tranlations[$lang]["language"];?></i></a>
</div>
<div id="container-logo" align="center">
    <img id="logo-desktop" src="assets/img/main_desktop.png">
    <img id="logo-phone" src="assets/img/main_phone.png">

</div>
<div id="starter">
    <a href="quiz.php?lang=<?php echo $lang ?>" id="start"><?php echo $tranlations[$lang]["play"];?></a>
</div>
</body>
</html>
