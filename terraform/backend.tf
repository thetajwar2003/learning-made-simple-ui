terraform {
  backend "s3" {
    bucket = "terraform-state-lms" 
    key    = "core/terraform.tfstate"
    region = "us-east-1"
  }
}