/******************************
腳本功能：看漫神器 解鎖 VIP
*******************************
[rewrite_local]
^https?:\/\/pay\.pysmei\.com\/Orders\/GetMemberVipTime.*? url script-response-body https://raw.githubusercontent.com/hkhsu0816/Surge/main/kmsq.js

[mitm]
hostname = pay.pysmei.com
*******************************/
var body=$response.body
.replace(/"viptime\":".*?"/g,'"viptime": "2099-12-31T00:00:00"')
.replace(/"isvip\":\w+/g,'"isvip":true')
.replace(/"nviptime\":".*?"/g,'"nviptime":"2099-12-31T00:00:00"')
.replace(/"isnvip\":\w+/g,'"isnvip":true');
$done(body);
