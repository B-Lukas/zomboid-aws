import * as cdk from 'aws-cdk-lib';
import { ZomboidAwsStack } from '../lib/zomboid-aws-stack';

const app = new cdk.App();
new ZomboidAwsStack(app, 'ProjectZomboidCdkStack');
