# `useToggle` Hook

The `useToggle` hook is a custom React hook that simplifies the management of boolean state. It provides a toggle function to easily switch the state between `true` and `false`. This hook is particularly useful for scenarios like managing visibility (e.g., modals, dropdowns) or toggling features in a user interface.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useToggle } from '@udemere/usehooks'

const MyComponent = () => {
	const [isOpen, toggleOpen] = useToggle() // Default initial value is false

	return (
		<div>
			<button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'} Modal</button>
			{isOpen && <div>This is a modal!</div>}
		</div>
	)
}
```

## Parameters

| Name           | Type      | Description                                   |
| -------------- | --------- | --------------------------------------------- |
| `initialValue` | `boolean` | The initial state value (default is `false`). |

## Returns

- An array containing:
  - The current state value (`boolean`).
  - A function to toggle the state (`() => void`).

## Example

```typescript
const ExampleComponent = () => {
	const [isToggled, toggle] = useToggle(true) // Initial value set to true

	return (
		<div>
			<p>The toggle is {isToggled ? 'ON' : 'OFF'}</p>
			<button onClick={toggle}>Toggle</button>
		</div>
	)
}
```

## Notes

- The `useToggle` hook abstracts away the complexity of managing boolean states, allowing for cleaner and more readable code.
- The default initial value can be changed by passing a boolean argument to the hook when called.
