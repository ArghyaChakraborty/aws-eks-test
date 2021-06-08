### Test AWS EKS Backend Service
This is a mock node express service which says `Hello <name>` (the name should be passed as query parameter)

### Running locally
- In command line, cd to this directory
- `npm install`
- `npm start`
- The server will start at port 8080
- In browser, type `http://localhost:8080/name=<your name>`
- You will receive response as `Hello <your name> !!!`

### Creating docker image
- In command line, cd to this directory
- `docker build -t <your artifactory user name>/aws-eks-test-backend:<version> .`
- `docker push <your artifactory user name>/aws-eks-test-backend:<version>`
- This will upload the image to your artifactory server

### Deploying the service in Kubernetes cluster
- In command line, cd to this directory
- `cd deployment/aws-eks-test-backend`
- `helm install aws-eks-test-backend . -n <existing k8s namespace, if ignored, default namespace is assumed>`
