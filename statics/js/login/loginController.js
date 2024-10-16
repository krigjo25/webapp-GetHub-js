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
    handleRegister() {
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;

        model.users.push({
            id: model.data.users.lenght + 1,
            username: username,
            password: password,
            email: email,
            isTeacher: false,
        });
        alert("registration successful");
        model.app.currentPage = 'login';
        mainView(); // redirect to login after registration
    }
};
mainView();