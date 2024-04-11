import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  
  console.log('ITEM', item.image);
  
  return (
    <article className="shadow-lg rounded m-3 hover:translate-y-1 hover:shadow-2xl transition">
      <Link
        href={`/detail/${item.id}`}
        className="flex flex-col rounded border border-borderGray"
      >
        <div className="border-b border-b-borderGray p-3 mb-2 flex justify-center items-center">
          <Image
            alt={item.title}
            src={`${item.image}`}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="space-y-2 p-3 ">
          <h4 className="text-black">{item.title}</h4>
          <p className="text-lg text-black lg:text-2xl font-medium">${item.price}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
