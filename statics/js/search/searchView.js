updatesearchView()
    function updatesearchView(){
        let html = /*HTML*/`

        <h3>Søk</h3>
        <input
        type ="text"
        oninput = "model.input.search.text = this.value"
        value = "${model.input.search.text}"/>
        <button>Søk</button>
        ` ;


        

     

        
     return html;
    }
