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
                <label for="logNote">Logg notater for i dag:</label>
                <textarea id="logNote" oninput="model.input.loggPage.textbox = this.value"></textarea>
            </div>
            <button onclick="saveLogNote()">Lagre notat</button>
        </div>
        <div>
            <h2>Logg Arkiv:</h2>
            <table>
                <tr>
                    <th>Dato</th>
                    <th>Notat</th>
                </tr>
                ${model.data.log.map(entry => `
                    <tr>
                        <td>${entry.time}</td>
                        <td>${entry.brukerlog}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}
