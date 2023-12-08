    import { useState } from "react"
import Login from "../login"
import classes from '../../index.module.css'
import { Link } from "react-router-dom"
import { CButton } from "@coreui/react"
const TopNav=()=>{
    const [loggedIn,useloggedIn]=useState(true)
    
    const loginPage=()=>{
        useloggedIn((prevState)=>!prevState)
        return(
            <Login/>
        )
    }
    return(
        <>
        <nav id='nav-main' className={classes.navMain}>
            <h1 className={classes.logo}>InsightsHub</h1>
            <div >
                {
                   loggedIn? <ul className={classes.userLogin}>
                    <li className={classes.navUsername}>Muazam</li>
                    <li>
                        <CButton color="light">  
                            <Link to='/login' className={classes.Btn}>
                                SignOut
                            </Link>
                        </CButton>
                    </li>

                   </ul>:
                   <button onClick={loginPage}>Login</button> 
                }
            </div>
        </nav>
        </>
    )
}

export default TopNav