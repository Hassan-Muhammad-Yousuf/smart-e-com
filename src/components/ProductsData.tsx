"use Client";
import { ItemProps } from "../../type";
import Image from "next/image";

const ProductData = ({ item } : ItemProps) => {
    console.log(item);

    return <div className="w-full rounded-lg overflow-hidden">
        <div>
            <Image src={item?.image} 
            alt="product image" 
            width={500} 
            height={500} />
        </div>
    </div>
};

export default ProductData;