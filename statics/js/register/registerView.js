//  Kaller funksjon view
// skrive funksjon

function registerView()
{
    html = /*HTML*/`
            <h1>Register</h1>
            <form>
                <input type="text" name="Name" oninput'placeholder="Jhon Doe">
                <input type="password" name="password" placeholder="HammerFest1@!">
                <input type="text" name="email" placeholder="e.g Jhondoe@gmail.com"> 
            </form>
            <button onclick="pushObject()">register</button>`;

    return document.getElementById('app').innerHTML = html;


}
