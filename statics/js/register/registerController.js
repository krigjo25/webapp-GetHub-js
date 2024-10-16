// Initiate the controller
function pushObject(event) 

{
    
    /*
        This function is responsible for collecting data from the form 
        and pushing it up to the server.
    */
   //  Prevents the page from reloading
    event.preventDefault();

   //   Initializing an object
   let person = {};
    
    //  Collecting data from the form
    person.id = modal.users.length + 1;
    person.name = modal.inputs.registration.name;
    person.email = modal.inputs.registration.email;
    person.username = modal.inputs.registration.username;
    person.password = modal.inputs.registration.password;
    
    //  Push object up to the server
    modal.user.push(person);

    //  Update the page
    modal.app.currentpage = 'login';

    //  update page 
    updateView();
}