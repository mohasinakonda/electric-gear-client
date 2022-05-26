import { useQuery } from "react-query"

const useProduct = () => {
    const { data, isLoading, refetch } = useQuery('products', () => fetch(' https://electric-gear.herokuapp.com/tools')

        .then(res => res.json()))
    return [data, isLoading, refetch]
}
export default useProduct