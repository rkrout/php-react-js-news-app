export default function MaterialIcons({ name, className, ...others }) {
    return (
        <span {...others} className={["material-icons", className].join(" ")}>{name}</span>
    )
}