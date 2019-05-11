export const functions = {
    fetchUser: () => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.username )
        .catch(err => "failed")

    }
}

