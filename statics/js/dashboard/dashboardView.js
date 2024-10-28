function dashboardView()
{
    // header

    html = /*HTML*/`
        <h1>Dashboard</h1>
        ${navigationMenu()}
        ${dashmain()}

        <!--Milestone -->
        ${milestoneView()}

        ${feedbackView()}`;

        document.getElementById('app').innerHTML = html;
}

function dashmain()
{
    //  Initializing a course variable
    let html ="";
    let course = model.data.courses;

    for (let i = 0; i < course.length; i++)
    {
        //  Creating an HTML
        html += /*HTML*/`
            <div> 
            <img src="${course[i].img}" alt="${course[i].alt}">
                <h3>${course[i].name}</h3>
                <p>${course[i].description}</h3>
            </div>`;
    }

    return html
}

function milestoneView()
{

    let html = /*HTML*/ `
        <div>
            <div>
            </div>
        </div>`;
    return html;
}
function feedbackView()
{
    //  Fetch user id

    //  Fetch feedback
    let tf = model.data.users[0].feedbacks[0];
    let html = /*HTML*/`
        <div class="name">
            <img>
            <b>${tf.name}</b></div>
            ${tf.comments}
        </div>`;

    return html;
}