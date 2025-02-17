<?php

use App\Http\Controllers\admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoriesController;
use App\Http\Controllers\admin\BrandsController;

Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login');

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Auth routes
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Categories routes
    Route::get('/categories', [CategoriesController::class, 'index'])->name('categories.index');
    Route::post('/categories', [CategoriesController::class, 'store'])->name('categories.store');
    Route::get('/categories/{id}', [CategoriesController::class, 'show'])->name('categories.show');
    Route::put('/categories/{id}', [CategoriesController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{id}', [CategoriesController::class, 'destroy'])->name('categories.destroy');

    // Brands routes
    Route::get('/brands', [BrandsController::class, 'index'])->name('brands.index');
    Route::post('/brands', [BrandsController::class, 'store'])->name('brands.store');
    Route::get('/brands/{id}', [BrandsController::class, 'show'])->name('brands.show');
    Route::put('/brands/{id}', [BrandsController::class, 'update'])->name('brands.update');
    Route::delete('/brands/{id}', [BrandsController::class, 'destroy'])->name('brands.destroy');


    // Products routes
    //     Route::get('/products', [ProductsController::class, 'index'])->name('products.index');
    //     Route::post('/products', [ProductsController::class, 'store'])->name('products.store');
    //     Route::get('/products/{id}', [ProductsController::class, 'show'])->name('products.show');
    //     Route::put('/products/{id}', [ProductsController::class, 'update'])->name('products.update');

});
