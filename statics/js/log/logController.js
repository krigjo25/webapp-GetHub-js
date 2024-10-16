init() {
  this.displayLogs();
  document.getElementById(`addLogButton`).onclick = () => this.addlog();
},
displayLogs() {
  const logs = Model.getLogs();
  View.renderLogs(logs);
},
addlog() {
  const newLog = view.getinput();
  if (newLog) {
    Model.saveLog(newLog);
    View.clearInput();
    this.displayLogs();
  },
  window.onload = () => controller.init();
