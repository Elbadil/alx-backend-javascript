export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => {
      const error = new Error();
      return error;
    });
  console.log('Got a response from the API');
}
