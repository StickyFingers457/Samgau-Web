import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import './TaskResult.css'
function TaskResult({img,
    title,
    description,
    star,
    level,}) {
  return (
    <div className='problemResult'>
        <img src={img} alt="" />
        <FavoriteBorderIcon className="problemResult__heart" />
        <div className='problemResult__info'>
        <div className="problemResult__infoTop">
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="problemResult__infoBottom">
                    <div className="problemResult__stars">
                        <StarIcon className="problemResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='problemResults__level'>
                        <h2>{level}</h2>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default TaskResult