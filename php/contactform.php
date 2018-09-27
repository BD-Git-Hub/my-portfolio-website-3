<?php



//----------------------ERROR HANDLING-----------------------------------//
if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
   
    $mailTo = "bov@bovin-desouza.co.uk";
    $headers = "From: ".$mailFrom;
    $txt = "received e-mail from: ".$name." and message is: ".$message;
 
    
    //checks if input fields are left empty, throws out header message 
    if(empty($name) || empty($email) || empty($message)) {
        
        header("location: http://bovin-desouza.co.uk/index.html?message=inputsempty");
        
    } else {
        //check if input characters are valid
        //---test---//
        if(!preg_match("/^[a-zA-Z]*$/", $name)) {
            header("location: http://bovin-desouza.co.uk/index.html?message=invalidcharacters");
            exit();
        } else {
            
        
        //checks if email is valid if not sends out a header message 
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header("location: http://bovin-desouza.co.uk/index.html?message=invalidemail");
        } else {
            
            header("location: http://bovin-desouza.co.uk/index.html?message=success");
     
            mail($mailTo, $txt, $headers);
        }
      }
    }
    
} else {
    header("location: http://bovin-desouza.co.uk/index.html?message=error");
}
