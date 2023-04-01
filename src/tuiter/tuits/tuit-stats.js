import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col">
                <i class="bi bi-chat"></i>
                <span> {tuit.replies}</span>
            </div>

            <div className="col">
                <i class="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits}</span>
            </div>

            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))} 
                   className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </div>

            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))} 
                   className="bi bi-hand-thumbs-down me-2"></i>
                {tuit.dislikes}
            </div>

            <div className="col">
                <i class="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;