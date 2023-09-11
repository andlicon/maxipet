import React from 'react';
import { locationsList } from '../constant/locations';

function SelectLocation() {
  return (
    <div className='selectLocation'>
      <i className="bi bi-geo-alt"></i>
      <select name="location" id="location">
        {
          locationsList.map((location)=>{
            return(
              <option value={location.id} key={location.id}>
                {location.label}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}
export default SelectLocation;