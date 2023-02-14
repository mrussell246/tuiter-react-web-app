const PostSummaryListItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                    <span class="text-secondary">${post.topic}</span><br>
                    <span class="text-white fw-bold">${post.userName} </span><i class="fa fa-check-circle"></i>
                    <span class="text-secondary"> - ${post.time}</span><br>
                    <span class="text-white fw-bold">${post.title}</span>
            </div>
            <div class="col-2 ps-0 pe-1">
                <img class="img-fluid w-100 pt-0 rounded-3" src="${post.image}">
            </div>
        </div>
    </li>
    `);
}

export default PostSummaryListItem;