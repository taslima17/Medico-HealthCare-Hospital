import React from 'react';
import notFoundImg from '../../Not-Found-Page.jpg'

const NotFound = () => {
    return (
        <div>
            <img className="p-5 m-5" src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;