我的地址是 C:\Program Files\Git\usr\bin

git init

git config --global user.name "xxx" //这里xxx代表你要绑定的github的用户名

git config --global user.email "xxx" //这里xxx代表你要绑定的github的邮箱

git config --global --list //这里查看上述的操作是否完成，即输入回车可以看到上面的用户名和邮箱

ssh-keygen -t rsa -C "xxx" //这里xxx是上面的邮箱


我们在上面提示的路径，打开id_rsa.pub 将其中的全部内容复制到github如下位置中




连接成功！

上面的配置无论是本地主机还是vscode，步骤都是一样的，不过vscode是在终端中输入上面的指令

上述操作完成后输入指令：



ssh -T git@github.com

然后回车 yes

最后输入要连接的github repository ，当然要提前创建好，输入如下指令

git remote rm origin 删除之前的仓

git remote add origin xxx //这里的xxx指代github repository的地址，可以点击repository页面的“code”获取，为xxx.git的形式

然后就可以在vscode中将代码上传到github的repository中了









点击Changes里面，vscode中更改了的文件右侧的“+”，将其放入Staged Changes中，然后点击Commit即可上传到github repository中。



如果是一个新仓库，如何将本地的项目push到github呢？

比如新建了一个github仓库



在这里不勾选创建README file



创建成功后，直接根据github上的指示把本地项目代码上传到github上



由于我们没有创建README文件，所以使用下面画圈的那几条指令即可上传成功



在vscode中，经常会遇到这种情况，假设我们已经在github建立好仓库，并成功连接了

git remote add origin xxx.git
git branch -M main
我们对项目的某个文件进行了修改



就可以在这里的"Changes"中查看到改变后的文件

此时输入下面的代码，将修改后的文件同步一下

git add .
git commit
然后输入代码下面的代码，将改变后的文件push到仓库即可。

$ git init 
$ git add .
$ git commit -m "xxxxx" (xxxxx为本次提交修改的简要说明)
$ git branch -M branch-name (branch-name为需要上传到的分支名字)
$ git remote add origin git@github.com:XXXX （xxxx为username.projectname.git,即用户名.项目名.git）
$ git push -u origin branch-name (branch-name为需要上传到的分支名字)