function init() {
  this.displayLogs();
  document.getElementById(`addLogButton`).onclick = () => this.addlog();
}
function displayLogs() {
  const logs = Model.getLogs();
  View.renderLogs(logs);
}
function addlog() {
  const newLog = view.getInput();
  if (newLog) {
    Model.saveLog(newLog);
    View.clearInput();
    this.displayLogs();
  }
  window.onload = () => controller.init();
}
//sudha  