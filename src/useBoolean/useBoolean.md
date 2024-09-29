# `useBoolean` Hook

The `useBoolean` hook is a custom React hook that provides an easy way to manage boolean state with utility functions to set, toggle, or reset the state.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

To use the `useBoolean` hook, simply import it from the `@udemere/usehooks` package and call it within your functional component.

```tsx
import { useBoolean } from '@udemere/usehooks'

const MyComponent = () => {
	const { value, setTrue, setFalse, toggle } = useBoolean()

	return (
		<div>
			<p>Current Value: {value.toString()}</p>
			<button onClick={setTrue}>Set True</button>
			<button onClick={setFalse}>Set False</button>
			<button onClick={toggle}>Toggle</button>
		</div>
	)
}
```

## Parameters

| Parameter      | Type      | Default | Description                                                                  |
| -------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `defaultValue` | `boolean` | `false` | The initial value for the boolean state. Should be either `true` or `false`. |

## Returns

Returns an object containing the following properties:

| Property   | Type                                | Description                                                      |
| ---------- | ----------------------------------- | ---------------------------------------------------------------- |
| `value`    | `boolean`                           | The current boolean state value.                                 |
| `setValue` | `Dispatch<SetStateAction<boolean>>` | Function to set the boolean state directly.                      |
| `setTrue`  | `() => void`                        | Function to set the boolean state to `true`.                     |
| `setFalse` | `() => void`                        | Function to set the boolean state to `false`.                    |
| `toggle`   | `() => void`                        | Function to toggle the boolean state between `true` and `false`. |

## Errors

- Throws a `TypeError` if `defaultValue` is not a boolean.

## Example

```tsx
import { useBoolean } from '@udemere/usehooks'

const MyComponent = () => {
	const { value, setTrue, setFalse, toggle } = useBoolean(true)

	return (
		<div>
			<p>Current Value: {value.toString()}</p>
			<button onClick={setTrue}>Set True</button>
			<button onClick={setFalse}>Set False</button>
			<button onClick={toggle}>Toggle</button>
		</div>
	)
}
```

### Key Points:

- **Installation Instructions**: Guide users on how to install the package.
- **Detailed Parameters and Return Values**: Provides clarity on what each function and parameter does.
- **Error Handling**: Mentions the type of error that can be thrown for better debugging.
- **Usage Example**: Demonstrates how to use the hook effectively within a component.
