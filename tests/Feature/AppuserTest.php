<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AppuserTest extends TestCase
{
    /**
     * Testing root route, i.e. /appusers/
     *
     * @return void
     */
    public function testRoot()
    {
        $response = $this->json('GET', '/appusers');

        $response->assertStatus(200);
    }

    public function testCreate()
    {
        $response = $this->json('POST', '/appusers/create');
        $response->assertStatus(422);
        $response->assertJson([
            'data' => [
                'error_key' => 'validation'
            ]
        ]);
    }
}
