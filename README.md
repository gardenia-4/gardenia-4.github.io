# 我的数字花园

面向长期学习、产品经理与 AI 求职作品整理，以及未来技术实践的个人站点。使用 GitHub Pages 原生 Jekyll 构建。页面和内容均保存在仓库中，搜索在浏览器内运行。

## 开始编辑

| 位置 | 用途 |
| --- | --- |
| `_config.yml` | 站点名称、简介和发布地址 |
| `about.md` | 姓名或昵称、自我介绍、方向及公开链接 |
| `_data/navigation.yml` | 导航的顺序和栏目名 |
| `_posts/` | 博客文章，使用 `YYYY-MM-DD-slug.md` 命名 |
| `_projects/`、`_notes/`、`_english/` | 项目、学习笔记和英语学习，使用 `slug.md` 命名 |
| `templates/` | 可复制的文章模板和项目模板 |
| `assets/` | 样式与搜索脚本 |

文章建议只选一个主分类。在文件顶部填写 `categories: [产品]`、`[AI]`、`[技术]` 或 `[阅读与思考]`。标签使用 YAML 列表，例如 `tags: [AI, 原型]`。条目有了标题和摘要后，会自动进入搜索索引。搜索支持多个空格分隔的关键词，会显示包含所有关键词的结果。

复制模板后，替换标题、日期、摘要、分类和标签，再写正文。日期使用 `YYYY-MM-DD`，slug 建议用小写英文和短横线。发布前可移除或替换各栏目中的示例。站内链接使用 `{{ '/projects/' | relative_url }}` 这样的写法，以兼容仓库子路径。

## 在本机预览

准备 Ruby 3.3、Bundler 和构建工具。Windows 可使用带 Devkit 的 RubyInstaller。解压后进入包含 `_config.yml` 的目录，执行：

```sh
bundle install
bundle exec jekyll serve
```

打开终端给出的本地地址，例如 `http://127.0.0.1:4000`。修改 `_config.yml` 后重启预览。仅构建时可执行 `bundle exec jekyll build`，成品位于 `_site/`。

## 发布到 GitHub Pages

1. 确定 GitHub 用户名、仓库名，以及使用个人主页还是项目站点。若使用 GitHub Free，可创建公开仓库。
2. 修改 `_config.yml` 中的地址。保留引号，并将下表占位符替换成真实值。

   | 站点类型 | 仓库名 | `url` | `baseurl` |
   | --- | --- | --- | --- |
   | 个人主页 | `<用户名>.github.io` | `https://<用户名>.github.io` | `""` |
   | 项目站点 | `<仓库名>` | `https://<用户名>.github.io` | `/<仓库名>` |

3. 将本目录内的全部源码（包括以 `_` 开头的目录）提交到仓库 `main` 分支根目录。仓库首页应直接看到 `_config.yml`。已有仓库时，把源码合并进目标分支。若使用其他分支，下一步选择该分支。
4. 在仓库打开 **Settings → Pages**。在 **Build and deployment** 选择 **Deploy from a branch**，选 **main → /(root)**，保存。
5. 在 **Actions** 查看首次构建。部署成功后，在 **Settings → Pages** 点击 **Visit site**。后续更新向发布分支提交即可。

[GitHub Pages 发布源官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [本地预览官方说明](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
