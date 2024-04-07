import React from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";

const CartItem = () => {
    const {productData} = useSelector((state: StateProps) => state?.shopping);

    return(
        <div className="flex flex-col gap-y-2">
            <div className="hidden lg:inline-flex items-center justify-between
            font-semibold bg-white p-2">
                <p className="w-1/3">Product</p>
                <p className="w-1/3 flex items-center justify-center">Quantity</p>
                <p className="w-1/3 flex items-center justify-end">Subtotal</p>
            </div>
            {/* Product Generation */}
            <div></div>
        </div>
    )
};

export default CartItem;