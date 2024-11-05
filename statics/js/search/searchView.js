function searchView(){
    document.getElementById('app').innerHTML = /*html*/`

    <h1>Daglig Logg:</h1>
        <div>
            ${navigationMenu()}
        </div>
        <div>
            <h2>Logg Arkiv:</h2>
            <input oninput="model.input.loggPage.search = this.value">
            <button onclick ="searchLogs()">Søk</button>
            
            <table>
                <tr>
                    <th>Title</th>
                    <th>Dato</th>
                    <th>NøkkelKompetanse</th>
                    <th>Team Log</th>
                    <th>Mood Log</th>
                    <th>Code Log</th>
                </tr>
                ${model.search.map(entry => `
                    <tr>
                        <td><b>${entry.title}<b></td>
                        <td>${entry.time}</td>
                        <td>${entry.nklog}</td>
                        <td>${entry.teamlog}</td>
                        <td>${entry.moodlog}</td>
                        <td>${entry.codelog}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    
    
    `;
    
}