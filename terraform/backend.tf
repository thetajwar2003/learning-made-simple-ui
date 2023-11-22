terraform {
  backend "s3" {
    bucket = "terraform-state-lms-nafisk" 
    key    = "core/terraform.tfstate"
    region = "us-east-2"
  }
}
