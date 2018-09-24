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
