<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1>Imgur 2.0 Beta</h1>
    <p>Using middle-out compression, we now store your images with a system that has Weissman Score of 5.2</p>
    <form action='upload.php' method='post' enctype='multipart/form-data'>
      Select image to upload:
      <input type='file' name='file' id='file'>
      <br>
      <input class="btn btn-success" type='submit' value='Upload image' name='submit'>
    </form>
  </div>
</body>
</html>
