# `useCookie` Hook

The `useCookie` hook is a custom React hook that simplifies cookie management within your React applications. It allows you to easily retrieve, set, and update cookies with various options for customization.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```tsx
import { useCookie } from '@udemere/usehooks'

const MyComponent = () => {
	const [cookieValue, setCookieValue] = useCookie('myCookie', 'defaultValue', {
		days: 7,
		path: '/',
		secure: true,
		sameSite: 'Lax',
	})

	const updateCookie = () => {
		setCookieValue('newValue')
	}

	return (
		<div>
			<p>Current Cookie Value: {cookieValue}</p>
			<button onClick={updateCookie}>Update Cookie</button>
		</div>
	)
}
```

## API

### `useCookie(key: string, initialValue: string, options: object): [string, (value: string) => void]`

#### Parameters

- **`key`** (`string`): The key of the cookie you want to manage.
- **`initialValue`** (`string`, optional): The initial value to be assigned to the cookie if it does not exist. Defaults to an empty string.
- **`options`** (`object`, optional): An object containing additional cookie options:
  - **`days`** (`number`, optional): The number of days until the cookie expires.
  - **`path`** (`string`, optional): The path where the cookie is accessible. Defaults to `'/'`.
  - **`domain`** (`string`, optional): The domain that the cookie is available to.
  - **`secure`** (`boolean`, optional): A boolean indicating if the cookie should only be transmitted over secure protocols (HTTPS).
  - **`sameSite`** (`'Strict' | 'Lax' | 'None'`, optional): Specifies the same-site cookie policy.

#### Returns

- **`[string, (value: string) => void]`**: A tuple containing:
  - The current value of the cookie.
  - A function to update the cookie value.

### Example

Here's how you might use the `useCookie` hook to manage a cookie:

```tsx
import { useCookie } from '@udemere/usehooks'

const App = () => {
	const [username, setUsername] = useCookie('username', 'guest', {
		days: 30,
		secure: true,
		sameSite: 'Lax',
	})

	return (
		<div>
			<h1>Welcome, {username}!</h1>
			<button onClick={() => setUsername('admin')}>Login as Admin</button>
		</div>
	)
}
```

## Notes

- Ensure that cookies are enabled in the user's browser.
- Be cautious with sensitive information; cookies are stored in plain text and can be accessed by client-side scripts.
