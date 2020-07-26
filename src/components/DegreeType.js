import React from 'react'

function DegreeType({ degreeType, updateDegree }) {
  return (
    <React.Fragment>
      <div className="form-toggle">
        <input
          className="form-toggle-input"
          type="radio"
          name="degree-type"
          id="celsius"
          value="celsius"
          checked={degreeType === "celsius"}
          onChange={updateDegree}
        />
        <label className="form-toggle-label" for="celsius">Celsius</label>
      </div>
      <div className="form-toggle">
        <input
          className="form-toggle-input"
          type="radio"
          name="degree-type"
          id="fahrenheit"
          value="fahrenheit"
          checked={degreeType === "fahrenheit"}
          onChange={updateDegree}
        />
        <label className="form-toggle-label" for="fahrenheit">Fahrenheit</label>
      </div>
    </React.Fragment>
  )
}

export default DegreeType
