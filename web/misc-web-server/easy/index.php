<html>
<head>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1>Secure Login 1.0</h1>
    <hr>
    <input id="username" class="form-control" placeholder="Username" style="width:40%; margin-bottom:5px;" type="username" name="username" />
    <input id="password" class="form-control" placeholder="Password" style="width:40%; margin-bottom:20px;" type="password" name="password" />
    <button class="btn btn-info" onclick="submit()">Submit</button>
  </div>
  <footer>
    <script>
    function submit() {
      if (document.getElementById('username') == 'admin' && btoa(document.getElementById('password')) == 'aHVudGVyMg==') {
        document.location.href = 'flag.php';
      }
    }
    </script>
  </footer>
</body>
</html>
