@extends('frontend.layout.app')
@section('scripts.footer')
    <script src="{{ elixir('js/frontend/home.js') }}"></script>
@endsection
@section('styles.header')
    <link rel="stylesheet" href="{{ elixir('css/frontend/home.css') }}">
@endsection

@section('content')
    <div id='app'></div>
    <div id='app-mobile'>
        <img src="{{ url('/imgs/mobile-home.png') }}">
    </div>
@endsection
