//  Kaller funksjon view
// skrive funksjon

function navigationMenu()
{
    // Webbapplication navigation menu

    html = /*HTML*/`
    
    <nav>
    <div>
        <button onclick="navigateToChoreiView('chorei')">Chorei</button>
        <button onclick="navigateToChoreiView('logg')">Logg</button>
        <button onclick="navigateToChoreiView('moodle')">Moodle</button>
        <button onclick="navigateToChoreiView('annet')">Annet</button>
    </div>`;


    return html;
}