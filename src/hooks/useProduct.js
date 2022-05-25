import { useQuery } from "react-query"

const useProduct = () => {
    const { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/tools')

        .then(res => res.json()))
    return [data, isLoading, refetch]
}
export default useProduct