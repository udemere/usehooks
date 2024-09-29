# `useUUID` Hook

## Overview

The `useUUID` hook is a custom React hook that generates a unique identifier (UUID) following the UUID version 4 specification. It ensures that the UUID is generated only once per component mount, providing a consistent identifier throughout the component's lifecycle.

### Installation

```bash
npm install @udemere/usehooks
```

### Usage

To use the `useUUID` hook, import it into your component and call it to receive a unique UUID string.

```typescript
import React from 'react'
import useUUID from '@udemere/usehooks/useUUID'

const MyComponent: React.FC = () => {
	const uniqueId = useUUID()

	return (
		<div>
			<h1>Your Unique ID: {uniqueId}</h1>
		</div>
	)
}
```

### API

#### `useUUID()`

- **Returns**: `string`
  - A randomly generated UUID string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.

### Example

Here’s a simple example demonstrating how to use the `useUUID` hook in a functional component:

```typescript
import React from 'react'
import useUUID from '@udemere/usehooks/useUUID'

const ItemList: React.FC<{ items: string[] }> = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<li key={useUUID()}>{item}</li> // Using useUUID as a key for list items
			))}
		</ul>
	)
}

export default ItemList
```

### Notes

- Each call to the `useUUID` hook will return the same UUID during the component's lifecycle but will generate a new UUID for each new instance of the component.
- This hook is particularly useful for generating keys for list items, identifiers for form elements, or unique session IDs.
