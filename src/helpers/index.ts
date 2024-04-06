export const getProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    if (!res.ok) {
        throw new Error("Failed to fetch Products");
    }
    return res.json();
};