<?php
$user_name = $_GET["user_name"];
$user_age = $_GET["user_age"];
$user_info = array("userName" => $user_name, "userAge" => $user_age);
echo header('Access-Control-Allow-Origin:*');
echo json_encode($user_info);
?>