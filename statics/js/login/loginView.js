function loginView() {
    const html = /*HTML*/`
        <h1>Login</h1>
        <form onsubmit='loginHandler(event)'>
            <input type="text" name="username" placeholder="Username" oninput='model.input.login.username = this.value'>
            <input type="password" name="password" placeholder="Password" oninput='model.input.login.password = this.value'>
            <input type="submit" value="Login">
        </form>`;

    document.getElementById('app').innerHTML = html;
}
