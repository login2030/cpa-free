<?php
if ($_POST) {
	$file = 'database-emails.txt';
	$name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : null;
	$email = isset($_POST["email"]) ? strip_tags(trim($_POST["email"])) : null;
	
	file_put_contents($file, "$email - $name \n", FILE_APPEND | LOCK_EX);
	echo "1";
} else {
	echo "0";
}