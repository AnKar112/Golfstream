<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$userMessage = $_POST['message'];

$to = "big-golfstrim@ukr.net";
$subject ='Отправлена заявка с сайта Golfstream';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers = "From: $name <$email>" . "\r\n";
$message .= "Имя отправителя: ".$name."\r\n";
$message .= "Почта: ".$email."\r\n";
$message .= "Телефон: ".$phone."\r\n";
$message .= "Компания: ".$company."\r\n";
$message .= "Сообщение: ".$userMessage."\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере!';
}

