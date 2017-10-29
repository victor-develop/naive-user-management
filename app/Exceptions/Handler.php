<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

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
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    public function render($request, Exception $e)
    {
        /*
            Exception Response format:
                {
                    "success": false,
                    "data": {
                        "error_key": "validation",
                        "debug": {
                        "exception": "",
                        "message": "The given data was invalid.",
                        "trace": []
                        },
                        "errors": {
                        "name": [
                            "The name field is required."
                        ]
                        }
                    },
                    "error_messages": [
                        "Something went wrong."
                    ]
                }      
         */
	    if ($request->wantsJson())
        {

                $messages = [
                    "Something went wrong."
                ];

                $data = [
                    'error_key' => 'unknown'
                ];

                // If the app is in debug mode
                if (config('app.debug'))
                {
                    $debugBag = [];
                    // Add the exception class name, message and stack trace to response
                    $debugBag['exception'] = get_class($e); // Reflection might be better here
                    $debugBag['message'] = $e->getMessage();
                    $debugBag['trace'] = $e->getTrace();
                    $data['debug'] = $debugBag;
                }

                // Default response of 400
                $status = 400;


                if (($e instanceof ValidationException)) {
                    $data["error_key"] = 'validation';
                    $data["errors"] = $e->errors();      
                    $status = $e->status;             
                }

                // If this exception is an instance of HttpException
                if ($this->isHttpException($e))
                {
                    // Grab the HTTP status code from the Exception
                    $status = $e->getStatusCode();
                    $messages[] = $e->getMessage();
                }

                // Return a JSON response with the response array and status code
                return response()->errors($messages, $status, $data);
          }

          // Default to the parent class' implementation of handler
          
          return parent::render($request, $e);
      }
}
