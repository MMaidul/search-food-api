const mealLoad = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeals(data))
}


const displayMeals = meals => {
    console.log(meals);
}