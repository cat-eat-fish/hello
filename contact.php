<?php
header("Content-type: text/html; charset=utf-8");
	//获取数据
	$youremail = trim(htmlspecialchars($_POST['your_email']));
	$yourname = stripslashes(strip_tags($_POST['your_name']));
    $yourmessage = stripslashes(strip_tags($_POST['your_message']));

    $str=$yourname.','.$youremail.','.$yourmessage;

    $fh=fopen('hello.txt', 'a');
	fwrite($fh,$str);
	fclose($fh);
	echo "发送成功！";
	echo "<br/>";
	echo "<a href='contact.html'>返回</a>";
 ?>
