<?php

$frm_name  = "Youname";
$recepient = "Max19901@yandex.ru";
$sitename  = "Учебный: Armata Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);


$message = "
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
