<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
function clearChar($string){

    $whiteSpace = '\s';  //if you dnt even want to allow white-space set it to ''
    $pattern = '/[^a-zA-Z0-9'  . $whiteSpace . ']/u';
    $cleared = preg_replace($pattern, '', $string);

    return $cleared;
}

if($_SERVER['REQUEST_METHOD'] == "POST" && !empty($_POST)){
      
    
    $to = "imjhon.dev@gmail.com";
    $subject = "ImJhon.org Contacto";
    $contact = clearChar($_POST['contacto']);
    $name = clearChar($_POST['nombre']);
    $message = clearChar($_POST['mensaje']);
    $fullMessage = $name . "\n" . $message . "\n" . $contact;
    // mail($to, $subject, $fullMessage);
    if(mail($to, $subject, $fullMessage)){
        http_response_code(200);
    }else{
        http_response_code(400);
    }
    // email()


}
?>