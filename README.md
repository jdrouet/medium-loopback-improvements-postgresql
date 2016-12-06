# [MEDIUM] Loopback optimization with postgresql

## Dependencies

```bash
# install docker
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates apache2-utils
sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
sudo apt-get update
sudo apt-get install docker-engine
sudo usermod -aG docker $USER
# install node version manager
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
# install node
nvm install 6.9
```

And now reboot!

## Installation

```bash
# install postgresql with docker
docker run -d -p 5432:5432 --name postgres postgres
# create a user in postgresql
createuser -h localhost -U postgres loopbackoptimization
# create a database in postgresql
createdb -h localhost -U postgres -O loopbackoptimization loopbackoptimization
# go in the folder
cd medium-loopback-improvements-postgresql
# install the dependencies
npm install
# migrate your database
npm run database:up
# load some data
npm run generate
# start the server watcher
npm start
```

## Errors

### I can't start postgres!

Error :
```
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
```

Solution : restart your computer !

