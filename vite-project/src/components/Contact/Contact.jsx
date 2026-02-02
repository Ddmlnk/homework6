import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact ({data, onDelete}){
    
    const handleClick = ()=>{
        onDelete(data.id)
    }
    
    return (
        <div className={css.item}>
            <div className={css.dataWrapper}>
                <div className={css.wrapper}>
                    <FaUser />
                    <h2 className={css.contactName}> {data.name}</h2>
                </div>
                <div className={css.wrapper}>
                    <FaPhoneAlt />
                    <p className={css.contactNumber}>{data.number} </p>
                </div>
            </div>
            <button className={css.deleteButton}  onClick={handleClick}>Delete</button>
        </div>
    )
}