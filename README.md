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
WIP
  


