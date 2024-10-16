const loginView = {
    renderLogin() {
        document.getElementById('app').innerHTML = `
            <h2>Login</h2>
            <form id="loginForm">
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <button type="submit">Login</button>
            </form>
        `;
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            loginController.handleLogin();
        });
    },

    renderRegister() {
        document.getElementById('app').innerHTML = `
            <h2>Register</h2>
            <form id="registerForm">
                <input type="text" id="name" placeholder="Full Name">
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <input type="email" id="email" placeholder="Email">
                <button type="submit">Register</button>
            </form>
        `;
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            registerController.handleRegister();
        });
    },

    renderMain() {
        document.getElementById('app').innerHTML = `
            <h2>Welcome</h2>
            <p>This is the main page of the application.</p>
        `;
    },
};

// Function to initialize views based on the current page
function mainView() {
    if (model.app.currentPage === 'login') {
        loginView.renderLogin();
    } else if (model.app.currentPage === 'register') {
        loginView.renderRegister();
    } else if (model.app.currentPage === 'index') {
        loginView.renderMain();
    }
}

