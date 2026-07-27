# Database Schema

Sumber: semua migration di `database/migrations`. Macro Laravel seperti `id()`, `timestamps()`, `softDeletes()`, `rememberToken()`, dan `morphs()` sudah diexpand menjadi kolom aktual.

## users

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| name | string |  |
| email | string | unique |
| google_id | string | nullable, unique |
| phone | string | nullable |
| role | string | default `customer` |
| avatar_url | string | nullable |
| is_active | boolean | default `true` |
| email_verified_at | timestamp | nullable |
| password | string |  |
| two_factor_secret | text | nullable |
| two_factor_recovery_codes | text | nullable |
| two_factor_confirmed_at | timestamp | nullable |
| remember_token | string(100) | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |
| deleted_at | timestamp | nullable |

## password_reset_tokens

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| email | string | primary key |
| token | string |  |
| created_at | timestamp | nullable |

## sessions

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | string | primary key |
| user_id | bigint unsigned | nullable, index |
| ip_address | string(45) | nullable |
| user_agent | text | nullable |
| payload | longText |  |
| last_activity | integer | index |

## cache

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| key | string | primary key |
| value | mediumText |  |
| expiration | integer | index |

## cache_locks

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| key | string | primary key |
| owner | string |  |
| expiration | integer | index |

## jobs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| queue | string | index |
| payload | longText |  |
| attempts | unsignedTinyInteger |  |
| reserved_at | unsignedInteger | nullable |
| available_at | unsignedInteger |  |
| created_at | unsignedInteger |  |

## job_batches

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | string | primary key |
| name | string |  |
| total_jobs | integer |  |
| pending_jobs | integer |  |
| failed_jobs | integer |  |
| failed_job_ids | longText |  |
| options | mediumText | nullable |
| cancelled_at | integer | nullable |
| created_at | integer |  |
| finished_at | integer | nullable |

## failed_jobs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| uuid | string | unique |
| connection | text |  |
| queue | text |  |
| payload | longText |  |
| exception | longText |  |
| failed_at | timestamp | default current timestamp |

