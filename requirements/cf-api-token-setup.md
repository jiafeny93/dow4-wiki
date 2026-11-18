# Cloudflare API Token 一次性设置（5 分钟，解锁 git push 自动部署）

> 为什么：手动部署已被网络卡过 4 次，其中一次差点让首页下线。接上这条管道后，
> 以后每次 `git push` → GitHub Actions 自动构建+部署+首页体检，本地网络再烂也不影响。

## 步骤（在你自己的浏览器）：

1. 打开 https://dash.cloudflare.com/profile/api-tokens
2. **Create Token** → 找模板 **"Cloudflare Pages — Edit"** → Use template
   （模板已预置正确权限：Account / Cloudflare Pages / Edit）
3. Account Resources：选你的账号（包含 dow4-wiki 项目）
4. 继续 → **Create Token** → 复制生成的 token（只显示一次！）

## 然后把它给我：

GitHub 仓库 → Settings → Secrets and variables → Actions → New repository secret：
- Name: `CLOUDFLARE_API_TOKEN`
- Value: 粘贴 token

（再建一个 `CLOUDFLARE_ACCOUNT_ID`，值为 `b2b2e007f113933eb2fa7bd53115ddc5`）

建完说一声，我 10 分钟内接好 GitHub Action 并实测一次。
