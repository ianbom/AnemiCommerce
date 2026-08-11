<?php

use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Date;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

afterEach(fn () => Date::setTestNow());

it('stores preorder availability from lead days in the standalone variant form', function () {
    Date::setTestNow('2026-08-11 10:00:00');

    $admin = User::factory()->create(['role' => 'admin', 'is_active' => true]);
    $product = Product::query()->create([
        'name' => 'Preorder Product',
        'slug' => 'preorder-product',
        'sku' => 'PRE-001',
        'base_price' => 100000,
    ]);

    $this->actingAs($admin)
        ->post(route('admin.product-variants.store'), [
            'product_id' => $product->id,
            'sku' => 'PRE-001-BLK-M',
            'stock' => 0,
            'reserved_stock' => 0,
            'is_active' => true,
            'is_preorder' => true,
            'preorder_lead_days' => 7,
        ])
        ->assertRedirect();

    $variant = ProductVariant::query()->where('sku', 'PRE-001-BLK-M')->firstOrFail();

    expect($variant)
        ->is_preorder->toBeTrue()
        ->preorder_available_at->format('Y-m-d')->toBe('2026-08-18');

    $this->actingAs($admin)
        ->get(route('admin.product-variants.edit', $variant))
        ->assertInertia(fn (Assert $page) => $page
            ->where('variant.preorder_lead_days', 7)
            ->missing('variant.preorder_available_at'));
});

it('rejects invalid preorder lead days in the standalone variant form', function (mixed $leadDays, bool $missing) {
    $admin = User::factory()->create(['role' => 'admin', 'is_active' => true]);
    $product = Product::query()->create([
        'name' => 'Validation Product',
        'slug' => 'validation-product-'.$leadDays,
        'sku' => 'VAL-'.$leadDays,
        'base_price' => 100000,
    ]);
    $payload = [
        'product_id' => $product->id,
        'sku' => 'VAL-'.$leadDays.'-BLK-M',
        'stock' => 0,
        'reserved_stock' => 0,
        'is_active' => true,
        'is_preorder' => true,
    ];

    if (! $missing) {
        $payload['preorder_lead_days'] = $leadDays;
    }

    $this->actingAs($admin)
        ->post(route('admin.product-variants.store'), $payload)
        ->assertSessionHasErrors('preorder_lead_days');
})->with([
    'missing' => [null, true],
    'zero' => [0, false],
    'negative' => [-1, false],
    'decimal' => [1.5, false],
]);
