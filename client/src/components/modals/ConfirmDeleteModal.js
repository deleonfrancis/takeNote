import React, { useContext } from "react";
import Modal from "react-modal";
import NoteContext from "../../context/note/noteContext";

const customStylesDelete = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: "50%",
    border: "none",
    backgroundColor: "white",
  },
};

Modal.setAppElement("#root");

function ConfirmDeleteModal({ note, setShowConfirmModal }) {
  const noteContext = useContext(NoteContext);

  const {
    deleteNote,
    closeDeleteModal,
    confirmDeleteNote,
    afterDeleteOpenModal,
  } = noteContext;

  const { _id, title } = note;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(_id);
    setShowConfirmModal(false);
    closeDeleteModal();
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    closeDeleteModal();
  };

  // console.log(title);

  return (
    <div className="d-flex justify-content-center">
      <Modal
        isOpen={confirmDeleteNote}
        onAfterOpen={afterDeleteOpenModal}
        onRequestClose={handleCancel}
        style={customStylesDelete}
        contentLabel="Delete Note Modal"
      >
        <div className="mb-4 mt-3">
          <h5 className="d-flex justify-content-center takeNoteDetail">
            Delete <span className="deleteTitle ml-2">{title}</span> ?
          </h5>
        </div>

        <div className="row d-flex justify-content-center mb-5">
          <div style={{ width: "60%" }} className="">
            <button
              onClick={handleDelete}
              className="shadow btn btn-danger btn-block mb-4"
            >
              Delete
            </button>
          </div>
          <div style={{ width: "60%" }} className="">
            <button
              onClick={handleCancel}
              className="shadow btn btn-light btn-block"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmDeleteModal;
