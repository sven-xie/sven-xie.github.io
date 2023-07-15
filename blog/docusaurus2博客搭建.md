---
slug: docusaurus2博客搭建
title: docusaurus2博客搭建
authors: [Sven]
tags: [docusaurus2, 博客]
---



- 发布Github Page的在原来的主分支main执行yarn deploy会报错；

- 需要新建一个新的develop分支；

- 然后PowerShell执行 

  ```sh
  cmd /C 'set "GIT_USER=sven-xie" && set "DEPLOYMENT_BRANCH=main" && set "USE_SSH=true" && yarn deploy'
  ```

  





