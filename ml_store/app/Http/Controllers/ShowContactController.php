<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ShowContactController extends Controller
{
    public function index()
    {
        // Fetch all contact data from the database
        $contactData = Contact::all();

        // Pass the data to the view
        return view('showcontact', compact('contactData'));
    }
}

