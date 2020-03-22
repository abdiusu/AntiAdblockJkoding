//<![CDATA[
  if (adblockJkoding=='on'){
var AdblockJkoding = document.createElement("div");
AdblockJkoding.innerHTML=`<div id='areaScriptABlock'></div>`;
AdblockJkoding.id= 'myMessage';
document.body.append(AdblockJkoding);
NextAddPanelDetecAdBlock();
function NextAddPanelDetecAdBlock() {
  var judulAd = 'AdBlock Detected!!<br/>Matikan AdBlock';
  var notifAd = 'Agar blog tetap berjalan, matikan AdBlock atau masukkan blog ini ke dalam whitelist.<br/>Terima kasih.'; 
  var _0xc9cbx2 = document.createElement("div");
  _0xc9cbx2.id = "jkodingAdBlock";
  _0xc9cbx2.innerHTML = '<div class="isiAds"><span class="judul">' + judulAd + '</span><br/><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M12,17\.3A1\.3,1\.3 0 0,1 10\.7,16A1\.3,1\.3 0 0,1 12,14\.7A1\.3,1\.3 0 0,1 13\.3,16A1\.3,1\.3 0 0,1 12,17\.3M15\.73,3H8\.27L3,8\.27V15\.73L8\.27,21H15\.73L21,15\.73V8\.27L15\.73,3Z"></path></svg><br/>' + notifAd + "</div>";
   document.getElementById('myMessage').append(_0xc9cbx2);
  };
  };
//]]> 
