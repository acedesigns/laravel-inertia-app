/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useEffect, useState } from 'react'

export default function useTheme() {
    const [theme, setTheme] = useState('light')

    // Initialize theme from localStorage or system
    useEffect(() => {
        if (typeof window === 'undefined') return

        const saved = localStorage.getItem('theme')
        if (saved) {
            setTheme(saved)
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
    }, [])

    // Apply to <html> whenever theme changes
    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

    return { theme, toggleTheme }
}
