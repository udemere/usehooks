import { useEffect, useLayoutEffect } from 'react'

/**
 * Custom hook that uses either `useLayoutEffect` or `useEffect` based on the environment (client-side or server-side).
 *
 * @param {EffectCallback} effect - The effect function to be executed.
 * @param {DependencyList} [dependencies] - An optional array of dependencies for the effect.
 */
export const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect
