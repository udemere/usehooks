# `useDebounce`

The `useDebounce` hook delays updating a value until after a specified amount of time has passed. This is useful for preventing frequent updates from rapidly changing input, such as when typing in a search field.

## Parameters

- `value` **(T)**: The input value that you want to debounce.
- `delay` **(number)**: The number of milliseconds to delay the update of the debounced value.

## Returns

- **T**: The debounced value, which only updates after the specified delay.

## Example

### Debouncing an Input

In this example, the `useDebounce` hook is used to debounce the input value from a text field. The debounced value will only update if the user stops typing for at least 500 milliseconds.

```tsx
import React, { useState } from 'react'
import { useDebounce } from '@udemere/usehooks'

const SearchComponent = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	// Logic to handle the debounced value, such as making API calls or filtering data
	useEffect(() => {
		if (debouncedSearchTerm) {
			console.log('Debounced Search Term:', debouncedSearchTerm)
			// Perform search or fetch data based on debouncedSearchTerm
		}
	}, [debouncedSearchTerm])

	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<p>Debounced Value: {debouncedSearchTerm}</p>
		</div>
	)
}
```

### Using `useDebounce` with an API call

```tsx
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@udemere/usehooks'

const MyComponent = () => {
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 1000)

	useEffect(() => {
		if (debouncedQuery) {
			// Fetch data based on the debounced query
			console.log('Fetching data for:', debouncedQuery)
		}
	}, [debouncedQuery])

	return (
		<div>
			<input
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder='Enter search term'
			/>
			<p>Search Term: {debouncedQuery}</p>
		</div>
	)
}

export default MyComponent
```

---

### Key Notes:

- `useDebounce` helps improve performance by delaying expensive operations (e.g., API requests or data processing) until after the user has finished interacting with input.
- The delay is customizable, so you can adjust it based on your specific requirements.
