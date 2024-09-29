# useForm Hook

## Purpose

The `useForm` hook simplifies form state management by handling input values, changes, and resets. It reduces boilerplate code for managing form inputs and enhances usability by providing a clean API for interacting with form data.

## Usage

This hook can be used in any React component to manage form inputs easily.

## Type Parameters

- `T`: The shape of the form values. It extends `Record<string, any>`, allowing flexibility in defining form fields.

## Parameters

- **initialValues**: An object that represents the initial state of the form. Each key-value pair corresponds to a form input's name and its initial value.

## Returns

- **values**: The current form values as an object.
- **handleChange**: A function that updates the form values based on user input.
- **resetForm**: A function that resets the form values to the initial state.

## Example

Here’s an example of how to use the `useForm` hook in a React component:

```tsx
import React from 'react'
import { useForm } from '@udemere/usehooks'

interface LoginFormValues {
	username: string
	password: string
}

const LoginForm: React.FC = () => {
	const { values, handleChange, resetForm } = useForm<LoginFormValues>({
		username: '',
		password: '',
	})

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		console.log(values) // Handle form submission
		resetForm() // Reset the form after submission
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Username:
					<input
						type='text'
						name='username'
						value={values.username}
						onChange={handleChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Password:
					<input
						type='password'
						name='password'
						value={values.password}
						onChange={handleChange}
					/>
				</label>
			</div>
			<button type='submit'>Login</button>
		</form>
	)
}

export default LoginForm
```

## Additional Notes

- The `handleChange` function can be easily extended to handle other input types (e.g., `textarea`, `select`) by modifying the event handler as needed.
- You may also consider adding validation logic or integration with form libraries like `Formik` or `react-hook-form` if more complex form handling is required.

### Key Points

- This documentation includes a clear description of the hook's purpose, how to use it, and what parameters and return values it has.
- An example is provided to demonstrate its usage in a simple login form.
- Additional notes can guide users on potential enhancements and integrations.
