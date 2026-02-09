/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { router } from '@inertiajs/react'

export default function LogoutButton({ className = '' }) {
    const handleLogout = (e) => {
        e.preventDefault()

        if (confirm('Are you sure you want to logout?')) {
            router.post('/logout')
        }
    }

    return (
        <button
            onClick={handleLogout}
            className={className || 'text-sm font-medium text-gray-500 hover:text-gray-700'}
        >
            Logout
        </button>
    )
}
