/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react'
import AuthLayout from '@/Layouts/AuthLayout.jsx'

function Dashboard() {
    return <div>Dashboard content</div>
}

Dashboard.layout = page => <AuthLayout>{page}</AuthLayout>

export default Dashboard
