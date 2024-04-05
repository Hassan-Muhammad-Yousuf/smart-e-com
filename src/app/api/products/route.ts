import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async()=>{
    try{
        return NextResponse.json({
            message: "Product fetched Successfully",
            sucess: true,
            productData,
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: "Unable to Load the Product",
            },
            { status: 500 }
       );
    }
};