//  Kaller funksjon view
// skrive funksjon

function registerView() {
    let html = /*HTML*/`
        <div class="register-view">
        <h1>Register</h1>
        <form onsubmit='pushObject(event)'>
            <label for="Name">Name:</label>
            <input id="name" type="text" name="Name" placeholder="e.g John Doe" oninput='model.input.registration.name = this.value'>
            <label for="username">Username:</label>
            <input id="username" type="text" name="username" placeholder="e.g johnny123" oninput='model.input.registration.username = this.value'>
            <label for="password">Password:</label>
            <input id="password" type="password" name="password" placeholder="e.g HammerFest1@!" oninput='model.input.registration.password = this.value'>
            <label for="e-mail">E-mail:</label>
            <input id="e-mail" type="text" name="email" placeholder="e.g johndoe@gmail.com" oninput='model.input.registration.email = this.value'> 
            <input type="submit" value="Register">
        </form>`;

        document.getElementById('app').innerHTML = html;
}
