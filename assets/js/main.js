// Acuatec Waterproofing Services - site behaviour.
// Quote form: set CONFIG.formEndpoint (see README). Everything else works without configuration.
const CONFIG={
  formEndpoint:"https://formsubmit.co/ajax/acuatecph@gmail.com",
  email:"acuatecph@gmail.com",
  messenger:"https://m.me/acuatecph",
  phone:"(02) 8-6375199 / (0917) 819-5446"
};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;

/* header, menu, back to top */
const hd=$("header.site"),topb=$(".fab .top"),bg=$(".burger"),nv=$("nav.main");
addEventListener("scroll",()=>{hd.classList.toggle("sc",scrollY>12);topb.classList.toggle("show",scrollY>700)},{passive:true});
topb.onclick=()=>scrollTo({top:0,behavior:RM?"auto":"smooth"});
bg.onclick=()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nv.addEventListener("click",e=>{if(e.target.closest("a")){nv.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
$$("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());

/* scroll reveal + count-up */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");io.unobserve(e.target)}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,to=+el.dataset.count,from=+(el.dataset.from||0),t0=performance.now(),D=RM?1:1400;
  const f=t=>{const k=Math.min((t-t0)/D,1),v=Math.round(from+(to-from)*(1-Math.pow(1-k,3)));el.textContent=v;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
$$("[data-count]").forEach(e=>co.observe(e));

/* hero crossfade */
$$("[data-fader]").forEach(f=>{const s=$$(".fs",f),d=$$(".dots button",f);let i=0,t;
  const go=n=>{i=(n+s.length)%s.length;s.forEach((x,k)=>x.classList.toggle("on",k===i));d.forEach((x,k)=>x.setAttribute("aria-current",k===i))};
  const reset=()=>{clearInterval(t);if(!RM)t=setInterval(()=>go(i+1),5200)};
  d.forEach((b,k)=>b.onclick=()=>{go(k);reset()});f.addEventListener("mouseenter",()=>clearInterval(t));f.addEventListener("mouseleave",reset);go(0);reset()});

/* photo carousels */
$$("[data-car]").forEach(c=>{const tr=$(".track",c),sl=$$(".slide",c),cnt=$(".cnt",c);let t;
  const step=()=>{const g=parseFloat(getComputedStyle(tr).columnGap)||0;return sl[0].getBoundingClientRect().width+g};
  const upd=()=>{if(cnt)cnt.textContent=(Math.min(Math.round(tr.scrollLeft/step()),sl.length-1)+1)+" / "+sl.length};
  const move=d=>{const max=tr.scrollWidth-tr.clientWidth;let n=tr.scrollLeft+d*step();if(d>0&&tr.scrollLeft>=max-4)n=0;if(d<0&&tr.scrollLeft<=4)n=max;tr.scrollTo({left:n,behavior:RM?"auto":"smooth"})};
  const stop=()=>clearInterval(t),play=()=>{stop();if(c.dataset.auto&&!RM)t=setInterval(()=>move(1),+c.dataset.auto)};
  $(".prev",c).onclick=()=>{stop();move(-1)};$(".next",c).onclick=()=>{stop();move(1)};
  tr.addEventListener("scroll",()=>requestAnimationFrame(upd),{passive:true});tr.addEventListener("keydown",e=>{if(e.key==="ArrowRight")move(1);if(e.key==="ArrowLeft")move(-1)});
  c.addEventListener("mouseenter",stop);c.addEventListener("mouseleave",play);c.addEventListener("focusin",stop);tr.addEventListener("touchstart",stop,{passive:true});
  new IntersectionObserver(e=>e[0].isIntersecting?play():stop()).observe(c);upd()});

/* lightbox */
const lb=document.createElement("div");lb.id="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Photo viewer");
lb.innerHTML='<button class="lc" aria-label="Close">&times;</button><button class="lp" aria-label="Previous photo">&#8249;</button><img alt=""><button class="nx" aria-label="Next photo">&#8250;</button>';document.body.append(lb);
let grp=[],gi=0;const li=$("img",lb);
const show=n=>{gi=(n+grp.length)%grp.length;li.src=grp[gi].src;li.alt=grp[gi].alt};
document.addEventListener("click",e=>{const im=e.target.closest(".slide img,.zoom");
  if(im){const root=im.closest("[data-car],.zg")||im.parentElement;grp=$$(".slide img,.zoom",root);if(!grp.length)grp=[im];show(Math.max(grp.indexOf(im),0));lb.classList.add("on");return}
  if(e.target===lb||e.target.closest(".lc"))lb.classList.remove("on");else if(e.target.closest(".lp"))show(gi-1);else if(e.target.closest(".nx"))show(gi+1)});
addEventListener("keydown",e=>{if(!lb.classList.contains("on"))return;if(e.key==="Escape")lb.classList.remove("on");if(e.key==="ArrowLeft")show(gi-1);if(e.key==="ArrowRight")show(gi+1)});

/* problem finder */
const fx=$("#fix");if(fx){
  const FIX=[["Stains or drips on the ceiling","Roof deck and slab waterproofing","Water usually enters from the roof deck or slab above. We inspect the surface, joints and cracks, then prescribe a torch-applied, cold-applied or spray-applied system.","waterproofing"],
  ["Leaks from a bathroom or balcony above","Wet-area waterproofing","Toilets, showers, balconies and planter boxes need a properly detailed cold-applied system, such as cementitious or polyurethane waterproofing.","waterproofing"],
  ["Damp or peeling walls","Wall and retaining-wall waterproofing","Exterior walls, retaining walls and ledges can be treated with cold-applied or spray-applied systems, followed by painting works if needed.","waterproofing"],
  ["Wet basement or leaking tank","Below-grade and tank waterproofing","Basements, foundations, cisterns and tanks are protected with membranes, cementitious systems or food-grade epoxy tank lining.","waterproofing"],
  ["Cracks in concrete","Concrete crack injection repair","Cracks are sealed by injection before they let in more water and cause deeper damage to the structure.","repairs"],
  ["Worn, dusty or damaged floor","Floor coating or polishing","Epoxy, polyurethane and rubberized coatings, or concrete polishing, depending on traffic, chemicals and the look you want.","flooring"]];
  const tb=$(".tabs",fx),rs=$(".res",fx);
  const pick=(i,b)=>{$$("button",tb).forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-pressed",x===b)});const[,t,d,p]=FIX[i];
    rs.innerHTML="";const h=document.createElement("h3"),q=document.createElement("p"),a=document.createElement("a");h.textContent="Likely solution: "+t;q.textContent=d;
    a.className="btn";a.href="contact.html?service="+p+"#quote";a.textContent="Book a free inspection";rs.append(h,q,a)};
  FIX.forEach((f,i)=>{const b=document.createElement("button");b.type="button";b.textContent=f[0];b.onclick=()=>pick(i,b);tb.append(b);if(!i)pick(0,b)})}

/* quotation form */
const qf=$("#qf");if(qf){
  const steps=$$(".step",qf),bars=$$(".prog i",qf),lab=$(".pl",qf),back=$(".back",qf),next=$(".nextb",qf),send=$(".send",qf);let cur=0;
  const val=n=>qf.elements[n]?(qf.elements[n].value||"").trim():"";
  const err=(n,m)=>{const e=$('[data-err="'+n+'"]',qf);if(e)e.textContent=m||""};
  const checks=[()=>{let ok=true;err("service");err("property");
      if(!qf.elements.service.value){err("service","Please choose a service.");ok=false}
      if(!val("property")){err("property","Please select a property type.");ok=false}return ok},
    ()=>{let ok=true;err("location");if(!val("location")){err("location","Please tell us where the property is located.");ok=false}return ok},
    ()=>{let ok=true;["name","phone","email","consent"].forEach(n=>err(n));
      if(!val("name")){err("name","Please enter your name.");ok=false}
      if(!/^[0-9+()\s-]{7,}$/.test(val("phone"))){err("phone","Please enter a valid mobile or phone number.");ok=false}
      if(val("email")&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val("email"))){err("email","Please enter a valid email address.");ok=false}
      if(!qf.elements.consent.checked){err("consent","Please agree so we can contact you about this request.");ok=false}return ok}];
  const go=n=>{cur=n;steps.forEach((s,i)=>s.classList.toggle("on",i===n));bars.forEach((b,i)=>b.classList.toggle("on",i<=n));
    lab.textContent="Step "+(n+1)+" of "+steps.length;back.style.visibility=n?"visible":"hidden";next.hidden=n===steps.length-1;send.hidden=n!==steps.length-1;
    const f=$("input,select,textarea",steps[n]);if(f&&n)f.focus({preventScroll:true})};
  next.onclick=()=>{if(checks[cur]())go(cur+1)};back.onclick=()=>go(cur-1);go(0);
  const MAP={waterproofing:"Waterproofing",flooring:"Flooring",repairs:"Crack repair & restoration"};
  const prefill=s=>{const v=MAP[s];if(!v)return;const r=$$('input[name="service"]',qf).find(x=>x.value===v);if(r){r.checked=true;}};
  prefill(new URLSearchParams(location.search).get("service"));addEventListener("quoteprefill",e=>prefill(e.detail));
  const collect=()=>({ref:"AQ-"+new Date().toISOString().slice(2,10).replace(/-/g,"")+"-"+Math.random().toString(36).slice(2,6).toUpperCase(),
    service:qf.elements.service.value,property:val("property"),stage:val("stage"),areas:$$('input[name="areas"]:checked',qf).map(x=>x.value).join(", ")||"-",
    size:val("size")||"-",location:val("location"),timeline:val("timeline")||"-",details:val("details")||"-",name:val("name"),company:val("company")||"-",
    phone:val("phone"),email:val("email")||"-",contact:val("contact")||"Any",honey:val("_honey")});
  const text=d=>"Quotation request "+d.ref+"\nService: "+d.service+"\nProperty: "+d.property+" ("+d.stage+")\nAreas: "+d.areas+"\nApprox. size: "+d.size+" sqm\nLocation: "+d.location+"\nTimeline: "+d.timeline+"\nDetails: "+d.details+"\nName: "+d.name+(d.company!=="-"?" ("+d.company+")":"")+"\nMobile: "+d.phone+"\nEmail: "+d.email+"\nPreferred contact: "+d.contact;
  const panel=(id,fn)=>{$("#"+id).hidden=false;qf.hidden=true;fn&&fn();$("#"+id).scrollIntoView({behavior:RM?"auto":"smooth",block:"center"})};
  qf.addEventListener("submit",async e=>{e.preventDefault();if(!checks[2]())return;const d=collect();send.disabled=true;send.textContent="Sending...";
    if(d.honey){panel("qs");return}
    const body={_subject:"New quotation request "+d.ref+" - "+d.service,_template:"table",_captcha:"false",
      _autoresponse:"Hi "+d.name+", thank you for contacting Acuatec Waterproofing Services. We received your quotation request ("+d.ref+") and our team will review the details and get in touch with you shortly. For urgent concerns please call "+CONFIG.phone+".",
      Reference:d.ref,Service:d.service,"Property type":d.property,"Project stage":d.stage,"Areas to treat":d.areas,"Approx. size (sqm)":d.size,Location:d.location,Timeline:d.timeline,Details:d.details,
      name:d.name,Company:d.company,Mobile:d.phone,email:d.email==="-"?"":d.email,"Preferred contact":d.contact};
    try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(body)});
      const j=await r.json().catch(()=>({}));if(!r.ok||String(j.success)==="false")throw new Error("send failed");
      panel("qs",()=>{$("#qref").textContent=d.ref;$("#qsum").textContent=text(d)})}
    catch(x){const t=text(d);panel("qe",()=>{$("#qtxt").textContent=t;$("#qmail").href="mailto:"+CONFIG.email+"?subject="+encodeURIComponent("Quotation request "+d.ref)+"&body="+encodeURIComponent(t);
      $("#qcopy").onclick=async function(){try{await navigator.clipboard.writeText(t);this.textContent="Copied"}catch(_){this.textContent="Select the text above and copy"}};
      $("#qms").onclick=()=>{try{navigator.clipboard.writeText(t)}catch(_){}}})}});
}
