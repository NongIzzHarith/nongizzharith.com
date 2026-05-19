"use client";

import { useState } from "react";

const steps = [
  { id: 1, label: "Name", field: "name", placeholder: "Your full name" },
  { id: 2, label: "Email", field: "email", placeholder: "you@example.com" },
  { id: 3, label: "Goal", field: "goal", placeholder: "What brings you here?" },
] as const;

type FieldKey = (typeof steps)[number]["field"];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<Record<FieldKey, string>>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const currentValue = formData[currentStepData.field] ?? "";

  const handleNext = () => {
    if (!currentValue.trim()) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return (
      <div className="multistep-form-wrapper">
        <div className="form-complete">
          <div className="complete-content">
            <div className="check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="complete-text">
              <h2>You&apos;re all set</h2>
              <p>{formData.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="multistep-form-wrapper">
      <div className="form-container">
        <div className="step-indicators">
          {steps.map((step, index) => {
            const completed = index < currentStep;
            const active = index === currentStep;
            const cls = completed ? "step-completed" : active ? "step-active" : "step-pending";
            return (
              <div key={step.id} className="step-item">
                <button
                  onClick={() => { if (completed) setCurrentStep(index); }}
                  disabled={index > currentStep}
                  className={`step-button ${cls}`}
                >
                  {completed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <span>{step.id}</span>
                  )}
                  {active && <div className="step-pulse"></div>}
                </button>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <div className="connector-bg"></div>
                    <div className="connector-fill" style={{ transform: `scaleX(${completed ? 1 : 0})` }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="form-fields">
          <div className="field-header">
            <label htmlFor={currentStepData.field} className="field-label">{currentStepData.label}</label>
            <span className="step-counter">{currentStep + 1}/{steps.length}</span>
          </div>
          <input
            id={currentStepData.field}
            type={currentStepData.field === "email" ? "email" : "text"}
            placeholder={currentStepData.placeholder}
            value={currentValue}
            onChange={(e) => setFormData((d) => ({ ...d, [currentStepData.field]: e.target.value }))}
            onKeyUp={(e) => { if (e.key === "Enter") handleNext(); }}
            className="form-input"
          />
        </div>

        <button onClick={handleNext} disabled={!currentValue.trim()} className="submit-btn">
          <span>{currentStep === steps.length - 1 ? "Complete" : "Continue"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        {currentStep > 0 && (
          <button onClick={() => setCurrentStep((s) => s - 1)} className="back-btn">
            Go back
          </button>
        )}
      </div>
    </div>
  );
}