## customer_addresses

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, cascade on delete |
| recipient_name | string(150) |  |
| recipient_phone | string(30) |  |
| label | string(100) | nullable |
| province | string(100) |  |
| city | string(100) |  |
| district | string(100) |  |
| subdistrict | string(100) | nullable |
| postal_code | string(20) |  |
| biteship_area_id | string(100) | nullable, index |
| latitude | decimal(10,7) | nullable |
| longitude | decimal(10,7) | nullable |
| full_address | text |  |
| note | text | nullable |
| is_default | boolean | default `false` |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## categories

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| name | string(150) |  |
| slug | string(180) | unique |
| description | text | nullable |
| image_url | string | nullable |
| is_active | boolean | default `true`, index |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## collections

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| name | string(150) |  |
| slug | string(180) | unique |
| description | text | nullable |
| banner_desktop_url | string | nullable |
| banner_mobile_url | string | nullable |
| is_featured | boolean | default `false` |
| is_active | boolean | default `true` |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## products

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| category_id | bigint unsigned | nullable, foreign key, null on delete |
| collection_id | bigint unsigned | nullable, foreign key, null on delete |
| name | string(180) |  |
| slug | string(200) | unique |
| sku | string(100) | nullable, unique |
| short_description | text | nullable |
| description | text | nullable |
| material | string(150) | nullable |
| care_instruction | text | nullable |
| base_price | decimal(15,2) |  |
| sale_price | decimal(15,2) | nullable |
| weight | integer | default `0` |
| length | integer | nullable |
| width | integer | nullable |
| height | integer | nullable |
| status | string(30) | default `draft` |
| is_featured | boolean | default `false` |
| is_new_arrival | boolean | default `false` |
| is_best_seller | boolean | default `false` |
| meta_title | string | nullable |
| meta_description | text | nullable |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## product_images

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| product_id | bigint unsigned | foreign key, cascade on delete |
| image_url | string |  |
| alt_text | string | nullable |
| sort_order | integer | default `0` |
| is_primary | boolean | default `false` |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## product_variants

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| product_id | bigint unsigned | foreign key, cascade on delete |
| sku | string(100) | unique |
| color_name | string(100) | nullable |
| color_hex | string(20) | nullable |
| size | string(50) | nullable |
| additional_price | decimal(15,2) | default `0` |
| stock | integer | default `0`, check `stock >= 0` |
| reserved_stock | integer | default `0`, check `reserved_stock >= 0` dan `reserved_stock <= stock` |
| image_url | string | nullable |
| is_active | boolean | default `true` |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## stock_logs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| product_variant_id | bigint unsigned | foreign key, cascade on delete |
| user_id | bigint unsigned | nullable, foreign key, null on delete |
| type | string(50) |  |
| quantity | integer |  |
| stock_before | integer |  |
| stock_after | integer |  |
| reference_type | string(100) | nullable |
| reference_id | unsignedBigInteger | nullable |
| note | text | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## carts

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, cascade on delete, unique |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## cart_items

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| cart_id | bigint unsigned | foreign key, cascade on delete |
| product_id | bigint unsigned | foreign key, cascade on delete |
| product_variant_id | bigint unsigned | foreign key, cascade on delete |
| quantity | integer | default `1` |
| price_snapshot | decimal(15,2) |  |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## vouchers

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| code | string(50) | unique |
| name | string(150) |  |
| description | text | nullable |
| discount_type | string(30) |  |
| discount_value | decimal(15,2) |  |
| max_discount | decimal(15,2) | nullable |
| min_order_amount | decimal(15,2) | nullable |
| usage_limit | integer | nullable |
| used_count | integer | default `0` |
| starts_at | timestamp | nullable |
| ends_at | timestamp | nullable |
| is_active | boolean | default `true` |
| deleted_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## orders

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, restrict on delete |
| customer_address_id | bigint unsigned | nullable, foreign key, null on delete |
| order_number | string(100) | unique |
| checkout_idempotency_key | string(100) | nullable, unique with `user_id` |
| customer_name | string(150) |  |
| customer_email | string(191) |  |
| customer_phone | string(30) |  |
| subtotal | decimal(15,2) | default `0` |
| discount_amount | decimal(15,2) | default `0` |
| shipping_cost | decimal(15,2) | default `0` |
| service_fee | decimal(15,2) | default `0` |
| grand_total | decimal(15,2) | default `0` |
| voucher_id | bigint unsigned | nullable, foreign key, null on delete |
| voucher_code | string(50) | nullable |
| payment_status | string(50) | default `pending`, allowed values constrained |
| order_status | string(50) | default `pending_payment`, allowed values constrained |
| shipping_status | string(50) | default `not_created`, allowed values constrained |
| no_return_refund_agreed | boolean | default `false` |
| no_return_refund_agreed_at | timestamp | nullable |
| notes | text | nullable |
| paid_at | timestamp | nullable |
| cancelled_at | timestamp | nullable |
| expired_at | timestamp | nullable |
| completed_at | timestamp | nullable |
| stock_reserved_at | timestamp | nullable |
| stock_released_at | timestamp | nullable |
| stock_finalized_at | timestamp | nullable |
| voucher_released_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## order_items

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| order_id | bigint unsigned | foreign key, cascade on delete, index |
| product_id | bigint unsigned | nullable, foreign key, null on delete |
| product_variant_id | bigint unsigned | nullable, foreign key, null on delete |
| product_name | string(180) |  |
| product_sku | string(100) | nullable |
| variant_sku | string(100) | nullable |
| color_name | string(100) | nullable |
| size | string(50) | nullable |
| price | decimal(15,2) |  |
| quantity | integer |  |
| subtotal | decimal(15,2) |  |
| weight | integer | default `0` |
| length | integer | nullable |
| width | integer | nullable |
| height | integer | nullable |
| product_image_url | string | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## order_addresses

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| order_id | bigint unsigned | foreign key, cascade on delete, unique |
| recipient_name | string(150) |  |
| recipient_phone | string(30) |  |
| province | string(100) |  |
| city | string(100) |  |
| district | string(100) |  |
| subdistrict | string(100) | nullable |
| postal_code | string(20) |  |
| biteship_area_id | string(100) | nullable |
| latitude | decimal(10,7) | nullable |
| longitude | decimal(10,7) | nullable |
| full_address | text |  |
| note | text | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## payments

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| order_id | bigint unsigned | foreign key, cascade on delete, unique |
| payment_provider | string(50) | default `midtrans` |
| payment_method | string(100) | nullable |
| midtrans_order_id | string(100) | nullable, unique |
| midtrans_transaction_id | string(150) | nullable, index |
| midtrans_snap_token | string | nullable |
| midtrans_redirect_url | string | nullable |
| transaction_status | string(50) | nullable, allowed values constrained |
| fraud_status | string(50) | nullable |
| gross_amount | decimal(15,2) |  |
| currency | string(10) | default `IDR` |
| paid_at | timestamp | nullable |
| expired_at | timestamp | nullable |
| expires_at | timestamp | nullable, index |
| last_synced_at | timestamp | nullable, index |
| failure_reason | text | nullable |
| raw_response | json | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## payment_logs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| payment_id | bigint unsigned | nullable, foreign key, null on delete |
| order_id | bigint unsigned | nullable, foreign key, null on delete |
| provider | string(50) | default `midtrans` |
| event_type | string(100) | nullable |
| transaction_status | string(50) | nullable |
| payload_hash | string(64) | nullable, unique |
| payload | json |  |
| processed_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## shipments

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| order_id | bigint unsigned | foreign key, cascade on delete, unique |
| shipping_provider | string(50) | default `biteship` |
| biteship_order_id | string(150) | nullable, unique |
| biteship_tracking_id | string(150) | nullable, index |
| waybill_id | string(150) | nullable, index |
| label_url | string | nullable |
| courier_company | string(100) |  |
| courier_type | string(100) |  |
| courier_service_name | string(150) | nullable |
| delivery_type | string(50) | default `now` |
| shipping_cost | decimal(15,2) | default `0` |
| insurance_cost | decimal(15,2) | default `0` |
| estimated_delivery | string(100) | nullable |
| shipping_status | string(50) | default `not_created`, index, allowed values constrained |
| shipped_at | timestamp | nullable |
| delivered_at | timestamp | nullable |
| cancelled_at | timestamp | nullable |
| creating_at | timestamp | nullable |
| last_synced_at | timestamp | nullable |
| failed_reason | text | nullable |
| raw_rate_response | json | nullable |
| raw_order_response | json | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## shipment_trackings

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| shipment_id | bigint unsigned | foreign key, cascade on delete |
| status | string(100) |  |
| description | text | nullable |
| location | string | nullable |
| happened_at | timestamp | nullable |
| provider_happened_at | timestamp | nullable |
| payload_hash | string(64) | nullable, unique |
| raw_payload | json | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## biteship_webhook_logs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| event_type | string(100) | nullable, index |
| biteship_order_id | string(150) | nullable, index |
| biteship_tracking_id | string(150) | nullable, index |
| waybill_id | string(150) | nullable, index |
| payload_hash | string(64) | nullable, unique |
| payload | json |  |
| processed_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## notifications

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, cascade on delete |
| title | string(180) |  |
| message | text |  |
| type | string(50) |  |
| reference_type | string(100) | nullable |
| reference_id | unsignedBigInteger | nullable |
| is_read | boolean | default `false` |
| read_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## wishlists

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, cascade on delete |
| product_id | bigint unsigned | foreign key, cascade on delete |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## banners

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| title | string(180) |  |
| subtitle | string | nullable |
| image_desktop_url | string |  |
| image_mobile_url | string | nullable |
| button_text | string(100) | nullable |
| button_url | string | nullable |
| placement | string(100) | default `homepage` |
| sort_order | integer | default `0` |
| is_active | boolean | default `true` |
| starts_at | timestamp | nullable |
| ends_at | timestamp | nullable |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## pages

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| title | string(180) |  |
| slug | string(180) | unique |
| content | text |  |
| type | string(100) |  |
| meta_title | string | nullable |
| meta_description | text | nullable |
| is_active | boolean | default `true` |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## site_settings

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| key | string(150) | unique |
| value | text | nullable |
| type | string(50) | default `string` |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |

## admin_activity_logs

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| user_id | bigint unsigned | foreign key, cascade on delete |
| action | string(150) |  |
| module | string(100) |  |
| reference_type | string(100) | nullable |
| reference_id | unsignedBigInteger | nullable |
| old_values | json | nullable |
| new_values | json | nullable |
| ip_address | string(45) | nullable |
| user_agent | text | nullable |
| created_at | timestamp | nullable |

## personal_access_tokens

| Kolom | Tipe | Catatan |
| --- | --- | --- |
| id | bigint unsigned | primary key |
| tokenable_type | string | index dengan `tokenable_id` |
| tokenable_id | bigint unsigned | index dengan `tokenable_type` |
| name | text |  |
| token | string(64) | unique |
| abilities | text | nullable |
| last_used_at | timestamp | nullable |
| expires_at | timestamp | nullable, index |
| created_at | timestamp | nullable |
| updated_at | timestamp | nullable |
