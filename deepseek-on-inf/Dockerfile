# default base image
ARG BASE_IMAGE="public.ecr.aws/neuron/pytorch-inference-neuronx:2.5.1-neuronx-py310-sdk2.21.1-ubuntu22.04"
FROM $BASE_IMAGE
RUN echo "Base image is $BASE_IMAGE"
# Install some basic utilities
RUN apt-get update && \
    apt-get install -y \
        git \
        python3 \
        python3-pip \
        ffmpeg libsm6 libxext6 libgl1


### Mount Point ###
# When launching the container, mount the code directory to /app
ARG APP_MOUNT=/app
VOLUME [ ${APP_MOUNT} ]
WORKDIR ${APP_MOUNT}/vllm
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install --no-cache-dir fastapi ninja tokenizers pandas
RUN python3 -m pip install sentencepiece transformers==4.36.2 -U
RUN python3 -m pip install transformers-neuronx --extra-index-url=https://pip.repos.neuron.amazonaws.com -U
RUN python3 -m pip install --pre neuronx-cc==2.15.* --extra-index-url=https://pip.repos.neuron.amazonaws.com -U
ENV VLLM_TARGET_DEVICE neuron
RUN git clone https://github.com/vllm-project/vllm.git && \
    cd vllm && \
    git checkout v0.6.2 && \
    python3 -m pip install -U \
        cmake>=3.26 ninja packaging setuptools-scm>=8 wheel jinja2 \
        -r requirements-neuron.txt && \
    pip install --no-build-isolation -v -e . && \
    pip install --upgrade triton==3.0.0
CMD ["/bin/bash"]
