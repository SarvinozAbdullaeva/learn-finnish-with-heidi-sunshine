(function(){
var W=[["Hei","Hello","hay"],["Kiitos","Thank you","KEE-tohs"],["Anteeksi","Sorry / excuse me","AHN-tayk-see"],["Mitä kuuluu?","How are you?","MEE-tah KOO-loo"],["Sauna","Sauna (a Finnish word!)","SOW-nah"],["Sisu","Grit and quiet determination","SEE-soo"]];
var i=0,$=function(x){return document.getElementById(x)},c=$("card");
function fill(){var w=W[i];$("fw").textContent=w[0];$("fm").textContent=w[1];$("fp").textContent="Say it: "+w[2]}
c.onclick=function(){c.classList.toggle("on")};
$("next").onclick=function(){c.classList.remove("on");setTimeout(function(){i=(i+1)%W.length;fill()},300)};
fill();
$("menu").onclick=function(){$("links").classList.toggle("open")};
$("links").onclick=function(){this.classList.remove("open")};
$("signup").onsubmit=function(e){e.preventDefault();$("msg").textContent="🎉 Kiitos! Check your inbox for your free lesson.";this.reset()};
$("yr").textContent=new Date().getFullYear();
var h=$("hero");for(var s=0;s<40;s++){var d=document.createElement("span"),z=1+Math.random()*2.5;d.className="star";d.style.cssText="left:"+Math.random()*100+"%;top:"+Math.random()*70+"%;width:"+z+"px;height:"+z+"px;animation-delay:-"+Math.random()*3+"s";h.appendChild(d)}
var m="Hei,Kiitos,Moi,Sisu,Sauna,Terve,Kippis,Hyvää huomenta".split(","),t="";
for(var k=0;k<2;k++)m.forEach(function(w){t+="<span>"+w+"</span><i>✦</i>"});
$("mq").innerHTML=t;
var g=["Hei","Moi","Terve","Hyvää päivää"],gi=0,r=$("rot");
setInterval(function(){r.style.opacity=0;setTimeout(function(){gi=(gi+1)%g.length;r.textContent=g[gi];r.style.opacity=1},250)},2400);
r.style.transition="opacity .25s";
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var b=$("bar");window.addEventListener("scroll",function(){var x=document.documentElement;b.style.width=(x.scrollTop/(x.scrollHeight-x.clientHeight)*100)+"%"},{passive:true});
})();
