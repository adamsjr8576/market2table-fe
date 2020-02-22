export const getMarketsByZip = (zipCode) => {
    return fetch(REACT_APP_BACKEND_URL + `/markets?zip=${zipCode}`)
        .then(response => {
            if (!response.ok) {
                throw Error('Error fetching markets');
            }
            return response.json();
        });
}