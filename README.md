## Cloud resume challenge ##

# Set up Git Repo #
I intialised a git repo from my terminal using the following commands

First using `cd` to move to a working directory
`mkdir cloud-challenge-resume`
`cd cloud-challenge-resume`
`git init`
`git add .`
`touch README.md`
`git commit -m "initial commit"`

Use the github API to create a repo on my github account

`curl -u jasonltr https://api.github.com/user/repos -d '{"name":"cloud-resume-challenge" "private":false}`

I used a personal access token from github to run commands that require access into my github account

`git remote add origin https://github.com/jasonltr/cloud-resume-challenge`
`git remote add origin git@github.com:jasonltr/cloud-resume-challange`
`git push -u origin master`
