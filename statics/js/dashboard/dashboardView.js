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
            <h1><span>Good</span> <span>Morning</span> <span>${user}</span> </h1>
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
                    <div class ="image-container">
                        <img src="${course[i].img}" alt="${course[i].alt}">
                        <div class='overlay'>
                           <h2>${course[i].name}</h2>
                            <p>${course[i].description}</p>
                        </div>
                    </div>
                    <div class ='description'>
                        <h3>${course[i].name}</h3>
                        <p>${course[i].description}</p>
                    </div>
                </div>
            </a>`;
        }
        else
        {
            //  Creating an HTML Card
            html += /*HTML*/`
                    <div class="card" onclick="navigateView('${course[i].name}')"> 
                        <div class ="image-container">
                            <img src="${course[i].img}" alt="${course[i].alt}">
                            <div class='overlay'>
                            <h2>${course[i].name}</h2>
                            <p>${course[i].description}</p>
                        </div>
                        </div>
                        <div class ='description'>
                            <h3>${course[i].name}</h3>
                            <p>${course[i].description}</p>
                        </div>
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


    for (let i = 0; i < users.length; i++)
    {
        //  Ensure that the user matches with the logged inn user
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
                            <div class="img-view">
                                <img src="statics/img/dummy_teacher_profile_image.png" alt="teacher.jpg">
                                <div class='text'>
                                    <h4>${teacher.name}</h4>
                                    <h5>${teacher.title}</h5>
                                </div>
                            </div>
                            <div class='feed-view'>
                                ${teacher.comment}
                            </div>
                        </div>`;
               }
        }
    }
    return html += /*HTML*/`</div>`;
}    