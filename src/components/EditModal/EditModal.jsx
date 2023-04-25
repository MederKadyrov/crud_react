import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ editCon, saveEdit, setEditCon, setModalShow }) => {
  return (
    <div>
      <div className="modal">
        <button
          onClick={() => {
            setModalShow(false);
          }}
        >
          X
        </button>
        <input
          type="text"
          defaultValue={editCon.name}
          onChange={(e) => {
            const newOneEdit = { ...editCon, name: e.target.value };
            setEditCon(newOneEdit);
          }}
        />
        <input
          type="text"
          defaultValue={editCon.surname}
          onChange={(e) => {
            const newOneEdit = { ...editCon, surname: e.target.value };
            setEditCon(newOneEdit);
          }}
        />
        <input
          type="text"
          defaultValue={editCon.tel}
          onChange={(e) => {
            const newOneEdit = { ...editCon, tel: e.target.value };
            setEditCon(newOneEdit);
          }}
        />
        <input
          type="text"
          defaultValue={editCon.email}
          onChange={(e) => {
            const newOneEdit = { ...editCon, email: e.target.value };
            setEditCon(newOneEdit);
          }}
        />
        <button
          onClick={() => {
            if (
              !editCon.name ||
              !editCon.surname ||
              !editCon.tel ||
              !editCon.email
            ) {
              alert("заполните пожалуйста все поля");
              return;
            }
            console.log("editCon:", editCon);
            saveEdit(editCon);
            setModalShow(false);
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default EditModal;
