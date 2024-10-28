
//  Navigation that updates page based on view
function navigateView(view)
{
    //  Navigate to view
    model.app.currentpage = view;
    updateView();
}