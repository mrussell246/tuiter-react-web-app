import React from "react";

const PostSummaryListItem = ({
    post = {
        topic: 'Web Development',
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image: '../../images/react-blue.png'
    }
}) => {
    return (
        <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                    <span class="text-secondary">{post.userName} </span><i class="fa fa-check-circle"></i>
                    <span class="text-secondary"> . {post.time}</span><br/>
                    <span class="text-black fw-bold">{post.topic}</span><br/>

                    <span class="text-black">{post.title}</span>
            </div>
            <div class="col-2 ps-0 pe-1">
                <img class="img-fluid w-100 pt-0 rounded-3" src={`/images/${post.image}`}/>
            </div>
        </div>
    </li>
    )
}

export default PostSummaryListItem;