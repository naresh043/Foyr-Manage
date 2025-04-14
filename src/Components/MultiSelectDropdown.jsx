import React, { useState, useEffect, useRef } from "react";
import "../styles/MultiSelectDropDown.css";
import { CaretDown, CaretUp } from "phosphor-react";

const MultiSelectDropdown = ({ title, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null); // Step 1: Create a ref

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select-dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {title} <span>{isOpen ? <CaretUp /> : <CaretDown />}</span>
      </button>

      {isOpen && (
        <div className="dropdown-list">
{options.map((option, index) => (
  <label key={index} className="dropdown-item" style={{ color: option.color }}>
    <input
      type="checkbox"
      checked={selectedOptions.includes(option.label)}
      onChange={() => handleCheckboxChange(option.label)}
    />
    <span className="dropdown-icon-label">
      {option.icon}
      {option.label}
    </span>
  </label>
))}


          {/* {options.map((option) => (
            <label key={option} className="dropdown-item">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
