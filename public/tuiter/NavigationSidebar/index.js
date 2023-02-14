const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-home"></i><span class="d-none d-xl-inline"> Home</span></li></a>
        <a class="list-group-item active" href="/">
           <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline"> Explore</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-list"></i><span class="d-none d-xl-inline"> Lists</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-user"></i><span class="d-none d-xl-inline"> Profile</span></li></a>
        <a class="list-group-item" href="/">
           <i class="fa fa-ellipsis-h"></i><span class="d-none d-xl-inline"> More</span></li></a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;