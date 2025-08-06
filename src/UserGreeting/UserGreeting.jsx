import style from './greeting.module.css'

function UserGreeting({isLoggedIn = false, username = "Tamu"}){


    return(isLoggedIn ? <h2 className={style.welcomeMessage}>Welcome {username}</h2> : 
                        <h2 className={style.errorMessage}>Please Log In to Continue</h2>)



}

export default UserGreeting;