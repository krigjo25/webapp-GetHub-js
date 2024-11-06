/* - call Search function from logView
-The user can filter the logs by date / title in logView
-The user can view all written logs from ChoreiPage */

function searchLogs() {

  //  Initialize user id, search bar text
  let id = model.session.id;

  //  peke mot ->  loggPage.search ->
  const search = model.input.loggPage.search;


  //  Endre den her til variablen som peker mot den teksten
  if(search != '')
  {

    //  Set the current page to search page
     model.app.currentpage = 'search';

      //  Filter the logs
      let logs = filterPeople(search, id);
      model.search = logs;
  console.log(logs);

  }
  
  // Initialize the search result to the model
    

  //  Update the page view
  updateView();
}

  function filterPeople(search,id) {
   console.log(search);
    //  Initializing an filtered array
    let filteredLogs = [];

    //  Initializing a db users array
    let users = model.data.users;

    // linear algorithm
    for(let i = 0;i < users.length; i++){

      //  Ensure that the user is equal to the selected id
      if (users[i].id === id){ // users.id

        //  Create a variable and assign specefic user log
        let logs = users[i].log;

        //  2d linear algorithm
        for (let j=0; j < logs.length; j++)

        {
            //  Ensure that logs includes the searched item .includes(search)
          if (logs[j].date.includes(search)) 
          {
            filteredLogs.push(logs[j]);

          }else if(logs[j].title.includes(search))
          {
            filteredLogs.push(logs[j]);
          }
          else if(logs[j].nklog.includes(search)){
            filteredLogs.push(logs[j]);
          }
          else if(logs[j].teamlog.includes(search)){
            filteredLogs.push(logs[j]);
          }
          else if(logs[j].moodlog.includes(search)){
            filteredLogs.push(logs[j]);
          }
          else if(logs[j].codelog.includes(search)){
            filteredLogs.push(logs[j]);
          }
 
      }
    }
    return filteredLogs;

}
}




