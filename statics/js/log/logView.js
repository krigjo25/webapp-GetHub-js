function logView() {
    console.log('logView is being called');
    const html = /*HTML*/`
        <div class="log-view">
        <h1>Daglig Logg:</h1>
        <div>
            ${navigationMenu()}
        </div>
        <div>
            <h2>Logg Arkiv:</h2>
            <input type="text" id="search" oninput="model.input.loggPage.search = this.value ">
            <button onclick="searchLogs()">Søk</button>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Dato</th>
                    <th>NøkkelKompetanse</th>
                    <th>Team Log</th>
                    <th>Mood Log</th>
                    <th>Code Log</th>
                </tr>
                ${model.data.users[0].log.map(entry => `
                    <tr>
                        <td><b>${entry.title}<b></td>
                        <td>${entry.date}</td>
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
