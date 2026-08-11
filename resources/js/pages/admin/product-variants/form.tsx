import { Head, Link, useForm } from '@inertiajs/react';
import { ImageIcon, Save, Upload, X } from 'lucide-react';
import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageHeader } from '@/pages/admin/catalog/shared';

type Product = { id: number; name: string };
type Variant = {
    id: number;
    product_id: number;
    product: string | null;
    sku: string;
    color_name: string | null;
    color_hex: string | null;
    size: string | null;
    additional_price: string;
    stock: number;
    reserved_stock: number;
    image_url: string | null;
    is_active: boolean;
    is_preorder: boolean;
    preorder_lead_days: number | null;
};

type Props = {
    mode: 'create' | 'edit';
    variant: Variant | null;
    products: Product[];
    selectedProductId: number | null;
};

type VariantFormData = {
    _method: 'POST' | 'PUT';
    product_id: string | number;
    sku: string;
    color_name: string;
    color_hex: string;
    size: string;
    additional_price: string | number;
    stock: string | number;
    reserved_stock: string | number;
    image: File | null;
    is_active: boolean;
    is_preorder: boolean;
    preorder_lead_days: string | number;
};

type ValidationErrors = Record<string, string>;

const MAX_IMAGE_BYTES = 4096 * 1024;
const COLOR_HEX_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function isEmpty(value: unknown): boolean {
    return value === '' || value === null || value === undefined;
}

function numericValue(value: unknown): number | null {
    if (isEmpty(value)) {
        return null;
    }

    const number = Number(value);

    return Number.isFinite(number) ? number : Number.NaN;
}

function validateText(
    errors: ValidationErrors,
    key: string,
    value: string,
    label: string,
    max: number,
    required = false,
) {
    if (value === '') {
        if (required) {
            errors[key] = `${label} wajib diisi.`;
        }

        return;
    }

    if (value.length > max) {
        errors[key] = `${label} maksimal ${max} karakter.`;
    }
}

function validateNumber(
    errors: ValidationErrors,
    key: string,
    value: unknown,
    label: string,
    required = false,
    integer = false,
) {
    const number = numericValue(value);

    if (number === null) {
        if (required) {
            errors[key] = `${label} wajib diisi.`;
        }

        return;
    }

    if (Number.isNaN(number)) {
        errors[key] = `${label} harus berupa angka.`;
    } else if (integer && !Number.isInteger(number)) {
        errors[key] = `${label} harus berupa bilangan bulat.`;
    } else if (number < 0) {
        errors[key] = `${label} tidak boleh kurang dari 0.`;
    }
}

function validateVariant(
    data: VariantFormData,
    products: Product[],
): ValidationErrors {
    const errors: ValidationErrors = {};
    const productId = numericValue(data.product_id);

    if (productId === null) {
        errors.product_id = 'Produk wajib dipilih.';
    } else if (
        Number.isNaN(productId) ||
        !Number.isInteger(productId) ||
        !products.some((product) => product.id === productId)
    ) {
        errors.product_id = 'Produk tidak valid.';
    }

    validateText(errors, 'sku', data.sku, 'SKU', 100, true);
    validateText(errors, 'color_name', data.color_name, 'Nama warna', 100);
    validateText(errors, 'size', data.size, 'Ukuran', 50);
    validateNumber(
        errors,
        'additional_price',
        data.additional_price,
        'Harga tambahan',
    );
    validateNumber(errors, 'stock', data.stock, 'Stok', true, true);
    validateNumber(
        errors,
        'reserved_stock',
        data.reserved_stock,
        'Reserved stock',
        true,
        true,
    );

    if (data.color_hex !== '' && !COLOR_HEX_PATTERN.test(data.color_hex)) {
        errors.color_hex = 'Color hex harus berformat #RGB atau #RRGGBB.';
    }

    const stock = numericValue(data.stock);
    const reservedStock = numericValue(data.reserved_stock);

    if (
        stock !== null &&
        reservedStock !== null &&
        !Number.isNaN(stock) &&
        !Number.isNaN(reservedStock) &&
        reservedStock > stock
    ) {
        errors.reserved_stock =
            'Reserved stock tidak boleh lebih besar dari stock.';
    }

    if (data.image) {
        if (!data.image.type.startsWith('image/')) {
            errors.image = 'File harus berupa gambar.';
        } else if (data.image.size > MAX_IMAGE_BYTES) {
            errors.image = 'Ukuran gambar maksimal 4096 KB.';
        }
    }

    if (data.is_preorder) {
        validateNumber(
            errors,
            'preorder_lead_days',
            data.preorder_lead_days,
            'Jumlah hari pre-order',
            true,
            true,
        );

        if (numericValue(data.preorder_lead_days) === 0) {
            errors.preorder_lead_days = 'Jumlah hari pre-order minimal 1 hari.';
        }
    }

    return errors;
}

