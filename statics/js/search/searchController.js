/* - call Search function from logView
-The user can filter the logs by date / title in logView
-The user can view all written logs from ChoreiPage */
updatesearchView()

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
    let id = model.people;
    const search= model.inputs.search.text;
    if(model.inputs.search.text !== ''){
      people = filterPeople(search ,id);

    }
    searchResults();
}

  function filterPeople(search,id) {
    let filterPeople = [];
    let users = model.data.users;
    for(let i=0;i<model.users.length;i++){
      if(userid === id){
           let user = model.data.users.log
        for(let i=0;i<user.length;i++) {
          if(user.title.includes(search))}
          filteredPeople.push(user);
          elseIf{
            userDate == search 
          }
           }

   
}




};
  



