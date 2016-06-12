@extends('frontend.layout.app')
@section('scripts.footer')
    {{--<script src="{{ elixir('js/frontend/home.js') }}"></script>--}}
    <script src="{{ url('js/frontend/home.js') }}"></script>
@endsection
@section('styles.header')
    {{--<link rel="stylesheet" href="{{ elixir('css/frontend/home.css') }}">--}}
    <link rel="stylesheet" href="{{ url('css/frontend/home.css') }}">
@endsection

@section('content')
    <div class="btn-group-container">
        <ul class="btn-group">
            <li>
                <button
                    class="btn-circle btn"
                    v-on:mouseenter="hoverI()"
                    v-on:mouseleave="hoverI()"
                >I</button>
                <span v-cloak v-show="showI">TPS</span>
            </li>
            <li>
                <button
                    class="btn-circle btn"
                    v-on:mouseenter="hoverH()"
                    v-on:mouseleave="hoverH()"
                >H</button>
                <span v-cloak v-show="showH">OW TO USE?</span>
            </li>
            <li>
                <button
                    class="btn-circle btn"
                    v-on:mouseenter="hoverA()"
                    v-on:mouseleave="hoverA()"
                >A</button>
                <span v-cloak v-show="showA">BOUT US</span>
            </li>
        </ul>

    </div>
    <div class="main-container container-fluid">
        <div class="row home-top-row">
            <div class="col-xs-6 home-logo-container">
                <img src="{{ url('imgs/itp_Logo.png') }}" alt="" class="home-logo">
            </div>
            <div class="col-xs-6 home-text-container">
                <div class="home-text-wrap">
                    <h1>Interactive</h1>
                    <h1>Tx.</h1>
                    <h1>Planning</h1>
                    <h1>System</h1>
                </div>
            </div>
        </div>
        <div class="row home-bottom-row">
            <div class="col-xs-6 home-grid">
                <div>
                    <h1>Text-Based</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
            <div class="col-xs-6 home-tooth">
                <div>
                    <h1>Graphical</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
        </div>
    </div>

@endsection

