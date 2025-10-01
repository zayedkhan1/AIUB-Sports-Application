export const sportsCreatedByPromise = (email) => {
    return fetch(`http://localhost:5000/sportsbyemail?email=${email}`)
        .then(res => res.json())
}