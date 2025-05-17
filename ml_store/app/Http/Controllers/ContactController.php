<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // Show all contacts
    public function index()
    {
        return response()->json(Contact::all(), 200);
    }

    // Store new contact message
    public function store(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($request->all());
        return response()->json($contact, 201);
    }

    // Show one contact by ID
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json($contact, 200);
    }

    // Update contact message by ID
    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);

        $request->validate([
            'name'    => 'sometimes|required|string|max:100',
            'email'   => 'sometimes|required|email',
            'subject' => 'sometimes|required|string|max:255',
            'message' => 'sometimes|required|string',
        ]);

        $contact->update($request->all());
        return response()->json($contact, 200);
    }

    // Delete contact by ID
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return response()->json(['message' => 'Contact deleted'], 200);
    }
}
