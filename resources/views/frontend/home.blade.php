@extends('frontend.layout.app')
@section('scripts.footer')
    <script src="{{ elixir('js/frontend/home.js') }}"></script>
@endsection
@section('styles.header')
    <link rel="stylesheet" href="{{ elixir('css/frontend/home.css') }}">
@endsection

@section('content')
    <ul class="btn-group">
        <li>
            <button
                class="btn-circle btn"
                v-on:mouseenter="hoverI()"
                v-on:mouseleave="hoverI()"
            >I</button>
            <span v-show="showI">拎北喜I</span>
        </li>
        <li>
            <button
                class="btn-circle btn"
                v-on:mouseenter="hoverH()"
                v-on:mouseleave="hoverH()"
            >H</button>
            <span v-show="showH">拎北喜H</span>
        </li>
        <li>
            <button
                class="btn-circle btn"
                v-on:mouseenter="hoverA()"
                v-on:mouseleave="hoverA()"
            >A</button>
            <span v-show="showA">拎北喜A</span>
        </li>
    </ul>
    <div class="container-700">
        <div class="row">
            <div class="col-xs-6">
                <img src="{{ url('imgs/itp_Logo.png') }}" alt="" class="home-logo">
            </div>
            <div class="col-xs-6 home-text-container">
                <h1>Interactive</h1>
                <h1>Tx.</h1>
                <h1>Planning</h1>
                <h1>System</h1>
            </div>
        </div>
        <div class="row home-bottom-container">
            <div class="col-xs-6 pull-left home-grid">
                <div>
                    <h1>Text-Based</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
            <div class="col-xs-6 pull-right home-tooth">
                <div>
                    <h1>Graphical</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
        </div>
    </div>

@endsection

