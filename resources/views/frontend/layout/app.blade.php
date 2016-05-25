<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        @yield('styles.header')
    </head>
    <body>
        <div class="container home-container">
            @yield('content')
        </div>
    </body>
    @yield('scripts.footer')
</html>
