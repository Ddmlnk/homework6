import contactsList from '../contacts.json'
import { useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'

export default function App() {
  const [listContacts, setListContacts] = useState(contactsList)
  const [inputData, setInputData] = useState("")
  const addContact =(newContact)=>{
    setListContacts([...listContacts, newContact])
  }
  const deleteContact =(itemId)=>{
   setListContacts(listContacts.filter((item)=> item.id !== itemId))
  }
  const filteredContacts = listContacts.filter((item)=> 
    item.name.toLowerCase().includes(inputData.toLowerCase()))

  const filterContacts = (filterData)=>{
    setInputData(filterData)
  }
  return (
   <>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact}></ContactForm>
    <SearchBox onFilter={filterContacts}></SearchBox>
    <ContactList listOfContacts={filteredContacts} onDelete={deleteContact}></ContactList>
   </>
  )
}

