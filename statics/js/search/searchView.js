function updatesearchView(){

    // returning the search bar
    return /*HTML*/`
        <input type="text" id="search" oninput="model.input.loggPage.search = this.value ">
        <button onclick="searchLogs()">Søk</button>
    `;
}

        
        

        

     

