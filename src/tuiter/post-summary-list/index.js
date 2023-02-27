import React from "react";
import PostSummaryListItem from "./post-summary-list-item";
import postArray from "./posts.js"

const PostSummaryList = () =>  {
    return (
    <ul className="list-group">
        {
        postArray.map(post =>
            <PostSummaryListItem
            key={post._id}
            post={post}/>
        )
        }
   </ul>
 );
}

export default PostSummaryList;