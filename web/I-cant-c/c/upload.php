<?php

if (!isset($_FILES['file'])) {
  die();
}

$target_dir = "uploads/";
$target_file = $target_dir . md5(time()) . pathinfo($target_file, PATHINFO_EXTENSION);
$uploadOk = true;
$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

$fileName = basename($_FILES['file']['name'])
$bannedList = array('c99.php', 'c100.php', 'r57.php', 'angel.php', 'test.php');
foreach ($bannedList as $banned) {
  if (strpos($fileName, $banned) !== false) {
    echo 'You cannot upload this file.';
    die();
  }
}

if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo "Your image has been uploaded <a href='/uploads/" . basename($target_file) . "'>here</a>.";
} else {
    echo "An error occurred while uploading this file.";
}



 ?>
