# `useScrollPosition` Hook

`useScrollPosition` is a custom React hook that provides the current scroll position of the window in pixels. This hook can be useful for tracking how far the user has scrolled down a page, allowing for dynamic UI updates based on scroll position.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```tsx
import { useScrollPosition } from '@udemere/usehooks'

const ScrollComponent = () => {
	const scrollY = useScrollPosition()

	return (
		<div>
			<h1>Current Scroll Position</h1>
			<p>{scrollY}px</p>
		</div>
	)
}
```

## Returns

- **number**: The current scroll position of the window in pixels.

## Example

Here’s a simple example of how you might use `useScrollPosition`:

```tsx
import React from 'react'
import { useScrollPosition } from '@udemere/usehooks'

const ScrollDisplay = () => {
	const scrollY = useScrollPosition()

	return (
		<div style={{ padding: '20px' }}>
			<h2>Scroll Position Tracker</h2>
			<p>You have scrolled: {scrollY}px</p>
		</div>
	)
}

export default ScrollDisplay
```

## Notes

- The hook initializes the scroll position with the current value of `window.scrollY` when the component mounts.
- The scroll position is updated whenever the user scrolls the window.
- The event listener is cleaned up when the component unmounts to prevent memory leaks.

## Related Hooks

- [`useWindowSize`](#) - Get the current dimensions of the window.
- [`useDebounce`](#) - Debounce a value to limit the rate at which updates are applied.
