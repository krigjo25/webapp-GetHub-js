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
    console.log("søke test", search);
    //  Set the current page to search page
    model.app.currentpage = 'search';

    //  Filter the logs
    var logs = filterPeople(search, id);
  }

  // Initialize the search result to the model
  model.search = logs;

  //  Update the page view
  updateView();
}

  function filterPeople(search,id) {
    //  Initializing an filtered array
    let filteredLogs = [];

    //  Initializing a db users array
    let users = model.data.users;

    // linear algorithm
    for(let i = 0;i < users.length; i++){

      //  Ensure that the user is equal to the selected id
      if (users[i].id === id){ // users.id

        //  Create a variable and assign specefic user log
        let word = users[i].log;
        console.log("test array word ->", word);

        //  2d linear algorithm
        for (let j=0; j < word.length; j++)
        {
            //  Ensure that logs includes the searched item .includes(search)
          if (word[j].date.includes(search))
          {
            filteredLogs.push(word);

          }else if(word[j].title.includes(search))
          {
            filteredLogs.push(word);
          }
          else if(word[j].nklog.includes(search)){
            filteredLogs.push(word);
          }
          else if(word[j].teamlog.includes(search)){
            filteredLogs.push(word);
          }
          else if(word[j].moodlog.includes(search)){
            filteredLogs.push(word);
          }
          else if(word[j].codelog.includes(search)){
            filteredLogs.push(word);
          }
 
      }
    }
    console.log("test array filteredLogs ->",filteredLogs);
    return filteredLogs;

}
}




