/*
此文件为Node.js专用。其他用户请忽略
改自lxk,
@xingliuchao自用
 */
//cookie。
let CookieXLCs = [
  '',//账号一ck,-------具体填什么？🙋
  '',//账号二ck,-------询问作者？
]
// 判断环境变量里面是否有京东ck
if (process.env.XLC) {
  if (process.env.XLC.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieXLCs = process.env.XLC.split('&');
  } else if (process.env.XLC.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieXLCs = process.env.XLC.split('\n');
  } else {
    CookieXLCs = [process.env.XLC];
  }
}
if (JSON.stringify(process.env).indexOf('GIT_HUB')>-1) {
  console.log(`此为xingliuchao自用，😏出现任何问题概不承担\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `此为xingliuchao自用，😏出现任何问题概不承担`)
    await process.exit(0);
  })()
}
CookieXLCs = [...new Set(CookieXLCs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieXLCs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieXLCs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['Cookiexlc' + index] = CookieXLCs[i].trim();
}
