/******************************
⚠️如果放远程，请把km.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:看漫神器
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/pay\.pysmei\.com\/Orders\/GetMemberVipTime.*? url script-response-body km.js


[mitm]
hostname = pay.pysmei.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"viptime\":".*?"/g,'"viptime": "2099-12-31T00:00:00"');
body = body.replace(/"isvip\":\w+/g,'"isvip":true');
body = body.replace(/"nviptime\":".*?"/g,'"nviptime":"2099-12-31T00:00:00"');
body = body.replace(/"isnvip\":\w+/g,'"isnvip":true');
$done(body);