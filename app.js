const projects = [
  {id:'ui',category:'UI设计',en:'UI / UX DESIGN',title:'伴伴 APP',color:'#cbe58f',range:[4,11],cover:5,tags:['UI / UX','虚拟宠物','情感化设计'],description:'以原创 IP「伴伴」为核心的解压养成类交互 APP。用清新的薄荷绿、圆润的形象与轻量交互，将养宠、互动与社交串联成温暖的陪伴体验。',captions:['项目扉页','设计理念','页面概览','功能框架图','用户体验地图','组件设计','色彩与字体','核心交互']},
  {id:'packaging',category:'包装设计',en:'PACKAGING DESIGN',title:'奶牛历险记',color:'#efd479',range:[12,16],cover:13,tags:['猫咪食品','包装结构','视觉系统'],description:'从奶牛猫的黑白花纹出发，将猫咪形象融入食品包装。以鲜明的色彩区分口味，让品牌标志、图案和包装结构形成统一的视觉语言。',captions:['项目扉页','奶牛历险记 · 猫咪食品','主视觉与色彩规范','包装结构展示','效果图展示']},
  {id:'branding',category:'品牌设计',en:'BRAND IDENTITY',title:'哈氏',color:'#bfd3dd',range:[17,26],cover:19,tags:['品牌视觉','IP 形象','活动物料'],description:'围绕哈氏糕点展开品牌视觉设计，从品牌标志、标准色与辅助图形，延伸至 IP 形象、海报和春游活动物料，让传统糕点拥有亲切、生动的当代表达。',captions:['项目扉页','哈氏 · 品牌主视觉','包装应用','品牌标志与标准色','辅助色','辅助图形 · 灵感来源','辅助图形 · 纹样延展','IP 形象设计','海报设计','春游活动物料设计']},
  {id:'book',category:'书籍设计',en:'EDITORIAL DESIGN',title:'迷菌幽境',color:'#cce7f3',range:[27,30],cover:28,tags:['书籍装帧','版式设计','自然主题'],description:'以野生蘑菇为主题的图文书籍设计。通过装帧、材质与内页编排，呈现自然与意识之间的复杂关系，将知识性的内容转译为富有层次的视觉阅读体验。',captions:['项目扉页','书籍装帧与设计说明','内页展示','装帧效果展示']},
  {id:'logo',category:'标志设计',en:'LOGO DESIGN',title:'视传青力量 · 冬运会',color:'#ef969d',range:[31,33],cover:32,tags:['标志设计','标准制图','应用系统'],description:'两组不同主题的标志探索：以跃动的图形表达青春力量，以流动的线条捕捉冬季运动的速度。完整呈现标准色、辅助图形与延展应用。',captions:['项目扉页','视传青力量 · 标志与应用','冬运会 · 标志与应用']},
  {id:'culture',category:'文创设计',en:'CULTURAL DESIGN',title:'瓦猫',color:'#b19ac4',range:[34,36],cover:35,tags:['传统文化','IP 设计','文创衍生'],description:'以传统瓦猫为灵感，探索民间文化符号的当代表达。通过不同色彩、纹样与造型塑造角色个性，并延展为系列 IP 与主题小卡。',captions:['项目扉页','瓦猫 · 文创设计','IP 展示与小卡设计']},
  {id:'ai-film',category:'AI视频设计',en:'AI FILM',title:'海派流光',color:'#cfa874',range:[37,40],cover:38,tags:['AIGC','海派文化','分镜叙事'],description:'以亨生西服裁缝店为载体，以钢针作为核心视觉符号，在服饰工艺与传统戏曲之间完成意象转换。通过旧上海与现代静安的时空切换，讲述海派文化的传承。',captions:['项目扉页','海派流光 · 视觉封面','设计说明与项目流程','分镜展示']},
  {id:'animation',category:'动画设计',en:'AI ANIMATION',title:'泡泡玛特 · MOLLY',color:'#d0e8a8',range:[41,44],cover:44,tags:['AI 动画','MOLLY','色彩叙事'],description:'以 MOLLY 二十周年为主题，用从黑白到彩色的视觉蜕变，讲述勇敢表达自我的故事。色彩从角色蔓延至整座城市，成为情绪觉醒与自由新生的象征。',captions:['项目扉页','POP MART · MOLLY','设计说明与项目流程','分镜展示']}
];
const projectVideos = {
 'ai-film':{src:'assets/haipai-liuguang.mp4',title:'海派流光',poster:38},
 'animation':{src:'assets/molly-blooming-colors.mp4',title:'怒放色彩篇',poster:42}
};
const main = document.querySelector('main');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const asset = n => `assets/page-${String(n).padStart(2,'0')}.webp`;
const pageHeights = [1172,1376,1376,1344,1049,1075,1075,1054,1039,858,1075,1368,1436,1173,1046,1762,1368,1300,1394,1135,1164,1148,1156,1171,1133,1203,1355,874,1172,1028,1352,1352,1352,1355,1112,2037,1350,1250,1250,1083,1344,1250,1250,1083];
const stickers = (full=true) => `<span class="smile" aria-hidden="true">☺</span><span class="sticker">@ Envent</span><span class="sticker">»»</span>${full?'<span class="sticker">@ E-commerce</span><span class="sticker">✦</span><span class="sticker">@ Poster</span><span class="sticker">»»</span><span class="sticker">@ Cover</span>':''}<span class="smile" aria-hidden="true">☺</span>`;
const folderArt = `<svg viewBox="0 0 800 650" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
 <linearGradient id="back" x1="100" y1="35" x2="390" y2="550" gradientUnits="userSpaceOnUse"><stop stop-color="#e7ffff"/><stop offset=".22" stop-color="#9ed5e6"/><stop offset=".55" stop-color="#c1e7ec"/><stop offset="1" stop-color="#729eb4"/></linearGradient>
 <linearGradient id="rim" x1="55" y1="75" x2="455" y2="570" gradientUnits="userSpaceOnUse"><stop stop-color="#d0eff1"/><stop offset=".32" stop-color="white"/><stop offset=".66" stop-color="#91c6d8"/><stop offset="1" stop-color="#598eaa"/></linearGradient>
 <linearGradient id="paper" x1="180" y1="120" x2="290" y2="530" gradientUnits="userSpaceOnUse"><stop stop-color="#fcffff"/><stop offset=".3" stop-color="#e1f3f0"/><stop offset="1" stop-color="#a2c9d3"/></linearGradient>
 <linearGradient id="pink" x1="265" y1="140" x2="350" y2="550" gradientUnits="userSpaceOnUse"><stop stop-color="#ffede6"/><stop offset=".35" stop-color="#efd1df"/><stop offset="1" stop-color="#ba9eb6"/></linearGradient>
 <linearGradient id="purple" x1="370" y1="170" x2="300" y2="580" gradientUnits="userSpaceOnUse"><stop stop-color="#ece6f1"/><stop offset=".4" stop-color="#baaed0"/><stop offset="1" stop-color="#959fbe"/></linearGradient>
 <linearGradient id="green" x1="445" y1="200" x2="400" y2="570" gradientUnits="userSpaceOnUse"><stop stop-color="#f3fbec"/><stop offset=".3" stop-color="#c8e6ca"/><stop offset="1" stop-color="#a2c8b8"/></linearGradient>
 <linearGradient id="glass" x1="420" y1="200" x2="545" y2="535" gradientUnits="userSpaceOnUse"><stop stop-color="#edffff" stop-opacity=".78"/><stop offset=".43" stop-color="#e8f6f7" stop-opacity=".43"/><stop offset="1" stop-color="#9fcfdd" stop-opacity=".73"/></linearGradient>
 <linearGradient id="shine" x1="335" y1="250" x2="570" y2="510" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity=".5"/><stop offset="1" stop-color="white" stop-opacity=".05"/></linearGradient>
 <filter id="shadow" x="-30%" y="-30%" width="180%" height="180%"><feDropShadow dx="-3" dy="6" stdDeviation="5" flood-color="#406978" flood-opacity=".22"/></filter>
</defs>
<g filter="url(#shadow)"><path d="M45 54 Q42 31 69 31 L200 37 Q219 38 229 55 L251 85 Q259 99 277 97 L550 90 Q570 89 574 113 L626 478 Q630 502 603 514 L136 625 Q109 634 104 604Z" fill="url(#back)" stroke="#88aeb7" stroke-width="3"/><path d="M45 54 Q42 31 69 31 L200 37 Q219 38 229 55 L251 85 Q259 99 277 97 L550 90 Q570 89 574 113 L626 478 Q630 502 603 514 L136 625 Q109 634 104 604Z" stroke="url(#rim)" stroke-width="13"/><path d="M51 54 Q49 39 71 40 L199 44 Q213 44 222 61 L245 94 Q255 106 278 105 L550 99 Q563 98 566 116 L616 477 Q620 494 601 503 L136 615 Q118 622 113 601Z" stroke="#6babc0" stroke-width="4"/><path d="M111 50 L207 52 L214 90 L113 87 Q107 87 106 81 L103 58 Q102 49 111 50Z" fill="#fff" stroke="#b4d0d7" stroke-width="2"/><path d="M117 64 L169 65 M118 76 L199 78" stroke="#70848a" stroke-width="4"/></g>
<path d="M79 138 L548 109 L594 493 L123 593Z" fill="url(#paper)" stroke="white" stroke-width="3"/>
<g class="sheet-one" filter="url(#shadow)"><path d="M117 205 Q118 176 145 174 L288 166 Q300 166 307 151 L314 139 Q320 129 337 129 L475 123 Q488 122 487 138 L448 519 L127 601Z" fill="url(#paper)" stroke="#fff" stroke-width="3"/><path d="M147 219 Q150 206 167 204 L397 187 Q415 186 423 169 L436 145 Q443 135 460 134 L601 122 Q617 121 615 136 L532 524 L131 606Z" fill="url(#pink)" stroke="#fff5f4" stroke-width="3"/></g>
<g class="sheet-two" filter="url(#shadow)"><path d="M194 264 Q198 239 219 237 L428 209 Q444 207 452 192 L477 158 Q484 148 499 147 L647 141 Q662 141 658 157 L556 527 L137 610Z" fill="url(#purple)" stroke="#fdf7ff" stroke-width="3"/></g>
<g class="sheet-three" filter="url(#shadow)"><path d="M213 296 Q220 278 241 276 L370 257 Q395 254 403 235 L419 207 Q427 190 446 188 L703 166 Q719 164 713 181 L607 530 L141 617Z" fill="url(#green)" stroke="#fafff6" stroke-width="3"/><path d="M266 319 L588 264 Q613 260 606 281 L534 509 L218 582Z" fill="#e5f0dd" opacity=".55"/></g>
<g class="folder-front"><path d="M137 620 L277 302 Q285 284 307 280 L473 258 Q487 256 499 244 L526 217 Q541 203 561 200 L774 185 Q793 183 784 204 L632 479 Q623 495 605 501 L160 637 Q130 646 137 620Z" fill="url(#glass)" stroke="#8ab3bf" stroke-width="3"/><path d="M144 620 L283 308 Q291 290 310 288 L475 266 Q493 264 505 250 L531 224 Q545 211 565 208 L772 192 Q782 191 776 204 L625 476 Q617 488 599 494 L160 629 Q139 637 144 620Z" stroke="#f9ffff" stroke-width="9"/><path d="M146 620 L284 309 Q292 292 310 290 L477 268 Q495 266 507 252 L533 226 Q547 213 565 211 L772 195 L623 475 Q615 486 599 491 L159 625Z" stroke="#82b9cc" stroke-width="6"/><path d="M312 303 L474 282 Q498 278 515 260 L543 235 L693 220 L589 473 L196 593Z" fill="url(#shine)"/><path d="M695 218 L732 215 L603 475 L570 486Z" fill="white" opacity=".32"/></g>
</svg>`;
let observer, currentProject=null, transitionBusy=false, currentView='', activeFlight=null, destroyAmbient=null;
function observeReveals(){observer?.disconnect();observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
function home(){return `<div class="page-enter"><section class="home-screen" aria-label="作品集封面"><div class="cover"><h1><span class="sr-only">钟飞燕 · PORTFOLIO Design 设计作品集</span><img class="cover-title" src="assets/title-portfolio.webp" alt=""><img class="cover-design" src="assets/title-design-sans.svg" alt=""><img class="cover-chinese" src="assets/title-chinese.webp" alt=""></h1><button class="hero-folder" aria-label="打开文件夹，浏览八类设计作品">${folderArt}<span class="folder-hint">点击打开我的作品 ↗</span></button></div><div class="home-foot"><span>ZHONG FEIYAN · SELECTED WORKS</span><a href="#about" class="scroll-cue">下滑，认识我 <span>↓</span></a><span>01 — 08 / DESIGN ARCHIVE</span></div></section>
<section class="about" id="about"><h2 class="about-heading">关于 <em>About me</em></h2><div class="about-body"><div class="about-copy"><div class="about-block reveal"><h3><span>☺</span>教育背景</h3><p class="edu-line"><span>2023.07—2027.06</span><span>湖州学院设计学院</span><span>视觉传达专业</span></p></div><div class="about-block reveal"><h3><span>☺</span>主修课程</h3><p>平面设计、视觉传达设计、UI/UX 设计、品牌设计、包装设计、色彩构成、版式设计、插画设计、PS / AI / C4D 实操、设计史论。</p><p>GPA 4.09 / 4.5，专业排名前 30%</p></div><div class="about-block reveal"><h3><span>☺</span>实习经验</h3><p>2024.07—2024.09　杭州安获利科技有限公司<br>文员助理实习生</p><ol><li>行政资料统筹归档：统筹前台全品类资料的分类梳理、规整建档。</li><li>日常工作台账管控：搭建工作日志台账，记录每日行政事项、业务流转数据。</li><li>物料仓储与物流对接：完成业务资料打包分装、物料核验。</li></ol><p>2025.07—2025.09　杭州红海汽车用品有限公司<br>前台招待</p><ol><li>担任公司形象首接窗口，负责内外部访客的接待与分流。</li><li>管理来访登记与会议引导流程，维护专业有序的办公环境。</li></ol></div></div><section class="profile-dossier" aria-label="钟飞燕的照片与联系方式"><div class="profile-folder-back" aria-hidden="true"></div><div class="profile-paper-accent" aria-hidden="true"></div><button class="profile-photo" type="button" aria-label="展开照片与联系方式" aria-expanded="false" aria-controls="profile-contact"><img src="assets/feiyan-photo.jpg" width="1279" height="1799" alt="钟飞燕的个人照片" loading="lazy"></button><div class="profile-contact" id="profile-contact" aria-hidden="true" inert><p>感谢您阅读我的作品集！希望这些作品能够呈现我对设计、交互与 AI 创作的理解，也期待有机会与您一起探索更多真实项目中的创作可能。</p><a href="mailto:2324911663@qq.com">邮箱：2324911663@qq.com</a></div><button class="profile-folder-cover" type="button" aria-label="展开照片与联系方式" aria-expanded="false" aria-controls="profile-contact"><span class="profile-name">钟飞燕</span><span class="profile-disciplines">品牌设计 包装设计 文创设计<br>UI设计 标志设计 书籍设计 AIGC视频</span></button><span class="profile-hint" aria-hidden="true">悬停或点击，展开照片与联系方式 ↗</span></section></div><div class="about-bottom"><span>让想法成形，让设计有温度。</span><a class="pill-link" href="#works">看看我的作品 <span>↗</span></a></div></section></div>`}
function works(){return `<section class="works-page page-enter"><div class="works-heading"><h1>CONTENTS</h1><span>目录</span></div><p class="works-intro"><span>把灵感收进文件夹，把设计带进生活。</span><span>08 FOLDERS / SELECTED WORKS</span></p><div class="shelf-viewport"><div class="folder-grid">${projects.map((p,i)=>`<a class="work-folder" href="#project/${p.id}" style="--accent:${p.color};--index:${i}" data-project="${p.id}" aria-label="打开${p.category}：${p.title}"><div class="folder-back"></div><div class="folder-sheet"><img src="${asset(p.cover)}" alt="" loading="eager"></div><div class="folder-face"><span class="folder-arrow">↗</span><span class="folder-label">${String(i+1).padStart(2,'0')}${p.category}<small>${p.en}</small></span></div></a>`).join('')}</div></div><footer class="works-footer"><a href="#home">← 返回封面</a><span>悬停发现，点击展开 · 每一份灵感都有归处</span><span class="smile" aria-hidden="true">☺</span></footer></section>`}
function projectVideo(p){
 const video=projectVideos[p.id];
 if(!video)return '';
 return `<figure class="artwork project-video"><video controls playsinline preload="metadata" poster="${asset(video.poster)}" aria-label="${video.title}完整影片"><source src="${video.src}" type="video/mp4">您的浏览器暂不支持视频播放，<a href="${video.src}">打开影片</a>。</video><figcaption><span>${video.title} · 完整影片</span><span>VIDEO</span></figcaption></figure>`;
}
function project(p){const idx=projects.indexOf(p),next=projects[(idx+1)%projects.length];return `<article class="project-page page-enter" style="--accent:${p.color}"><div class="project-toolbar"><a href="#works">← <span>全部作品</span></a><span>${String(idx+1).padStart(2,'0')} / 08　 ${p.category}</span><a href="#project/${next.id}">下一个作品 ↗</a><div class="project-progress"></div></div><header class="project-intro"><div><p class="project-eyebrow">${p.en}</p><h1>${p.title}</h1><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><p class="project-desc">${p.description}${projectVideos[p.id]?'<br><small>以下展示完整影片、视觉封面、创作流程与分镜。</small>':''}</p></header><div class="gallery">${Array.from({length:p.range[1]-p.range[0]+1},(_,i)=>{const n=p.range[0]+i;return `<figure class="artwork ${i?'reveal':''}"><button class="artwork-button" data-page="${n}" aria-label="放大查看${p.captions[i]}"><img src="${asset(n)}" alt="${p.title} — ${p.captions[i]}" width="2200" height="${pageHeights[n-1]}" loading="${i?'lazy':'eager'}" decoding="async"><span class="zoom-hint">查看大图 ↗</span></button><figcaption><span>${p.captions[i]}</span><span>${String(i+1).padStart(2,'0')} / ${String(p.range[1]-p.range[0]+1).padStart(2,'0')}</span></figcaption></figure>${i===0?projectVideo(p):''}`}).join('')}</div><footer class="project-end"><a href="#works" class="pill-link">返回目录 <span>↖</span></a><a class="next-project" href="#project/${next.id}"><small>NEXT FOLDER / ${next.category}</small><strong>${next.title} <span>↗</span></strong></a></footer><button class="back-top" aria-label="返回顶部">↑</button></article>`}
function render(){
 if(activeFlight && location.hash!==activeFlight.target)activeFlight.cancel();
 const hash=location.hash.slice(1)||'home';const view=hash==='about'?'home':hash;
 if(document.querySelector('.lightbox').open)document.querySelector('.lightbox').close();
 if(view!==currentView){destroyAmbient?.();destroyAmbient=null;currentView=view;currentProject=projects.find(p=>view===`project/${p.id}`)||null;main.innerHTML=currentProject?project(currentProject):view==='works'?works():home();observeReveals();bindView();window.scrollTo({top:0,behavior:'instant'});}
 document.title=currentProject?`${currentProject.title} · 钟飞燕作品集`:view==='works'?'作品目录 · 钟飞燕':'钟飞燕 · PORTFOLIO';
 document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===(hash==='about'?'about':currentProject?'works':view))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 if(hash==='about')requestAnimationFrame(()=>document.querySelector('#about')?.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'}));else if(view==='home')window.scrollTo({top:0,behavior:'smooth'});
 updateProgress();
}
function bindView(){
 const ambientCleanups=[...document.querySelectorAll(".home-screen, .about-body")].map(surface=>window.initHeroAmbient?.(surface)).filter(Boolean);
 destroyAmbient=()=>ambientCleanups.forEach(cleanup=>cleanup());
 bindProfileDossier();
 const cover=document.querySelector('.home-screen'),folder=document.querySelector('.hero-folder');
 if(cover&&folder){cover.addEventListener('pointermove',e=>{if(reducedMotion.matches||e.pointerType==='touch')return;const r=cover.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width*2-1,my=(e.clientY-r.top)/r.height*2-1;folder.style.setProperty('--mx',mx.toFixed(3));folder.style.setProperty('--my',my.toFixed(3));folder.style.setProperty('--opening',(.25+(1-Math.abs(mx))*.45).toFixed(3))});cover.addEventListener('pointerleave',()=>{['--mx','--my','--opening'].forEach(v=>folder.style.setProperty(v,0))});folder.addEventListener('click',()=>scatterHeroFiles(folder));}
 document.querySelectorAll('.work-folder').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();openWorkFolder(a)}));
 document.querySelectorAll('.artwork-button').forEach(b=>b.addEventListener('click',()=>openLightbox(Number(b.dataset.page))));
 document.querySelector('.back-top')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reducedMotion.matches?'instant':'smooth'}));
}

