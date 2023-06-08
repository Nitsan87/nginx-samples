# Nginx Reverse Proxy Sample

## - Run nginx container 
```
docker run -d -p 8000:80 -v ./static-html:/usr/share/nginx/html --name nginx-sample nginx

docker cp ./default.conf nginx-sample:/etc/nginx/conf.d/

docker exec nginx-sample nginx -t

docker exec nginx-sample nginx -s reload
```

## - Run node sample app in multiple containers (x4):
```
cd node-server

docker build . -t node-sample-app 

docker run -p 1111:5000 -d node-sample-app 
docker run -p 2222:5000 -d node-sample-app 
docker run -p 3333:5000 -d node-sample-app 
docker run -p 4444:5000 -d node-sample-app 
```

## Go To >>> http://localhost:8000/node
## refresh the page and each time u need to get other container id
