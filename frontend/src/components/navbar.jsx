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
                           <a href = "#"> Impact </a>
                            <a href = "#"> Work </a>
                    </li>
                </ul>
                   <button className="login-btn"> Login</button>
                <button> SignUp</button>
            </div>
        </nav>
    )
}
export default Navbar