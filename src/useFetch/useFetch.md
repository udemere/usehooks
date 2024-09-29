# `useFetch` Hook

## Description

The `useFetch` hook is a custom React hook designed to facilitate data fetching from an API. It handles loading and error states, making it easier to manage asynchronous data in your components.

### TypeScript Definition

```typescript
export function useFetch<T>(
	url: string,
	options?: FetchOptions
): UseFetchReturn<T>
```

### Parameters

- **`url`** (`string`):

  - The API endpoint from which to fetch data.

- **`options`** (`FetchOptions`, optional):
  - An object containing optional settings for the fetch request.
  - **`method`** (`'GET' | 'POST' | 'PUT' | 'DELETE'`):
    - Specifies the HTTP method to use. Defaults to `'GET'`.
  - **`headers`** (`Record<string, string>`):
    - An object representing the headers to include in the request.
  - **`body`** (`any`):
    - The body of the request. Can be any type (string, object, etc.). Only applicable for `POST` or `PUT` requests.

### Returns

- **`data`** (`T | null`):

  - The data returned from the API, or `null` if the request has not completed yet.

- **`loading`** (`boolean`):

  - A boolean indicating whether the data is currently being fetched.

- **`error`** (`string | null`):

  - An error message if an error occurred during the fetch, or `null` if there are no errors.

- **`refetch`** (`() => void`):
  - A function to manually refetch the data.

## Example

```tsx
import React from 'react'
import { useFetch } from '@udemere/usehooks'

type User = {
	id: number
	name: string
	email: string
}

const UserList: React.FC = () => {
	const { data, loading, error, refetch } = useFetch<User[]>(
		'https://api.udemere.com/users'
	)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error: {error}</p>

	return (
		<div>
			<h1>User List</h1>
			<button onClick={refetch}>Refetch Users</button>
			<ul>
				{data?.map(user => (
					<li key={user.id}>
						{user.name} - {user.email}
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserList
```

### Notes

- The `useFetch` hook uses the native `fetch` API and returns a Promise. Ensure that your environment supports the `fetch` API or include a polyfill if necessary.
- The `options.body` should be serialized to JSON when sending data in a `POST` or `PUT` request.

### Additional Information

- The `useFetch` hook is a great way to simplify the process of fetching data and handling states within your React applications, making it reusable across different components.
