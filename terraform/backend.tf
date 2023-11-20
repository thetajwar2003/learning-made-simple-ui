terraform {
  backend "s3" {
    bucket = "terraform-state-lms-mohammedmasc6" 
    key    = "core/terraform.tfstate"
    region = "us-east-1"
  }
}
