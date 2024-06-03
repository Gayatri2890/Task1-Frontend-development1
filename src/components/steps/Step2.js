import React from 'react';

const Step2 = ({ data, handleChange }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default Step2;
