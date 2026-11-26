# No Login Edge 版

🟦 Microsoft Edge　Chromium 内核 / Manifest V3

把 [MartinBraquet/no-login](https://github.com/MartinBraquet/no-login) 的 Firefox 扩展改成能在 Microsoft Edge 上加载的版本。基线是上游 1.21，版本号改为 1.21.1。业务逻辑没有改动，改的是 manifest 和编译产物。

上游原项目只支持 Firefox。它的 README 把「兼容其他浏览器」列在贡献建议里，并注明没有在其他浏览器上测试过。

## 站点支持

  - LinkedIn　可用。移除登录横幅和弹窗；带 `sessionRedirect` 参数的链接转成 Google 搜索。
  - Facebook　可用。移除底部登录横幅和居中登录弹窗。
  - Instagram　可用。移除登录横幅和弹窗；把登录页的 `next` 参数转回目标页，点帖子走普通导航而不是登录弹窗。
  - X / Twitter　可用。移除登录卡片和底部注册横幅；点图片改用扩展自己的 lightbox 显示原图。
  - Tumblr　不可用。`src/core.js` 里的 `removeTumblrLogin` 是空占位，只写日志和计数，不动页面；manifest 的 `host_permissions` 也没有 tumblr.com，内容脚本不会注入。上游是这个状态，本仓库没有为它扩大权限。

这里的「可用」指代码有对应处理、域名已在 manifest 授权，不等于逐站点实测。Edge 下的实测范围见下面的「验证范围」。

## 安装

  1. 在 Edge 地址栏打开 `edge://extensions/`
  2. 开启「开发人员模式」
  3. 点「加载解压缩的扩展」，选中本仓库根目录

  Edge 不接受拖入自签名 .crx。仓库可以下载成 zip，但解压后仍要按上面的方式加载文件夹。

  开发人员模式加载的扩展，Edge 启动时可能弹一次关闭提示，选择保留即可。换电脑或重建浏览器配置后要重新加载。

## 改了什么

  1. `background.scripts` 改为 `background.service_worker`
     Chromium 的 MV3 不接受 `background.scripts`，照原样打包会直接安装失败。

  2. 删除 `browser_specific_settings`
     gecko 和 gecko_android 是 Firefox 专属键，Chromium 会报未知键警告。

  3. 删除 `META-INF` 和 `amo_metadata.json`
     前者是 Mozilla 商店签名，后者是 Mozilla 商店元数据，对 Edge 没有作用。

  4. `dist` 下四个 bundle 里的 `browser.*` 改为 `chrome.*`
     Firefox 提供 promise 风格的 `browser` 命名空间，Chromium 只有 `chrome`。不替换的话，服务 worker 一加载就报 `browser is not defined`。共 13 处，全部是 API 调用。

  5. 版本号 1.21 改为 1.21.1，加入 `minimum_chrome_version: "102"`
     代码用了 `scripting.executeScript` 的 `injectImmediately` 选项，需要 102 以上的内核。

`src/` 保留上游源码原样，仍是 Firefox 版本。要重建 Edge 版，按下面的步骤操作，不要直接跑 `npm run build` 覆盖 `dist/`。

## 验证范围

用 Edge 无头模式加载 1.21 改造版做了两项检查：扩展的服务 worker 正常注册并保持存活；打开 linkedin 公司页后，扩展配置里写出了 `linkedinWanted`，说明内容脚本注入并执行到了配置读取。没有做跨站点的完整功能回归。

## 已知限制

  - 内容脚本每 200ms 轮询一次 `checkForLogins`，会反复唤醒 Chromium 的 MV3 服务 worker。Firefox 使用常驻事件页，没有这部分开销。长时间挂着时，Edge 版的 CPU 占用会比 Firefox 版高一些。这是上游的轮询设计，本仓库未改。
  - 本仓库没有上架 Edge 加载项商店。要上架需要单独的开发者账号、审核和扩展 ID。

## 跟着上游升级

  1. 取上游新版的 xpi，解压到一个空目录
  2. 在本仓库根目录运行 `bash scripts/patch-edge.sh <上游解压目录>`
  3. 用生成目录里的 `manifest.json` 覆盖本仓库的同名文件，把 `dist/` 四个 bundle 同步过来
  4. 检查上游是否有新增的 `browser.*` 引用或新的 manifest 键

脚本保留上游版本号，1.21.1 里的补丁号是手工加的。发布新版本时自己决定要不要递增。脚本只处理上面列出的机械替换，上游如果改了 background 结构、权限或新增 Firefox 专属 API，需要手工判断。

## 来源与许可

上游项目地址：https://github.com/MartinBraquet/no-login

上游采用 Unlicense，属于公有领域，允许复制、修改和再分发。本仓库只保留 Edge 加载所需的部分和上游源码，许可证原文见 [LICENSE](LICENSE)。
