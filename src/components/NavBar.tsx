import style from '../style/components/navbar.module.css'





export default function NavBar() {
    return (
        <>
            <nav className={style.navBar_container}>
                <div className={style.logo}>
                    <h2>LinkGo</h2>
                </div>
                <div className={style.auth_btns}>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </>
    )
}
