export default function newsCall(api) {
    return fetch(api)
    .then(response => {
        if(!response.ok) {
            // throw new Error (`${error}: Failed to fetch data`)
            console.log('error')
        }
        // console.log(response.json())
        return response.json();
    })
}