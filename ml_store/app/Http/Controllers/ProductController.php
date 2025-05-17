<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{
    public function index()
{
    $products = Product::all()->map(function ($product) {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->description,
            'price' => $product->price,
            'material' => $product->material,
            'category' => $product->category,
            'stock' => $product->stock,
            'status' => $product->status,
            'image' => $product->image ? asset('storage/' . $product->image) : null,
        ];
    });

    return response()->json($products, 200);
}

    public function store(Request $request)
    {
        // Validate request
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'material' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'stock' => 'required|numeric'
        ]);

        // Handle image upload
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
        }

        // Create jewelry product
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'category' => $request->category,
            'material' => $request->material,
            'image' => $imagePath,
            'stock' => $request->stock,
        ]);

        return response()->json([
            'message' => 'product created successfully!',
            'product' => $product
        ], 201);
    }


    public function show($id)
    {
        $product = Product::findOrFail($id);

        $product->image = $product->image ? asset('storage/' . $product->image) : null;

        return response()->json($product, 200);
    }


    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'price' => 'sometimes|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048', // Image validation
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $product->image = $request->file('image')->store('products', 'public');
        }

        $product->update($request->except('image'));

        return response()->json([
            'message' => 'Product updated successfully!',
            'data' => $product
        ], 200, $this->responseHeaders());
    }

    public function destroy($id)
    {
    $product = Product::findOrFail($id);

    if ($product->image) {
        Storage::disk('public')->delete($product->image);
    }

    $product->delete();

    return response()->json([
        'message' => 'Product deleted successfully!'
    ], 200);
    }

}
