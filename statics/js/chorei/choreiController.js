function navigateToChoreiView(view) {
    console.log(`Navigating to: ${view}`);
    model.app.currentpage = view;
    updateView();
}

function saveChoreiNotes() {
    console.log('Saving Chorei notes...');
    const note1 = document.getElementById('choreiNote1').value;
    const note2 = document.getElementById('choreiNote2').value;
    
    // Save to the model's log
    model.data.choreiLog.push({
        time: new Date().toISOString(),
        note1: note1,
        note2: note2
    });
    
    // Feedback to the user
    alert('Dagens Chorei notater er lagret!');
}
