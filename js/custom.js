// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function () {

  /* =========================================== */
  /* ==          1. 一言功能 (使用你的版本)        == */
  /* =========================================== */
  console.log("一言脚本开始执行...");

  // ... 这里是你之前成功运行的一言代码 ...
  // (请把你正在使用的、能正常工作的一言代码放在这里)
  // 例如，如果你用的是API代理版：
  const subtitleElement = Array.from(document.querySelectorAll('*')).find(el => el.innerText.trim() === '正在加载一言...');
  if (subtitleElement) {
    fetch('https://my-hitokoto-api.yourname.workers.dev') // <-- 换成你自己的API地址
      .then(response => response.text())
      .then(text => {
        subtitleElement.innerText = text;
      })
      .catch(error => {
        subtitleElement.innerText = '热爱可抵岁月漫长。';
      });
  }


  /* =========================================== */
  /* ==          2. 页脚备案图标注入功能          == */
  /* =========================================== */
  console.log("页脚备案图标注入脚本 开始执行...");

  // 找到ICP备案链接，并在其文本前插入图标
  const icpLink = document.querySelector('footer a[href*="beian.miit.gov.cn"]');
  if (icpLink && !icpLink.querySelector('img')) { // 检查是否已存在图标，避免重复注入
    const icpIcon = document.createElement('img');
    icpIcon.src = 'https://gw.alicdn.com/tfs/TB1GxwdSXXXXXa.aXXXXXXXXXXX-65-70.gif';
    icpIcon.style.cssText = 'height:16px;vertical-align:middle;margin-right:4px;';
    icpLink.prepend(icpIcon); // prepend() 方法会在元素内容的开头插入指定内容
    console.log("✅ 成功注入ICP备案图标");
  }

  // 找到公安备案链接，并在其文本前插入图标
  const gaLink = document.querySelector('footer a[href*="beian.gov.cn"]');
  if (gaLink && !gaLink.querySelector('img')) { // 检查是否已存在图标
    const gaIcon = document.createElement('img');
    gaIcon.src = 'https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png';
    gaIcon.style.cssText = 'height:16px;vertical-align:middle;margin-right:4px;';
    gaLink.prepend(gaIcon);
    console.log("✅ 成功注入公安备案图标");
  }

});
