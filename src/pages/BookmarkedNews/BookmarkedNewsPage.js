import News from "../../components/News/News"
import { news } from "../../utils/facker"
import styles from "./BookmarkedNewsPage.module.css"

export default function BookmarkedNewsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.newsContainer}>
                {news.map(news => <News news={news} />)}
            </div>
        </div>
    )
}