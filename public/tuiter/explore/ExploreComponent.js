import PostSummaryList from "../PostSummaryList/index.js";

const SearchFieldAndCog = () => {
    return (`
    <div class="col-11">
        <div class="input-group position-relative">
            <input type="text" class="form-control rounded-pill border-left-0 ps-5" placeholder="Search Twitter">
            <i class="fa fa-search position-absolute wd-search-bar-icon-pos"></i>
        </div>
    </div>
    
    <!-- GEAR -->
    <div class="col-1 d-flex align-items-center ps-1">
        <i class="fa fa-cog fa-2x text-primary"></i>
    </div>
    `)
}

const NavTabs = () => {
    return (`
    <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
    </li>
    `)
}


const ImageWithText = () => {
    return (`
    <div class="position-relative">
        <img class="w-100" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
        <h3 class="position-absolute start-10 bottom-0 fw-bold text-dark text-stroke ms-2 fs-2">
            SpaceX's Starship
        </h3>
    </div>
    `)
}


const ExploreComponent = () => {
    return(`
            <div class="row mb-2">
            ${SearchFieldAndCog()}
           </div>
           <ul class="nav mb-2 nav-tabs">
            ${NavTabs()}
           </ul>
           ${ImageWithText()}
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
