import { useQuery } from "react-query"

const useOder = () => {
    const { data, isLoading, refetch } = useQuery('orders', () => fetch(' https://electric-gear.herokuapp.com/orders',
        {
            method: 'get',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        }
    ).then(res => res.json())
    )

    return [data, isLoading, refetch]
}

export default useOder