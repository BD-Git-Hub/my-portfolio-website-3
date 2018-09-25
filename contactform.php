<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    
    $mailTo = "bov@bovin-desouza.co.uk";
    $headers = "From: ".$mailFrom;
    $txt = "received e-mail from: ".$name." and message is: ".$message;
    
    
    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
}
//----------------------ERROR HANDLING-----------------------------------//
/*if(isset($_POST['submit'])) {
    $name = $_Post['name'];
    $mail = $_Post['mail'];
    $message = $_Post['message'];
    
    if(empty($name) || empty($mail) || empty($message)) {
        header("location: index.html?contact=empty");
    } else {
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header("location: index.html?contact=invalidEmail");
        }
        else {
            echo "Message Sent!";
        }
    }
    
    
} else {
    header("location: index.html?contact=error");
}*/
