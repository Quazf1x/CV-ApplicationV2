import { useState } from "react";
import AttributeForm from "./attributeForm";
import AttributeAdd from "./attributeAdd";

function AttributeInfo({
  name,
  inputData,
  infoState,
  handleRemoval,
  handleChange,
}) {
  const [isForm, changeForm] = useState(false);

  const handleClick = () => {
    //swaps add button to form and vice versa
    changeForm(!isForm);
  };

  return (
    <div className="input-section-padding pretty-background">
      <h1>{name}</h1>
      {isForm ? (
        <AttributeForm
          inputData={inputData}
          infoState={infoState}
          handleClick={handleClick}
          handleChange={handleChange}
          handleCancel={handleClick}
        />
      ) : (
        <AttributeAdd
          name={name}
          infoState={infoState}
          handleRemoval={handleRemoval}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default AttributeInfo;
