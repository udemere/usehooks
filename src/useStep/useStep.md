# `useStep` Hook

## Overview

The `useStep` hook is a custom React hook designed to manage step-based processes, such as multi-step forms, wizards, or tutorials. It provides a straightforward way to navigate through a series of steps, allowing you to control the current step and easily move between them.

### Installation

```bash
npm install @udemere/usehooks
```

### Usage

To use the `useStep` hook, import it into your component and call it to manage the steps of your process.

```typescript
import React from 'react'
import { useStep } from '@udemere/usehooks/useStep'

const StepComponent: React.FC = () => {
	const { currentStep, nextStep, prevStep, reset } = useStep({ totalSteps: 3 })

	return (
		<div>
			<h2>Current Step: {currentStep + 1}</h2>
			<div>
				<button onClick={prevStep} disabled={currentStep === 0}>
					Previous
				</button>
				<button onClick={nextStep} disabled={currentStep === 2}>
					Next
				</button>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default StepComponent
```

### API

- **Parameters**:

  - `options`: An object that configures the step management.
    - `initialStep` (optional): A number indicating the initial step index (default is `0`).
    - `totalSteps`: A number specifying the total number of steps.

- **Returns**: An object containing the following properties and methods:
  - `currentStep`: The current step index (zero-based).
  - `nextStep`: A function to advance to the next step. It prevents moving past the last step.
  - `prevStep`: A function to go back to the previous step. It prevents moving before the first step.
  - `reset`: A function to reset the current step to the initial step.

### Example

Here's an example of how to use the `useStep` hook in a multi-step form component:

```typescript
import React from 'react'
import { useStep } from '@udemere/usehooks/useStep'

const MultiStepForm: React.FC = () => {
	const { currentStep, nextStep, prevStep, reset } = useStep({ totalSteps: 3 })

	return (
		<div>
			{currentStep === 0 && <div>Step 1: User Information</div>}
			{currentStep === 1 && <div>Step 2: Address Details</div>}
			{currentStep === 2 && <div>Step 3: Confirmation</div>}

			<div>
				<button onClick={prevStep} disabled={currentStep === 0}>
					Previous
				</button>
				<button onClick={nextStep} disabled={currentStep === 2}>
					Next
				</button>
			</div>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default MultiStepForm
```

### Notes

- The `useStep` hook manages its internal state, allowing it to be used independently across multiple components.
- This hook is useful for creating forms, wizards, or any step-based UI interaction where you need to track the user's progress through a series of steps.
