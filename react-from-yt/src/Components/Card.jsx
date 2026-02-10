import React from "react";
import { CiBookmark } from "react-icons/ci";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      {/* Header Section with Logo and Save Button */}
      <div className="card-header-section">
        <div className="card-logo-section">
          <img src={props.image} alt={props.company} className="card-company-logo" />
          <div>
            <h3 className="card-company-name">{props.company}</h3>
            <p className="card-days-ago">{props.days} days ago</p>
          </div>
        </div>
        <button
          className="card-save-button"
          aria-label="Save job"
        >
          <CiBookmark size={24} />
        </button>
      </div>

      {/* Job Title */}
      <h2 className="card-job-title">{props.position}</h2>

      {/* Tags Section */}
      <div className="card-tags-section">
        {props.tag1 && <span className="card-tag">{props.tag1}</span>}
        {props.tag2 && <span className="card-tag">{props.tag2}</span>}
      </div>

      {/* Price and Location with Apply Button */}
      <div className="card-info-section">
        <div className="card-price-location">
          <h3 className="card-price">{props.price}</h3>
          <p className="card-location">{props.location}</p>
        </div>
        <button
          className="card-apply-button"
          onClick={() => props.onApply?.()}
        >
          Apply now
        </button>
      </div>
    </div>
  );
}
