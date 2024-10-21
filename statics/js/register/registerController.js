// Initiate the controller
function pushObject(event) {
    // Prevent page reload
    event.preventDefault();
    
    // Create a new user object from the input fields
    let person = {
        id: model.data.users.length + 1,
        name: model.input.registration.name,
        email: model.input.registration.email,
        username: model.input.registration.username,
        password: model.input.registration.password,
        courses: [], // Assign default values if needed
        feedbacks: [],
        log: []
    };
    
    // Push the new user into the users array
    model.data.users.push(person);
    
    // Reset the registration input fields
    model.input.registration.name = "";
    model.input.registration.email = "";
    model.input.registration.username = "";
    model.input.registration.password = "";
    
    // Redirect to login page
    model.app.currentpage = 'login';
    
    // Update the view
    updateView();
}
