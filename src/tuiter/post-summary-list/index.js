import React from "react";
import PostSummaryListItem from "./post-summary-list-item";
import {useSelector} from "react-redux";

const PostSummaryList = () =>  {
    const postsArray = useSelector(state => state.tuits)
    return (
    <ul className="list-group">
        {
        postsArray.map(post =>
            <PostSummaryListItem
            key={post._id}
            post={post}/>
        )
        }
   </ul>
 );
}

export default PostSummaryList;