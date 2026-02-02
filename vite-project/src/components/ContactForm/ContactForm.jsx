import css from './ContactForm.module.css'

export default function ContactForm({onAdd}){
   const handleSubmit =(event)=>{
    event.preventDefault();
    onAdd(
        {
            id:Date.now(),
            name: event.target.elements.contactName.value,
            number: event.target.elements.contactNumber.value
        }
    )
    event.target.reset();
   }

    return (
        <form action="#"  className={css.form} onSubmit={handleSubmit} >
            <label htmlFor="1">Name</label>
            <input type="text" name="contactName" id={1}/>
            <label htmlFor="2">Number </label>
            <input type="text" name="contactNumber" id={2}/>
            <button type='submit'>Add contact</button>
        </form>
    )
}
