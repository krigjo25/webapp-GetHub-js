
updatesearchView()
    function updatesearchView(){
        let html = /*HTML*/`

        <h3>Søk</h3>
        <input
        type ="text"
        oninput = "model.inputs.search.text = this.value"
        value ="";/>
        <button onclick()>Søk</button>

        ` ;
    return html;
    }

        

     

    