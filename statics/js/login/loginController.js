let loginController= {
    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = model.data.users.find(u => u.username === username && u.password === password);

        if (user) {
            alert("Login successful");
            modal.app.currentPage = 'index';
            mainView();
        } else {
            alert("incorrect login credentials");
        }
        
    }
};

let registerController= {
    
}