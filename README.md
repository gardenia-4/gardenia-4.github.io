# Fern 的个人主页 · 使用教程

[访问博客](https://gardenia-4.github.io/) · [查看发布进度](https://github.com/gardenia-4/gardenia-4.github.io/actions)

## 在 GitHub 网页写作

1. 在仓库首页打开对应的文件夹，点击 **Add file → Create new file**。修改已有内容时，打开文件并点击铅笔图标。
2. 填写文件名，粘贴下方的 Markdown 示例，再改成自己的内容。
3. 点击 **Commit changes**，填写本次更新的说明，选择直接提交到 `main`。
4. 在 **Actions** 找到本次提交的 **pages build and deployment**。出现绿色勾号后，刷新博客查看更新。

仓库和网站都公开。提交前请确认文档、图片和邮箱都可以公开。

## 选栏目

| 内容 | 文件夹 | 文件名示例 |
| --- | --- | --- |
| 产品、AI、技术、读书心得 | [`_posts/`](_posts/) | `2026-11-17-ai-notes.md` |
| 项目方案、原型、复盘 | [`_projects/`](_projects/) | `reading-assistant.md` |
| 学习笔记、练习、实验记录 | [`_notes/`](_notes/) | `llm-evaluation.md` |
| 英语阅读、口语、面试表达 | [`_english/`](_english/) | `interview-expressions.md` |

### 写一篇文章

在 `_posts/` 新建文件，文件名以实际发布日期开头，格式为 `YYYY-MM-DD-英文短名.md`。把下面的示例复制进去。开头两行 `---` 之间填写文章信息，下面写正文。

```markdown
---
title: "我的第一篇 AI 学习记录"
description: "记录一个问题、一次尝试和下一步。"
categories: [AI]
tags: [AI, 学习记录]
---

## 我想弄明白什么

在这里写下你的问题。

## 我做了什么

记录读过的资料、试过的方法和观察到的结果。

## 下一步

写下还想验证的问题。
```

博客主分类可用 `产品`、`AI`、`技术`、`阅读与思考`。同一个主题尽量复用已有标签，例如统一使用 `AI`。

### 写笔记或展示项目

- 学习笔记和英语学习使用 `英文短名.md` 命名。在文件顶部填写 `title`、`description`、`date: YYYY-MM-DD` 和 `tags`，省去文章专用的 `categories`。
- 展示项目时可以复制 [项目模板](templates/projects.md)。在开头填写 `featured: true`，项目就能参与首页精选排序。首页最多显示三个精选项目，按日期从新到旧排列。改为 `featured: false` 后，项目仍可在项目页查看。
- 文章、学习笔记和英语学习会自动进入[归档](https://gardenia-4.github.io/archive/)，按年份从新到旧排列。首页词云最多显示 10 个常用标签。搜索会匹配标题、摘要、分类和标签。

## 换头像、改邮箱或发公告

在 [`_config.yml`](_config.yml) 找到 `profile`：

| 想改什么 | 编辑哪个字段 |
| --- | --- |
| 昵称和副标题 | `name`、`motto` |
| 头像 | 在 [`assets/`](assets/) 上传图片，把 `avatar` 改成对应路径，例如 `/assets/fern.png` |
| 邮箱 | 在 `email` 的引号里填入愿意公开的地址。留空会显示占位 |
| 公告 | 修改 `announcement`。文案有冒号等符号时，可以用双引号包起来 |

顶部的 **Nice to meet you!** 在 [`_layouts/default.html`](_layouts/default.html)。导航在 [`_data/navigation.yml`](_data/navigation.yml)，样式在 [`assets/site.css`](assets/site.css)。

## 偶尔切回本地编辑

在网页提交后，本地副本需要手动同步。如果本地没有未提交的改动，在仓库目录运行：

```powershell
git status --short
git pull --ff-only origin main
```

本地编辑完成后，检查清单，再提交所需文件：

```powershell
git status --short
git add .
git diff --cached --stat
git commit -m "更新博客内容"
git push origin main
```

使用 GitHub Desktop 时，可通过 **Fetch origin → Pull origin** 同步，再通过 **Commit to main → Push origin** 发布。

## 预览和排查

- **本机预览**。安装 Ruby 和 Bundler 后，在仓库根目录运行 `bundle install`，再运行 `bundle exec jekyll serve`。打开终端显示的本地网址。
- **线上没更新**。检查 Actions 中对应提交的部署是否成功。绿勾出现后，可以按 **Ctrl + F5** 刷新页面。
- **文章找不到**。检查文件是否在 `_posts/`，文件名日期是否正确，顶部的两行 `---` 是否完整。
- **部署失败**。打开 Actions 里标红的任务，展开失败步骤，按日志里的文件名和行号检查。
- **发布设置**。本站从 `main` 分支根目录通过 GitHub Pages 构建。可在仓库的 **Settings → Pages** 查看。
