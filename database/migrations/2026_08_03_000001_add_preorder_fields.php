<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('product_variants', function (Blueprint $table): void {
            $table->boolean('is_preorder')->default(false)->after('is_active');
            $table->date('preorder_available_at')->nullable()->after('is_preorder');
        });

        Schema::table('order_items', function (Blueprint $table): void {
            $table->boolean('is_preorder')->default(false)->after('product_image_url');
            $table->date('preorder_available_at')->nullable()->after('is_preorder');
        });
    }

    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table): void {
            $table->dropColumn(['is_preorder', 'preorder_available_at']);
        });

        Schema::table('product_variants', function (Blueprint $table): void {
            $table->dropColumn(['is_preorder', 'preorder_available_at']);
        });
    }
};
