# `useMediaQuery` Hook

`useMediaQuery` is a custom hook in the `@udemere/usehooks` library that provides an easy way to listen for media query changes in React applications using `useSyncExternalStore`. This hook allows you to dynamically respond to changes in screen size or other media features, ensuring that your UI is always in sync with the browser’s viewport.

## **Usage**

```typescript
import { useMediaQuery } from '@udemere/usehooks'

const isMobile = useMediaQuery('(max-width: 768px)')
```

### **Parameters**

- **`query: string`**  
  The media query string to be evaluated. It follows the same format as used in CSS media queries, such as `(max-width: 768px)` or `(prefers-color-scheme: dark)`.

### **Returns**

- **`boolean`**  
  A boolean value indicating whether the media query matches or not. If the query matches the current viewport or media condition, the hook returns `true`; otherwise, it returns `false`.

## **How It Works**

1. **Subscribing to Media Query Changes**:  
   The hook sets up a subscription to `window.matchMedia(query)` and listens for changes using the `addEventListener` method.
2. **Snapshot Functions**:

   - `getSnapshot`: Called on the client to return whether the media query currently matches.
   - `getServerSnapshot`: Throws an error during server-side rendering (SSR) because media queries are only supported in browser environments.

3. **Handling Media Query Events**:  
   When the media query condition changes (e.g., resizing the window), the hook responds by updating the returned boolean value.

4. **Cleanup**:  
   On unmount or when the query changes, the event listener is removed to prevent memory leaks.

### **Example**

```typescript
import React from 'react'
import { useMediaQuery } from '@udemere/usehooks'

const ResponsiveLayout: React.FC = () => {
	const isMobile = useMediaQuery('(max-width: 768px)')

	return (
		<div>
			{isMobile ? (
				<p>Viewing on a mobile screen</p>
			) : (
				<p>Viewing on a larger screen</p>
			)}
		</div>
	)
}

export default ResponsiveLayout
```

In this example, `useMediaQuery` checks if the viewport width is below 768 pixels. If true, the component renders content optimized for mobile devices; otherwise, it displays content for larger screens.

## **Notes**

- This hook is **client-only** and will not work during SSR (Server-Side Rendering). If used in SSR environments, it will throw an error.
- The hook ensures that it only evaluates media queries when the `window` object is available, preventing issues in non-browser environments like Next.js SSR.

### **Benefits**

- Efficiently listens for media query changes without re-rendering unnecessarily.
- Cleans up event listeners to avoid memory leaks.
- Simplifies the process of making components responsive to various media query states.

## **Installation**

```bash
npm install @udemere/usehooks
```

You can now integrate responsive behavior into your components easily using `useMediaQuery` from the `@udemere/usehooks` library!
