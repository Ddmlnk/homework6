import css from './SearchBox.module.css'

export default function SearchBox ({onFilter}){

    const handleChange =(event)=>{
        onFilter(event.target.value)
    }
    return (
        <div className={css.wrapper}>
        <label htmlFor="seachContact">Find contacts by name</label>
        <input type="text" id='seachContact' name='contact'  onChange={handleChange}/>
        </div>
    )
}