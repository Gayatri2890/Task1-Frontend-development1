import React, { useState } from 'react';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    const nextStep = () => {
        setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        localStorage.setItem('formData', JSON.stringify({
            ...formData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = () => {
        alert('Form submitted successfully!');
    };

    const steps = [
        <Step1 data={formData} handleChange={handleChange} />,
        <Step2 data={formData} handleChange={handleChange} />,
        <Step3 data={formData} handleChange={handleChange} />,
        <Step4 data={formData} handleChange={handleChange} />
    ];

    return (
        <div className="container">
            <form>
                {steps[currentStep - 1]}
                <div className="buttons">
                    {currentStep > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {currentStep < steps.length && <button type="button" onClick={nextStep}>Next</button>}
                    {currentStep === steps.length && <button type="button" onClick={handleSubmit}>Submit</button>}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
