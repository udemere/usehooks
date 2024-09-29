# `useSessionStorage` Hook

The `useSessionStorage` hook provides a way to manage state in a React component using the browser's session storage. It allows you to persist data for the duration of the page session, meaning data is kept only while the page is open.

## **Usage**

```typescript
const [storedValue, setStoredValue] = useSessionStorage<T>(key: string, initialValue: T): [T | null, (value: T) => void]
```

### **Parameters**

- **`key`**: `string`  
  The key under which the data is stored in session storage. This should be a unique identifier for the stored data.

- **`initialValue`**: `T`  
  The initial value to use if there is no existing value in session storage for the specified key.

### **Returns**

- **`[storedValue, setValue]`**: `Array`  
  A tuple containing:

  - **`storedValue`**: `T | null`  
    The current value stored in session storage for the specified key, or `null` if no value exists.

  - **`setValue`**: `(value: T) => void`  
    A function to update the stored value. If a function is passed, it receives the current value and returns the new value.

### **Example**

```typescript
import { useSessionStorage } from '@udemere/usehooks'

const MyComponent = () => {
	const [count, setCount] = useSessionStorage<number>('count', 0)

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
```

### **Error Handling**

The hook includes error handling to log any issues when reading from or writing to session storage.

### **Notes**

- The stored value is automatically synchronized with session storage on component mount.
- This hook works only in browsers that support the `sessionStorage` API.
