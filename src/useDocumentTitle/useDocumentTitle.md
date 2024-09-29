# `useDocumentTitle` Hook

The `useDocumentTitle` hook allows you to dynamically update the title of the document (the browser tab title) in a React component.

## Parameters

- **`title: string`**: The title you want to set for the document.

## Example

### Setting the Document Title

In this example, the `useDocumentTitle` hook is used to set the browser tab title to "My Page Title" when the component is rendered.

```tsx
import React from 'react'
import { useDocumentTitle } from '@udemere/usehooks'

const MyComponent = () => {
	useDocumentTitle('My Page Title')
	return <div>Content</div>
}

export default MyComponent
```

### Dynamically Updating the Document Title

You can use the `useDocumentTitle` hook in components where the title might change based on the state or props. In the following example, the document title is updated based on the `count` state.

```tsx
import React, { useState } from 'react'
import { useDocumentTitle } from '@udemere/usehooks'

const CounterComponent = () => {
	const [count, setCount] = useState(0)

	useDocumentTitle(`Count: ${count}`)

	return (
		<div>
			<p>Current Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default CounterComponent
```

---

### Key Notes:

- **Title Updates**: This hook updates the document's title whenever the `title` value changes.
- **Automatic Cleanup**: No manual cleanup is required, as the title is automatically updated or reset if needed when the component re-renders.
