<?php

namespace Tests\Feature;

use App\Models\Employee;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class EmployeesTest extends TestCase
{
    public function test_get_employee(): void
    {
        $employee =  Employee::factory()->create();

        $response = $this->get('/api/employees/' . $employee->id);

        $response->assertSee($employee->name)
            ->assertSee($employee->designation)
            ->assertSee($employee->email)
            ->assertSee($employee->department);
    }

    public function test_delete_employee(): void
    {
        $employee =  Employee::factory()->create();

        $this->delete('/api/employees/'.$employee->id);

        $this->assertDatabaseMissing('employees',['id'=> $employee->id]);
    }

    public function test_update_employee(): void
    {
        $employee =  Employee::factory()->create();

        $employee->name = "New test name";

        $this->put('/api/employees/' . $employee->id, $employee->toArray());

        $this->assertDatabaseHas('employees',['id'=> $employee->id , 'name' => 'New test name']);
    }
}
