<?php
$to      = 'mark.keckeis@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: mark15@keckeis.com' . "\r\n" .
    'Reply-To: mark15@keckeis.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)){
    echo 'email sent';
    };
?>