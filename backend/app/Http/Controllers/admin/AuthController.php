<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        // If validation fails, return error response with validation errors
        if ($validator->fails()) {
            return response()->json(['status'=>400,'error' => $validator->errors()], 400);
        }

        // Attempt to authenticate the user with provided credentials
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            if ($user->role == 'admin') {
                // If user is an admin, generate and return admin token
                $token = $user->createToken('token')->plainTextToken;
                return response()->json(['user' => $user, 'token' => $token,], 200);
            }else{
                return response()->json(['status' => 403, 'error' => 'Forbidden'], 403);
            }

        } else {
            return response()->json(['status' => 401, 'error' => 'Unauthorized'], 401);
        }
    }
}
