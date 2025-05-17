<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slideshow;
use Illuminate\Support\Facades\Storage;

class SlideshowController extends Controller
{
    // Get all slideshows
    public function index()
    {
        return response()->json(Slideshow::all(), 200);
    }

    // Store a new slideshow
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'link' => 'nullable|url',
        ]);

        // Upload image
        $imagePath = $request->file('image')->store('slideshows', 'public');

        $slideshow = Slideshow::create([
            'title' => $request->title,
            'image' => $imagePath,
            'description' => $request->description,
            'link' => $request->link,
        ]);

        return response()->json($slideshow, 201);
    }

    // Show a single slideshow
    public function show($id)
    {
        return response()->json(Slideshow::findOrFail($id), 200);
    }

    // Update an existing slideshow
    public function update(Request $request, $id)
    {
        $slideshow = Slideshow::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'link' => 'nullable|url',
        ]);

        if ($request->hasFile('image')) {
            // Delete the old image
            Storage::disk('public')->delete($slideshow->image);

            // Upload the new image
            $imagePath = $request->file('image')->store('slideshows', 'public');
            $slideshow->image = $imagePath;
        }

        $slideshow->update($request->except('image') + ['image' => $slideshow->image]);

        return response()->json($slideshow, 200);
    }

    // Delete a slideshow
    public function destroy($id)
    {
        $slideshow = Slideshow::findOrFail($id);

        // Delete the image file
        Storage::disk('public')->delete($slideshow->image);

        $slideshow->delete();

        return response()->json(['message' => 'Slideshow deleted'], 204);
    }
}
