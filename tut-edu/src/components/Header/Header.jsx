import './Header.css'
import logo from'../../static/icons/logo.svg'
import bell from '../../static/icons/bell.svg'
function Header(){
    return (
        <div id='header'>
            <div id='header-content'>

                <div id='logo'>
                    <img src={logo} alt="" />
                </div>

                <ul id="right_navbar_block">
                    <li className="navbar_elem">о нас</li>
                    <li className="navbar_elem">курсы</li>
                    <li className="navbar_elem">
                        <img src={bell} id="bell_icon" alt="" />
                    </li>

                    <li className="navbar_elem">
                        <div id="avatar">
                        </div>
                    </li>
                </ul>

            </div>



        </div>
    )
}
export default Header;