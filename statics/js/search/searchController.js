/* - call Search function from logView
-The user can filter the logs by date / title in logView
-The user can view all written logs from ChoreiPage */

function searchLogs(filterDate, filterTitle ) {
  //  Fetch userlogs -> modal model.session.id
    //  Fetch only userlogs at the given date or title

    //     const search = modal.inputs.search.text;

    
    //  Ensure input has a value
    // if (modal.inputs.search.text != "")
    // {
        //  Filter people by given input
        //people = filter(search, id)
    //}
    let html = "";
    let id = model.session.id; // Hent personid

    const search= model.inputs.search.text;
    if(model.inputs.search.text == ''){
      let logs = filterPeople(search, id);
      // vis logs
    } else {

    }
    searchResults();
}

  function filterPeople(search,id) {

    let filteredLogs = [];
    let users = model.data.users;

    for(let i = 0;i < users.length; i++){

      if(users[i].id === id){ // users.id

        //  Create a variable and assign specsific user log
        let word = users[i].log;
        
        for(let i = 0; i < word.length; i++) 
        {
          //  Ensure that word.title.includes the searched word
          if(word.title.includes(search)) 
          {
            filteredLogs.push(word);
          }
          else if(word.date.includes(search)){ 
            filteredLogs.push(word);
          } 
        }

        return filteredLogs;
    }  
}

};
  



