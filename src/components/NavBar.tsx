import { useState } from 'react'
import style from '../style/components/navbar.module.css'





export default function NavBar() {
    // ** States
    const [mobileMenuOpen,setMobileMenuOpen] = useState<boolean>(false);
    // ** Handlers
    const mobileMenuToggleHandler = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    } 







    return (
        <>
            <nav className={style.navBar}>
                <div className={style.navBar_container}>
                    <div className={style.logo}>
                        <h2>LinkGo</h2>
                    </div>
                    <div className={style.auth_btns}>
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                    <div className={`${style.mob_menu_btn} ${mobileMenuOpen&& style.menu_open}`} onClick={mobileMenuToggleHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {mobileMenuOpen &&
                    <div className={style.mob_menu_content}>
                        <div className={style.mob_auth_btns}>
                            <button>Login</button>
                            <button>Sign Up</button>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}
