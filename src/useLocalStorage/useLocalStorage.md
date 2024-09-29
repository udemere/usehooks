# `useLocalStorage` Hook

The `useLocalStorage` hook allows you to manage a value stored in `localStorage` while providing safe defaults and handling potential errors. This hook can be used to store and retrieve any type of data, ensuring synchronization between React state and the browser's `localStorage`.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useLocalStorage } from '@udemere/usehooks'

const MyComponent: React.FC = () => {
	const [name, setName] = useLocalStorage<string>('name', 'John Doe')

	return (
		<div>
			<input
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Enter your name'
			/>
			<p>Your name is: {name}</p>
		</div>
	)
}
```

### API

#### `useLocalStorage`

```typescript
useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void];
```

### Parameters:

- **`key`** (`string`): The key under which the value will be stored in `localStorage`.
- **`initialValue`** (`T`): The initial value to use if there is no stored value in `localStorage`.

### Returns:

- **`storedValue`** (`T`): The current value stored in `localStorage` (or the initial value if not available).
- **`setValue`** (`(value: T | (val: T) => T) => void`): A function to update the stored value. It accepts either a new value or a function that returns a new value based on the current state (similar to React's `setState`).

### Features:

- **Lazy Initialization**: The hook only reads from `localStorage` once, on initial render, avoiding unnecessary reads.
- **SSR Safe**: In environments like Next.js, where server-side rendering (SSR) is involved, the hook will not attempt to access `localStorage` on the server.
- **Error Handling**: It catches and logs errors when reading from or writing to `localStorage`, preventing the app from breaking.

### Example

```typescript
import React from 'react'
import { useLocalStorage } from '@udemere/usehooks'

const ThemeToggle: React.FC = () => {
	const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')

	return (
		<div>
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
			</button>
			<p>Current theme: {theme}</p>
		</div>
	)
}

export default ThemeToggle
```

### Best Practices:

- **Avoid SSR Issues**: Always ensure that `window` is available when accessing `localStorage`. This hook checks for the presence of `window` to avoid SSR issues.
- **Functional Updates**: The setter supports functional updates, making it flexible to work with current state and logic.
