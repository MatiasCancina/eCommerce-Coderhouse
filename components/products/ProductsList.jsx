import ProductCard from "./ProductCard";

const ProductsList = async ({ category }) => {
  const items = await fetch(
    `http://${process.env.VERCEL_URL}/api/products/${category}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 30,
      },
    }
  ).then((r) => r.json());

  try {
    if (!items || !items.length) throw Error("No products yet");

    return (
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {items.map((item) => (
          <div className="w-full" key={item.id}>
            <ProductCard key={item.id} item={item} />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    return <p>No products yet</p>;
  }
};

export default ProductsList;
