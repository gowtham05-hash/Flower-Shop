<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=shopping_cart" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <title>Flower Shop</title>
    <style>
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(90deg,rgb(253, 232, 245),rgb(255, 234, 242));
          padding: 15px 40px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .nav-left .logo a {
            font-size: 20px;
            font-weight: 600;
            color: #b4005b;
            text-decoration: none;
      }
        

        .nav-left .logo a:hover {
            color:rgb(255, 0, 60); 
        }

        .nav-center {
            display: flex;
            align-items: center;
            max-width: 400px;
            width: 100%;
            margin-left:10px;
        }

        .nav-center .search-input {
            margin-left: 20px;
            width: 100%;
            padding: 10px 10px;
            padding-left:20px;
            border: none;
            border-radius: 20px;
            font-size: 14px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
            outline: none;
            transition: box-shadow 0.3s;
        }

        .nav-center .search-input:focus {
            box-shadow: 0 0 8px rgba(214, 51, 132, 0.5); 
        }

        .nav-center .search-icon {
            width: 20px;
            height: 20px;
            margin-left: -40px;
            cursor: pointer;
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-right a {
            color: #b4005b;
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 5px;
            transition: background 0.3s, transform 0.2s;
        }

        .nav-right a:hover {
            transform: translateY(-2px); 
        }

        .nav-right .cart-icon {
            padding: 8px;
        }

        .nav-right .cart-icon .material-icons-outlined {
            font-size: 24px;
            vertical-align: middle;
        }

        .nav-right .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            font-family: 'Roboto', sans-serif;
        }

        .nav-right .user-info span {
          color: #b4005b;
            font-size: 1rem;
        }

        .nav-right .user-info a {
            color: #b4005b;
            padding: 8px 15px;
            border-radius: 5px;
        }

        .nav-right .user-info a:hover {
            transform: translateY(-2px);
        }
        
    </style>
</head>
<body>
<nav class="navbar">
  <div class="nav-left">
    <h1 class="logo"><a href="index2.php"> 💐 LUSH LOVE BLOOMS</a></h1>
  </div>
  <div class="nav-center">
    <input type="text" id="search-input" placeholder="Search for flowers..." class="search-input">
    <img src="./assets/search_icon.png" alt="Search Icon" class="search-icon">
  </div>
  <div class="nav-right">
    <a href="index2.php">Home</a>
    <a href="flower.html">Flower</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <?php if (isset($_SESSION['user_email'])): ?>
      <div class="user-info">
        <span> 👋 Welcome, User!</span>
        <a href="logout.php">Logout</a>
      </div>
    <?php else: ?>
      <a href="login.php">Login</a>
    <?php endif; ?>
    <a href="cart2.html" class="cart-icon">
      <span class="material-icons-outlined">shopping_cart</span>
    </a>
  </div>
</nav>
<div class="header-slider">
    <div class="text">
        <h2 class="more">MORE THAN JUST FLOWERS</h2>
        <p class="empty">No Empty Promise - Just Fresh Flowers, Fast!</p>
        <button class="shop">Shop Now</button>
    </div>
</div>
<div id="dis" class="dis"></div>
<div class="bor1"></div>
<div id="dis1" class="dis"></div>
<div class="gift"></div>
<div id="dis2" class="dis"></div>
<h3 class="birth">Birthday Gifts that Wow</h3>
<div id="birth" class="dis"></div>
<h3 class="birth">Summer To School Gifts</h3>
<div id="school" class="sch-dis"></div>
<footer class="footer">
    <div class="footer-top">
 visiter count      <div>
        <p>🌍 Worldwide Delivery</p>
        <small>We deliver gifts to over 70 countries</small>
      </div>
      <div>
        <p>🔒 100% Safe & Secure Payments</p>
        <small>Pay using secure payment methods</small>
      </div>
      <div>
        <p>📞 Dedicated Help Center</p>
        <small><a href="#">Chat With Us</a></small>
      </div>
    </div>
  
    <div class="footer-links">
      <div>
        <h4>Policy Info</h4>
        <ul>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
  
      <div>
        <h4>About Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FNP Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">News Room</a></li>
        </ul>
      </div>
  
      <div>
        <h4>FNP Business</h4>
        <ul>
          <li><a href="#">Decoration Services</a></li>
          <li><a href="#">Corporate Service</a></li>
          <li><a href="#">Affiliate Program</a></li>
          <li><a href="#">Retail Stores</a></li>
          <li><a href="#">Franchise</a></li>
        </ul>
      </div>
  
      <div>
        <h4>Need Help?</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
  
      <div>
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">Quotes N Wishes</a></li>
          <li><a href="#">Flower Astrology</a></li>
          <li><a href="#">Article Hub</a></li>
          <li><a href="#">Care Guide</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
  
      <div class="subscribe">
        <h4>Subscribe Now</h4>
        <p>Get updates on promotions and offers coupons.</p>
        <input type="email" placeholder="Enter email address" />
        <button>→</button>
      </div>
    </div>
  
    <div class="footer-brands">
      <img src="logo1.png" alt="FNP Values">
      <img src="logo2.png" alt="FNP Weddings">
      <img src="logo3.png" alt="FNP">
      <img src="logo4.png" alt="WDH">
      <img src="logo5.png" alt="FNP Media">
      <img src="logo6.png" alt="FloxApp">
    </div>
  
    <div class="footer-bottom">
      <p>Company Name: FNP E Retail Private Limited | CIN: U52100DL2021PTC376303 | Regd. Office Address: FNP Estate, Ashram Marg, Mandi Road, Gadaipur, New Delhi-110030</p>
      <p>Telephone No.: +91-11-26802680 | E-mail: help@fnp.com | Grievance Officer: Ms. Preeti Bindra | Contact No.: +91 9212422000 / 9755-248-248</p>
      <p><a href="#">Corporate Social Responsibility (CSR) Policy</a></p>
      <p>© 1994–2025 fnp.com. All rights reserved.</p>
    </div>
</footer>
<script src="data.js"></script>
<script src="script.js"></script>
</body>
</html>