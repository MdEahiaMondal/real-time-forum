<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function index(){
        return [
            'read' => NotificationResource::collection(Auth::user()->readNotifications),
            'unread' => NotificationResource::collection(Auth::user()->unreadNotifications)
        ] ;
    }
    public function markAsRead(Request  $request){
        $user = Auth::user();
        $user->unreadNotifications->where('id', $request->id)->markAsRead();
       return response()->json([
           'success' => true,
       ], 200);
    }
}
