import React, { useState } from "react";
import "./Visa.css";

const VisaApplication = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    email: "",
    passportno: "",
    mobileno: "",
    adharno: "",
    pancard: "",
    dob: "",
    doa: "",
    country: "",
    state: "",
    city: "",
    address: "",
    skill: "",
    qualifications: "",
    englishProficiency: "",
    workExperience: [{ company: "", years: "" }],
    professionalSummary: "",
    maritalStatus: "",
    visaType: "",
    attachments: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] });
  };

  const addWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [...formData.workExperience, { company: "", years: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="visa-container">
      <h2 className="visa-title">Visa Application Form</h2>
      <form onSubmit={handleSubmit} className="visa-form">
        <div className="visa-group">
          <input className="visa-input" type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
          <input className="visa-input" type="text" name="lastname" placeholder="Last Name" onChange={handleChange} />
        </div>
        <input className="visa-input" type="text" name="fathername" placeholder="Father's Name" onChange={handleChange} />
        <input className="visa-input" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="visa-input" type="text" name="passportno" placeholder="Passport Number" onChange={handleChange} />
        <input className="visa-input" type="text" name="mobileno" placeholder="Mobile Number" onChange={handleChange} />
        <input className="visa-input" type="text" name="adharno" placeholder="Aadhar Number" onChange={handleChange} />
        <input className="visa-input" type="text" name="pancard" placeholder="PAN Card Number" onChange={handleChange} />
        <div className="visa-group">
          <input className="visa-input" type="date" name="dob" onChange={handleChange} />
          <input className="visa-input" type="date" name="doa" onChange={handleChange} />
        </div>
        <input className="visa-input" type="text" name="country" placeholder="Country" onChange={handleChange} />
        <input className="visa-input" type="text" name="state" placeholder="State" onChange={handleChange} />
        <input className="visa-input" type="text" name="city" placeholder="City" onChange={handleChange} />
        <textarea className="visa-textarea" name="address" placeholder="Address" onChange={handleChange}></textarea>
        <input className="visa-input" type="text" name="skill" placeholder="Skills (comma separated)" onChange={handleChange} />
        <input className="visa-input" type="text" name="qualifications" placeholder="Qualifications" onChange={handleChange} />
        <select className="visa-select" name="englishProficiency" onChange={handleChange}>
          <option value="">English Proficiency</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select className="visa-select" name="maritalStatus" onChange={handleChange}>
          <option value="">Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
        <select className="visa-select" name="visaType" onChange={handleChange}>
          <option value="">Visa Type</option>
          <option value="Tourist">Tourist</option>
          <option value="Work">Work</option>
          <option value="Student">Student</option>
        </select>
        <h3>Attachments</h3>
        <input className="visa-file-input" type="file" multiple onChange={handleFileUpload} />
        <button className="visa-submit" type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default VisaApplication;