//  Kaller funksjon view
// skrive funksjon

function registerView()
{
    html = `
            <form>
                <input type="text" name="Name" placeholder="Jhon Doe">
                <input type="password" name="password" placeholder="HammerFest1@!">
                <input type="text" name="email" placeholder="e.g Jhondoe@gmail.com"> 
            </form>
            <button onclick="modal.app.currentpage = "login">register</button><button>Forgot Password</button>`;

    document.getElementById("app").innerHTML = html;

}
