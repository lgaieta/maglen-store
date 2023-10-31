function ProductPage({ params }: { params: { id: string } }) {
    return <main className=''>{params.id}</main>;
}

export default ProductPage;
