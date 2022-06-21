import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";

const useOder = () => {
  const { data, isLoading, refetch } = useQuery("orders", () =>
    fetch(" https://electric-gear.herokuapp.com/orders", {
      method: "get",
      mode: "no-cors",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );

  console.log(data);
  return [data, isLoading];
};

export default useOder;
