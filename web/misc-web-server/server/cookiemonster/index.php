<?php
if (!isset($_COOKIE['userType'])) {
  setcookie('userType', 0, time() + (86400 * 30), "/"); // 86400 = 1 day
}
?>
<html>
<head>
  <title>Cookie Jar</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <?php if (!isset($_COOKIE['userType']) || $_COOKIE['userType'] < 1) { ?>
      <h1>Permission Denied!</h1>
      <p>You are not authorized to see this page.</p>
    <?php } else { ?>
      <h1>Authorized!</h1>
      <p>The flag is flag{y0u_st0le_th3_c00kies}</p>
    <?php } ?>
  </div>
</body>
</html>
