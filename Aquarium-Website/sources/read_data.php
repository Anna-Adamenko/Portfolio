<?php
$dataFile = 'data.txt';
$lines = file($dataFile);

foreach ($lines as $index => $line) {
    echo $line;
}

