/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react'
import { usePage, Link } from '@inertiajs/react'

export default function AuthLayout({ children }) {
    const { auth } = usePage().props

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* sidebar */}
            <aside className="w-64 bg-white shadow">
                <div className="p-4 font-bold">Dashboard</div>

                <nav className="flex flex-col p-2 space-y-2">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/settings">Settings</Link>
                </nav>
            </aside>

            {/* content */}
            <div className="flex-1">
                <header className="bg-white shadow p-4 flex justify-between">
                    <div>Logged in as {auth?.user?.name}</div>
                    <Link href="/logout" method="post">Logout</Link>
                </header>

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
