// White paper, soft fresh color, and a spring-driven dot field.
// The canvas never takes pointer events, and rests when the field has settled.
window.initHeroAmbient=function(hero){
 if(!hero)return null;
 const canvas=document.createElement('canvas');canvas.className='hero-ambient';canvas.setAttribute('aria-hidden','true');hero.prepend(canvas);
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx){canvas.remove();return null;}
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let width=0,height=0,ratio=1,points=[],raf=0,alive=true,visible=true,last=0,glow=0,topExtension=0,panelClip=null;
 const isPanel=hero.classList.contains('about-body');
 const pointer={x:0,y:0,active:false},light={x:0,y:0};
 function haze(x,y,radius,color,opacity){const gradient=ctx.createRadialGradient(x,y,0,x,y,radius);gradient.addColorStop(0,`rgba(${color},${opacity})`);gradient.addColorStop(.45,`rgba(${color},${opacity*.55})`);gradient.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=gradient;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);}
 function paint(){
  ctx.clearRect(0,0,width,height);
  ctx.save();if(panelClip)ctx.clip(panelClip);
  const radius=Math.min(width,height)*.65;
  haze(width*.91,height*.81,radius,'177,223,239',.19);
  haze(width*.67,height*.99,radius*.8,'195,237,218',.18);
  if(glow>.002){
   haze(light.x,light.y,220,'150,212,233',.23*glow);
   haze(light.x+85,light.y+60,220,'176,230,207',.18*glow);
  }
  for(const p of points){
   const distance=Math.hypot(p.x-pointer.x,p.y-pointer.y);
   const proximity=pointer.active&&!reduce.matches?Math.max(0,1-distance/190):0;
   ctx.fillStyle=`rgba(${proximity>.2?'109,177,187':'144,177,190'},${.27+proximity*.24})`;
   ctx.beginPath();ctx.arc(p.x,p.y,.68+proximity*.4,0,Math.PI*2);ctx.fill();
  }
  ctx.restore();
 }
 function tick(now){
  raf=0;if(!alive||!visible||reduce.matches)return;
  const dt=Math.min(2,Math.max(.5,(now-last)/16.67));last=now;
  const targetGlow=pointer.active?1:0;glow+=(targetGlow-glow)*Math.min(1,.075*dt);
  light.x+=(pointer.x-light.x)*Math.min(1,.085*dt);light.y+=(pointer.y-light.y)*Math.min(1,.085*dt);
  let moving=Math.abs(targetGlow-glow)>.003||(pointer.active&&Math.hypot(light.x-pointer.x,light.y-pointer.y)>.1);
  for(const p of points){
   let tx=p.ox,ty=p.oy;
   if(pointer.active){
    const dx=p.ox-pointer.x,dy=p.oy-pointer.y,distance=Math.hypot(dx,dy),influence=Math.max(0,1-distance/185);
    if(influence>0){
     const push=29*influence*influence;
     tx+=(dx/Math.max(1,distance))*push-dy*.028*influence;
     ty+=(dy/Math.max(1,distance))*push+dx*.028*influence;
    }
   }
   p.vx=(p.vx+(tx-p.x)*.065*dt)*Math.pow(.77,dt);
   p.vy=(p.vy+(ty-p.y)*.065*dt)*Math.pow(.77,dt);
   p.x+=p.vx*dt;p.y+=p.vy*dt;
   if(Math.abs(p.vx)+Math.abs(p.vy)>.015||Math.abs(tx-p.x)+Math.abs(ty-p.y)>.05)moving=true;
  }
  paint();if(moving)raf=requestAnimationFrame(tick);
 }
 function wake(){if(alive&&visible&&!reduce.matches&&!raf){last=performance.now();raf=requestAnimationFrame(tick);}}
 function resize(){
  width=hero.clientWidth;height=hero.clientHeight;if(!width||!height)return;
  topExtension=0;panelClip=null;
  if(isPanel){
   const bodyRadius=parseFloat(getComputedStyle(hero).borderTopLeftRadius)||0;
   const tab=getComputedStyle(hero,'::before'),hasTab=tab.display!=='none'&&tab.content!=='none';
   const tabHeight=hasTab?parseFloat(tab.height)||0:0,tabWidth=hasTab?parseFloat(tab.width)||0:0;
   topExtension=hasTab?Math.max(0,tabHeight-bodyRadius):0;
   panelClip=new Path2D();panelClip.roundRect(0,topExtension,width,height,bodyRadius);
   if(hasTab)panelClip.roundRect(width-tabWidth,0,tabWidth,tabHeight,[parseFloat(tab.borderTopLeftRadius)||0,parseFloat(tab.borderTopRightRadius)||0,0,0]);
   height+=topExtension;canvas.style.top=`${-topExtension}px`;canvas.style.height=`${height}px`;
  }
  ratio=Math.min(devicePixelRatio||1,1.5,Math.sqrt(1800000/(width*height)));
  canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);
  const spacing=Math.max(27,Math.sqrt(width*height/2200));points=[];
  for(let y=13;y<height;y+=spacing)for(let x=13;x<width;x+=spacing){const ox=x+Math.sin(y*.009)*2,oy=y+Math.sin(x*.007)*2;points.push({ox,oy,x:ox,y:oy,vx:0,vy:0});}
  paint();wake();
 }
 function move(event){
  if(event.pointerType==='touch'||reduce.matches)return;
  const rect=hero.getBoundingClientRect();pointer.x=event.clientX-rect.left;pointer.y=event.clientY-rect.top+topExtension;
  if(!pointer.active){light.x=pointer.x;light.y=pointer.y;}pointer.active=true;wake();
 }
 function leave(){pointer.active=false;wake();}
 function preference(){cancelAnimationFrame(raf);raf=0;pointer.active=false;glow=0;for(const p of points){p.x=p.ox;p.y=p.oy;p.vx=p.vy=0;}paint();}
 function pageVisibility(){if(document.hidden){cancelAnimationFrame(raf);raf=0;pointer.active=false;}else wake();}
 hero.addEventListener('pointermove',move,{passive:true});hero.addEventListener('pointerleave',leave,{passive:true});reduce.addEventListener('change',preference);document.addEventListener('visibilitychange',pageVisibility);
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(hero);
 const visibilityObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){wake();}else{cancelAnimationFrame(raf);raf=0;pointer.active=false;glow=0;}},{threshold:0});visibilityObserver.observe(hero);
 resize();
 return()=>{alive=false;cancelAnimationFrame(raf);resizeObserver.disconnect();visibilityObserver.disconnect();hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',leave);reduce.removeEventListener('change',preference);document.removeEventListener('visibilitychange',pageVisibility);canvas.remove();};
};
