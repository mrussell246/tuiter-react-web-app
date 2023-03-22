import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TuitStats from "./tuit-stats";


const TuitItem = ({tuit}) => {
    return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-1">
                <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
            </div>

            <div className="col-11 ps-4">
                <span className="fw-bold">{tuit.userName} </span>
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary"/>
                <span> {tuit.handle} • {tuit.time}</span>  
                <p>{tuit.tuit}</p>

                <TuitStats tuit={tuit}/>
            </div>
        </div>
    </li>
    )
}
export default TuitItem;