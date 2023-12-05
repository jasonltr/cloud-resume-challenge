# [Cloud resume challenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/) #

## Set up Git Repo ##
I intialised a git repo from my terminal using the following commands  
  
First using `cd` to move to a working directory  
`mkdir cloud-challenge-resume`  
`cd cloud-challenge-resume`  
`git init`  
`git add .`  
`touch README.md`  
`git commit -m "initial commit"`  
  
Use the github API to create a repo on my github account  
  
`curl -u jasonltr https://api.github.com/user/repos -d '   {"name":"cloud-resume-challenge" "private":false}`  
  
I used a personal access token from github to run commands that require access into my github account  
  
`git remote add origin https://github.com/jasonltr/cloud-resume-challenge`  
`git remote add origin git@github.com:jasonltr/cloud-resume-challange`  
`git push -u origin master`  
  
Starting editing on VS code subsequently  
  
Uploaded html and css files, got the template from [SRT](https://sampleresumetemplate.net/)  
  
## Azure ##  
  
Did `az login`
  
Created resource group  
`az group create \`  
  `--name storage-resource-group \`  
  `--location southeastasia`  
  
Created storage account  
`az storage account create \`  
  `--name jltrcloudresumechallenge\`  
  `--resource-group storage-resource-group \`  
  `--location southeastasia \`  
  `--sku Standard_RAGRS \`  
  `--kind StorageV2`  

Enable static website hosting from blob storage  
`az storage blob service-properties update --account-name jltrcloudresumechallenge --static-website --404-document 404.html --index-document resume.html`  

Upload required files onto a $web container  
`az storage blob upload-batch -s /home/jason/Documents/GitHub/cloud-resume-challenge -d '$web' --account-name jltrcloudresumechallenge`  

Get the URL of the website  
`az storage account show -n jltrcloudresumechallenge -g storage-resource-group --query "primaryEndpoints.web" --output tsv`  
[URL](https://jltrcloudresumechallenge.z23.web.core.windows.net/)  
  
## DNS rerouting to my own custom domain ##  
Bought my own customr domain jasonltr.com on Cloudflare  
Created a CDN endpoint on Azure following [tutorial](https://docs.microsoft.com/en-us/azure/storage/blobs/static-website-content-delivery-network)  
Created the relevant CNAMES on Cloudflare dashboard to do the redirecting  
Enabled https only on Cloudflare and no www. required when entering my URL  
So just entering jasonltr.com should work  

  
## Web Counter using javascript ##  
I followed a tutorial online [link](https://contactmentor.com/build-website-visitor-counter-javascript/)  
Created CosmosDB, Azure Function,


Have to enable CORS settings on Azure portal API (sorry for general instruction but just google it)  
  
## Testing and CI/CD workflow using github actions ##  
Wrote python script under test to test the urls to ensure a 200 response is returned AKA instead of manually checking all the urls by clicking on them manually the pythong script does it for me  
  
Wrote the two YAML files to provide the sequence of events to be triggered when a push to [master] branch webpage directory. 
  
The first YAML file is to run the test script   
  
The second YAML file is to automatically upload my updated frontend files onto the blob storage and to purge the CDN endpoint to update my website.  
There is a need to configure the credentials from your azure account. I created a service principal using  
`az ad sp create-for-rbac --name "myApp" --role contributor --scopes /subscriptions/<subscriptionid>/resourceGroups/<resource group name> --sdk-auth`  
Copied the Json output and went to my Github repo, created a secret and pasted the Json there and gave the secret a name  
The YAML file will call this secret using `${{ secrets.AZURE_CREDENTIALS }}`  

#backup
#backup2