import React, { useState } from 'react'
import ContactBook from './components/contactbook/ContactBook'
import Contacts from './components/contactbook/contacts/Contacts';
import EditModal from './components/EditModal/EditModal';

const App = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [editCon, setEditCon] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const deleteCon = function(id) {
    const newAllCon = allContacts.filter((item) => item.id != id);
    setAllContacts(newAllCon);
  }

  const toEditCon = function(a) {
    setModalShow(!modalShow);
    setEditCon(a);
  }

  const saveEdit = function(a) {
    const newAllCon = allContacts.map((i) => {
      if (i.id == a.id) {
        return a;
      }
      return i;
    });
    console.log(newAllCon);
    setAllContacts(newAllCon);
    console.log(allContacts);
  }
 
  return (
    <div>
      <ContactBook allContacts={allContacts} setAllContacts={setAllContacts}/>
      <Contacts allContacts={allContacts} deleteCon={deleteCon} toEditCon={toEditCon} setModalShow={setModalShow}/>
      {modalShow ? <EditModal editCon={editCon} setEditCon={setEditCon} saveEdit={saveEdit} setModalShow={setModalShow}/> : null}
      
    </div>
  )
}

export default App