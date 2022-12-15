<?php
$address = "vikas.r@snapdragonls.com";
$subject = "Thank you contacting us";

if (!defined("PHP_EOL"))
    define("PHP_EOL", "\r\n");

$error = false;
$fields = array('name', 'email');

foreach ($fields as $field) {
    if (empty($_POST[$field]) || trim($_POST[$field]) == '')
        $error = true;
}

if (!$error) {

    $name = stripslashes($_POST['name']);
    $email = trim($_POST['email']);

    $e_subject = 'You\'ve been contacted by ' . $name . '.';


    // Configuration option.
    // You can change this if you feel that you need to.
    // Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

    $e_body = "You have been contacted by: $name" . PHP_EOL . PHP_EOL;
    $e_reply = "E-mail: $email" . PHP_EOL . PHP_EOL;
    // $e_content = "Message:\r\n$message \r\n Phone: $phone \r\n Subject: $subject" . PHP_EOL;
    // $e_content = "test content";

    $msg = wordwrap($e_body . $e_reply, 70);

    $headers = "From: $address" . PHP_EOL;
    $headers .= "Reply-To: $address" . PHP_EOL;
    $headers .= "Cc: $address" . PHP_EOL;
    $headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    $headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

    ob_start();
    include('reach-us-mail-temp.php');
    $msg = ob_get_contents();

    exit();
    if (mail($email, $e_subject, $msg, $headers)) {

        // Email has sent successfully, echo a success page.

        echo 'Success';

    } else {

        echo 'ERROR!';

    }

}

?>