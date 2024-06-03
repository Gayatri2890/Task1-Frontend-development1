import React from 'react';

const Step3 = ({ data, handleChange }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default Step3;
