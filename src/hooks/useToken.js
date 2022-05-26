import { useEffect, useState } from "react"

const useToken = (user, displayName) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const name = user?.user?.displayName || displayName

        const currentUser = { email: email, name: name }

        if (email) {

            fetch(` https://electric-gear.herokuapp.com/users/${email}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token
                    if (token) {
                        localStorage.setItem('access-token', token)
                        setToken(token)
                    }
                })
        }
    }, [user, displayName])
    return [token]
}

export default useToken