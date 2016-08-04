<!DOCTYPE html>
<html>
    <head>
        <title>ITPS</title>
        <link rel="stylesheet" href="{{ elixir('css/frontend/bootstrap.css') }}">
        @yield('styles.header')
    </head>
    <body>
        @yield('content')
    </body>
    @yield('scripts.footer')
</html>
