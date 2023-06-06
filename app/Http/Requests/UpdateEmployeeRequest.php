<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'designation' => ['required', 'string', 'unique:employees,designation,'.$this->employee->id],
            'email' => ['required', 'email', 'unique:employees,email,'.$this->employee->id], 
            'department' => ['required', 'string']
        ];
    }
}