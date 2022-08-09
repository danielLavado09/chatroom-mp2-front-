import React from 'react'
const Room = ({ name }) => {
    return (
    
        <div className="card horizontal grey darken-4">
            <div className="card-stacked">
                <div className="card-content white-text">
                    <p>{name}</p>
                </div>

            </div>
        </div>

    )
}

export default Room