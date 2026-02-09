<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

        <title>{{ config('app.name', 'aceMedia') }}</title>
        <meta name="color-scheme" content="light">
        <meta name="application-title" content="{{ config('app.name', 'aceMedia') }}">

        <meta name="title" content="{{ config('app.name', 'aceMedia') }}">
        <meta name="description" content="Your app description here - keep it under 160 characters for best results">
        <meta name="keywords" content="your, keywords, here">
        <meta name="author" content="Your Name or Company">

        <link rel="manifest" href="/manifest.json">

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url()->current() }}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="{{ config('app.name', 'aceMedia') }}">
        <meta property="og:description" content="Your app description here - keep it under 160 characters for best results">
        <meta property="og:image" content="{{ asset('images/og-image.jpg') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="{{ config('app.name', 'aceMedia') }}">
        <meta property="og:locale" content="en_ZA">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="{{ url()->current() }}">
        <meta name="twitter:title" content="{{ config('app.name', 'Laravel') }}">
        <meta name="twitter:description" content="Your app description here - keep it under 160 characters for best results">
        <meta name="twitter:image" content="{{ asset('images/twitter-image.jpg') }}">
        <meta name="twitter:site" content="@yourtwitterhandle">
        <meta name="twitter:creator" content="@anele_ace">

        <!-- Favicon -->
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">

        <script type="text/javascript">
            (function() {
                const theme = localStorage.getItem('theme') ||
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
            })();
        </script>

        <style>
            html {transition: background-color 0.3s, color 0.3s;}
        </style>


        @viteReactRefresh

        <!-- Styles / Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
