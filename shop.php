<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Take the journey</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <link rel="icon" href="images/logo.png" >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="script.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
  </head>
  <body>
    
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand right unique-text-color margin-left " href="index.html">Take the journey
          <img class="logo mirror-image "src="images/logo.png" alt="logo">
        </a>
        <div class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Newstand</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">For writers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My profile</a>
            </li>
            <a class="btn btn-outline-primary margin-right" id="cartBtn" href="cart.php">
            Cart (<span id="cartCounter">0</span>)
            </a>
          </ul>
        </div>
      </div>
      <div>
        
      </div>
      </nav>
    </header>
    
    <div class="margin-left margin-right">
      <h1 class="chapter-text">
        Shop
        <hr class="solid">
      </h1>
      <div class="search-color">
        <div class="ib midle">
          <input type="text" class="search form-control min-width-big" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
          <datalist id="datalistOptions"></datalist></div>
        <div class="ib  midle margin-left">
          <button class="btn btn-primary btn-width" id="searchBtn">Search</button>
        </div>
        <div class = "ib midle margin-left">
          <input type="checkbox" class="btn-check" id="btn-check-default" autocomplete="off">
          <label class="btn btn-outline-primary oval-btn" for="btn-check-default">Default</label>
        </div>
      <div class = "ib midle margin-left">
        <input type="checkbox" class="btn-check" id="btn-check-alphabet" autocomplete="off">
    <label class="btn btn-outline-primary oval-btn" for="btn-check-alphabet">A-z</label>
    </div>
    <div class = "ib midle margin-left">
      <input type="checkbox" class="btn-check" id="btn-check-list-view" autocomplete="off">
  <label class="btn btn-outline-primary oval-btn" for="btn-check-list-view">List view</label>
  </div>
  <div id="books-container">
    
    </div>
  </div>
    </div>
  </body>