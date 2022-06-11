import MaterialIcons from "../../elements/MaterialIcons"
import styles from "./SearchPage.module.css"
import { news } from "../../utils/facker"
import News from "../../components/News/News"

export default function SearchPage() {
    return (
        <div className={styles.container}>
            <form className={styles.searchForm}>
                <div className={styles.inputContainer}>
                    <input name="query" className={styles.input} placeholder="Search Here..." />
                    <MaterialIcons name="search" />
                </div>
            </form>

            <div className={styles.newsContainer}>
                {news.map(news => <News news={news} />)}
            </div>
        </div>
    )
}