import React from 'react';

const Logo = (props) => {
    let theme = props.theme === 'white'? 'logo black' : 'logo';
    return(
        <div className={theme}>
            {props.data}
        </div>
    );
};

export default Logo;