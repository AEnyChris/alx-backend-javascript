/**
 * implement a function with three handlers
 */

export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'success' }))
    .then(() => { console.log('Got a response from the API'); })
    .catch(() => new Error());
}
