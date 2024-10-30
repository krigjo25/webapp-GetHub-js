
updatesearchView()
    function updatesearchView(){

         const html = /*HTML*/`
        <h1>Daglig Logg:</h1>
        <div>
            ${navigationMenu()}
        </div>
        <div>
            <h2>Logg Arkiv:</h2>
            ${updatesearchView()}
            <table>
                <tr>
                    <th>Dato</th>
                    <th>NøkkelKompetanse</th>
                    <th>Team Log</th>
                    <th>Mood Log</th>
                    <th>Code Log</th>
                </tr>
                ${model.data.users[0].log.map(entry => `
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
    document.getElementById('app').innerHTML = html;
}

        ` ;
    return html;
    }

        

     

    