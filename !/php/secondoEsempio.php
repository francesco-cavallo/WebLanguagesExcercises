<html>
    <head>
        <title> Script Array PHP</title>
    </head>
    <body>
        <?php
            $a = array("foo" => "pippo", "bar" => "pluto", "altro" => "paperino");
            foreach ($a as $index => $var) {
                echo "Valore associato all'indice " . $index . ": " . $var . "<br/>";
            }
        ?>
    </body>
</html>