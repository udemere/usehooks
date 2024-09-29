import { useCallback } from 'react'
import { useBoolean } from '../useBoolean'
import { useCounter } from '../useCounter'
import { useInterval } from '../useInterval'

/** The countdown's options. */
type CountdownOptions = {
	/** The countdown's starting number, initial value of the returned number. */
	countStart: number

	/**
	 * The countdown's interval, in milliseconds.
	 * @default 1000
	 */
	intervalMs?: number

	/**
	 * True if the countdown is incrementing.
	 * @default false
	 */
	isIncrement?: boolean

	/**
	 * The countdown's stopping number. Pass `-Infinity` to decrease forever.
	 * @default 0
	 */
	countStop?: number
}

/** The countdown's controllers. */
type CountdownControllers = {
	/** Start the countdown. */
	startCountdown: () => void
	/** Stop the countdown. */
	stopCountdown: () => void
	/** Reset the countdown. */
	resetCountdown: () => void
}

/**
 * Custom hook that manages countdown.
 *
 * @param {CountdownOptions} countdownOptions - The countdown's options.
 * @returns {[number, CountdownControllers]} An array containing the countdown's count and its controllers.
 */
export function useCountdown({
	countStart,
	countStop = 0,
	intervalMs = 1000,
	isIncrement = false,
}: CountdownOptions): [number, CountdownControllers] {
	const {
		count,
		increment,
		decrement,
		reset: resetCounter,
	} = useCounter(countStart)

	// Boolean state to manage countdown running status
	const {
		value: isCountdownRunning,
		setTrue: startCountdown,
		setFalse: stopCountdown,
	} = useBoolean(false)

	// Reset the countdown state and stop the countdown
	const resetCountdown = useCallback(() => {
		stopCountdown()
		resetCounter()
	}, [stopCountdown, resetCounter])

	// Countdown logic to be executed at each interval
	const countdownCallback = useCallback(() => {
		if (count === countStop) {
			stopCountdown()
			return
		}

		isIncrement ? increment() : decrement()
	}, [count, countStop, decrement, increment, isIncrement, stopCountdown])

	// Use the interval to call the countdown function
	useInterval(countdownCallback, isCountdownRunning ? intervalMs : null)

	return [count, { startCountdown, stopCountdown, resetCountdown }]
}
