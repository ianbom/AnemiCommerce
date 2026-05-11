<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;
use RuntimeException;

class ProductImageSeeder extends Seeder
{
    public function run(): void
    {
        $imagesByProduct = [
            'include-hard-box-zm-zaskia-mecca-scarf-bunga-pertiwi-edisi-cut-nyak-meutia-material-voal-alaska-premium-hijab-motif-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/26fd858db89a4f018c0536c484e68ea6_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517735',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Meutia | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/475e8ba1cd1746a9b2f4851c5c7d5083_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517738',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Meutia | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/0d865086ff314a71b61f0cee5968e2e5_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517741',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Meutia | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-bunga-pertiwi-edisi-rasuna-said-material-voal-alaska-premium-hijab-motif-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/9028d5d5ac48461ea36182c1b41855d2_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517636',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Rasuna Said | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/87486fd5b5c9427792f35fef78de35c0_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517639',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Rasuna Said | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/9d1cf8c1a27f44c9b45501c3b48f1cc3_tplv-aphluv4xwc-origin-jpeg.jpg?v=1777517642',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Rasuna Said | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'zm-zaskia-mecca-dyona-vest-daily' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/a80a91f2c2984cec9533ecea991a3aa6_tplv-o3syd03w52-origin-jpeg.webp?v=1774414928',
                    'alt_text' => 'ZM Zaskia Mecca - Dyona Vest Daily foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/4da9e9997f56431595aa45104516539e_tplv-o3syd03w52-origin-jpeg.webp?v=1774414936',
                    'alt_text' => 'ZM Zaskia Mecca - Dyona Vest Daily foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/cddb06541d9d4dd89578a89e4bda5d3a_tplv-o3syd03w52-origin-jpeg.webp?v=1774414944',
                    'alt_text' => 'ZM Zaskia Mecca - Dyona Vest Daily foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-bunga-pertiwi-edisi-r-a-kartini-material-voal-alaska-premium-hijab-motif-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/9b90f38ebb294a92a699c6ed46d53db0_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415259',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi R.A Kartini | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/4fe049db4d52429bae07bc727d9f6d23_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415265',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi R.A Kartini | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/916cbca8268641cbb1d204786e7cd1a5_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415265',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi R.A Kartini | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-bunga-pertiwi-edisi-cut-nyak-dien-material-voal-alaska-premium-hijab-motif-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/4f1c908c927045eaa7287aca8509637c_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415287',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Dien | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/67cb7c97c6564c7eb49b5d9f2753dcd7_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415287',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Dien | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/a6d73ce032a04b8584eeabe04957fc4f_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415287',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Cut Nyak Dien | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-bunga-pertiwi-edisi-dewi-sartika-material-voal-alaska-premium-hijab-motif-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/eaf1e5371ea5467caddf7548c95ebca3_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415305',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Dewi Sartika | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/bd4727205fc54d33a92059ae3aded2d6_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415311',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Dewi Sartika | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/00ae4d020e01465d83c9ff16a9cdbe60_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415311',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Bunga Pertiwi Edisi Dewi Sartika | Material Voal Alaska Premium | Hijab Motif Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'raya-collection-zm-zaskia-mecca-rylou-kemeja-pria-primadona-series-edisi-lilya-senja-koleksi-ramadhan-series' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/f38eec2ded12437ebbe163d5390917b8_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415487',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rylou Kemeja Pria - Primadona Series Edisi Lilya Senja - Koleksi Ramadhan Series foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/0f53d6e577104be097afd2594961af5f_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415487',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rylou Kemeja Pria - Primadona Series Edisi Lilya Senja - Koleksi Ramadhan Series foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/d4c9b5325657435eb5aa6a88e3ba50bb_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415487',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rylou Kemeja Pria - Primadona Series Edisi Lilya Senja - Koleksi Ramadhan Series foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'raya-collection-zm-zaskia-mecca-rienna-tunik-wanita-primadona-series-edisi-lilya-raya-koleksi-ramadhan-series' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-825zr-ml31rmqs52io5f.webp?v=1771996057',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rienna Tunik Wanita | Primadona Series | Edisi Lilya Raya | Koleksi Ramadhan Series foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-8260f-ml31rnlnxkaq05.webp?v=1771996057',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rienna Tunik Wanita | Primadona Series | Edisi Lilya Raya | Koleksi Ramadhan Series foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-825zo-ml31ro0oasqo50.webp?v=1771996057',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Rienna Tunik Wanita | Primadona Series | Edisi Lilya Raya | Koleksi Ramadhan Series foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-jejak-teduh-huta-hijab-voal-alaska-premium-square-hijab-motif-kerudung-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-8262w-ml3ns60k2vie4a.webp?v=1771996087',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Huta | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-8260v-ml3ns6dxswe91c.webp?v=1771996087',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Huta | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-8261k-ml3ns6nu2vwn22.webp?v=1771996087',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Huta | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-jejak-teduh-ruma-hijab-voal-alaska-premium-square-hijab-motif-kerudung-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-8260t-ml3nsd4y8rnme5.webp?v=1771996113',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Ruma | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-82623-ml3nsdgtqb5t57.webp?v=1771996113',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Ruma | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/sg-11134201-825zl-ml3nsdsh3mysd2.webp?v=1771996113',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Jejak Teduh Ruma | Hijab Voal Alaska Premium Square | Hijab Motif Kerudung Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'raya-collection-zm-zaskia-mecca-belani-tunik-wanita-jejak-teduh-ruma-koleksi-ramadhan-series' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/463c7a44b64a4efe8e6beaeb567d6c0a_tplv-aphluv4xwc-origin-jpeg_bd4e3a65-f49c-4a11-80c3-5b1259071467.webp?v=1771996274',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Belani Tunik Wanita - Jejak Teduh Ruma - Koleksi Ramadhan Series foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/cdb4f052e42c4581a4704a4139f2fc7b_tplv-aphluv4xwc-origin-jpeg.webp?v=1771996372',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Belani Tunik Wanita - Jejak Teduh Ruma - Koleksi Ramadhan Series foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/fee6e9742f7f4f89bfabb53b0a138d0e_tplv-aphluv4xwc-origin-jpeg.webp?v=1771996372',
                    'alt_text' => '[Raya Collection] ZM Zaskia Mecca - Belani Tunik Wanita - Jejak Teduh Ruma - Koleksi Ramadhan Series foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ],
            'include-hard-box-zm-zaskia-mecca-scarf-monogram-series-liris-hijab-premium-square-motif-kerudung-segi-empat' => [
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/150315b1e1da4470875aa4f30e3b92bf_tplv-aphluv4xwc-origin-jpeg.webp?v=1774415520',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Monogram Series Liris | Hijab Premium Square Motif Kerudung Segi Empat foto 1',
                    'sort_order' => 0,
                    'is_primary' => true,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/f9b7b925dd1644479007dea51c506785_tplv-o3syd03w52-origin-jpeg.webp?v=1774415520',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Monogram Series Liris | Hijab Premium Square Motif Kerudung Segi Empat foto 2',
                    'sort_order' => 1,
                    'is_primary' => false,
                ],
                [
                    'image_url' => 'https://cdn.shopify.com/s/files/1/0083/3241/0942/files/7f93a33256e74e77872b8308dfb3f636_tplv-o3syd03w52-origin-jpeg.webp?v=1774415520',
                    'alt_text' => '[INCLUDE HARD BOX] ZM Zaskia Mecca - Scarf Monogram Series Liris | Hijab Premium Square Motif Kerudung Segi Empat foto 3',
                    'sort_order' => 2,
                    'is_primary' => false,
                ]
            ]
        ];
        $products = Product::query()->whereIn('slug', array_keys($imagesByProduct))->get()->keyBy('slug');
        foreach ($imagesByProduct as $productSlug => $images) {
            $product = $products->get($productSlug);
            if (! $product) { throw new RuntimeException("Product slug [{$productSlug}] tidak ditemukan."); }
            $keptIds = [];
            foreach ($images as $image) {
                $record = ProductImage::query()->withTrashed()->updateOrCreate(['product_id' => $product->id, 'sort_order' => $image['sort_order']], ['image_url' => $image['image_url'], 'alt_text' => $image['alt_text'], 'is_primary' => $image['is_primary']]);
                if ($record->trashed()) { $record->restore(); }
                $keptIds[] = $record->id;
            }
            ProductImage::query()->where('product_id', $product->id)->whereNotIn('id', $keptIds)->delete();
        }
    }
}
