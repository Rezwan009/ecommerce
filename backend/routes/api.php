<?php

use App\Http\Controllers\admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login');
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
