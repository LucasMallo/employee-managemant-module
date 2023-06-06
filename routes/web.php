<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('employees');
// });

// Route::get('/employees', function () {
//     return view('employees');
// })->middleware(['auth', 'verified'])->name('employees');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';

// Route::post('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']); 

// Route::view('/{any}', 'employees')
//     ->middleware(['auth'])
//     ->where('any', '.*');


Route::post('login', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'store']);

Route::view('/{any?}', 'dashboard')
    ->name('dashboard')
    ->where('any', '.*');