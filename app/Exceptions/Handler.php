<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
//       info($http_response_header);
    }


    public function render($request, Throwable $exception)
    {

        if ($exception instanceof TokenInvalidException) {
            return response()->json([
                'success' => false,
                'message' => 'Token is Invalid',
            ], 400);
        } elseif ($exception instanceof TokenExpiredException) {
            return response()->json([
                'success' => false,
                'message' => 'Token is Expired',
            ], 400);
        } elseif ($exception instanceof JWTException) {
            return response()->json([
                'success' => false,
                'message' => 'There is problem with your token',
            ], 400);
        }
        return parent::render($request, $exception);
    }

}
