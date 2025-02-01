<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
        return response()->json(
            [
                'data' => $categories,
                'total' => $categories->count(),
                'status' => 200
            ],
        );
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(),'status' => 422], 422);
        }

        $category = Category::create($request->all());

        return response()->json(['data' => $category,'status' => 201], 201);
    }
    public function show($id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found','status' => 404], 404);
        }

        return response()->json(['data' => $category,'status' => 200], 200);
    }
    public function update(Request $request, $id){

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors(),'status' => 422], 422);
        }

        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Category not found','status' => 404], 404);
        }

        $category->update($request->all());

        return response()->json(['data' => $category,'message' => 'Category Updated','status' => 200], 200);
    }
    public function destroy($id){
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['error' => 'Category not found','status' => 404], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted','status' => 204], 204);
    }
}
