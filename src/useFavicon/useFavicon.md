# `useFavicon` Hook

The `useFavicon` hook allows you to dynamically set the browser's favicon for your web application. This hook is particularly useful in scenarios where the favicon may need to change based on user actions or application state.

## Parameters

- **`url`** (`string`): The URL of the favicon image. This should point to a valid image file, typically in formats such as `.ico`, `.png`, or `.svg`.

## Usage

To use the `useFavicon` hook, follow these steps:

1. **Import the Hook**:
   Begin by importing the `useFavicon` hook into your component file.

   ```javascript
   import { useFavicon } from '@udemere/usehooks/useFavicon'
   ```

2. **Call the Hook**:
   Use the `useFavicon` hook within your functional component, passing the desired favicon URL as an argument.

   ```javascript
   function MyApp() {
   	useFavicon('https://example.com/favicon.ico') // Set the favicon

   	return (
   		<div>
   			<h1>Welcome to My Application</h1>
   		</div>
   	)
   }
   ```

3. **Result**:
   The hook updates the favicon to the specified URL when the component renders, or whenever the `url` changes.

## Example

Here’s a complete example demonstrating how to use the `useFavicon` hook:

```javascript
import React from 'react'
import { useFavicon } from '@udemere/usehooks/useFavicon'

function App() {
	// Set the favicon to a specific URL
	useFavicon('https://example.com/favicon.ico')

	return (
		<div>
			<h1>Hello, World!</h1>
		</div>
	)
}

export default App
```

## Notes

- If the favicon link element already exists in the document, the hook will update its `href` attribute to the new URL.
- If no favicon link element is found, the hook will create one and append it to the document's head.
- This hook automatically re-runs whenever the provided URL changes, ensuring that the favicon is always up-to-date.
