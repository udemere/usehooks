# `useHover` Hook

The `useHover` hook is a custom React hook that helps you detect when a specific HTML element is hovered over. It provides an easy-to-use interface for tracking hover state, making it ideal for adding interactive UI elements.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

```typescript
import { useHover } from '@udemere/usehooks'

const HoverComponent: React.FC = () => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>()

	return (
		<div>
			<div
				ref={hoverRef}
				style={{
					width: '200px',
					height: '200px',
					backgroundColor: isHovered ? 'lightblue' : 'lightgray',
					transition: 'background-color 0.3s',
				}}
			>
				{isHovered ? 'Hovered!' : 'Hover over me!'}
			</div>
		</div>
	)
}
```

## API

### `useHover`

```typescript
useHover<T extends HTMLElement>(): [React.RefObject<T>, boolean]
```

### Parameters:

- **`T extends HTMLElement`**: The type of the HTML element you want to detect hover on. It should be passed as a generic type argument.

### Returns:

- **`ref`** (`React.RefObject<T>`): A ref object that should be attached to the HTML element you want to track.
- **`isHovered`** (`boolean`): A boolean indicating whether the element is currently being hovered.

## Example

```typescript
import React from 'react'
import { useHover } from '@udemere/usehooks'

const ButtonWithHover: React.FC = () => {
	const [hoverRef, isHovered] = useHover<HTMLButtonElement>()

	return (
		<button ref={hoverRef} style={{ color: isHovered ? 'blue' : 'black' }}>
			{isHovered ? 'Hovered!' : 'Hover over me!'}
		</button>
	)
}

export default ButtonWithHover
```

### Features:

- **Reusability**: The `useHover` hook can be reused for any type of element.
- **Clean-up**: The hook handles cleaning up event listeners when the component unmounts or the `ref` changes, preventing memory leaks.