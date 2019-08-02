app = "gobananas"
environment = "dev"

internal = "false"
container_port = "8080"
replicas = "1"
health_check = "/health"
region = "us-east-1"
aws_profile = "default"
vpc = "vpc-7d779716"
private_subnets = "subnet-8b61c8c7,subnet-862667fc,subnet-8b61c8c7"
public_subnets = "subnet-8b61c8c7,subnet-862667fc,subnet-8b61c8c7"
tags = {
  application = "gobananas"
  environment = "dev"
}