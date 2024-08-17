import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ZomboidAwsStack } from '../lib/zomboid-aws-stack';

test('Stack creates an EC2 instance', () => {
  const app = new cdk.App();
  const stack = new ZomboidAwsStack(app, 'TestStack');

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::EC2::Instance', {
    InstanceType: 't2.micro',
  });
});
