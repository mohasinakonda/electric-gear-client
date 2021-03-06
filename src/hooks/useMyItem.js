import { useQuery } from "react-query"

const useMyItems = (user) => {

    const { data, isLoading, refetch } = useQuery('my-items', () => fetch(` https://electric-gear.herokuapp.com/order?email=${user.email}`, {
        method: 'get',
        headers: {
            'authorization': `Bearen ${localStorage.getItem('access-token')}`
        }
    })
        .then(product => product.json())
    )
    return [data, isLoading, refetch]
}
export default useMyItems