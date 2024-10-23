function navigateToLogView(view) {
  console.log(`Navigating to: ${view}`);
  model.app.currentpage = view;
  updateView();
}

function saveLogNote() {
  console.log('Saving log note...');
  const logNote = document.getElementById('logNote').value;
  
  // Save to the model's log
  const newLogEntry = {
      time: new Date().toISOString().split('T')[0], // Saves the date in YYYY-MM-DD format
      brukerlog: logNote
  };
  model.data.log.push(newLogEntry);
  
  // Confirm the action
  alert('Dagens logg notat er lagret!');
  console.log('Log entry saved:', newLogEntry);
  
  // Update the view to reflect the new entry in the archive
  updateView();
}
