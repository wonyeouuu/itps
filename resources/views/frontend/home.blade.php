@extends('frontend.layout.app')
@section('scripts.footer')
    <script src="{{ elixir('js/frontend/home.js') }}"></script>
@endsection
@section('styles.header')
    <link rel="stylesheet" href="{{ elixir('css/frontend/home.css') }}">
@endsection

@section('content')
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
            <div class="col-xs-6 home-grid text-base">
              <div>
                    <h1>Text-Based</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
            <div class="col-xs-6 home-tooth">
                <div
                    onclick="window.location='{{ url('/UI/graph-based') }}'"
                >
                    <h1>Graphical</h1>
                    <h1>User</h1>
                    <h1>Interface</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container questionListContainer" id='questionList1'>
        <div></div>
        <question-list
            :question-numbers="[0]"
        >
        </question-list>
        <div class="button button-down">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_down.png') }}" alt=""/> --}}
        </div>
    </div>
    <div class="container questionListContainer" id='questionList2'>
        <div class="button button-up">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_up.png') }}" alt=""/> --}}
        </div>
        <question-list
            :question-numbers="[1, 2, 3]"
        >
        </question-list>
        <div class="button button-down">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_down.png') }}" alt=""/> --}}
        </div>
    </div>
    <div class="container questionListContainer" id='questionList3'>
        <div class="button button-up">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_up.png') }}" alt=""/> --}}
        </div>
        <question-list
            :question-numbers="[4, 5, 6, 7]"
        >
        </question-list>
        <div class="button button-down">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_down.png') }}" alt=""/> --}}
        </div>
    </div>
    <div class="container questionListContainer" id='questionList4'>
        <div class="button button-up">
            <button-down></button-down>
            {{-- <img src="{{ url('/imgs/pikachu_up.png') }}" alt=""/> --}}
        </div>
        <question-list
            :question-numbers="[8, 9]"
        >
        </question-list>
        {{-- <period-chart
            title='Peroidontal Chart'
            number='11'
        ></period-chart> --}}
        <div class='export-button'>
            <img src="{{ url('/imgs/itp_export_1.png') }}" alt="">
        </div>
    </div>
    <div class="container questionListContainer" id="exportContainer">
        <export-graph></export-graph>
    </div>
@endsection
