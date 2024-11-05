/* - call Search function from logView
-The user can filter the logs by date / title in logView
-The user can view all written logs from ChoreiPage */


function searchLogs() {

    let html = "";
    let id = model.session.id; // Hent personid
    //  Search for the text in the search bar
    let search = model.input.loggPage.search;

    //  Ensure that the search bar is not empty
    console.log(search);
    if(search !== ''){

      //  Filter the logs
      search = filterPeople(search, id);
    }
}

function filterPeople(search,id) {

  //  Initialize an empty array
  let filterLogs = [];

  //  Initialize a variable and assign the users array
  let users = model.data.users;

  for(let i = 0;i < users.length; i++){

    //  Ensure that the user id is equal to the id
    if(model.data.users[i].id === id)
      {
      //  Create a variable and assign specsific user lo
      
      let word = model.data.users[i].log;

      //  Ensure that logs.title includes the search
      console.log(search);
      if(word.title.includes(search))
      {
        console.log(word);
        filterLogs.push(word);
      }
      console.log(filterLogs);

  
    }  
  }
  return filterLogs;

};
  



