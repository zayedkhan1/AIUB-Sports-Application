export const sportsCreatedByPromise = (email) => {
    return fetch(`${import.meta.env.VITE_API_URL}/sportsbyemail?email=${email}`)
        .then(res => res.json())
}