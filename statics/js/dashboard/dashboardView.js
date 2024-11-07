function dashboardView()
{
    //  Fetch user id
    let user = model.data.users;
    for (let i = 0; i < user.length; i++)
        {
            if (user[i].id == model.session.id)
            {
                user = user[i].username;
                break;
            }
        }
        document.getElementById('app').innerHTML = /*HTML*/`
            <h1><span>Good</span> <span>Morning</span> ${user}, Welcome to <span>Get</span> <span>Academy</span>'s <span>Dash</span><span>board</span></h1>
            ${dashmain()}

            ${feedbackView()}`;;
}

function dashmain()
{
    //  Initializing variables with given values
    let html ="<div class='card-container'>";
    let course = model.data.courses;

    for (let i = 0; i < course.length; i++)
    {
        if (course[i].link)

        {
            //  Creating an HTML Card
            html += /*HTML*/`
            <a href="${course[i].link}">
                <div class="card"> 
                <img src="${course[i].img}" alt="${course[i].alt}">
                    <h3>${course[i].name}</h3>
                    <p>${course[i].description}</h3>
                </div>
            </a>`;
        }
        else
        {
            //  Creating an HTML Card
            html += /*HTML*/`
                    <div class="card" onclick="navigateView('${course[i].name}')"> 
                    <img src="${course[i].img}" alt="${course[i].alt}">
                        <h3>${course[i].name}</h3>
                        <p>${course[i].description}</h3>
                    </div>`;
        }
    }
    html += "</div>";

    return html
}

function feedbackView()
{
    //  Fetch user id
    let users = model.data.users;

    let html = /*HTML*/ `<div class='feedback-container'>`;
    //  Fetch feedback
    for (let i = 0; i < users.length; i++)
    {

        if (users[i].id == model.session.id)
        {
            //  Initialize feedbacks for given user
            let feedbacks = model.data.users[i].feedbacks;

            for (let j = 0; j < feedbacks.length; j++)
                {
                    //  Initialize feedbacks for given user
                    let teacher = users[i].feedbacks[i];


                    html += /*HTML*/`
                        <div class='feedback'>
                            <div>
                                <img src="" alt="teacher.jpg">
                            </div>
                            <div class='name'>
                                <b>${teacher.name}</b>
                            </div>
                            <div class='feed'>
                                ${teacher.comments}
                            </div>
                        </div>`;
               }
        }
    }
    return html += /*HTML*/`</div>`;
}    