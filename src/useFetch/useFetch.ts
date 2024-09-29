import { useEffect, useState } from 'react'

type FetchOptions = {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	headers?: Record<string, string>
	body?: any // Can be any type (string, object, etc.)
}

type UseFetchReturn<T> = {
	data: T | null
	loading: boolean
	error: string | null
	refetch: () => void
}

/**
 * Custom hook to fetch data from an API.
 *
 * @param url - The API endpoint to fetch data from.
 * @param options - Optional fetch options.
 * @returns An object containing the data, loading state, error message, and a refetch function.
 */
export function useFetch<T>(
	url: string,
	options?: FetchOptions
): UseFetchReturn<T> {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const fetchData = async () => {
		setLoading(true)
		setError(null)

		try {
			const response = await fetch(url, {
				method: options?.method || 'GET',
				headers: options?.headers,
				body: options?.body ? JSON.stringify(options.body) : undefined,
			})

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`)
			}

			const result: T = await response.json()
			setData(result)
		} catch (err: any) {
			setError(err.message || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return { data, loading, error, refetch: fetchData }
}
