<?php
namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
  public function boot()
  {
    Response::macro('success', function ($data = []) {
        return Response::json([
          'success'  => true,
          'data' => $data,
        ]);
    });

    Response::macro('errors', function (Array $messages, $status = 400, $data = []) {
        return Response::json([
          'success' => false,
          'data' => $data,
          'error_messages' => $messages,
        ], $status);
    });
  }
}

