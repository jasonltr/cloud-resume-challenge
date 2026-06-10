const functionApi = 'https://jltrcloudresume.azurewebsites.net/api/HttpTrigger1?code=YrK7qxuu8GgR/vga1njxZ2kHaKJaGtGTmwa2D6aiSZvCGzOTaxYRLw=='; 
// test
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.text()
    })
    .then(response => {
        console.log("Website called function API.",response);
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}

getVisitCount();