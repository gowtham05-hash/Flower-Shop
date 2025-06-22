<?php
session_start();

// Database configuration
$host = 'localhost';
$dbname = 'flower_shop';
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password

// Initialize message variables
$success_message = '';
$error_message = '';

try {
    // Connect to the database
    $conn = new mysqli($host, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
        $email = isset($_POST['email']) ? trim($_POST['email']) : '';
        $password = isset($_POST['password']) ? trim($_POST['password']) : '';

        // Server-side validation
        if (empty($fullname) || empty($email) || empty($password)) {
            $error_message = 'Please fill all fields.';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_message = 'Invalid email format.';
        } elseif (strlen($password) < 6) {
            $error_message = 'Password must be at least 6 characters long.';
        } else {
            // Check if email already exists
            $stmt = $conn->prepare('SELECT email FROM users WHERE email = ?');
            $stmt->bind_param('s', $email);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                $error_message = 'Email already registered.';
            } else {
                // Hash the password
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                
                // Insert user into database
                $stmt = $conn->prepare('INSERT INTO users (email, password, created_at) VALUES (?, ?, NOW())');
                $stmt->bind_param('ss', $email, $hashed_password);
                
                if ($stmt->execute()) {
                    $success_message = 'Sign up successful! Redirecting to login...';
                    // Set session variable (optional)
                    $_SESSION['signup_success'] = true;
                    // Redirect to login page after 3 seconds
                    header('Refresh: 3; URL=login.php');
                } else {
                    $error_message = 'Failed to create account. Please try again.';
                }
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
  <title>Flower Shop - Sign Up</title>
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

    .signup-box {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      width: 360px;
      text-align: center;
    }

    .signup-box h2 {
      font-family: 'Pacifico', cursive;
      font-size: 2.2rem;
      color: #d63384;
      margin-bottom: 10px;
    }

    .signup-box p {
      margin-bottom: 30px;
      font-size: 0.95rem;
      color: #555;
    }

    input[type="text"],
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

    .messageDiv {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 8px;
      font-size: 20px;
      font-family: 'Segoe UI', sans-serif;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      z-index: 9999;
    }

    .messageDiv.show {
      opacity: 1;
      transform: translateY(0);
    }

    .messageDiv.success {
      background-color: #d4edda;
      color: #155724;
      border-left: 6px solid #28a745;
    }

    .messageDiv.error {
      background-color: #f8d7da;
      color: #721c24;
      border-left: 6px solid #dc3545;
    }

    @keyframes fadeInSlide {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="signup-box">
      <h2>Join Us 🌷</h2>
      <p>Create your flower account</p>
      <form method="POST" action="signup.php">
        <?php if ($success_message): ?>
          <div id="signUpMessage" class="messageDiv success show"><?php echo htmlspecialchars($success_message); ?></div>
        <?php elseif ($error_message): ?>
          <div id="signUpMessage" class="messageDiv error show"><?php echo htmlspecialchars($error_message); ?></div>
        <?php endif; ?>
        <input type="text" id="fullname" name="fullname" placeholder="Full Name" value="<?php echo isset($_POST['fullname']) ? htmlspecialchars($_POST['fullname']) : ''; ?>" required>
        <input type="email" id="email" name="email" placeholder="Email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>" required>
        <input type="password" id="password" name="password" placeholder="Password" required>
        <button type="submit" id="submitSignUp">Sign Up</button>
      </form>
      
      <div class="social-login">
        <p>Or sign up with</p>
        <div class="social-icons">
          <a href="#" class="social-btn google" title="Sign up with Google"><i class="fab fa-google"></i></a>
          <a href="#" class="social-btn instagram" title="Sign up with Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-btn twitter" title="Sign up with Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <div class="link">
        Already have an account? <a href="login.php">Sign In</a>
      </div>
    </div>
  </div>

</body>
</html>