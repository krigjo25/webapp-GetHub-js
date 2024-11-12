function searchLogs() {

  // Initialize user id, search bar text
  let id = model.session.id;

  // peke mot -> loggPage.search ->
  const search = model.input.loggPage.search;

  // Ensure search term is not empty
  if (search !== '') {
    // Convert search text to lowercase
    const searchLower = search.toLowerCase();
    
    // Set the current page to search page
    model.app.currentpage = 'search';

    // Filter the logs with case-insensitive search
    model.search = filterPeople(searchLower, id);
  }

  // Update the page view
  updateView();
}

function filterPeople(search, id) {

  // Initializing a filtered array
  let filteredLogs = [];

  // Initializing a db users array
  let users = model.data.users;

  // Linear algorithm
  for (let i = 0; i < users.length; i++) {

    // Ensure that the user is equal to the selected id
    if (users[i].id === id) {

      // Create a variable and assign specific user log
      let logs = users[i].log;

      // 2D linear algorithm
      for (let j = 0; j < logs.length; j++) {
        // Ensure that logs include the searched item in a case-insensitive way
        if (logs[j].date.includes(search)) {
          filteredLogs.push(logs[j]);
        }
        else if (logs[j].title.includes(search)) {
          filteredLogs.push(logs[j]);
        }
        else if (logs[j].nklog.includes(search)) {
          filteredLogs.push(logs[j]);
        }
        else if (logs[j].teamlog.includes(search)) {
          filteredLogs.push(logs[j]);
        }
        else if (logs[j].moodlog.includes(search)) {
          filteredLogs.push(logs[j]);
        }
        else if (logs[j].codelog.includes(search)) {
          filteredLogs.push(logs[j]);
        }
      }
    }
  }
  return filteredLogs;
}
