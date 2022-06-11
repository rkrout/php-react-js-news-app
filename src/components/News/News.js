import styles from "./News.module.css"

export default function News({ news }) {
    return (
        <div className={styles.container}>
            <img src={news.image} />
            <div className={styles.title}>{news.title}</div>
        </div>
    )
}