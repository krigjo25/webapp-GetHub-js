renderLogs(logs){
const loglist = document.getElementByid(`logList`);
logList.innerHTML = ``;
logs.forEach(log => {
  const li = document.createElement(`li`);
  li.textContent = log;
  logList.appendChild(li);
});
getInput() {
    return document.getElementById(`logInput`).value.trim();
},
 clearInput() {
     document.getElementById(`logInput`).value = ``;}
    
    update view();
     
