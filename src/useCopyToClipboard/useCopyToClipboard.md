# `useCopyToClipboard`

The `useCopyToClipboard` hook provides an easy way to copy text to the clipboard in a React application. It manages the copied text state and handles the clipboard interaction.

## Parameters

This hook does not take any parameters.

## Returns

- **`state: string | null`**: The state that holds the last copied value or `null` if no text has been copied or copying failed.
- **`copyToClipboard: (value: string) => void`**: A function that accepts a string value and copies it to the clipboard.

## Example

### Copying Input Text to Clipboard

In this example, the `useCopyToClipboard` hook is used to copy the text from an input field to the clipboard. The copied text is also displayed below the input field.

```tsx
import React, { useState } from 'react'
import { useCopyToClipboard } from '@udemere/usehooks'

const CopyTextComponent = () => {
	const [state, copyToClipboard] = useCopyToClipboard()
	const [inputValue, setInputValue] = useState('')

	const handleCopyClick = () => {
		copyToClipboard(inputValue)
	}

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder='Enter text to copy'
			/>
			<button onClick={handleCopyClick}>Copy to Clipboard</button>
			{state && <p>Copied Text: {state}</p>}
		</div>
	)
}

export default CopyTextComponent
```

### Usage in a Button

```tsx
import React from 'react'
import { useCopyToClipboard } from '@udemere/usehooks'

const CopyButtonComponent = () => {
	const [copiedText, copyToClipboard] = useCopyToClipboard()

	return (
		<div>
			<button onClick={() => copyToClipboard('Some text to copy')}>
				Copy Text
			</button>
			{copiedText && <p>Copied: {copiedText}</p>}
		</div>
	)
}

export default CopyButtonComponent
```

---

### Key Notes:

- **Clipboard API**: This hook uses the `Clipboard API`, which may not be supported in all browsers. Ensure the browser supports it before using.
- **State Management**: The `state` returned by the hook allows you to show feedback to the user regarding the text that has been successfully copied.
