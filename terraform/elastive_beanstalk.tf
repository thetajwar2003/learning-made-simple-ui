resource "aws_elastic_beanstalk_application" "application" {
  name = "LMS" # Replace with your application name
}

resource "aws_elastic_beanstalk_environment" "myenv" {
  name                = "LMS-environment"
  cname_prefix        = "nafisk"
  application         = aws_elastic_beanstalk_application.application.name
  solution_stack_name = "64bit Amazon Linux 2 v5.8.8 running Node.js 18"

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }

  # Add more settings as needed
}
