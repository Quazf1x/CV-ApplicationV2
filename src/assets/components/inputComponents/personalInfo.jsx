import InputsGroup from "./re-usables/inputGroup";

function PersonalInfo({ inputData, handleChange }) {
  return (
    <div className="input-section-padding pretty-background">
      <h1> Personal Info</h1>
      <InputsGroup arrayData={inputData} handleChange={handleChange} />
    </div>
  );
}

export default PersonalInfo;
