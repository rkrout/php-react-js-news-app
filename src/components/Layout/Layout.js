import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom'
import styles from "./Layout.module.css"

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className={styles.pageContaint}>
                <Outlet />
            </div>
        </>
    )
}