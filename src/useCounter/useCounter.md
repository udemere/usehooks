# useCounter Hook

The `useCounter` hook is a custom React hook that manages a counter state with functionalities to increment, decrement, reset, and set a specific value.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

You can use the `useCounter` hook in your functional components to manage a counter easily.

### Example

```javascript
import React from 'react'
import { useCounter } from '@udemere/usehooks'

const CounterComponent = () => {
	const { count, increment, decrement, reset } = useCounter(0)

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterComponent
```

## API

### `useCounter(initialValue?: number): UseCounterReturn`

#### Parameters

- `initialValue` (optional):
  - Type: `number`
  - Default: `0`
  - The initial value for the counter.

#### Returns

- An object containing the following properties:
  - `count`:
    - Type: `number`
    - The current count value.
  - `increment`:
    - Type: `() => void`
    - A function to increment the counter by 1.
  - `decrement`:
    - Type: `() => void`
    - A function to decrement the counter by 1.
  - `reset`:
    - Type: `() => void`
    - A function to reset the counter to its initial value.
  - `setCount`:
    - Type: `Dispatch<SetStateAction<number>>`
    - A function to set a specific value to the counter.

### Notes:

- The example provided demonstrates how to use the `useCounter` hook in a functional component.
- Ensure that the installation and usage instructions align with your package's setup process.
- You can adjust the documentation format or details to fit any additional conventions your library may have.
