import React from 'react';

import "../styles/Loader.scss";

const Loader = () => {
    return (
        <div style={{ width:'100%', height:'700px', display: "flex", justifyContent: "center" , alignItems: "center" , flexDirection: "column" , marginTop: "150px"}}>
            <div className="lds-dual-ring"></div>
            <br />
            <h3 className='loadTitle'>لطفا صبر کنید ...</h3>
        </div>
    );
};

export default Loader;