app = "gobananas"
environment = "dev"

internal = "false"
container_port = "8080"
replicas = "1"
health_check = "/health"
region = "us-east-1"
aws_profile = "default"
vpc = "vpc-e2daad98"
private_subnets = "subnet-4bf51f06,subnet-6cbed052,subnet-7606212a,subnet-7e022350"
public_subnets = "subnet-4bf51f06,subnet-6cbed052,subnet-7606212a,subnet-7e022350"
tags = {
  application = "gobananas"
  environment = "dev"
}