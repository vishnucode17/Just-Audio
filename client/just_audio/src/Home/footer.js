import React from 'react';
import logo from '../static/images/Just Audio.png';
import '../static/css/footer.css';
function Footer() {
    return(
        <>
            <div className="footer">
                <div className="right_footer">
                    <img src={logo} alt="" id="logo" />
                    <p>Just Audio</p>
                </div>
            </div>
        </>
    )
}
export default Footer;