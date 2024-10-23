function navigateToLogView(view) {
  console.log(`Navigating to: ${view}`);
  model.app.currentpage = view;
  updateView();
}

function saveLogEntry() {
  console.log('Saving log entry...');
  const nkLog = document.getElementById('nkLog').value;
  const teamLog = document.getElementById('teamLog').value;
  const moodLog = document.getElementById('moodLog').value;
  const codeLog = document.getElementById('codeLog').value;
  
  // Save the log entry to the model
  const newLogEntry = {
      time: new Date().toISOString().split('T')[0], // Saves the date in YYYY-MM-DD format
      nklog: nkLog,
      teamlog: teamLog,
      moodlog: moodLog,
      codelog: codeLog
  };
  model.data.users[0].log.push(newLogEntry); // Assuming user 0 is the logged-in user
  
  // Confirm the action
  alert('Dagens logg notat er lagret!');
  console.log('Log entry saved:', newLogEntry);
  
  // Update the view to reflect the new entry in the archive
  updateView();
}
