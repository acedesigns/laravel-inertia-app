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
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors
                ${
                isActive
                    ? 'text-gray-900 dark:text-white border-indigo-500'
                    : 'text-gray-500 dark:text-gray-300 border-transparent hover:text-gray-700 dark:hover:text-white'
            }
            `}
        >
            {children}
        </Link>
    )
}

export default NavLink
