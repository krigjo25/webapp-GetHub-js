//  Kaller funksjon view
// skrive funksjon

function registerView()
{
    html = /*HTML*/`
            <h1>Register</h1>
            <form onsubmit='pushObject()'>
                <input type="text" name="Name" placeholder="e.g Jhon Doe" oninput='modal.inputs.registration.name = this.value'>
                <input type="password" name="password" placeholder="e.g HammerFest1@!" oninput='modal.inputs.registration.password = this.value'>
                <input type="text" name="email" placeholder="e.g Jhondoe@gmail.com" oninput='modal.inputs.registration.email = this.value'> 
                <input type="submit">
            </form>`;

    return document.getElementById('app').innerHTML = html;


}
