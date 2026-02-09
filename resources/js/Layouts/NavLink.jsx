/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Link, usePage } from '@inertiajs/react'

const NavLink = ({ href, children }) => {
    const { url } = usePage()
    const isActive = url === href

    return (
        <Link
            href={href}
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive
                    ? 'text-gray-900 border-b-2 border-indigo-500'
                    : 'text-gray-500 hover:text-gray-700'
            }`}
        >
            {children}
        </Link>
    )
}

export default NavLink
