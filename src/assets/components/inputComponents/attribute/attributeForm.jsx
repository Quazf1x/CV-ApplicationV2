import { v4 as uuidv4 } from "uuid";
import InputsGroup from "../re-usables/inputGroup";

function AttributeForm({ inputData, handleChange, handleClick, handleCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //creates an object from form data
    let formObject = {};
    const data = new FormData(e.target);
    for (let [key, value] of data.entries()) {
      formObject[key] = value;
    }
    formObject.id = uuidv4();

    //add object to the attribute's array
    handleChange(formObject);

    //close form
    handleClick();
  };

  return (
    <form id="attribute-form" onSubmit={handleSubmit}>
      <InputsGroup arrayData={inputData} />
      <div className="top-margin">
        <button
          onClick={handleCancel}
          id="cancel-attribute-btn"
          className="button-template"
        >
          Cancel
        </button>
        <button
          type="submit"
          id="save-attribute-btn"
          className="button-template"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AttributeForm;
