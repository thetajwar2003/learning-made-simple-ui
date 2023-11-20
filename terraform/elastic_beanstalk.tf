resource "aws_elastic_beanstalk_application" "application" {
    name = "lms"  
}

resource "aws_elastic_beanstalk_environment" "environment" {
  name                = "lms-environment"
  cname_prefix        = "trahmanlms"
  application         = aws_elastic_beanstalk_application.application.name
  solution_stack_name = "64bit Amazon Linux 2023 v6.0.3 running Node.js 18"
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "learning-made-simple"
  }
}