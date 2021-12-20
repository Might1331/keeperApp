import React from 'react';

var date=new Date();

function Footer(){
    var year=date.getFullYear();
    return(
        <footer>
            <p>Copyright &copy; {year}</p>
        </footer>
    );
}

export default Footer;