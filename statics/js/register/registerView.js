//  Kaller funksjon view
// skrive funksjon

function registerView()
{
    html = /*HTML*/`
            <h1>Register</h1>
            <form>
                <input type="text" name="Name" placeholder="Jhon Doe" oninput='modal.inputs.registration.name = this.value'>
                <input type="password" name="password" placeholder="HammerFest1@!" oninput='modal.inputs.registration.password = this.value'>
                <input type="text" name="email" placeholder="e.g Jhondoe@gmail.com" oninput='modal.inputs.registration.email = this.value'> 
            </form>
            <button onclick="pushObject()">register</button>`;

    return document.getElementById('app').innerHTML = html;


}
