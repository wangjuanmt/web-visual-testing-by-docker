FROM bugazelle/ubuntu-xfce-vnc:latest

# Set proxy if necessary
# ENV http_proxy=http://172.17.1:3128
# ENV https_proxy=http://172.17.0.1:3128

# Test components
ARG CHROME_VERSION=77.0.3865.120-1
ARG CHROMIUM_VERSION=77.0.3865.120
ARG CHROMEDRIV_VERSION=77.0.3865.40
ARG FIREFOX_VERSION=69.0.3
ARG GECKO_VERSION=0.26.0
ARG PHANTOMJS_VERSION=2.1.1
ARG BACKSTOPJS_VERSION=4.3.2
ARG GEMINI_VERSION=7.5.1
ARG HERMIONE_VERSION=2.13.1
ARG HTML_REPORTER_VERSION=5.3.2
ARG HTML_REPORTER_LEGACY_VERSION=3.4.2
ARG JSON_REPORTER_VERSION=2.0.0
ARG LOOKS_SAME_VERSION=7.2.1
ARG SELENIUMSTANDALONE_VERSION=6.16.0
ARG CHAI_VERSION=4.2.0
ARG NODEJS_VERSION=10.x
ARG NPM_REGISTRY=http://registry.npmjs.org/
# ARG NPM_REGISTRY=http://registry.npm.taobao.org/

# System
ARG USER=web-visual-testing
ARG USER_ID=1001

# Switch back to root user for extend the bugazelle/ubuntu-xfce-vnc:latest
# For more info, please refer to https://github.com/Bugazelle/docker-headless-vnc-container
USER 0

# Copy: Default work directory is $HOME: /headless
ADD src/. $HOME
ADD default-config.js $HOME

## Build
RUN chmod +x *.sh \
    && ./remove.sh \
    && ./user.sh \
    && ./tools.sh \
    && ./phantomjs.sh \
    && ./firefox.sh \
    && ./chrome.sh \
    && ./npm.sh \
    && ./visual.sh \
    && ./cntlm-config.sh \
    && ./clear.sh

# Change user from root -> ${user}
USER ${USER}
