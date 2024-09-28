# useCopyToClipboard

`useCopyToClipboard` is a hook that copies text to the clipboard.

## Usage

```tsx
import { useCopyToClipboard } from '@udemere/use-hooks'

const MyComponent = () => {
	const [state, copyToClipboard] = useCopyToClipboard()

	const handleClick = (inputValue: string) => {
		copyToClipboard(inputValue)
	}

	return (
		<div>
			<input type='text' onChange={e => handleClick(e.target.value)} />
			<p>{state}</p>
		</div>
	)
}
```
