import { useEffect, useState } from 'react'

/**
 * `useCookie` is a custom React hook that manages cookies.
 *
 * @param key - The key of the cookie to manage.
 * @param initialValue - The initial value of the cookie if it does not exist.
 * @param options - Additional cookie options (days, path, domain, secure, sameSite).
 * @returns A tuple containing the cookie value and a function to update it.
 */
export const useCookie = (
	key: string,
	initialValue: string = '',
	options: {
		days?: number
		path?: string
		domain?: string
		secure?: boolean
		sameSite?: 'Strict' | 'Lax' | 'None'
	} = {}
): [string, (value: string) => void] => {
	const { days, path = '/', domain, secure, sameSite } = options

	const getCookie = (name: string): string | undefined => {
		const value = `; ${document.cookie}`
		const parts = value.split(`; ${name}=`)
		if (parts.length === 2) {
			return parts.pop()?.split(';').shift()
		}
	}

	const [cookie, setCookie] = useState<string>(() => {
		return getCookie(key) || initialValue
	})

	const updateCookie = (value: string) => {
		const expires = days
			? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
			: ''

		const secureFlag = secure ? '; secure' : ''
		const sameSiteFlag = sameSite ? `; SameSite=${sameSite}` : ''

		const cookieString = `${key}=${value}${expires}; path=${path}${
			domain ? `; domain=${domain}` : ''
		}${secureFlag}${sameSiteFlag}`
		document.cookie = cookieString
		setCookie(value)
	}

	useEffect(() => {
		const currentCookie = getCookie(key)
		if (currentCookie) {
			setCookie(currentCookie)
		}
	}, [key])

	return [cookie, updateCookie]
}
