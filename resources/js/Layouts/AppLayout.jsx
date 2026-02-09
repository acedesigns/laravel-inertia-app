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
import { usePage } from '@inertiajs/react'

const DefaultLayout = ({ href, children }) => {
    const { url } = usePage()
    const isActive = url === href

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
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
                    </div>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    {children}
                </div>
            </main>

            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 text-sm">
                        © 2024 My App. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout
