const mealLoad = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('mb-3');

        div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${meal.strMealThumb}" class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 230)}</p>
                    <a href="" class="btn btn-outline-success">Learn from tutorial</a>
                </div>
            </div>
        </div>
        `;

        searchResult.appendChild(div);

    });
}