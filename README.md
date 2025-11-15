# yanlingguanwang
研领教育官网

## 部署与访问指南

1. **准备源码**：仓库中的 `index.html`、`assets/css/style.css`、`assets/js/main.js` 和 `assets/images/` 为静态资源，可直接上传至任何静态托管平台。
2. **GitHub Pages 免费托管**：
   - 在 GitHub 创建公开仓库，将本项目所有文件提交到 `main` 分支根目录。
   - 打开仓库 **Settings > Pages**，选择 *Deploy from a branch*，指定 `main` 分支与 `/ (root)` 路径，保存后获得免费的访问域名。
   - 在同一页面勾选 **Enforce HTTPS**，确保浏览器通过加密连接访问。
   - 若需要国内加速，可搭配 Cloudflare CDN 或同步一份到国内对象存储（成本约 ¥3/月）。
3. **绑定域名**：在域名提供商处添加指向 GitHub Pages 的 CNAME 记录（`用户名.github.io`），并在仓库根目录新增 `CNAME` 文件写入你的自定义域名。
4. **提交搜索引擎**：部署后将站点地图（已提供 `sitemap.xml`，可将其中的域名替换为你的最终域名）及 `robots.txt` 提交到百度搜索资源平台、360 搜索和必应站长平台，加速收录，让用户能通过浏览器搜索找到官网。

更多上线步骤可参阅首页“上线指南”板块。
