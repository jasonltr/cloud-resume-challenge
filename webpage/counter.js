
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://getcounterjltr.azurewebsites.net/api/HttpTrigger1counter?code=hxxcoXuvu0qbp/elm089NRCTdPGdQSoRoJ6MuBe3WDB1m8NQqW9HDw=='
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