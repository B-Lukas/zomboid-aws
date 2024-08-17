import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Instance, InstanceType, AmazonLinuxImage, Vpc, Port } from 'aws-cdk-lib/aws-ec2';
import { ManagedPolicy } from 'aws-cdk-lib/aws-iam';

export class ZomboidAwsStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new Vpc(this, 'ProjectZomboidVPC', {});

        const instance = new Instance(this, 'ProjectZomboidServer', {
            vpc,
            instanceType: new InstanceType('t2.micro'), // Use t2.micro for free tier, TODO
            machineImage: new AmazonLinuxImage(), // Amazon Linux 2 AMI <- TODO Ubuntu
            keyName: 'your-key-pair-name', // TODO
        });

        // Allow incoming traffic on port 16261 (Project Zomboid default server port)
        instance.connections.allowFromAnyIpv4(Port.tcp(16261), 'Allow Project Zomboid Server access');

        instance.role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
    }
}
