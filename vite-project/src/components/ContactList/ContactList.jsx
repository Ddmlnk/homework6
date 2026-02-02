import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList ({listOfContacts, onDelete}){

    return (
        <ul className={css.list}>
            {listOfContacts.map((item)=>(
                <li key={item.id}>
                    <Contact data ={item} onDelete={onDelete}></Contact>
                </li>
            ))}
        </ul>         
    )
}