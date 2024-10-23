function logView() {
    console.log('logView is being called');
    const html = /*HTML*/`
        <h1>Daglig Logg:</h1>
        <div>
            <button onclick="navigateToLogView('chorei')">Chorei</button>
            <button onclick="navigateToLogView('log')">Logg</button>
            <button onclick="navigateToLogView('moodle')">Moodle</button>
            <button onclick="navigateToLogView('annet')">Annet</button>
        </div>
        <div>
            <h2>Logg notater:</h2>
            <div>
                <label for="nkLog">NøkkelKompetanse:</label>
                <textarea id="nkLog" oninput="model.input.loggPage.nklog = this.value"></textarea>
            </div>
            <div>
                <label for="teamLog">Team Log:</label>
                <textarea id="teamLog" oninput="model.input.loggPage.teamlog = this.value"></textarea>
            </div>
            <div>
                <label for="moodLog">Mood Log:</label>
                <textarea id="moodLog" oninput="model.input.loggPage.moodlog = this.value"></textarea>
            </div>
            <div>
                <label for="codeLog">Code Log:</label>
                <textarea id="codeLog" oninput="model.input.loggPage.codelog = this.value"></textarea>
            </div>
            <button onclick="saveLogEntry()">Lagre notat</button>
        </div>
        <div>
            <h2>Logg Arkiv:</h2>
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
