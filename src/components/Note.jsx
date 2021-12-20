import React from 'react';

var classes="note"

function Note(){
    return(
        <div className={classes}>
            <h1>This is title</h1>
            <p>This is content</p>
        </div>
    )
}


export default Note;