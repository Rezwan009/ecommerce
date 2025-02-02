<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use Illuminate\Support\Facades\Validator;

class BrandsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $brands = Brand::orderBy('created_at', 'desc')->get();
        return response()->json(
            [
                'data' => $brands,
                'total' => $brands->count(),
                'status' => 200
            ],
        );

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
                    'name' => 'required|max:255',
                    'description' => 'required',
                ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(),'status' => 422], 422);
        }

        $brand = Brand::create($request->all());

        return response()->json(['data' => $brand,'status' => 201], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $brand = Brand::find($id);

        if (!$brand) {
            return response()->json(['message' => 'Brand not found','status' => 404], 404);
        }

        return response()->json(['data' => $brand, 'message' => 'Brand Added','status' => 200], 200);

    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validator = Validator::make($request->all(), [
                    'name' => 'required|max:255',
                    'description' => 'required',
                ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(),'status' => 422], 422);
        }

        $brand = Brand::find($id);

        if (!$brand) {
            return response()->json(['message' => 'Brand not found','status' => 404], 404);
        }

        $brand->update($request->all());

        return response()->json(['data' => $brand,'message' => 'Brand Updated','status' => 200], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $brand = Brand::find($id);

        if (!$brand) {
            return response()->json(['error' => 'Brand not found','status' => 404], 404);
        }

        $brand->delete();

        return response()->json(['message' => 'Brand deleted','status' => 204], 204);

    }
}
