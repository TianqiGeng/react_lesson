import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating"
import styles from "./styles/App.module.css"
const Color = ({ id, title, color, rating, onRate, onRemove }) => {
    return (
        <section>
            <div className={styles.content}>
                <h1 > {title}</h1>
                <button onClick={onRemove} >
                    <FaTrash />
                </button>
            </div>

            <div style={{ height: 50, background: color }}></div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate} />
            </div>
        </section>)
}


export default Color