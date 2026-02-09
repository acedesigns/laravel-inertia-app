/* =======================================================
 *
 * Created by anele on 09/02/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import AuthLayout from '@/Layouts/AuthLayout'
import DefaultLayout from '@/Layouts/AppLayout'
import AppProvider from '@/context/AppProvider'
import { createInertiaApp } from '@inertiajs/react'


createInertiaApp({
    defaults: {},
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        //page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
        page.default.layout = page.default.layout || (pageEl => {
            const { auth } = page.props || {}
            if (auth?.user) { return <AuthLayout>{pageEl}</AuthLayout> }
            return <DefaultLayout>{pageEl}</DefaultLayout>
        })
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <AppProvider>
                    <App {...props} />
                </AppProvider>
            </React.StrictMode>
        )
    },
}).then((e) => {})


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered:', registration);
            })
            .catch((error) => {
                console.log('SW registration failed:', error);
            });
    });
}
