/******************************
腳本功能：看漫神器 解鎖 VIP
*******************************
[rewrite_local]
^https?:\/\/pay2\.pigqq\.com\/Orders\/GetMemberVipTime.*? url script-response-body https://raw.githubusercontent.com/hkhsu0816/Surge/main/kmsq.js

[mitm]
hostname = pay2.pigqq.com
*******************************/
/*
var date = new Date();
var curtime = date.toISOString();
var obj = JSON.parse($response.body); 
obj = {
  "status": 1,
  "info": "success",
  "count": 0,
  "data": {
    "curtime": curtime,
    "message": "用户与设备匹配",
    "viptime": "2099-12-31T00:00:00",
    "isvip": true,
    "nviptime": "2099-12-31T00:00:00",
    "isnvip": true
  }
};
$done({body : JSON.stringify(obj)});
*/
var obj = JSON.parse($response.body);
var obj1 = obj.data;
obj1.isvip = true;
obj1.isnvip = true;
obj1.viptime = "2099-12-31T00:00:00";
obj1.nviptime = "2099-12-31T00:00:00";
obj.data = obj1;
$done({body: JSON.stringify(obj)});