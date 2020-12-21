# Web Visual Testing by Docker

Pull the docker image from: 

```
docker pull juanwangak/vnc-nightwatch:1.0
```

## Content
- [How To Run](#how-to-run)
- [System Info](#system-info)
- [Useful Links](#useful-links)

   
## How To Run

1. Debug Purpose & Run Step by Step
   
   1) Start Container, and map the current path to container /tmp
   
      > Note: Sometimes the chromedriver, geckdriver running failed at container, add `--privileged -v /dev/shm:/dev/shm --shm-size 2048m` to solve the issue
   
       ``` 
       docker run \          
         -e VNC_RESOLUTION=1600x1000 \
         -p 6901:6901 \
         -p 5901:5901 \
         --privileged \
         -v $(pwd):/tmp \
         -v /dev/shm:/dev/shm \
         --shm-size 2048m \
         juanwangak/vnc-nightwatch:1.0
       ```
   
   2) Access the [http://localhost:6901/?password=vncpassword/](http://localhost:6901/?password=vncpassword/) to the vnc env.
   
   3) launch "terminal", run the test as bellow.
      ```
      selenium-standalone start
      ```
   launch another "terminal", run the test as bellow.
   
       ``` 
       cd /tmp;
       nightwatch
       ```


## System Info

1. OS: Ubuntu 18.04

2. Chrome/ChromeDriver: 77.0.3865.120/77.0.3865.40

3. Firefox/Geckodriver: 69.0.3/0.26.0

4. Selenium Server: 3.9.1

5. PhantomJS: 2.1.1

6. NodeJS: 10.x

7. NPM: 6.x

8. BackstopJS: 4.3.2, configured with certain chromium version: 77.0.3865.120

9. Gemini 7.5.1

10. Hermione: 2.13.1

11. HTML Reporter: 5.3.2

12. Json Reporter: 2.0.0

13. Looks Same: 7.2.1

14. Selenium Standalone: 6.16.0

15. Chai: 4.2.0

16. Java: 1.8.0.222

17. Git: 2.17.x

18. Default User: web-visual-testing (with sudo access)


## Useful Links

1. iOS Resolution: [http://iosres.com/](http://iosres.com/)

2. All possible screen size: [https://material.io/devices/](https://material.io/devices/), [http://viewportsizes.com/](http://viewportsizes.com/)

3. Chrome Flags: [https://peter.sh/experiments/chromium-command-line-switches/](https://peter.sh/experiments/chromium-command-line-switches/)

4. Firefox Flags: [http://kb.mozillazine.org/Command_line_arguments](http://kb.mozillazine.org/Command_line_arguments)

5. SmilerJS Flags: [https://docs.slimerjs.org/current/configuration.html](https://docs.slimerjs.org/current/configuration.html)

6. Phantom Flags: [http://phantomjs.org/api/command-line.html](http://phantomjs.org/api/command-line.html)

7. Firefox User Agents: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox)

8. Chrome User Agents: [https://developer.chrome.com/multidevice/user-agent](https://developer.chrome.com/multidevice/user-agent)

9. Desired Capabilities: [https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities)

10. Previous Chrome (RPM Package): [http://orion.lcg.ufrj.br/RPMS/myrpms/google/](http://orion.lcg.ufrj.br/RPMS/myrpms/google/)

11. Previous Chromium: [https://github.com/Bugazelle/chromium-all-old-stable-versions](https://github.com/Bugazelle/chromium-all-old-stable-versions)

12. Previous Firefox: [https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/](https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/)
