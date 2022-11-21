<html>
    <head>
        <title> Script Function PHP </title>
    </head>
    <body>
        <?php
            function somma($a, $b){
                return $a + $b;
            }
            function printRandomValue(){
                $firstValue = 10;
                $secondValue = 20;
                echo "<h1>" . somma($firstValue, $secondValue) . "</h1>";
            }
            printRandomValue();
        ?>
    </body>
</html>