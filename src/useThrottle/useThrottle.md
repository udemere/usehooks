# `useThrottle` Hook

The `useThrottle` hook is a custom React hook that helps manage state updates by throttling a value. It prevents the value from updating more frequently than a specified delay, which can enhance performance in scenarios where rapid state changes occur (e.g., resizing, scrolling, or input events).

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useThrottle } from '@udemere/usehooks'

const MyComponent = () => {
	const [inputValue, setInputValue] = useState('')
	const throttledValue = useThrottle(inputValue, 300) // Throttle updates to 300ms

	useEffect(() => {
		// Handle side effects for throttled value
		console.log(throttledValue)
	}, [throttledValue])

	return (
		<input
			type='text'
			value={inputValue}
			onChange={e => setInputValue(e.target.value)}
		/>
	)
}
```

## Parameters

| Name    | Type     | Description                               |
| ------- | -------- | ----------------------------------------- |
| `value` | `T`      | The value to be throttled.                |
| `delay` | `number` | The delay in milliseconds for throttling. |

## Returns

- Returns the throttled value of type `T`.

## Example

```typescript
const ExampleComponent = () => {
	const [count, setCount] = useState(0)
	const throttledCount = useThrottle(count, 1000) // Update throttled count every second

	return (
		<div>
			<p>Count: {count}</p>
			<p>Throttled Count: {throttledCount}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

## Notes

- The `useThrottle` hook is useful for preventing excessive updates in high-frequency scenarios, such as user inputs, window resizing, or scrolling events.
- Ensure that the `delay` is set appropriately based on the specific use case to achieve the desired throttling behavior.
