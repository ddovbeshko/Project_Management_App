import Input from "../Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value.trim();
    const enteredDescription = descriptionRef.current.value.trim();
    const enteredDueDate = dueDateRef.current.value.trim();

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 mb-4">Invalid input</h2>
        <p className="text-stone-800 mb-4">Ups...</p>
        <p className="text-stone-800 mb-4">Please enter the values...</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} />
          <Input label="Description" isTextarea ref={descriptionRef} />
          <Input label="Due Date" ref={dueDateRef} type="date" />
        </div>
      </div>
    </>
  );
}
