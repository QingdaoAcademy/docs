---
title: Git 基础操作
createTime: 2025/10/21 20:14:08
permalink: /git/4fll3zro/
---

> [!NOTE]
>
> 尽管你可以使用例如 vscode 中极为方便的插件而不是直接输入 Git 命令，但知道 Git 的基础命令及操作方式是必要的。
>
> 通过本文，你将可以学到如何使用 Git 进行基本的版本管理。

## 初始化 Git 仓库

你可以在终端[+terminal]中执行

```bash
git init

```

此命令会在本地创建一个 Git 仓库（你执行命令时所在目录下会生成一个 .git 隐藏文件夹），当然，你不必在意这个文件夹（正如它之所以是隐藏的那样），Git 会为你打理好一切。

此时你的文件目录大致如下：

::: file-tree icon="color"

- your-project
  - ++.git/
  - your-files-like-python.py
  - ...

:::

::: details 关于隐藏目录的补充知识

如果你使用 Windows 系统，你会发现 `.git` 并不是隐藏的。之所以在文中称它是隐藏的，是因为在 MacOS 和 Linux 系统下，
任何以 `.` 打头的文件名/目录名都会被识别成隐藏文件。例如另一个你也许会遇到的目录 `.ssh` ，它在 Linux 系统下也是隐藏目录。还有别的例子，比如 `.bashrc` `.zshrc` `.vscode` 等等。
这些文件（或目录）在 Linux 系统中都会直接被识别成隐藏文件，你可以使用 `ls ~` 和 `ls -a` 两条命令来直观看出哪些是隐藏目录。

:::

<!-- 为避免产生误解，我将对于 Git 仓库作出部分解释：

1. 本地文件夹 $\neq$ Git 仓库，只有你要求 Git 添加进 Git 仓库的文件才会被添加至本地仓库（下文会讲）；

2. 我们有时称仓库为 ==版本库==，因为 Git 本质上是一个版本管理工具。一般情况下，Git 仓库中会保存所有仓库现有文件以及所有历史更改。

3. 每次提交更改，都将在 Git 仓库中创建一个新的版本、更新文件、记录更新。 -->

特别说明：==本节下面的所有命令，都需要在命令行的工作目录处于 Git 仓库目录中才能执行。==

## 将文件添加到暂存区

Git 并不会自动跟踪和保存你的文件的变化，你需要告诉 Git 哪些文件变化（包含创建新文件、删除被跟踪的文件）需要被跟踪和保存。

指定 Git 去跟踪某个新创建的文件、或记录已有文件的变化，你需要将该文件添加到 Git 的暂存区。

例如，你可以通过下面的命令来将文件 `your-file-like-python.py` 添加到 Git 暂存区：

```bash
git add your-file-like-python.py
```

你可以多次使用 `git add` 命令来将文件添加到暂存区，直到你准备好提交所有更改。

此外，你也可以通过下面的任一命令来一次性添加所有文件：

```bash
git add .
# Or
git add -A
```

### 让 Git 自动忽略部分文件

有时我们并不需要添加所有文件到 Git 仓库，例如部分缓存文件、编译产物等。我们可以通过创建一个 `.gitignore` 文件来让 Git 自动忽略这些文件。

创建一个 `.gitignore` 文件如下图：

::: code-tree entry="your-project/.gitignore"

```text title="your-project/.git/..."
```

```yaml title="your-project/.gitignore"
node_modules
.cache
*.log
```

```python title="your-project/HelloWorld.py"
print("Hello World!")
```

```text title="your-project/some.log"
This is a log file which should not be tracked by Git.
```

:::

如果按照上图配置 Git 将会自动忽略所有 `node_modules` 和 `.cache` 文件夹内部所有文件，以及所有 `.log` 文件。

::: info
1. Git 存储信息的单位是文件。你无法将一个空文件夹添加到暂存区。

2. `.gitignore` 编写规则：
     - `*` 为通配符，意为匹配任意。因此 `*.log` 意为不管文件叫什么，只要后缀为 `.log` 就忽略。
     - `!` 前缀意为不忽略某个文件。下面的例子意为忽略 migrations 下所有文件，唯独保留 `__init__.py`：

     ```yaml title=".gitignore"
     migrations/*
     !__init__.py
     ```
:::

配置好 `.gitignore` 文件，现在你可以放心地使用 `git add .` 来添加所有文件到暂存区了。

## 提交更改

你可以使用 `git commit` 命令将文件从暂存区提交到 Git 仓库中，并创建一个新的版本[+version]。

```bash
git commit -m "提交信息（Message）"
```

其中，`-m` 后面的引号中的内容是你本次提交的消息（你可以理解为备注），通常用于标记本次修改的主要内容。如果你不加 `-m` 而直接执行 `git commit`，你将被引导使用 vim 来编辑消息，请不要因为看到陌生页面而惊慌。

::: note
更为规范的，我们会统一备注的格式，例如：`feat(theme): add something.` 意为为主题模块新增了xxx功能。

规范化有助于版本管理与协作——但这是后话了，目前你只需知道如何提交更改即可。
:::

## Git 远程仓库

显而易见的，你需要一种更为优雅的方式与别人协作，而不是互相传文件。

Git 远程仓库便解决了这个问题：它可以简单理解为在云端的 Git 仓库，协作者可以通过访问该仓库完成同步修改、文件、版本等。

我们一般使用 GitHub 作为远程仓库，当然，你也可以使用其它具有远程仓库功能的网站，甚至自建一个远程仓库。

我们将在下一章介绍 GitHub 的使用方法。当你注册好 GitHub 账号以后，我们将继续介绍与远程仓库有关的 Git 操作。
