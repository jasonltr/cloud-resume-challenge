from itsdangerous import json
import requests
import json
from jsonschema import validate
from jsonschema import Draft6Validator


def test():
    host_url = "https://jltrcloudresume.azurewebsites.net/api/HttpTrigger1?code=YrK7qxuu8GgR/vga1njxZ2kHaKJaGtGTmwa2D6aiSZvCGzOTaxYRLw=="
    response_code = requests.get(host_url)
    assert response_code.status_code == 200