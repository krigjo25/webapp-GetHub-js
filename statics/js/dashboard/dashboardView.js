function dashboardView()
{
    // header

    html = /*HTML*/`
        <h1>Dashboard</h1>
        ${navigationMenu()}
        ${dashmain()}`;
        
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
            <img src="${course.img}">
                <h3>${course.name}</h3>
                <p>${course.description}</h3>
            </div>`;
    }

    return html
}