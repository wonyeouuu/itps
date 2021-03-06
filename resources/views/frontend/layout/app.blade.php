<!DOCTYPE html>
<html>
    <head>
        <title>ITPS</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0'>
        <link rel="stylesheet" href="{{ elixir('css/frontend/bootstrap.css') }}">
        <link rel="stylesheet" href='{{ elixir('css/frontend/print.css') }}' media='print'>
        @yield('styles.header')
    </head>
    <body>
        @yield('content')
    </body>
    @yield('scripts.footer')
</html>
