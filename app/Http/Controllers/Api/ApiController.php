<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Foundation\Application as ApplicationAlias;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Response;

class ApiController extends Controller
{
    public function failWithMessage(string $message): Application|Response|ApplicationAlias|ResponseFactory
    {
        return $this->response(400, $message);
    }

    public function success(): Application|Response|ApplicationAlias|ResponseFactory
    {
        return $this->response(200);
    }

    public function response(int $statusCode, string $message = null, array $data = null)
    {
        return response(["data" => $data, "message" => $message, "status" => $statusCode], $statusCode)->header('Content-Type', 'application/json');
    }
}
