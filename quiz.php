<?php
    use quiz\assets\data\Translation;
    include "assets/data/Translation.php";

    $tranlations = Translation::$translations;

    $lang = $_GET['lang'];
?>

<html>
<head>
    <title>Quizz Celebrities</title>
    <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="assets/js/controller.js" data-lang="<?php echo $lang; ?>"></script>
    <script type="text/javascript" src="assets/js/contact.js"></script>


</head>
<body>
    <a href="start.php?lang=<?php echo $lang; ?>"><input type="button" value="<?php echo $tranlations[$lang]["exit"];?>"></a>

    <div id="navContent" align="center">
        <div id="game1"></div>
        <div id="game2"></div>
    </div>
</body>
</html>
