
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://jltrcloudresume.azurewebsites.net/api/HttpTrigger1?'
const getVisitCount = () => {
    let count = 0;

    fetch(apiGateway, {
        node: 'cors',
    }).then(response => {
        return response.json()
    }).then(res => {
        const count = res;
        document.getElementById('counter').innerText = count;
    });
    return count;
}