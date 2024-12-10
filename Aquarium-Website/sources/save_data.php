<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $dataFile = 'data.txt';

    function sanitize_input($input)
    {
        // Remove HTML tags
        $input = preg_replace('/<[^>]*>/', '', $input);
        // Convert special characters to HTML entities
        $input = htmlspecialchars($input);
        return $input;
    }


    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $visitDate = $_POST['visit_date'];
    $visitTime = $_POST['visit_time'];
    $satisfaction = $_POST['satisfaction'];
    $recommendation = $_POST['recommendation'];
    $comment = isset($_POST['comment']) ? sanitize_input($_POST['comment']) : '';
    $visitInfo = $_POST['visit_info'];


    $favoriteAnimals = isset($_POST['favorite_animals']) ? $_POST['favorite_animals'] : [];
    $favoriteAnimalsStr = implode(', ', $favoriteAnimals);


    $data = "Name: $name\nEmail: $email\nVisit Date: $visitDate\nVisit Time: $visitTime\nSatisfaction: $satisfaction\nRecommendation: $recommendation\nFavorite Animals: $favoriteAnimalsStr\nComment: $comment\nVisit Info: $visitInfo\n\n";


    $file = fopen("data.txt", "a");
    if ($file) {
        fwrite($file, $data);
        fclose($file);
        header("Location: ../thank_you.html");
        exit();
    } else {
        echo "Error saving data!";
    }
}?>