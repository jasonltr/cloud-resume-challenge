
import requests
import json
from jsonschema import validate
from jsonschema import Draft6Validator

def test_website():
    websiteurl = "https://jasonltr.com"
    websiteurl_response_code = requests.get(websiteurl)
    assert websiteurl_response_code.status_code == 200
def test_counter():
    counterapi = "https://jltrcloudresume.azurewebsites.net/api/HttpTrigger1?code=YrK7qxuu8GgR/vga1njxZ2kHaKJaGtGTmwa2D6aiSZvCGzOTaxYRLw=="
    counterapi_response_code = requests.get(counterapi)
    assert counterapi_response_code.status_code == 200
def test_url1():
    az900cert = "https://bityl.co/Avrz"       
    az9000cert_response_code = requests.get(az900cert)
    assert az9000cert_response_code.status_code == 200
def test_url2():
    googleitcert = "https://bityl.co/AJpR"
    googleitcert_response_code = requests.get(googleitcert)
    assert googleitcert_response_code.status_code == 200
def test_url3():
    pythoncert = "https://bityl.co/AJpP"
    pythoncert_response_code = requests.get(pythoncert)
    assert pythoncert_response_code.status_code == 200