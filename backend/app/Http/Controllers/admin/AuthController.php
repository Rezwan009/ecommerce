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
            'password' => 'required|min:6`````````'
        ]);

        // If validation fails, return error response with validation errors
        if ($validator->fails()) {
            return response()->json(['status' => 422,'errors' => $validator->errors()], 422);
        }

        // Attempt to authenticate the user with provided credentials
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            if ($user->role == 'admin') {
                // If user is an admin, generate and return admin token
                $token = $user->createToken('token')->plainTextToken;
                return response()->json(['user' => $user, 'token' => $token,'status' => 200]);
            } else {
                return response()->json(['status' => 403, 'message' => 'You do not have
                permission to access admin dashboard.']);
            }

        } else {
            return response()->json(['status' => 401, 'message' => 'Unauthorized']);
        }
    }
    public function user(Request $request)
    {
        return $request->user();
    }

    public function logout(Request $request)
    {
        Auth::guard('api')->logout();

        return response()->json(['message' => 'Logout successful']);
    }
}
