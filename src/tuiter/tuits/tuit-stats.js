import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faRedo, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);

    function likeTuit() {
        setLiked(!liked);
        liked && setLikes(likes - 1);
        !liked && setLikes(likes + 1);
    }

    return (
        <div className="row">
            <div className="col-3">
                {/* <FontAwesomeIcon icon={faMessage}/> */}
                <i class="bi bi-chat"></i>
                <span> {tuit.replies}</span>
            </div>

            <div className="col-3">
                {/* <FontAwesomeIcon icon={faRedo}/> */}
                <i class="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits}</span>
            </div>

            <div className="col-3" onClick={likeTuit}>
                {/* <FontAwesomeIcon icon={faHeart}/> */}
                {!liked && <i class="bi bi-heart"></i>}
                {liked && <i class="bi bi-heart-fill text-danger"></i>}
                <span> {likes}</span>
            </div>

            <div className="col-3">
                {/* <FontAwesomeIcon icon={faShare}/> */}
                <i class="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;