function bindProfileDossier(){
 const dossier=document.querySelector('.profile-dossier');
 if(!dossier)return;
 const card=dossier.querySelector('.profile-contact');
 const controls=[...dossier.querySelectorAll('[aria-controls="profile-contact"]')];
 let pinned=false;
 function setOpen(open){
  dossier.classList.toggle('is-open',open);
  card.inert=!open;card.setAttribute('aria-hidden',String(!open));
  controls.forEach(button=>{button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'收起照片与联系方式':'展开照片与联系方式');});
 }
 controls.forEach(button=>{
  button.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')setOpen(true);});
  button.addEventListener('click',()=>{pinned=!pinned;setOpen(pinned);});
 });
 dossier.addEventListener('pointerleave',event=>{if(event.pointerType!=='touch'&&!pinned&&!dossier.contains(document.activeElement))setOpen(false);});
 dossier.addEventListener('focusin',()=>setOpen(true));
 dossier.addEventListener('focusout',event=>{if(!pinned&&!dossier.contains(event.relatedTarget))setOpen(false);});
 dossier.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();pinned=false;controls[0].focus({preventScroll:true});setOpen(false);}});
}

// Fly the actual colored sheets out of the cover, with a fresh staggered path per click.
function scatterHeroFiles(source){
 if(transitionBusy)return;
 const target='#works';
 if(reducedMotion.matches){location.hash=target;return;}
 transitionBusy=true;
 const rect=source.getBoundingClientRect();
 const original=source.querySelector('svg'),svg=original.cloneNode(true);
 const stamp=`scatter-${Date.now()}-`;
 svg.querySelectorAll('[id]').forEach(el=>{el.id=stamp+el.id;});
 svg.querySelectorAll('*').forEach(el=>{for(const attr of [...el.attributes]){if(attr.value.includes('url(#'))el.setAttribute(attr.name,attr.value.replaceAll('url(#',`url(#${stamp}`));}});
 for(const selector of ['.sheet-one','.sheet-two','.sheet-three','.folder-front']){
  svg.querySelector(selector).style.transform=getComputedStyle(original.querySelector(selector)).transform;
 }
 const stage=document.createElement('div');stage.className='hero-scatter-stage';stage.setAttribute('aria-hidden','true');
 const origin=document.createElement('div');origin.className='hero-scatter-origin';
 Object.assign(origin.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`});origin.append(svg);
 const wash=document.createElement('div');wash.className='hero-scatter-wash';stage.append(origin,wash);document.body.append(stage);
 const beforeOverflow=document.body.style.overflow,beforeVisibility=source.style.visibility;
 source.style.visibility='hidden';document.body.style.overflow='hidden';
 const animations=[];
 const job={target,timers:[],cancel(){this.timers.forEach(clearTimeout);animations.forEach(a=>a.cancel());stage.remove();source.style.visibility=beforeVisibility;document.body.style.overflow=beforeOverflow;window.removeEventListener('resize',onResize);if(activeFlight===this){activeFlight=null;transitionBusy=false;}}};
 const onResize=()=>job.cancel();window.addEventListener('resize',onResize,{once:true});activeFlight=job;
 const scale=Math.min(rect.width/800,rect.height/650),random=(a,b)=>a+Math.random()*(b-a);
 const sheets=[svg.querySelector('.sheet-three'),svg.querySelector('.sheet-two'),svg.querySelector('.sheet-one>path:nth-child(2)'),svg.querySelector('.sheet-one>path:first-child'),svg.querySelector(':scope>path')];
 let delay=80,finishAt=0;
 sheets.forEach((sheet,i)=>{
  sheet.classList.add('scatter-sheet');
  const initial=getComputedStyle(sheet).transform;
  const dx=(innerWidth-rect.left)/scale+random(180,650);
  const dy=-(rect.bottom/scale+random(180,560));
  const bendX=dx*random(.14,.28),bendY=dy*random(.15,.30);
  const turn=random(-55,55),duration=random(820,1040);
  const transform=(x,y,r,sc=1)=>`translate(${x}px,${y}px) rotate(${r}deg) scale(${sc})`;
  animations.push(sheet.animate([
   {transform:initial==='none'?'none':initial,opacity:1,offset:0},
   {transform:transform(random(35,90),-random(80,170),turn*.15,1.02),opacity:1,offset:.2},
   {transform:transform(bendX,bendY,turn,random(.92,1.08)),opacity:1,offset:.5},
   {transform:transform(dx*.73,dy*.78,turn*1.8,.88),opacity:1,offset:.84},
   {transform:transform(dx,dy,turn*2.3,.72),opacity:0,offset:1}
  ],{duration,delay,easing:'cubic-bezier(.32,.05,.6,1)',fill:'both'}));
  finishAt=Math.max(finishAt,delay+duration);delay+=random(92,148);
 });
 const front=svg.querySelector('.folder-front');
 animations.push(front.animate([{transform:front.style.transform},{transform:'translateX(27px) skewX(-8deg) scaleX(1.07)',offset:.3},{transform:'translateX(13px) skewX(-3deg) scaleX(1.03)'}],{duration:finishAt,fill:'forwards',easing:'ease-in-out'}));
 animations.push(origin.animate([{opacity:1},{opacity:0}],{delay:finishAt-90,duration:280,fill:'forwards'}));
 animations.push(wash.animate([{opacity:0},{opacity:1}],{delay:finishAt-80,duration:240,fill:'forwards'}));
 job.timers.push(setTimeout(()=>{if(activeFlight!==job)return;location.hash=target;stage.classList.add('is-leaving');},finishAt+170));
 job.timers.push(setTimeout(()=>{if(activeFlight!==job)return;job.cancel();const h=main.querySelector('h1');h?.setAttribute('tabindex','-1');h?.focus({preventScroll:true});},finishAt+430));
}

// Keep the entire flip and sheet flight together so navigation can safely cancel it.
function openWorkFolder(source){
 if(transitionBusy)return;
 const target=source.getAttribute('href');
 if(reducedMotion.matches){location.hash=target;return;}
 const item=projects.find(p=>p.id===source.dataset.project);
 if(!item){location.hash=target;return;}
 transitionBusy=true;
 const r=source.getBoundingClientRect(),w=Math.min(290,innerWidth*.66),h=w*1.22;
 const sheetWidth=Math.min(620,innerWidth*.76),spread=Math.min(210,innerWidth*.22);
 const stage=document.createElement('div');
 stage.className='folder-flight';stage.setAttribute('aria-hidden','true');
 stage.style.setProperty('--folder-w',`${w}px`);stage.style.setProperty('--folder-h',`${h}px`);
 stage.style.setProperty('--page-w',`${sheetWidth}px`);
 stage.style.setProperty('--from-x',`${r.left+r.width/2-innerWidth/2}px`);
 stage.style.setProperty('--from-y',`${r.top+r.height/2-innerHeight*.52}px`);
 stage.style.setProperty('--from-scale',source.offsetWidth/w);
 const raised=source.matches(':hover,:focus-visible');
 stage.style.setProperty('--from-angle',raised?'-15deg':'-42deg');
 stage.style.setProperty('--from-skew',raised?'3deg':'12deg');
 const inside=Array.from({length:item.range[1]-item.range[0]},(_,i)=>item.range[0]+i+1).filter(n=>n!==item.cover);
 if(inside.length<2)inside.push(item.range[0]);
 const pages=[...inside.slice(0,2),item.cover];
 stage.innerHTML=`<div class="flight-wash"></div><div class="flight-folder" style="--accent:${item.color}">${source.innerHTML}</div>${pages.map((n,i)=>`<div class="flight-page" style="--sheet:${i};--fan-x:${i===0?-spread:i===1?spread:0}px;--fan-y:${i===2?-20:-105}px;--fan-angle:${i===0?-15:i===1?14:-2}deg;--fan-scale:${i===2?1:.78}"><img src="${asset(n)}" alt=""></div>`).join('')}`;
 document.body.append(stage);
 const previousOverflow=document.body.style.overflow;
 document.body.style.overflow='hidden';source.style.opacity='0';
 const job={target,timers:[],cancel(){this.timers.forEach(clearTimeout);stage.remove();source.style.opacity='';document.body.style.overflow=previousOverflow;if(activeFlight===this){activeFlight=null;transitionBusy=false;}}};
 activeFlight=job;
 job.timers.push(setTimeout(()=>{if(activeFlight!==job)return;location.hash=target;stage.classList.add('is-leaving');},1640));
 job.timers.push(setTimeout(()=>{if(activeFlight!==job)return;job.cancel();const heading=main.querySelector('h1');heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});},1890));
}

const dialog=document.querySelector('.lightbox');let lightboxPage=0;
function displayLightboxPage(){const img=document.querySelector('#lightbox-image'),i=lightboxPage-currentProject.range[0];img.src=asset(lightboxPage);img.alt=`${currentProject.title} — ${currentProject.captions[i]}`;document.querySelector('#lightbox-count').textContent=`${i+1} / ${currentProject.range[1]-currentProject.range[0]+1}`;document.querySelector('[data-lightbox="prev"]').disabled=lightboxPage===currentProject.range[0];document.querySelector('[data-lightbox="next"]').disabled=lightboxPage===currentProject.range[1]}
function openLightbox(n){lightboxPage=n;displayLightboxPage();dialog.showModal();document.body.style.overflow='hidden';document.querySelector('.lightbox-image-wrap').classList.remove('is-zoomed')}
function stepLightbox(dir){if(!currentProject)return;lightboxPage=Math.max(currentProject.range[0],Math.min(currentProject.range[1],lightboxPage+dir));displayLightboxPage()}
dialog.addEventListener('close',()=>{document.body.style.overflow=''});document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>stepLightbox(b.dataset.lightbox==='next'?1:-1)));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();stepLightbox(-1)}if(e.key==='ArrowRight'){e.preventDefault();stepLightbox(1)}});
document.querySelector('.lightbox-image-wrap').addEventListener('click',e=>{if(innerWidth<=680)e.currentTarget.classList.toggle('is-zoomed')});
function updateProgress(){const progress=document.querySelector('.project-progress');if(progress){const max=document.documentElement.scrollHeight-innerHeight;progress.style.setProperty('--progress',max?Math.min(1,scrollY/max):0)}}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('hashchange',render);render();



