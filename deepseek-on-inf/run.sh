# --tensor-parallel-size 2 <-- Sets the number of partitions for tensor parallelism. inf2.xlarge has 1 neuron device and each neuron device has 2 neuron cores.
# --block-size 8           <-- For neuron devices, this is internally set to the max-model-len.
# --max-model-len          <-- This is set to the maximum sequence length (input tokens plus output tokens) for which to compile the model.
# --max-num-seqs           <-- This is set to the hardware batch size or a desired level of concurrency that the model server needs to handle.
docker run \
  -d \
  -p 8000:8000 \
  --device /dev/neuron0 \
  -e NEURON_CC_FLAGS=-O1 \
  vllm-neuron \
  bash -c "vllm serve deepseek-ai/DeepSeek-R1 \
    --device neuron \
    --tensor-parallel-size 2 \
    --block-size 8 \    
    --max-model-len 4096 \
    --max-num-seqs 32"
