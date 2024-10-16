function loginView() {
    const html = /*HTML*/ `
        <h1>Login</h1>
        <form>
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
        </form>
        <button onclick="loginController.handleLogin()">Login</button>
    `;

    document.getElementById('app').innerHTML = html;
}
