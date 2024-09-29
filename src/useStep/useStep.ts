import { useCallback, useState } from 'react'

interface UseStepOptions {
	initialStep?: number
	totalSteps: number
}

/**
 * Custom hook to manage step-based processes.
 * @param options - Configuration for the step management.
 * @param options.initialStep - The initial step index (default is 0).
 * @param options.totalSteps - The total number of steps.
 * @returns An object containing the current step, navigation functions, and reset functionality.
 */
export const useStep = ({ initialStep = 0, totalSteps }: UseStepOptions) => {
	const [currentStep, setCurrentStep] = useState(initialStep)

	// Function to go to the next step
	const nextStep = useCallback(() => {
		setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps - 1))
	}, [totalSteps])

	// Function to go to the previous step
	const prevStep = useCallback(() => {
		setCurrentStep(prevStep => Math.max(prevStep - 1, 0))
	}, [])

	// Function to reset to the initial step
	const reset = useCallback(() => {
		setCurrentStep(initialStep)
	}, [initialStep])

	return {
		currentStep,
		nextStep,
		prevStep,
		reset,
	}
}
