#!/bin/bash

set -f

server=$DEPLOY_SERVER
user=$DEPLOY_USER
branch=$DEPLOY_BRANCH
gittoken=$DEPLOY_GITLAB_TOKEN
gituser=$DEPLOY_GITLAB_USER

echo "Deploying project on server ${server} as ${user} from branch ${branch}"

apt-get update && apt-get install -y openssh-client

## Rolling Update

# command="ls -ltr && \
#  cd /home/devuser/gablumplatform && \
#  git pull origin ${branch} && \
#  docker-compose up --build -d --remove-orphans && \
#  echo 'DONE DEPLOYING'"

Complete Build

# command="ls -ltr && \
#  mkdir -p /home/devuser/gablumplatform && \
#  cd /home/devuser/gablumplatform && \
#  docker-compose -f docker-compose.yml down && \
#  cd /home/devuser && \
#  rm -rf /home/devuser/gablumplatform && \
#  git clone https://${gituser}:${gittoken}@gitlab.stackroute.in/gablum/gablumplatform.git -b ${branch} && \
#  cd /home/devuser/gablumplatform && \
#  echo 'Deploying the Gablum Application' && \
#  docker-compose up --build -d --remove-orphans && \
#  echo 'DONE DEPLOYING'"

command="ls -ltr && \
 mkdir -p /home/devuser && \
 cd /home/devuser && \
 git clone https://${gituser}:${gittoken}@gitlab.stackroute.in/gablum/gablumplatform.git -b ${branch} && \
 cd /home/devuser/gablumplatform && \
 echo 'Deploying the Gablum Application' && \
 docker-compose up --build -d --remove-orphans && \
 echo 'DONE DEPLOYING'"



echo "About to run the command: " $command

ssh $user@$server $command