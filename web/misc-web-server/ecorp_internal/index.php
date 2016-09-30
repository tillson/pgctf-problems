<html>
<head>
  <title>ECorp Internal Login</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1>Secure Login 1.0</h1>
    <hr>
    <div style="height:2em;">
      <p id="error" style="color:red; display:none;"><p>
    </div>
    <input id="username" type="username" name="username" />
    <input id="password" type="password" name="password" />
    <button class="btn btn-info" onclick="submit()">Submit</button>
  </div>
  <footer>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
    <script>
    function submit() {
      // DEBUG CODE (REMOVE BEFORE PUSHING TO PRODUCTION)
      console.log('base64 of pass for auth: ' + btoa($('#password').val()));
      // END DEBUG CODE
      if ($('#username').val() == 'admin' && btoa($('#password').val()) == 'aHVudGVyMg==') {
        document.location.href = './auth.php?password=' + atob('aHVudGVyMg==');
      } else {
        $('#error').text('Invalid username or password.')
        $('#error').fadeIn(700).delay(3000).fadeOut(700);
      }
    }
    </script>

  </footer>
</body>
</html>
