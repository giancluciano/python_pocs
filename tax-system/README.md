# Tax System

TAX system where different products have different tax per state and year.


```bash
# Build images
eval $(minikube docker-env)
docker build -t tax-frontend:latest ./frontend

# Create namespace and apply manifests
kubectl create namespace tax-system
kubectl apply -f manifests/ -n tax-system

# Check services
minikube service frontend --url -n tax-system
k9s -n tax-system
```