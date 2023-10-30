import { Product } from '@/entities/Product';

type IncomingImage = Buffer | null;

export const productImageAdapter = (imageObject: IncomingImage) =>
    imageObject !== null
        ? `data:image/png;base64,${Buffer.from(imageObject).toString('base64')}`
        : null;

export type IncomingProduct = {
    id: number;
    name: string;
    price: string;
    image: IncomingImage;
};

export const productAdapter = (product: IncomingProduct): Product => ({
    id: product.id,
    name: product.name,
    price: parseFloat(product.price),
    image: productImageAdapter(product.image),
});

export const productListAdapter = (productList: IncomingProduct[]) => {
    console.log(productList);
    return productList.map(productAdapter);
};
