<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('/home');
});
Auth::routes();

Route::get('/tasks', 'TaskController@index');

// Route::post('/task', 'TaskController@store');
// Route::put('/task/put/{task}','TaskController@edit');
// Route::delete('/task/{task}', 'TaskController@destroy');