# useIsomorphicLayoutEffect Hook

The `useIsomorphicLayoutEffect` hook is a custom React hook that allows you to execute effects in a way that works seamlessly on both client-side and server-side rendering. It chooses between `useLayoutEffect` and `useEffect` based on the environment, ensuring that the appropriate effect is used.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

You can use the `useIsomorphicLayoutEffect` hook in your functional components when you need to run effects that should occur during the layout phase on the client side.

### Example

```tsx
import React from 'react'
import { useIsomorphicLayoutEffect } from '@udemere/usehooks'

const ExampleComponent = () => {
	useIsomorphicLayoutEffect(
		() => {
			// Code to be executed during the layout phase on the client side
			console.log('This runs during the layout phase.')

			return () => {
				// Cleanup logic, if needed
				console.log('Cleanup logic here.')
			}
		},
		[
			/* dependencies */
		]
	)

	return <div>Your content here.</div>
}

export default ExampleComponent
```

## API

### `useIsomorphicLayoutEffect(effect: EffectCallback, dependencies?: DependencyList): void`

#### Parameters

- `effect`:

  - Type: `EffectCallback`
  - The effect function to be executed. This function will run after the layout phase for the client side.

- `dependencies`:
  - Type: `DependencyList` (optional)
  - An optional array of dependencies for the effect. The effect will re-run whenever any of the dependencies change.

## Behavior

- If the code is running on the server (where `window` is not defined), it will use `useEffect`.
- If the code is running on the client (where `window` is defined), it will use `useLayoutEffect`.

### Notes:

- The example provided demonstrates how to use the `useIsomorphicLayoutEffect` hook within a functional component.
- The installation instructions ensure that users can easily add the hook to their projects.
- The API section clearly outlines the parameters and their behaviors, making it user-friendly and informative.
