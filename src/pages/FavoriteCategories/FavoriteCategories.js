import { categories } from "../../utils/facker"
import styles from "./FavoriteCategories.module.css"

export default function FavoriteCategories() {
    return (
        <form className="form">
            <div className="formTitle">FAVORITE CATEGORIES</div>

            {categories.map(category => (
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <span>{category.name}</span>
                </label>
            ))}

            <button className="btn" style={{ margin: "auto" }}>Save</button>
        </form>
    )
}