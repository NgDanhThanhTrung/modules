/*
#!name=CamScanner Premium Unlock Script
#!desc=Crack By NgDanhThanhTrung

[Script]
CamScanner_Unlock = type=http-response,pattern=^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?,requires-body=1,max-size=0,script-path=CamScanner.js

[MITM]
hostname = ap*.intsig.net
*/

let obj = JSON.parse($response.body);
obj = {
  "data": {
    "psnl_vip_property": {
      "expiry": "2013017600"
    }
  }
};
$done({body: JSON.stringify(obj)});
