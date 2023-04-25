import React, { useState } from "react";

const ContactBook = ({ allContacts, setAllContacts }) => {
  const [oneCon, setOneCon] = useState({});

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!oneCon.name || !oneCon.surname || !oneCon.tel || !oneCon.email) {
            alert("заполните пожалуйста все поля");
            return;
          }
          // const newObj = { ...oneCon, id: Date.now() };
          // setOneCon(newObj);
          const newArr = [...allContacts];
          newArr.push(oneCon);
          setAllContacts(newArr);
          setOneCon({ name: "", surname: "", tel: "", email: "" });
          console.log("oneCon:", oneCon);
          console.log("allContacts:", allContacts);
        }}
      >
        <input
          type="text"
          placeholder="Имя"
          value={oneCon.name}
          onChange={(e) => {
            const newObj = { ...oneCon, name: e.target.value, id: Date.now() };
            setOneCon(newObj);
          }}
        />
        <input
          type="text"
          placeholder="Фамилия"
          value={oneCon.surname}
          onChange={(e) => {
            const newObj = { ...oneCon, surname: e.target.value };
            setOneCon(newObj);
          }}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={oneCon.tel}
          onChange={(e) => {
            const newObj = { ...oneCon, tel: e.target.value };
            setOneCon(newObj);
          }}
        />
        <input
          type="email"
          placeholder="Почта"
          value={oneCon.email}
          onChange={(e) => {
            const newObj = { ...oneCon, email: e.target.value };
            setOneCon(newObj);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            const newObj = { ...oneCon, id: Date.now() };
            setOneCon(newObj);
          }}
        >
          add contact
        </button>
      </form>
    </div>
  );
};

export default ContactBook;
