//  Kaller funksjon view
// skrive funksjon

function registerView() {
    html = /*HTML*/`
        <h1>Register</h1>
        <form onsubmit='pushObject(event)'>
            <input type="text" name="Name" placeholder="e.g John Doe" oninput='model.input.registration.name = this.value'>
            <input type="text" name="username" placeholder="e.g johnny123" oninput='model.input.registration.username = this.value'>
            <input type="password" name="password" placeholder="e.g HammerFest1@!" oninput='model.input.registration.password = this.value'>
            <input type="text" name="email" placeholder="e.g johndoe@gmail.com" oninput='model.input.registration.email = this.value'> 
            <input type="submit" value="Register">
        </form>`;
    return document.getElementById('app').innerHTML = html;
}
