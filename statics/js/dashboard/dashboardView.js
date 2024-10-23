function dashboardView()
{
    // header

    html = /*HTML*/`
        <h1>Dashboard</h1>
        ${navigationMenu()}
        ${dashmain()}
        
        ${milestone()}
        ${feedback()}`;
        
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
            <img src="${course[i].img}">
                <h3>${course[i].name}</h3>
                <p>${course[i].description}</h3>
            </div>`;
    }

    return html
}
function milestone()
{

}

function feedback()
{
    
}