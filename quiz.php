<?php
    use quiz\assets\data\Translation;
    include "assets/data/Translation.php";

    $tranlations = Translation::$translations;

    $lang = $_GET['lang'];
?>

<html>
<head>
    <title>Quiz Celebrities</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="assets/js/controller.js" data-lang="<?php echo $lang; ?>"></script>


</head>
<body>

    <div id="navContent" align="center">
        <div id="game1"></div>
        <div id="game2"></div>
    </div>
</body>
</html>
