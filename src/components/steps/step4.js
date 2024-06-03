import React from 'react';

const Step4 = ({ data, handleChange }) => {
    return (
        <div>
            <h2>Step 4</h2>
            <div className="form-group">
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default Step4;
