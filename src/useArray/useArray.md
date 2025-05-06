# `useArray` Hook

The `useArray` hook is a custom React hook that simplifies managing array state with utility functions for adding, removing, updating, inserting, or clearing items from the array.

## Installation

```bash
npm install @udemere/usehooks
```

## Usage

To use the `useArray` hook, simply import it from the `@udemere/usehooks` package and call it within your functional component.

```tsx
import { useArray } from '@udemere/usehooks'

const MyComponent = () => {
  const { value, push, removeAt, clear } = useArray<string>(['Item 1'])

  return (
    <div>
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeAt(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => push(`Item ${value.length + 1}`)}>Add</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

```

## Parameters

| Parameter | Type  | Default | Description                                |
| --------- | ----- | ------- | ------------------------------------------ |
| initial   | `T[]` | `[]`    | The initial array state. Must be an array. |


## Returns

The hook returns an object with the following properties:

| Property   | Type                               | Description                               |
| ---------- | ---------------------------------- | ----------------------------------------- |
| `value`    | `T[]`                              | The current array state.                  |
| `setValue` | `Dispatch<SetStateAction<T[]>>`    | Function to set the array state directly. |
| `push`     | `(item: T) => void`                | Adds a new item to the end of the array.  |
| `removeAt` | `(index: number) => void`          | Removes an item at the specified index.   |
| `insertAt` | `(index: number, item: T) => void` | Inserts an item at the specified index.   |
| `updateAt` | `(index: number, item: T) => void` | Updates an item at the specified index.   |
| `clear`    | `() => void`                       | Clears the array (empties it).            |


## Error Handling

- Ensure that valid indices and types are used when modifying the array to avoid errors.

## Example

```tsx
import { useArray } from '@udemere/usehooks'

const TodoList = () => {
  const { value, push, removeAt, updateAt } = useArray<string>([])

  return (
    <div>
      {value.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => updateAt(index, `${todo} ✅`)}>Done</button>
          <button onClick={() => removeAt(index)}>Delete</button>
        </div>
      ))}
      <button onClick={() => push(`Task ${value.length + 1}`)}>Add Task</button>
    </div>
  )
}
```

### Key Points:

- **Installation**: Instructions for installing the `@udemere/usehooks` package.
- **Parameters and Return Values**: Detailed explanation of the `initial` parameter and the returned properties (`value`, `setValue`, `push`, `removeAt`, `insertAt`, `updateAt`, and `clear`).
- **Error Handling**: Notes that valid indices and types must be used when modifying the array to avoid errors.
- **Usage Example**: Provides an example of how to use the hook in a component, demonstrating array manipulation (push, remove, update).

