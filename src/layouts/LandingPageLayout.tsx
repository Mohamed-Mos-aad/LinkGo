import NavBar from './../components/NavBar';
import style from '../style/layouts/landingpagelayout.module.css';
import { Outlet } from 'react-router-dom';





export default function LandingPageLayout() {
    return (
        <>
            <div className={style.landingpagelayout_container}>
                <NavBar />     
                <Outlet />
            </div>
        </>
    )
}
