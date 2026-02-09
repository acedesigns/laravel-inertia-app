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
import { Link, usePage } from '@inertiajs/react'

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
                                className="p-2 rounded-md border bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
                            >
                                {theme === 'dark' ? '🌙' : '☀️'}
                            </button>
                            {!auth?.user && (
                                <>
                                    <Link
                                        href="/login"
                                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}

                            {auth?.user && (
                                <>
                                    <span className="text-gray-700 dark:text-gray-200">
                                        {auth.user.name}
                                    </span>

                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="bg-red-500 text-white px-3 py-2 rounded-md"
                                    >
                                        Logout
                                    </Link>
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
