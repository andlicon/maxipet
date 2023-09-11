import React from 'react';

function SelectLocation({locations}) {
  return (
    <div className='selectLocation flex'>
      <i className="bi bi-geo-alt me-px"></i>
      <div className='select relative'>
        <select name="location" className='rounded' id="location">
          {
            locations.map((location) => {
              return (
                <option value={location.id} key={location.id}>
                  {location.label}
                </option>
              )
            })
          }
        </select>
        <i className="bi bi-chevron-down select__icon"></i>
      </div>
    </div>
  )
}
export default SelectLocation;