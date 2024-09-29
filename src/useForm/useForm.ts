import { useCallback, useState } from 'react'

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
	const [values, setValues] = useState<T>(initialValues)

	// Handle input changes with optimized setter
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target
			setValues(prevValues => ({
				...prevValues,
				[name]: value,
			}))
		},
		[]
	)

	// Function to reset the form values to initial values
	const resetForm = useCallback(() => {
		setValues(initialValues)
	}, [initialValues])

	return { values, handleChange, resetForm }
}
