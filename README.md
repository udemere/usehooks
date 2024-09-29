# @udemere/usehooks

A TypeScript-based React hook library providing useful hooks ready to use in your React applications. This library is designed to help streamline your workflow with clean, efficient, and reusable hooks.

## Features

- Written in TypeScript
- Ready-to-use React hooks
- Lightweight and optimized
- Actively maintained and open-source

## Installation

Install `@udemere/usehooks` via npm, yarn, pnpm, or bun.

```bash
# npm
npm install @udemere/usehooks
```

```bash
# yarn
yarn add @udemere/usehooks
```

```bash
# pnpm
pnpm add @udemere/usehooks
```

```bash
# bun
bun add @udemere/usehooks
```

## Available Hooks

### `useBoolean`

A hook to manage boolean state, providing toggle functionality.

### `useCookie`

A hook to handle cookies in your application with ease.

### `useCopyToClipboard`

A hook to copy text to the clipboard with built-in success/error handling.

### `useCountdown`

A hook for creating countdown timers.

### `useCounter`

A hook to manage numerical state with increment, decrement, and reset functionalities.

### `useDebounce`

A hook that creates a debounced function to limit the rate at which a function is invoked.

### `useDocumentTitle`

A hook for managing the document's title dynamically.

### `useEventListener`

A hook to easily attach and manage event listeners.

### `useFavicon`

A hook for changing the favicon dynamically.

### `useFetch`

A hook for making fetch requests with built-in loading and error states.

### `useForm`

A hook to manage form state and validation effortlessly.

### `useHover`

A hook to detect hover state on an element.

### `useInterval`

A hook for setting up an interval timer.

### `useIsMounted`

A hook to determine if a component is mounted.

### `useIsomorphicLayoutEffect`

A hook that works both on the server and client to ensure effects are applied correctly.

### `useLocalStorage`

A hook for managing localStorage with error handling and lazy initialization.

### `useMediaDevices`

A hook to access media devices (like cameras and microphones) easily.

### `useMediaQuery`

A hook for matching media queries in a React component.

### `usePrevious`

A hook to access the previous value of a state or prop.

### `useRedirect`

A hook to handle redirection in your applications.

### `useScrollPosition`

A hook to track the scroll position of a window or an element.

### `useSessionStorage`

A hook for managing sessionStorage with error handling and lazy initialization.

### `useStep`

A hook to manage multi-step forms or wizards.

### `useThrottle`

A hook that creates a throttled function to limit how often a function can be invoked.

### `useTimeout`

A hook for setting up a timeout timer.

### `useToggle`

A hook to manage toggle state (on/off).

### `useUUID`

A hook for generating unique identifiers.

### `useWindowSize`

A hook to get the current window size dynamically.

## Usage

You can import and use any of the hooks in your React components like so:

```tsx
import { useCounter } from '@udemere/usehooks'

const CounterComponent = () => {
	const { count, increment, decrement } = useCounter()

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
