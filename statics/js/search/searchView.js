updateView()
    function updateView(){
      document.getElementById("app").innerHTML = /*HTML*/`

        <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">

<ul id="myMenu">
  <li><a href="#">About</a></li>
  <li><a href="#">Chorie</a></li>
  <li><a href="#">Log</a></li>
  <li><a href="#">Tools</a></li>
  
</ul>
        
        
        `
    }
