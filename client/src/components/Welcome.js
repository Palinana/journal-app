import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div className="wrapper">
            <div className="row row__border">
                <div className="welcome">
                    <h1>Welcome to Private Journal</h1>
                    <h2 className="btn-back">
                        <Link to={`/login`} className="btn-arrow">&rarr;</Link>
                    </h2>
                </div>  
            </div>
        </div>
    )
}
export default Welcome;