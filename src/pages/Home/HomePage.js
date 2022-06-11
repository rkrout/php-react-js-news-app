import styles from "./HomePage.module.css"
import MaterialIcons from "../../elements/MaterialIcons"
import News from "../../components/News/News"
import { categories, news } from "../../utils/facker"
import { useState } from "react"

export default function HomePage() {
    const [isDropDownOpened, setIsDropDownOpened] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(categories[0])

    const onDropDownItemClick = (category) => {
        setCurrentCategory(category)
        setIsDropDownOpened(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.dropDownContainer}>
                <div className={styles.dropDownBtn} onClick={() => setIsDropDownOpened(true)}>
                    <span>{currentCategory.name}</span>
                    <MaterialIcons name="arrow_drop_down" />
                </div>

                {isDropDownOpened && (
                    <div className={styles.dropDown}>
                        {categories.map(category => (
                            <div onClick={() => onDropDownItemClick(category)} className={styles.dropDownItem}>{category.name}</div>
                        ))}
                    </div>
                )}
            </div>

            <div className={styles.newsContainer}>
                {news.map(news => <News news={news} />)}
            </div>
        </div>
    )
}