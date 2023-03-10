const findMyState = () => {
    const status = document.querySelector('.status')
    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longtitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`

        const xhr = new XMLHttpRequest();
        xhr.open('GET', geoApiUrl);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status === 200) {
                status.textContent = xhr.response.principalSubdivision;
            } else {
                status.textContent = 'Nemohu najít tvoji lokaci';
            }
        };
        xhr.send();
    };

    const error = () => {
        status.textContent = 'Nemohu najít tvoji lokaci';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-state').addEventListener('click', function (event) {
    event.preventDefault();
    findMyState();
});
