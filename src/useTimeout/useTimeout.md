# `useTimeout` Hook

The `useTimeout` hook is a custom React hook that allows you to invoke a callback function after a specified delay. This hook is useful for handling delayed actions, such as showing notifications, triggering animations, or implementing debouncing behaviors.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useTimeout } from '@udemere/usehooks'

const MyComponent = () => {
	const showAlert = () => alert('This alert appears after 3 seconds!')

	// Set a timeout for 3000 milliseconds (3 seconds)
	useTimeout(showAlert, 3000)

	return (
		<div>
			<p>Wait for 3 seconds to see the alert.</p>
		</div>
	)
}
```

## Parameters

| Name       | Type         | Description                                 |
| ---------- | ------------ | ------------------------------------------- | ----------------------------------------------------------- |
| `callback` | `() => void` | The function to be invoked after the delay. |
| `delay`    | `number      | null`                                       | The delay in milliseconds. Use `null` to clear the timeout. |

## Returns

- A function that clears the timeout. This function is invoked automatically when the component unmounts or when the delay changes.

## Example

```typescript
const ExampleComponent = () => {
	const [message, setMessage] = useState<string>('Hello!')

	const updateMessage = () =>
		setMessage('This message updates after 5 seconds!')

	useTimeout(updateMessage, 5000) // Timeout set for 5000 milliseconds (5 seconds)

	return (
		<div>
			<p>{message}</p>
		</div>
	)
}
```

## Notes

- If the `delay` is set to `null`, the timeout will be cleared, preventing the callback from being executed.
- The `useTimeout` hook ensures that the latest version of the callback is invoked, even if the component re-renders.
