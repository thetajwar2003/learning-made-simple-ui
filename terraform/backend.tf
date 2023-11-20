terraform {
  backend "s3" {
    bucket = "terraform-state-lms-thetajwar2003" 
    key    = "core/terraform.tfstate"
    region = "us-east-1"
  }
}