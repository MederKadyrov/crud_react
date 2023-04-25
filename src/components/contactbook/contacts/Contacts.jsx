import React from "react";
import "./Contacts.css";

const Contacts = ({ allContacts, deleteCon, toEditCon, setModalShow }) => {
  return (
    <div>
      {allContacts.map((item, index) => {
        return (
          <div className="item_wrap" key={item.id}>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.tel}</p>
            <p>{item.email}</p>
            <button onClick={() => deleteCon(item.id)}>delete</button>
            <button
              onClick={() => {
                toEditCon(item);

                console.log("allContacts:", allContacts);
              }}
            >
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
