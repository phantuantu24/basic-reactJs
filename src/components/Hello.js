import React from 'react';

const Hello = () => {
    //basic way
    return (
        <div id="hello">
            <h3 className="userName">Hello Newbie</h3>
        </div>
    );
    
    //Using React library
    // return React.createElement(
    //     'div', 
    //     {id: 'hello'}, 
    //     React.createElement('h3', {className: 'userName'}, 'Hello Newbie')
    // );
}

export default Hello;