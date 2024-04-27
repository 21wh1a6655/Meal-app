//fetches food items from api
async function fetchMealsFromApi(url, value) {
    const response = await fetch(`${url + value}`);
    const meals = await response.json();
    return meals;
}

//shows meal card
function showMealList(){
    let inputValue = document.getElementById("my-search").value;
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let html = "";
    let meals = fetchMealsFromApi(url, inputValue);
    meals.then(data => {
        if (data.meals){
            data.meals.forEach((element) => {
                html += `
                <div id = "card" class = "card mb-3" style = "width: 20rem;">
                    <img src = "${element.strMealThumb}" class = "card-img-top" alt = "...">
                    <div class = "card-body">
                        <h5 class = "card-title"> ${element.strMeal} </h5>
                    </div>
                </div>
                `;
            })
        }
         else {
            html += `
            <div class = "page-wrap d-flex flex-row align-items-center">
                <div class = "container">
                    <div class = "row justify-content-center">
                        <div class = "col-md-12 text-center">
                            
                            <div class = "mb-4 lead">
                                No results found.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById("main").innerHTML = html;
    });
}