export default function ProductVariantForm({
    mode,
    variant,
    products,
    selectedProductId,
}: Props) {
    const isEdit = mode === 'edit' && variant !== null;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(
        variant?.image_url ?? null,
    );

    const { data, setData, post, processing, errors } =
        useForm<VariantFormData>({
            _method: isEdit ? 'PUT' : 'POST',
            product_id: variant?.product_id ?? selectedProductId ?? '',
            sku: variant?.sku ?? '',
            color_name: variant?.color_name ?? '',
            color_hex: variant?.color_hex ?? '',
            size: variant?.size ?? '',
            additional_price: variant?.additional_price ?? 0,
            stock: variant?.stock ?? 0,
            reserved_stock: variant?.reserved_stock ?? 0,
            image: null as File | null,
            is_active: variant?.is_active ?? true,
            is_preorder: variant?.is_preorder ?? false,
            preorder_lead_days: variant?.preorder_lead_days ?? '',
        });
    const [touched, setTouched] = useState<Set<string>>(() => new Set());
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [fileInputKey, setFileInputKey] = useState(0);
    const validationErrors = validateVariant(data, products);

    const touch = (key: string) => {
        setTouched((current) => new Set(current).add(key));
    };

    const fieldError = (key: string) => {
        const serverError = (errors as Record<string, string | undefined>)[key];

        if (serverError) {
            return serverError;
        }

        return submitAttempted || touched.has(key)
            ? validationErrors[key]
            : undefined;
    };

    const visibleErrors = Array.from(
        new Set([
            ...Object.values(errors),
            ...(submitAttempted ? Object.values(validationErrors) : []),
        ]),
    ).filter((error): error is string => Boolean(error));

    useEffect(() => {
        return () => {
            if (preview?.startsWith('blob:')) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        touch('image');
        setData('image', file);

        if (
            file &&
            !validateVariant({ ...data, image: file }, products).image
        ) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(variant?.image_url ?? null);
        }
    };

    const clearImage = () => {
        setData('image', null);
        setPreview(null);
        touch('image');
        setFileInputKey((current) => current + 1);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitAttempted(true);

        if (Object.keys(validationErrors).length > 0) {
            requestAnimationFrame(() =>
                document
                    .getElementById('variant-validation-summary')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
            );

            return;
        }

        const url = isEdit
            ? `/admin/product-variants/${variant.id}`
            : '/admin/product-variants';
        post(url, { forceFormData: true });
    };

    return (
        <>
            <Head title={isEdit ? 'Edit Variant' : 'Create Variant'} />
            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                <PageHeader
                    eyebrow="Catalog Management"
                    title={isEdit ? 'Edit Variant' : 'Create Variant'}
                    description="SKU varian unik, stok tidak negatif, dan reserved stock tidak boleh lebih besar dari stok."
                />
                <Card className="max-w-4xl">
                    <CardHeader>
                        <CardTitle>Variant Information</CardTitle>
                        <CardDescription>
                            Perubahan stok melalui form ini tetap dicatat ke
                            stock logs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={submit}
                            onBlurCapture={(event) => {
                                const key = (
                                    event.target as unknown as HTMLInputElement
                                ).name;

                                if (key) {
                                    touch(key);
                                }
                            }}
                            className="flex flex-col gap-5"
                        >
                            {visibleErrors.length > 0 && (
                                <div
                                    id="variant-validation-summary"
                                    role="alert"
                                    className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
                                >
                                    <p className="text-sm font-semibold">
                                        Periksa data varian sebelum disimpan.
                                    </p>
                                    <ul className="mt-2 list-inside list-disc space-y-1 text-xs">
                                        {visibleErrors.map((error) => (
                                            <li key={error}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="grid gap-5 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="product_id">Product</Label>
                                    <select
                                        id="product_id"
                                        name="product_id"
                                        value={data.product_id}
                                        onChange={(event) =>
                                            setData(
                                                'product_id',
                                                event.target.value,
                                            )
                                        }
                                        className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                                    >
                                        <option value="">Select product</option>
                                        {products.map((product) => (
                                            <option
                                                key={product.id}
                                                value={product.id}
                                            >
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={fieldError('product_id')}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="sku">SKU</Label>
                                    <Input
                                        id="sku"
                                        name="sku"
                                        value={data.sku}
                                        placeholder="e.g. GMS-001-BLK-M"
                                        onChange={(event) =>
                                            setData('sku', event.target.value)
                                        }
                                    />
                                    <InputError message={fieldError('sku')} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="color_name">
                                        Color Name
                                    </Label>
                                    <Input
                                        id="color_name"
                                        name="color_name"
                                        value={data.color_name}
                                        placeholder="e.g. Black, Ivory, Sage"
                                        onChange={(event) =>
                                            setData(
                                                'color_name',
                                                event.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={fieldError('color_name')}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="color_hex">Color Hex</Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="color_hex"
                                            name="color_hex"
                                            type="color"
                                            value={data.color_hex || '#000000'}
                                            onChange={(event) =>
                                                setData(
                                                    'color_hex',
                                                    event.target.value,
                                                )
                                            }
                                            className="h-9 w-14 p-1"
                                        />
                                        <Input
                                            name="color_hex"
                                            value={data.color_hex}
                                            placeholder="#000000"
                                            onChange={(event) =>
                                                setData(
                                                    'color_hex',
                                                    event.target.value,
                                                )
                                            }
                                            className="font-mono text-xs"
                                        />
                                    </div>
                                    <InputError
                                        message={fieldError('color_hex')}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="size">Size</Label>
                                    <Input
                                        id="size"
                                        name="size"
                                        value={data.size}
                                        placeholder="e.g. S, M, L, XL"
                                        onChange={(event) =>
                                            setData('size', event.target.value)
                                        }
                                    />
                                    <InputError message={fieldError('size')} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="additional_price">
                                        Additional Price
                                    </Label>
                                    <Input
                                        id="additional_price"
                                        name="additional_price"
                                        type="number"
                                        min="0"
                                        value={data.additional_price}
                                        placeholder="0"
                                        onChange={(event) =>
                                            setData(
                                                'additional_price',
                                                event.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={fieldError('additional_price')}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input
                                        id="stock"
                                        name="stock"
                                        type="number"
                                        min="0"
                                        value={data.stock}
                                        placeholder="0"
                                        onChange={(event) =>
                                            setData('stock', event.target.value)
                                        }
                                    />
                                    <InputError message={fieldError('stock')} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="reserved_stock">
                                        Reserved Stock
                                    </Label>
                                    <Input
                                        id="reserved_stock"
                                        name="reserved_stock"
                                        type="number"
                                        min="0"
                                        value={data.reserved_stock}
                                        placeholder="0"
                                        onChange={(event) =>
                                            setData(
                                                'reserved_stock',
                                                event.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={fieldError('reserved_stock')}
                                    />
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="grid gap-2 md:col-span-2">
                                <Label>Variant Image</Label>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                                    {/* Preview */}
                                    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-muted">
                                        {preview ? (
                                            <>
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="h-full w-full object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={clearImage}
                                                    className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </>
                                        ) : (
                                            <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                                        )}
                                    </div>

                                    {/* Drop zone */}
                                    <div
                                        className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center transition hover:border-primary/60 hover:bg-muted/50"
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                    >
                                        <Upload className="h-6 w-6 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">
                                            Klik untuk upload atau drag &amp;
                                            drop gambar
                                        </p>
                                        <p className="text-xs text-muted-foreground/60">
                                            JPG, PNG, WEBP — maks. 4 MB
                                        </p>
                                        <input
                                            key={fileInputKey}
                                            ref={fileInputRef}
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                                <InputError message={fieldError('image')} />
                            </div>

                            <label className="flex items-start gap-3 rounded-lg border p-4 text-sm">
                                <input
                                    type="checkbox"
                                    name="is_active"
                                    checked={data.is_active}
                                    onChange={(event) =>
                                        setData(
                                            'is_active',
                                            event.target.checked,
                                        )
                                    }
                                    className="mt-1"
                                />
                                <span>
                                    <span className="block font-medium">
                                        Active variant
                                    </span>
                                    <span className="text-muted-foreground">
                                        Varian aktif bisa tampil dan dibeli
                                        customer jika stok tersedia.
                                    </span>
                                </span>
                            </label>

                            <div className="grid gap-3 rounded-lg border p-4">
                                <label className="flex items-start gap-3 text-sm">
                                    <input
                                        type="checkbox"
                                        name="is_preorder"
                                        checked={data.is_preorder}
                                        onChange={(event) =>
                                            setData(
                                                'is_preorder',
                                                event.target.checked,
                                            )
                                        }
                                        className="mt-1"
                                    />
                                    <span>
                                        <span className="block font-medium">
                                            Pre-order
                                        </span>
                                        <span className="text-muted-foreground">
                                            Customer dapat memesan tanpa
                                            mengurangi stok.
                                        </span>
                                    </span>
                                </label>
                                {data.is_preorder && (
                                    <div className="grid gap-2 sm:max-w-xs">
                                        <Label htmlFor="preorder_lead_days">
                                            Tersedia dalam berapa hari?
                                        </Label>
                                        <Input
                                            id="preorder_lead_days"
                                            name="preorder_lead_days"
                                            type="number"
                                            min="1"
                                            step="1"
                                            value={data.preorder_lead_days}
                                            onChange={(event) =>
                                                setData(
                                                    'preorder_lead_days',
                                                    event.target.value,
                                                )
                                            }
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Contoh: 7 hari dari hari ini.
                                        </p>
                                        <InputError
                                            message={fieldError(
                                                'preorder_lead_days',
                                            )}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end gap-3 border-t pt-5">
                                <Button asChild type="button" variant="outline">
                                    <Link href="/admin/product-variants">
                                        Cancel
                                    </Link>
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    <Save />
                                    Save Variant
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
