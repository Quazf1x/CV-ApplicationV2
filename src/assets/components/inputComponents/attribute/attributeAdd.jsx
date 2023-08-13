function AttributeAdd({ name, infoState, handleRemoval, handleClick }) {
  const existingAttributeInfo = infoState.map((attribute) => {
    return (
      <div
        className="attribute-input-wrapper"
        key={attribute.id}
        data-id={attribute.id}
      >
        <h3>
          {attribute.name},{" "}
          <span className="attribute-input-date">
            {attribute.startDate} - {attribute.endDate}
          </span>
        </h3>
        <div className="attribute-btns-wrapper">
          <button onClick={handleRemoval} className="delete-btn">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div id="attribute-input-div" className="align-center-btn">
      {existingAttributeInfo}
      <button onClick={handleClick} className="button-template">
        + Add {name}
      </button>
    </div>
  );
}

export default AttributeAdd;
