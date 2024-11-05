function navigateToChoreiView(view) {
    console.log(`Navigating to: ${view}`);
    model.app.currentpage = view;
    updateView();
}

function saveChoreiNotes() {
    console.log('Saving Chorei notes...');

    // Retrieve notes from the model input (choreiPage)
    const mood = model.input.choreiPage.mood;
    const collaboration = model.input.choreiPage.collabration;
    const chorei = model.input.choreiPage.chorei;
    const code = model.input.choreiPage.code;
    const date = model.input.choreiPage.date;

    // Identify the active user using session ID
    const userId = model.session.id;
    const user = model.data.users.find(u => u.id === userId);

    if (!user) {
        console.error('User not found or not logged in');
        alert('User not found or not logged in');
        return;
    }

    // Create a new log entry
    const newLogEntry = {
        date: date,
        nklog: chorei,
        teamlog: collaboration,
        moodlog: mood,
        codelog: code
    };

    // Add the entry to the user's log
    user.log.push(newLogEntry);

    // Feedback to the user
    alert('Dagens Chorei notater er lagret!');
    console.log('Chorei notes saved for user:', user.username, user.log);

    // Clear the input fields in the model after saving
    model.input.choreiPage.mood = "";
    model.input.choreiPage.collabration = "";
    model.input.choreiPage.chorei = "";
    model.input.choreiPage.code = "";

    // Refresh the view
    updateView();
}

function updateView() {
    if (model.app.currentpage === 'chorei') {
        choreiView();
    }
}

window.onload = () => {
    updateView();
};