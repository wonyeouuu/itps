<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'FrontendController@index');
Route::get('/itps', 'FrontendController@I');
Route::get('/how-to-use', 'FrontendController@H');
Route::get('/about-us', 'FrontendController@A');
Route::get('/test', 'FrontendController@test');
