# `usePrevious` Hook

The `usePrevious` hook is a custom React hook that allows you to store and retrieve the previous value of a state or prop. This hook is particularly useful when you need to compare the current value with its previous value for animations, conditional rendering, or other side effects.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { usePrevious } from '@udemere/usehooks'

const MyComponent = () => {
	const [count, setCount] = useState(0)
	const previousCount = usePrevious(count) // Get the previous value of count

	return (
		<div>
			<p>Current Count: {count}</p>
			<p>Previous Count: {previousCount}</p>
			<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
		</div>
	)
}
```

## Parameters

| Name    | Type | Description                                                  |
| ------- | ---- | ------------------------------------------------------------ |
| `value` | `T`  | The current value to store and return the previous value of. |

## Returns

- The previous value of the provided value (`T`) or `undefined` if it’s the first render.

## Example

```typescript
const ExampleComponent = () => {
	const [isToggled, setToggled] = useState(false)
	const previousToggle = usePrevious(isToggled) // Store the previous toggle state

	return (
		<div>
			<p>The toggle is {isToggled ? 'ON' : 'OFF'}</p>
			<p>The previous toggle was {previousToggle ? 'ON' : 'OFF'}</p>
			<button onClick={() => setToggled(prev => !prev)}>Toggle</button>
		</div>
	)
}
```

## Notes

- This hook is particularly useful for scenarios where you need to perform actions based on state changes or where the previous value is relevant to the current value.
- The first render will return `undefined` since there is no previous value available at that point.
