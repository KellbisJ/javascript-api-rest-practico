arrowBtn.addEventListener("click", () =>  
  location.hash = window.history.back());

searchFormBtn.addEventListener("click", () => 
  location.hash = `#search=${searchFormInput.value.trim()}`);

trendingBtn.addEventListener("click", () =>
    location.hash = "#trends");


window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });

    location.hash.startsWith('#trends')    ? trendsPage()       :
    location.hash.startsWith('#search=')   ? searchPage()       :
    location.hash.startsWith('#movie=')    ? movieDetailPage() :
    location.hash.startsWith('#category=') ? categoriesPage()   :
  homePage()

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

function homePage() {
  console.log("Home!!");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.add("inactive");
    headerTitle.classList.remove("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    genericListSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

  getTrendingMoviesPreview();
  getCategoriesPreview();
};
function trendsPage() {
  console.log("Trends!!");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    headerCategoryTitle.innerHTML = "Lista de Peliculas en Tendencias";

  getTrendingMovies();
};

function searchPage() {
  console.log("Search!!");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    // ['#search', 'busqueda']

    const [_, query] = location.hash.split("=");
  getMoviesBySearch(query);
};

function movieDetailPage() {
  console.log("Movie!!");

    headerSection.classList.add("header-container--long");
    // headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.add("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericListSection.classList.add("inactive");
    movieDetailSection.classList.remove("inactive");
  
  // ['#movie', 'id']

    const [_, movieId] = location.hash.split("=");
  getMovieById(movieId);
};

function categoriesPage() {
  console.log("Categories!!");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.remove("inactive");
    arrowBtn.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    // ["#category", "id-name"]
    const [_, categoryData] = location.hash.split("=");
    const [categoryId, categoryName] = categoryData.split("-");
    headerCategoryTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryId);
};
