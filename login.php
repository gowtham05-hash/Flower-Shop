<?php
session_start();
$host = 'localhost';
$dbname = 'flower_shop';
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password

// Initialize error message variable
$error_message = '';

try {
    // Connect to the database
    $conn = new mysqli($host, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = isset($_POST['email']) ? trim($_POST['email']) : '';
        $password = isset($_POST['password']) ? trim($_POST['password']) : '';

        // Server-side validation
        if (empty($email) || empty($password)) {
            $error_message = 'Please fill all fields.';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_message = 'Invalid email format.';
        } else {
            // Query the database for the user
            $stmt = $conn->prepare('SELECT email, password FROM users WHERE email = ?');
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                // Verify password
                if (password_verify($password, $user['password'])) {
                    // Set session variables
                    $_SESSION['user_email'] = $email;
                    // Redirect to index2.php
                    header('Location: index2.php');
                    exit();
                } else {
                    $error_message = 'Invalid email or password.';
                }
            } else {
                $error_message = 'Invalid email or password.';
            }
            $stmt->close();
        }
    }
} catch (Exception $e) {
    $error_message = 'An error occurred: ' . $e->getMessage();
}

// Close database connection
if (isset($conn)) {
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flower Shop - Sign In</title>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: #f7f7f7;
      font-family: 'Roboto', sans-serif;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .signin-box {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      width: 360px;
      text-align: center;
    }

    .signin-box h2 {
      font-family: 'Pacifico', cursive;
      font-size: 2.2rem;
      color: #d63384;
      margin-bottom: 10px;
    }

    .signin-box p {
      margin-bottom: 30px;
      font-size: 0.95rem;
      color: #555;
    }

    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
    }

    button {
      background-color: #d63384;
      color: white;
      padding: 12px 0;
      width: 100%;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #c02672;
    }

    .link {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #666;
    }

    .link a {
      color: #d63384;
      text-decoration: none;
    }

    .link a:hover {
      text-decoration: underline;
    }

    .social-login {
      margin-top: 25px;
    }

    .social-login p {
      color: #666;
      margin-bottom: 10px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .social-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      text-decoration: none;
      transition: transform 0.2s;
    }

    .social-btn:hover {
      transform: scale(1.1);
    }

    .social-btn.google {
      background-color: #db4437;
    }

    .social-btn.instagram {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }

    .social-btn.twitter {
      background-color: #1da1f2;
    }

    .error-message {
      color: #d63384;
      font-size: 0.9rem;
      margin-bottom: 20px;
      display: <?php echo $error_message ? 'block' : 'none'; ?>;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="signin-box">
      <h2>Welcome Back 🌷</h2>
      <p>Sign in to your flower account</p>
      <form method="post" action="login.php">
        <div class="error-message"><?php echo htmlspecialchars($error_message); ?></div>
        <input type="email" id="email" name="email" placeholder="Email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>" required>
        <input type="password" id="password" name="password" placeholder="Password" required>
        <button type="submit" id="submitSignIn">Sign In</button>
      </form>
      
      <div class="social-login">
        <p>Or sign in with</p>
        <div class="social-icons">
          <a href="#" class="social-btn google" title="Sign in with Google"><i class="fab fa-google"></i></a>
          <a href="#" class="social-btn instagram" title="Sign in with Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-btn twitter" title="Sign in with Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <div class="link">
        Don’t have an account? <a href="signup.php">Sign Up</a>
      </div>
    </div>
  </div>

</body>
</html>