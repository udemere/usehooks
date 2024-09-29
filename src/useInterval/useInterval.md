# useInterval Hook

The `useInterval` hook is a custom React hook that creates an interval to invoke a specified callback function at defined time intervals.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

You can use the `useInterval` hook in your functional components to execute code at regular intervals.

### Example

```tsx
import React from 'react'
import { useInterval } from '@udemere/usehooks'

const TimerComponent = () => {
	const [count, setCount] = React.useState(0)

	const handleInterval = () => {
		setCount(prevCount => prevCount + 1)
	}

	// Call handleInterval every 1000 milliseconds (1 second)
	useInterval(handleInterval, 1000)

	return (
		<div>
			<h1>Count: {count}</h1>
		</div>
	)
}

export default TimerComponent
```

## API

### `useInterval(callback: () => void, delay: number | null): void`

#### Parameters

- `callback`:

  - Type: `() => void`
  - The function to be invoked at each interval.

- `delay`:
  - Type: `number | null`
  - The time, in milliseconds, between each invocation of the callback. Use `null` to clear the interval.

#### Behavior

- If `delay` is set to `null`, the interval is cleared, and the callback will not be invoked.
- If `delay` is a number, the callback function will be executed repeatedly at the specified delay.
