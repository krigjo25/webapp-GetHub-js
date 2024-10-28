//  Kaller funksjon view
// skrive funksjon

function navigationMenu()
{
    // Webbapplication navigation menu

    html = /*HTML*/`
    
    <nav>
    <div>
        <button onclick="navigateView('chorei')">Chorei</button>
        <button onclick="navigateView('journal')">Student-Journal</button>
        <button onclick="navigateView('moodle')">Moodle</button>
    </div>`;


    return html;
}