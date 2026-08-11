<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductVariantRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->role === 'admin' && (bool) $this->user()?->is_active;
    }

    /**
     * @return array<string, list<mixed>>
     */
    public function rules(): array
    {
        $variant = $this->route('productVariant');

        return [
            'product_id' => ['required', 'integer', 'exists:products,id'],
            'sku' => ['required', 'string', 'max:100', Rule::unique('product_variants', 'sku')->ignore($variant)],
            'color_name' => ['nullable', 'string', 'max:100'],
            'color_hex' => ['nullable', 'regex:/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/'],
            'size' => ['nullable', 'string', 'max:50'],
            'additional_price' => ['nullable', 'numeric', 'min:0'],
            'stock' => ['required', 'integer', 'min:0'],
            'reserved_stock' => ['required', 'integer', 'min:0', 'lte:stock'],
            'image' => ['nullable', 'file', 'image', 'max:4096'],
            'is_active' => ['sometimes', 'boolean'],
            'is_preorder' => ['sometimes', 'boolean'],
            'preorder_lead_days' => ['nullable', 'integer', 'min:1', 'required_if:is_preorder,1'],
        ];
    }

    /**
     * @return array<int, callable>
     */
    public function after(): array
    {
        return [
            function ($validator): void {
                if ($this->boolean('is_preorder') && blank($this->input('preorder_lead_days'))) {
                    $validator->errors()->add('preorder_lead_days', 'Jumlah hari pre-order wajib diisi.');
                }
            },
        ];
    }
}
