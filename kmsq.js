/******************************
腳本功能：看漫神器 解鎖 VIP
*******************************
[rewrite_local]
^https?:\/\/pay\.pysmei\.com\/Orders\/GetMemberVipTime.*? url script-response-body https://raw.githubusercontent.com/hkhsu0816/Surge/main/kmsq.js

[mitm]
hostname = pay.pysmei.com
*******************************/
var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.viptime = "2099-12-31T00:00:00";
obj.data.isvip = true;
obj.data.nviptime = "2099-12-31T00:00:00";
obj.data.isnvip = true;

body = JSON.stringify(obj);
$done({body});
