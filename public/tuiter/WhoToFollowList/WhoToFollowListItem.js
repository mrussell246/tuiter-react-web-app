const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item fw-bold">
        <div class="row align-items-center">
            <div class="col-2 px-xl-2 px-lg-0">
                <img class="img-fluid h-auto rounded-circle" src="${who.avatarIcon}">
            </div>
            <div class="col-6 fs-6 pe-0 ps-lg-1">
                <span class="fw-bold">${who.userName} </span><i class="fa fa-check-circle"></i><br>
                <span class="fw-light">@${who.handle}</span>
            </div>
            <div class="col-4 ps-xl-4">
                <button type="button" class="btn btn-primary rounded-pill px-3">
                    Follow
                </button>
            </div>
        </div>
    </li>`
    );
  }
  export default WhoToFollowListItem;