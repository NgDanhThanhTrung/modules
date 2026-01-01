// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

// =========  Phần cố định  ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);

obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

var ttrung53={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2999-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2008-03-05T01:04:18Z",
  purchase_date:"2008-03-05T01:04:17Z",
  store:"app_store"
};

var ttrung53_sub={
  grace_period_expires_date:null,
  purchase_date:"2008-03-05T01:04:17Z",
  product_identifier:"com.ttrung53.premium.yearly",
  expires_date:"2999-12-18T01:04:17Z"
};

const match=Object.keys(mapping).find(e=>ua.includes(e));

if(match){
  let[e,s]=mapping[match];
  s?(ttrung53_sub.product_identifier=s,obj.subscriber.subscriptions[s]=ttrung53):obj.subscriber.subscriptions["com.ttrung53.premium.yearly"]=ttrung53,obj.subscriber.entitlements[e]=ttrung53_sub
}else{
  obj.subscriber.subscriptions["com.ttrung53.premium.yearly"]=ttrung53;
  obj.subscriber.entitlements.pro=ttrung53_sub
}

$done({body:JSON.stringify(obj)});
