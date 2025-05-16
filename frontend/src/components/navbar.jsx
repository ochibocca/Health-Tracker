import "../css/navbar.css"
function Navbar(){
    return(
        <nav>
            <div className="nav-cointainer">
                <ul>
                    <li>
                        <a href = "#"> Home </a>
                         <a href = "#"> About </a>
                          <a href = "#"> Map </a>
                            <a href = "#"> Our Work </a>
                    </li>
                </ul>
                <div className="regitra-btn">
                   <button className="login-btn"> Login</button>
                   <button className="sign-btn"> signup-btn</button>
                   </div>
            </div>
        </nav>
    )
}
export default Navbar