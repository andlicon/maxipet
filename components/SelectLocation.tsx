import React from 'react';
import { locationsList } from '../constant/locations';

function SelectLocation() {
  return (
    <div className='selectLocation flex'>
      <i className="bi bi-geo-alt me-px"></i>
      <div className='select relative'>
        <select name="location" className='rounded' id="location">
          {
            locationsList.map((location) => {
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