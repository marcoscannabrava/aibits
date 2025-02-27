## Requirements
- It's necessary to request an increase in the "EC2: All Inf Spot Instance Requests" Service Quota since it defaults to zero.
- EC2 Inf2 instance with at least 1 TB for downloading the model weights and enough VRAM to run the model
  - Inf1 will require another DLAMI
  - Create an EC2 Launch Template and a Spot Instance Request for optimal cost

# Resources
[Serving LLMs using vLLM and Amazon EC2 instances with AWS AI chips | Amazon Web Services](https://aws.amazon.com/blogs/machine-learning/serving-llms-using-vllm-and-amazon-ec2-instances-with-aws-ai-chips/)
[Neuron — vLLM](https://docs.vllm.ai/en/latest/getting_started/examples/neuron.html#neuron)
[GitHub - aws-neuron/deep-learning-containers: AWS Neuron Deep Learning Containers (DLCs) are a set of Docker images for training and serving models on AWS Trainium and Inferentia instances using AWS Neuron SDK.](https://github.com/aws-neuron/deep-learning-containers)
[deepseek-ai/DeepSeek-R1 · Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-R1)


# AWS Inf2 Instance Template
- OS:  Ubuntu 22.04
- AMI: Deep Learning AMI Neuron
- EBS: 1024 GB

## EBS with IOPS SSD?
The requested number of I/O operations per second that the volume can support.

It is applicable to Provisioned IOPS SSD (io1 and io2) and General Purpose SSD (gp2 and gp3) volumes only.

Provisioned IOPS SSD (io1 and io2) io1 volumes support between 100 and 64,000 IOPS, and io2 volumes support between 100 and 256,000 IOPS depending on the volume size. For io1 volumes, you can provision up to 50 IOPS per GiB. For io2 volumes, you can provision up to 1000 IOPS per GiB.

For General Purpose SSD (gp2) volumes, baseline performance scales linearly at 3 IOPS per GiB from a minimum of 100 IOPS (at 33.33 GiB and below) to a maximum of 16,000 IOPS (at 5,334 GiB and above). General Purpose SSD (gp3) volumes support a baseline of 3,000 IOPS. Additionally, you can provision up to 500 IOPS per GiB up to a maximum of 16,000 IOPS.

Magnetic (standard) volumes deliver approximately 100 IOPS on average, with a burst capability of up to hundreds of IOPS.

For Throughput Optimized HDD (st1) and Cold HDD (sc1) volumes, performance is measured in throughput (MiB/s).

## EBS-optimized instance?
Enables additional, dedicated throughput between Amazon EC2 and Amazon EBS. Supported on certain instance types only; specifying an incompatible instance type will fail the instance launch. Learn more about compatible instance types.

