import React from 'react';

const Step1 = ({ data, handleChange }) => {
    return (
        <div>
            <h2>Step 1</h2>
            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default Step1;
