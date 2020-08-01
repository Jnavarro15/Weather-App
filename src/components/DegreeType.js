import React from 'react'

function DegreeType({ degreeType, updateDegree }) {
  return (
    <div className="degree-type">
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
    </div >
  )
}

export default DegreeType
