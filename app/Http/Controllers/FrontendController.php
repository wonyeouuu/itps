<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class FrontendController extends Controller
{
    public function index()
    {
        return view('frontend.home');
    }
    public function test()
    {
        return view('frontend.textUI');
    }
    public function I()
    {

    }
    public function H()
    {

    }
    public function A()
    {

    }
}
