<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LIFF Starter</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
        <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <input id="lineuserid" type="text" placeholder="lineuserid" />
                        <input id="name" type="text" placeholder="name"/>
                        <input id="password" type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                            <input id="lineuserid" type="text" placeholder="lineuserid" />
                        <input id="username" type="text" placeholder="username"/>
                        <input id="password" type="password" placeholder="password"/>
                        <button>login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
    
    <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
    <script src="liff-starter.js"></script>
</body>
