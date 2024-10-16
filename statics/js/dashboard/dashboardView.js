//  Kaller funksjon view
// skrive funksjon

function dashboardView()
{
    // header
    html = /*HTML*/`
    ${navigationMenu()}

    `;
    document.getElementById('app').innerHTML = html;
    updateView();

}
