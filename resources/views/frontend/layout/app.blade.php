<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <link rel="stylesheet" href="{{ elixir('css/frontend/bootstrap.css') }}">
        @yield('styles.header')
    </head>
    <body>
        <i-h-a :urls="{I: '/itps', H: '/how-to-use', A: '/about-us'}"></i-h-a>
        @yield('content')
    </body>
    @yield('scripts.footer')
</html>
