
const mealLoad = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    toggleSpinner('block');
    searchToogler('none');
    errorDisplay.style.display = 'none';



    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}



const displayMeals = meals => {

    const searchResult = document.getElementById('search-result');
    searchResult.innerText = '';
    if (meals === null) {
        errorDisplay.style.display = 'block';
    } else {

        meals?.forEach(meal => {

            const div = document.createElement('div');
            div.classList.add('card');
            div.classList.add('mb-3');

            div.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start h-100" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 230)}</p>
                        <a href="${meal.strYoutube}" class="btn btn-outline-success" target ="_blank">Learn from Youtube</a>
                    </div>
                </div>
            </div>
            `;

            searchResult.appendChild(div);
            errorDisplay.style.display = 'none';

        });

    }

    toggleSpinner('none');
    searchToogler('block');
};


const spinner = document.getElementById('spinner');
spinner.style.display = 'none'

const toggleSpinner = displayToggleSpinner => {
    spinner.style.display = displayToggleSpinner;
}



const searchToogler = result => {
    document.getElementById('search-result').style.display = result;
}




const errorDisplay = document.getElementById('error-msg');
errorDisplay.style.display = 'none';












