

    function updatesearchView(){

         const html = /*HTML*/`
        <h1>Daglig Logg:</h1>
        <div>
            ${navigationMenu()}
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
                
            </table>
        </div>
    `
    document.getElementById('app').innerHTML = html;
}

        
        

        

     

