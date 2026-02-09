/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react'
import NavLink from './NavLink'
import useTheme from '@/hooks/useTheme'
import { usePage } from '@inertiajs/react'
import LogoutButton from '@/Components/LogoutButton'

const DefaultLayout = ({ children }) => {

    const { auth } = usePage().props
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <header className="bg-white dark:bg-gray-800 shadow">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* LEFT */}
                        <div className="flex space-x-8">
                            <NavLink href="/">
                                Home
                            </NavLink>

                            <NavLink href="/about">
                                About
                            </NavLink>

                            <NavLink href="/contact">
                                Contact
                            </NavLink>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    // Sun icon
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    // Moon icon
                                    <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </button>
                            {!auth?.user && (
                                <>
                                    <NavLink href="/login">Login</NavLink>
                                    <NavLink href="/register">Register</NavLink>


                                </>
                            )}

                            {auth?.user && (
                                <>
                                    <span className="text-gray-700 dark:text-gray-200">
                                        {auth.user.name}
                                    </span>

                                    <LogoutButton />
                                </>
                            )}
                        </div>


                    </div>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    {children}
                </div>
            </main>

            <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 text-sm">
                        © 2026 My App. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout
