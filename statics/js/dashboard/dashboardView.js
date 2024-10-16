//  Kaller funksjon view
// skrive funksjon

function dashboardView()
{
    // header
    html = /*HTML*/`
    <h1>Dashboard</h1>
    ${navigationMenu()}

    `;
    document.getElementById('app').innerHTML = html;

    updateView();
    return;
}
