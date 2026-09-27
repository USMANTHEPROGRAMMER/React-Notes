import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// Clean async/await fetch function
const fetchProduct = async (productId) => {
  const response = await axios.get(
    `https://dummyjson.com/products/${productId}`,
  );
  return response.data;
};

const Product = () => {
  const { productId } = useParams();

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    retry: false, // Prevents react-query from retrying 3 times on 404 error
  });

  console.log("Loading State", isPending);

  console.log("Error State", isError);

  console.log("Actual Error", error);

  console.log(data);

  if (isPending) {
    return <div>Loading...</div>;
  }

  // Handle 404 or API Errors specifically inside the component
  if (isError) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-6xl font-bold text-red-500">Error 404</h1>
        <p className="text-2xl mt-4">
          Product with ID "{productId}" not found!
        </p>
      </div>
    );
  }

  return (
    <div className="App text-6xl flex gap-5 flex-col text-center items-center justify-center">
      <h1>Product: {data?.title}</h1>
      <button
        className="font-bold py-2 w-1/2 rounded-xl cursor-pointer border-2"
        onClick={refetch}
      >
        Refetch
      </button>
    </div>
  );
};

export default Product;
