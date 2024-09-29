# `useRedirect` Hook

The `useRedirect` hook is a utility for handling redirection in React applications, built on top of React Router's `useNavigate` function. It simplifies navigation by allowing you to easily redirect users to different routes based on specified conditions.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useRedirect } from '@udemere/usehooks'

const MyComponent: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	// Redirect to "/dashboard" if the user is logged in
	useRedirect('/dashboard', isLoggedIn)

	return (
		<div>
			<h1>Welcome to the Homepage</h1>
			<button onClick={() => setIsLoggedIn(true)}>Login</button>
		</div>
	)
}
```

### `useRedirect`

```typescript
useRedirect(to: string, condition?: boolean = true, delay?: number): void
```

### Parameters:

- **`to`** (string): The path to redirect to.
- **`condition`** (boolean, optional): The condition that triggers the redirection. Defaults to `true`. When the condition is `true`, the redirection will happen.
- **`delay`** (number, optional): The delay in milliseconds before the redirection occurs. If no delay is provided, the redirection will happen immediately.

### Example:

```typescript
import React from 'react'
import { useRedirect } from '@udemere/usehooks'

const SomeComponent = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false)

	// Redirect to '/dashboard' after 2 seconds if the condition is met
	useRedirect('/dashboard', shouldRedirect, 2000)

	return (
		<div>
			<h1>Welcome!</h1>
			<button onClick={() => setShouldRedirect(true)}>Go to Dashboard</button>
		</div>
	)
}

export default SomeComponent
```

### Cleanup

The hook ensures cleanup by clearing the timeout if the component unmounts before the redirection occurs.

## Dependencies

- **React Router**: `useRedirect` relies on React Router's `useNavigate` for navigation functionality. Make sure to set up routing in your project before using this hook.
