# `useCountdown` Hook

A custom hook that manages a countdown timer with options for starting, stopping, and resetting the countdown. This hook can count up or down based on the provided options.

## Installation

To use this hook, ensure you have the `@udemere/usehooks` library installed:

```bash
npm install @udemere/usehooks
```

## Usage

```tsx
import { useCountdown } from '@udemere/usehooks'

const ExampleComponent = () => {
	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: 10,
			intervalMs: 1000,
			isIncrement: false,
		})

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={startCountdown}>Start</button>
			<button onClick={stopCountdown}>Stop</button>
			<button onClick={resetCountdown}>Reset</button>
		</div>
	)
}
```

## Parameters

### `countdownOptions`

An object that configures the countdown behavior:

- **`countStart`**: `number` (required)

  - The starting number for the countdown, which will also be the initial value returned by the hook.

- **`intervalMs`**: `number` (optional)

  - The interval in milliseconds between each countdown tick. Defaults to `1000`.

- **`isIncrement`**: `boolean` (optional)

  - If set to `true`, the countdown will increment instead of decrementing. Defaults to `false`.

- **`countStop`**: `number` (optional)
  - The stopping number for the countdown. Pass `-Infinity` to allow continuous decrementing. Defaults to `0`.

## Returns

Returns an array with the current count and an object containing the countdown controllers:

- **`[number, CountdownControllers]`**
  - **`count`**: The current value of the countdown.
  - **`CountdownControllers`**: An object with the following methods:
    - **`startCountdown`**: A function to start the countdown.
    - **`stopCountdown`**: A function to stop the countdown.
    - **`resetCountdown`**: A function to reset the countdown to the starting number.

## Example

```tsx
const [counter, { start, stop, reset }] = useCountdown({
	countStart: 10,
	intervalMs: 1000,
	isIncrement: false,
})
```

## Notes

- The countdown operates based on the `intervalMs` option, invoking the increment or decrement function at the specified interval.
- Ensure to manage the countdown's lifecycle appropriately (start, stop, reset) using the provided controllers to avoid memory leaks or unexpected behavior.
- This hook relies on `useBoolean`, `useCounter`, and `useInterval` from the `@udemere/usehooks` library for managing the countdown state.
