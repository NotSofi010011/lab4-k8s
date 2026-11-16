# booking-k8s

Розгортання сервісу бронювання короткострокової оренди житла в Kubernetes (minikube).

    docker build -t booking-backend:1.0 ./app/backend
    docker build -t booking-frontend:1.0 ./app/frontend
    minikube image load booking-backend:1.0
    minikube image load booking-frontend:1.0
    kubectl apply -f k8s/
