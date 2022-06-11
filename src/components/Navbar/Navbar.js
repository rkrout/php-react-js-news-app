import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import MaterialIcons from "../../elements/MaterialIcons"
import { useState } from "react"

export default function Navbar() {
    const [isDropDownOpened, setIsDropDownOpened] = useState(false)

    return (
        <div className={styles.container}>
            <NavLink to="/" className={styles.brandName}>NEWS</NavLink>

            <div className={styles.icons}>
                <NavLink to="/search">
                    <MaterialIcons name="search" className={styles.icon} />
                </NavLink>

                <div className={styles.dropDownContainer}>
                    <MaterialIcons name="person" onClick={() => setIsDropDownOpened(!isDropDownOpened)} className={styles.icon} />

                    {isDropDownOpened && (
                        <div className={styles.dropDown}>
                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="bookmark" />
                                <NavLink to="">Bookmarked News</NavLink>
                            </div>

                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="favorite" />
                                <NavLink to="">Favorite Categories</NavLink>
                            </div>

                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="email" />
                                <NavLink to="">Change Email</NavLink>
                            </div>

                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="lock" />
                                <NavLink to="">Change Password</NavLink>
                            </div>

                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="edit" />
                                <NavLink to="">Edit Accouont</NavLink>
                            </div>

                            <div className={styles.dropDownItem}>
                                <MaterialIcons name="logout" />
                                <NavLink to="">Sign Out</NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}