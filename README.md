# pine-Angulr

<!-- vim-markdown-toc GFM -->

* [1 简介](#1-简介)
* [2 在 Pine/Butterfly 上如何使用此项目](#2-在-pinebutterfly-上如何使用此项目)
    * [2.1 版本](#21-版本)
    * [2.2 变更](#22-变更)
    * [2.3 使用](#23-使用)
* [3 更多信息了解](#3-更多信息了解)
* [4 参加步骤](#4-参加步骤)

<!-- vim-markdown-toc -->
## 1 简介

Angulr 项目的名称为 Angulr，对！没错！就是少个 a，少个 a 就是它正确的拼写 [官网](http://flatfull.com/themes/angulr/landing)

Angulr 是一个以 Bootstrap 和 AngularJS 为基础，并使用了大量前端开源组件合成的一个前端 UI 框架，是非常棒的 UI 框架。


![Screenshot](./images/ui.png)

## 2 在 Pine/Butterfly 上如何使用此项目

### 2.1 版本

本项目 Angulr 2.2 汉化版本，相关依赖的版本如下：

> * Angularjs: v1.4.7

### 2.2 变更

> * 相对于原 Angulr , Pine-angulr 表达式 {{expression}} 修改为 `__expression__`

### 2.3 使用

本项目可以用于

> * Django 项目:[Pine](https://github.com/meetbill/pine)
> * 轻量化 Web 框架:[Butterfly](https://github.com/meetbill/butterfly)

```
将本项目src 下的

static 目录下文件移动到 Pine 项目的 static 目录下
templates 目录下 index.html 移动到 Pine 目录下
```

## 3 更多信息了解

[pine-Angulr 进阶](https://github.com/meetbill/pine-Angulr/wiki)

## 4 参加步骤

* 在 GitHub 上 `fork` 到自己的仓库，然后 `clone` 到本地，并设置用户信息。
```
$ git clone https://github.com/meetbill/pine-Angulr.git
$ cd pine-Angulr
$ git config user.name "yourname"
$ git config user.email "your email"
```
* 修改代码后提交，并推送到自己的仓库。
```
$ #do some change on the content
$ git commit -am "Fix issue #1: change helo to hello"
$ git push
```
* 在 GitHub 网站上提交 pull request。
* 定期使用项目仓库内容更新自己仓库内容。
```
$ git remote add upstream https://github.com/meetbill/pine-Angulr.git
$ git fetch upstream
$ git checkout master
$ git rebase upstream/master
$ git push -f origin master
```
