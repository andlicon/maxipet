import React from 'react';
import { Location } from '../constant/locations';

function SelectLocation({ locations }) {
  return (
    <div className="selectLocation flex">
      <i className="bi bi-geo-alt me-px" />
      <div className="select relative">
        <select name="location" className="rounded location" id="location">
          {locations.map((location: Location) => (
            <option value={location.id} key={location.id}>
              {location.label}
            </option>
          ))}
        </select>
        <i className="bi bi-chevron-down select__icon" />
      </div>
    </div>
  );
}
export default SelectLocation;
