import React from "react";
import { useDispatch } from "react-redux";
import { likeTuit } from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = ({id, liked}) => {
            dispatch(likeTuit({id, liked}));
        }

    return (
        <div className="row">
            <div className="col-3">
                <i class="bi bi-chat"></i>
                <span> {tuit.replies}</span>
            </div>

            <div className="col-3">
                <i class="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits}</span>
            </div>

            <div className="col-3">
                {!tuit.liked && <i class="bi bi-heart" onClick={() => likeTuitHandler({id: tuit._id, liked: true})}></i>}
                {tuit.liked && <i class="bi bi-heart-fill text-danger" onClick={() => likeTuitHandler({id: tuit._id, liked: false})}></i>}
                <span> {tuit.likes}</span>
            </div>

            <div className="col-3">
                <i class="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;