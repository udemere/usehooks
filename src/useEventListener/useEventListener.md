# `useEventListener` Hook

`useEventListener` is a custom React hook that attaches an event listener to a specified element or the window. This hook simplifies the process of adding and removing event listeners in functional components, ensuring proper cleanup to prevent memory leaks.

### Usage

```tsx
import { useEventListener } from '@udemere/usehooks'

const MyComponent = () => {
	const handleClick = (event: MouseEvent) => {
		console.log('Element clicked!', event)
	}

	useEventListener('click', handleClick, document.getElementById('myElement'))

	return <div id='myElement'>Click me!</div>
}
```

### Parameters

- **`eventName`**: `string`  
  The name of the event to listen for (e.g., `'click'`, `'scroll'`).

- **`handler`**: `(event: Event) => void`  
  The function that will be called when the event is triggered.

- **`element`**: `HTMLElement | Window | null` (default: `window`)  
  The element to attach the event listener to. Defaults to `window`. Pass `null` if you want to conditionally attach the listener.

### Returns

This hook does not return anything. It simply attaches the specified event listener to the provided element.

### Notes

- The hook ensures that the event listener is properly removed when the component unmounts or when the dependencies change.
- You can use this hook to listen for any events supported by the target element.

### Example

```tsx
const MyComponent = () => {
	const handleResize = () => {
		console.log('Window resized!')
	}

	useEventListener('resize', handleResize)

	return <div>Resize the window to see the effect.</div>
}
```

### Key Points

1. **Functionality**: Clearly states what the hook does and how it can be used.
2. **Parameters and Returns**: Detailed descriptions of the parameters and return values.
3. **Examples**: Provides clear examples of how to use the hook in practice.
4. **Notes**: Highlights important behavior regarding cleanup.
