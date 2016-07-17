$(function(){Physijs.scripts.worker="./js/physijs_worker.js",Physijs.scripts.ammo="./ammo.js";var e,t,a,o,n,i,r,s,d,l,c,p,u,m,h,E,w=new THREE.Raycaster,y=new THREE.Vector2,g=window.innerWidth,f=window.innerHeight,T=0,v=1,H=!1,R=!1,M=!1,b=!1,x=!1,k=!1,L=new THREE.Vector3,P=new THREE.AudioListener,B,j,z,S,C,A,F,q,D=new Audio("./audio/theme.ogg"),O=new Audio("./audio/shepard.ogg"),W=new Audio("./audio/endfx.ogg"),G,V,I=-20,N=100,J=8,_=0,U=[],Y=[],X,Z=!1,K=!1,Q,ee=!0,te=0,ae=500,oe=3e3,ne="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document;if(ne){var ie=document.body,re=function(e){document.pointerLockElement===ie||document.mozPointerLockElement===ie||document.webkitPointerLockElement===ie?(H=!0,m.enabled=!0):m.enabled=!1},se=function(e){};document.addEventListener("pointerlockchange",re,!1),document.addEventListener("mozpointerlockchange",re,!1),document.addEventListener("webkitpointerlockchange",re,!1),document.addEventListener("pointerlockerror",se,!1),document.addEventListener("mozpointerlockerror",se,!1),document.addEventListener("webkitpointerlockerror",se,!1),document.body.addEventListener("click",function(e){if(ie.requestPointerLock=ie.requestPointerLock||ie.mozRequestPointerLock||ie.webkitRequestPointerLock,ie.exitPointerLock=ie.exitPointerLock||ie.mozExitPointerLock||ie.webkitExitPointerLock,/Firefox/i.test(navigator.userAgent)){var t=function(e){document.fullscreenElement!==ie&&document.mozFullscreenElement!==ie&&document.mozFullScreenElement!==ie||(document.removeEventListener("fullscreenchange",t),document.removeEventListener("mozfullscreenchange",t),ie.requestPointerLock())};document.addEventListener("fullscreenchange",t,!1),document.addEventListener("mozfullscreenchange",t,!1),ie.requestFullscreen=ie.requestFullscreen||ie.mozRequestFullscreen||ie.mozRequestFullScreen||ie.webkitRequestFullscreen,ie.requestFullscreen()}else ie.requestPointerLock()},!1)}else document.body.innerHTML="Your browser doesn't seem to support Pointer Lock API";var de=["./audio/1.ogg","./audio/2.ogg","./audio/3.ogg","./audio/4.ogg","./audio/5.ogg","./audio/6.ogg","./audio/7.ogg","./audio/8.ogg"];e=function(){function r(e){$(levelCounter).text(e),$(levelCounter).fadeIn(3e3),$(levelCounter).fadeOut(1500)}function E(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),A.style.top=window.innerHeight/2+"px",A.style.left=window.innerWidth/2+"px",F.style.top=window.innerHeight-50+"px",F.style.left=window.innerWidth/2+"px"}function y(){setTimeout(function(){var e=2*Math.round(Math.random())-1,t=2*Math.round(Math.random())-1,a=e*Math.floor(Math.random()*N+1),o=t*Math.floor(Math.random()*N+1);p.load("./JSON/R-shape.json",function(e){var t=new Physijs.BoxMesh(e,new THREE.MeshPhongMaterial({color:39168,wireframe:!1}));t.scale.set(2,2,2),t.position.y=100,t.position.x=a,t.position.z=o,t.rotation.x=a,t.rotation.y=o,t.rotation.z=a;var i=new THREE.PositionalAudio(P);C.load(de[Math.floor(Math.random()*de.length)],function(e){i.setBuffer(e),i.setRefDistance(60),i.volume=.3,i.play()}),t.name="R-shape",n.add(t)})},2e3)}function H(){setTimeout(function(){var e=2*Math.round(Math.random())-1,t=2*Math.round(Math.random())-1,a=e*Math.floor(Math.random()*N+1),o=t*Math.floor(Math.random()*N+1);p.load("./JSON/cube.json",function(e){var t=new Physijs.BoxMesh(e,new THREE.MeshPhongMaterial({color:128,wireframe:!1}));t.scale.set(2,2,2),t.position.y=100,t.position.x=a,t.position.z=o,t.rotation.x=a,t.rotation.y=o,t.rotation.z=a,t.name="cube";var i=new THREE.PositionalAudio(P);C.load(de[Math.floor(Math.random()*de.length)],function(e){i.setBuffer(e),i.setRefDistance(60),i.volume=.3,t.add(i),i.play()}),n.add(t)})},2e3)}function B(){setTimeout(function(){var e=2*Math.round(Math.random())-1,t=2*Math.round(Math.random())-1,a=e*Math.floor(Math.random()*N+1),o=t*Math.floor(Math.random()*N+1);p.load("./JSON/squiggly.json",function(e){var t=new Physijs.BoxMesh(e,new THREE.MeshPhongMaterial({color:32896,wireframe:!1}));t.scale.set(2,2,2),t.position.y=100,t.position.x=a,t.position.z=o,t.rotation.x=a,t.rotation.y=o,t.rotation.z=a,t.name="squiggly";var i=new THREE.PositionalAudio(P);C.load(de[Math.floor(Math.random()*de.length)],function(e){i.setBuffer(e),i.setRefDistance(60),i.volume=.3,t.add(i),i.play()}),n.add(t)})},2e3)}function j(){setTimeout(function(){var e=2*Math.round(Math.random())-1,t=2*Math.round(Math.random())-1,a=e*Math.floor(Math.random()*N+1),o=t*Math.floor(Math.random()*N+1);p.load("./JSON/pedestal.json",function(e){var t=new Physijs.BoxMesh(e,new THREE.MeshPhongMaterial({color:13789470,wireframe:!1}));t.scale.set(2,2,2),t.position.y=100,t.position.x=a,t.position.z=o,t.rotation.x=a,t.rotation.y=o,t.rotation.z=a,t.name="pedestal";var i=new THREE.PositionalAudio(P);C.load(de[Math.floor(Math.random()*de.length)],function(e){i.setBuffer(e),i.setRefDistance(60),i.volume=.3,t.add(i),i.play()}),n.add(t)})},2e3)}function z(){setTimeout(function(){var e=2*Math.round(Math.random())-1,t=2*Math.round(Math.random())-1,a=e*Math.floor(Math.random()*N+1),o=t*Math.floor(Math.random()*N+1);p.load("./JSON/longline.json",function(e){var t=new Physijs.BoxMesh(e,new THREE.MeshPhongMaterial({color:8388608,wireframe:!1}));t.scale.set(2,2,2),t.position.y=100,t.position.x=a,t.position.z=o,t.rotation.x=a,t.rotation.y=o,t.rotation.z=a,t.name="longline";var i=new THREE.PositionalAudio(P);C.load(de[Math.floor(Math.random()*de.length)],function(e){i.setBuffer(e),i.setRefDistance(60),i.volume=.3,t.add(i),i.play()}),n.add(t)})},2e3)}D.removeEventListener("canplaythrough",e,!1);var S=new THREE.LoadingManager;S.onProgress=function(e,t,a){console.log(e,t,a),console.log("progress")},S.onLoad=function(){console.log("done")},S.onError=function(e){console.warn("Loading Error",e)},clock=new THREE.Clock,a=new THREE.WebGLRenderer({antialias:!0}),a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(0),document.body.appendChild(a.domElement),n=new Physijs.Scene,n.setGravity(new THREE.Vector3(0,I,0)),D.volume=1,O.addEventListener("ended",function(){this.currentTime=0,this.play(),this.volume=0},!1),O.volume=0,O.currentTime=30,i=new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1e3),i.position.set(0,0,10),n.add(i),i.add(P);var C=new THREE.AudioLoader;m=new THREE.PointerLockControls(i),n.add(m.getObject());var A=document.createElement("img");A.src="./images/crosshair.png",A["class"]="chair",A.style.position="absolute",document.body.appendChild(A),A.style.top=window.innerHeight/2+"px",A.style.left=window.innerWidth/2+"px";var F=document.createElement("div");F["class"]="hitcounter",F.style.position="absolute",F.style.top="20px",F.style.left="97%",F.style.color="#fff",F.style.fontFamily="Raleway",F.style.fontWeight="100",F.style.fontSize="2rem",document.body.appendChild(F),$(F).text(T);var q=document.createElement("div");q["class"]="blackScreen",q.style.position="absolute",q.zIndex=134,q.style.top="0px",q.style.left="0px",q.style.backgroundColor="black",q.style.width=window.innerWidth+"px",q.style.height=window.innerHeight+"px",q.style.margin=0,q.style.color="white",q.style.opacity=0,q.style.textAlign="center";var J=document.createElement("div");J.innerHTML="<p class='p1d' style='opacity:0'>You almost made it.</p><p class='p2d' style='opacity:0'>Just one more level.</p><br><br><p class='p3d' style='opacity:0'>Try again?</p><p class='p4d' style='opacity:0'>I bet you'll beat it this time.</p><p class='p5d' style='opacity:0'>What's the harm?</p><div class='p5d' id='links' style='opacity: 0; width: 100%; position: absolute; float: right; bottom: 35px; line-height: 1em; font-size:0.7em; font-family:helvetica; color: #ccc'>&#169 2016 Michael Hazani <br> <a href='http://michaelhazani.com' alt='Michael Hazani's website' target='_blank' style='text-decoration:none; color:#ccc;'>website</a> | <a href='https://github.com/MichaelHazani/tetris-horror' alt='Hazani's Github' target='_blank' style='text-decoration:none; color:#ccc;'>GitHub</a></div>",J.style.fontSize="1em",J.style.textAlign="center",J.style.lineHeight="4rem",J.style.marginTop="2%",J.style.marginLeft="20px",J.style.position="absolute",J.style.top="0px",J.style.backgroundColor="black",J.style.color="white",J.style.width=window.innerWidth+"px",J.style.height=window.innerHeight+"px",q.appendChild(J);var ne=document.createElement("div");ne["class"]="introScreen",ne.style.position="absolute",ne.zIndex=134,ne.style.top="0px",ne.style.left="0px",ne.style.backgroundColor="black",ne.style.width=window.innerWidth+"px",ne.style.height=window.innerHeight+"px",ne.style.margin=0,ne.style.color="white";var re=document.createElement("div");re.innerHTML="<div><p class='1p' style='opacity: 0'>\"...But nowadays, the populace at large isn't aware of our discoveries since we first encountered the Tetris Effect - <br>chronic, virtually irreversible phenomena such as neural hijacking, pattern-oriented compulsive obsessions or post-Pavlovian conditioning...</p><br><p class='2p' style='opacity: 0'>No one wants to be told about thousands of cases, women and men around the world <br> who spend their lives confined to padded cells, doomed to play a neverending game in their heads ad infinitum, <br> sans loved ones, sans thought, sans sleep...\" </p></div><br><br><span id='credits' class='3p' style='float:right; font-style: italic; margin-right:40px; opacity: 0'>A.L.Pajitnov, PhD, \"The Viral And The Virtual: Towards A New Pathology\"</span>",re.style.fontSize="1.1em",re.style.textAlign="left",re.style.lineHeight="4rem",re.style.marginTop="2%",re.style.marginLeft="20px",re.style.position="absolute",re.style.top="0px",re.style.backgroundColor="black",re.style.color="white",re.style.width=window.innerWidth+"px",re.style.height=window.innerHeight+"px",ne.appendChild(re),ie.appendChild(ne);var se=function(e){switch(e.keyCode){case 38:case 87:e.preventDefault(),R=!0;break;case 37:case 65:b=!0;break;case 40:case 83:M=!0;break;case 39:case 68:x=!0;break;case 32:k===!0&&(L.y+=200),k=!1;break;case 80:Z=!Z}},le=function(e){switch(e.keyCode){case 38:case 87:R=!1;break;case 37:case 65:b=!1;break;case 40:case 83:M=!1;break;case 39:case 68:x=!1}};document.addEventListener("keydown",se,!1),document.addEventListener("keyup",le,!1),window.addEventListener("resize",E,!1),p=new THREE.JSONLoader,X=setInterval(function(){function e(e){switch(e){case 1:y();break;case 2:H();break;case 3:B();break;case 4:j();break;case 5:z()}}if(!Z&&!K&&!ee){var t=Math.round(5*Math.random())+1;e(t%2==0?1:t%3==0?2:t%4==0?3:t%5==0?4:5),te++,te>=ae&&clearInterval(X)}},oe),Q=function(e){K=!0,document.exitPointerLock(),$(O).animate({volume:0},2e3),W.volume=0,W.loop=!0,W.play(),$(W).animate({volume:.4},2e4),ie.appendChild(q),cancelAnimationFrame(o),$(q).animate({opacity:1},2e3),$(".p1d").animate({opacity:1},5e3),$(".p2d").animate({opacity:1},1e4),$(".p3d").animate({opacity:1},15e3),$(".p4d").animate({opacity:1},2e4),$(".p5d").animate({opacity:1},25e3),setTimeout(function(){window.addEventListener("mousedown",function(){location.reload()})},1e4)};var ce=10770263;u=new Physijs.CylinderMesh(new THREE.CylinderGeometry(500,500,5,34),new THREE.MeshPhongMaterial({color:ce}),0),u.rotation.x=Math.PI,u.position.set(0,0,0),u.name="plane",u.addEventListener("collision",function(e){e.dead||(e.dead=!0,V=new THREE.PositionalAudio(P),C.load("./audio/crash.ogg",function(e){V.setBuffer(e),V.setRefDistance(100),V.volume=.1,V.play()}),U.push(e),_++),_>11-2*v&&Q(v)}),n.add(u),s=new THREE.PointLight(16777215,.5),s.position.set(150,200,150),n.add(s),d=new THREE.PointLight(16777215,.5),d.position.set(150,200,-150),n.add(d),l=new THREE.PointLight(16777215,.5),l.position.set(-150,200,150),n.add(l),c=new THREE.PointLight(16777215,.5),c.position.set(-150,200,-150),n.add(c),requestAnimationFrame(t);var pe=new THREE.BoxGeometry(700,700,700),ue=[],me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/top1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/bottom1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var me=new THREE.TextureLoader;ue.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides1.jpg"),side:THREE.DoubleSide,transparent:!0,needsUpdate:!0}));var he=new THREE.MeshFaceMaterial(ue),Ee=new THREE.Mesh(pe,he);Ee.position.y=250,n.add(Ee);var we=new THREE.BoxGeometry(740,740,740),ye=[],me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/top2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/bottom2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ye.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides2.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var ge=new THREE.MeshFaceMaterial(ye),fe=new THREE.Mesh(we,ge);fe.position.y=245,n.add(fe);var Te=new THREE.BoxGeometry(720,720,720),ve=[],me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/top3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/bottom3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;ve.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides3.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var He=new THREE.MeshFaceMaterial(ve),Re=new THREE.Mesh(Te,He);Re.position.y=245,n.add(Re);var Me=new THREE.BoxGeometry(760,760,760),be=[],me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/top4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/bottom4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var me=new THREE.TextureLoader;be.push(new THREE.MeshBasicMaterial({map:me.load("./images/sides4.jpg"),side:THREE.BackSide,transparent:!0,opacity:0}));var xe=new THREE.MeshFaceMaterial(be),ke=new THREE.Mesh(Me,xe);ke.position.y=245,n.add(ke);var Le=new THREE.BokehPass(n,i,{focus:1,aperture:.02,maxblur:1.02,width:g,height:f});Le.renderToScreen=!0,h=new THREE.EffectComposer(a),h.addPass(new THREE.RenderPass(n,i)),h.addPass(Le),document.addEventListener("mousedown",function(){function e(){n.remove(Ee),u.material.color=new THREE.Color(16711935);for(var e=0;e<Re.material.materials.length;e++)TweenLite.to(Re.material.materials[e],3,{opacity:1})}function t(){n.remove(Re),u.material.color=new THREE.Color(8650815);for(var e=0;e<fe.material.materials.length;e++)TweenLite.to(fe.material.materials[e],3,{opacity:1})}function a(){n.remove(fe),u.material.color=new THREE.Color(4544102);for(var e=0;e<ke.material.materials.length;e++)TweenLite.to(ke.material.materials[e],3,{opacity:1})}var o=new THREE.Vector2;o.x=0,o.y=0,w.setFromCamera(o,i);for(var r=w.intersectObjects(n.children),s=0;s<r.length;s++)if("plane"==r[s].object.name||"Points"==r[s].object.type||r[s].object.dead||(r[s].object.material.wireframe=!0,r[s].object.dead=!0,G=new THREE.PositionalAudio(P),C.load("./audio/hit2.ogg",function(e){G.setBuffer(e),G.setRefDistance(50),G.volume=.4,G.play()}),Y.push(r[s].object),T++,$(F).text(T)),T>=10*v){oe-=600*v,N+=45*v,I-=40,n.setGravity(new THREE.Vector3(0,I,0)),_=0;for(var s=0;s<U.length;s++)n.remove(U[s]);switch(v){case 1:for(var s=0;s<Ee.material.materials.length;s++)TweenLite.to(Ee.material.materials[s],5,{opacity:0,onComplete:e});break;case 2:for(var s=0;s<Re.material.materials.length;s++)TweenLite.to(Re.material.materials[s],5,{opacity:0,onComplete:t});break;case 3:for(var s=0;s<fe.material.materials.length;s++)TweenLite.to(fe.material.materials[s],5,{opacity:0,onComplete:a})}v++}},!1),$(".1p").animate({opacity:1},1e4),$(".2p").animate({opacity:1},15e3),$(".3p").animate({opacity:1},2e4),D.play(),$(ne).click(function(){$(D).animate({volume:0},1e3),setTimeout(function(){D.pause()},1500),$(O).animate({volume:.5},6e3),$(ne).fadeOut(2e3),setTimeout(function(){ie.removeChild(ne)},2e3),function e(){var e=document.createElement("img");e.style.position="absolute",e.style.width="35%",e.style.top="65%",e.style.left="32.5%",e.style.opacity="0",e.src="./images/inst.png",document.body.appendChild(e),$(e).animate({opacity:1},2e3,function(){$(e).animate({opacity:0},8e3)})}(),function t(){var e=["this is better than your reality","trust gravity","this level can last forever","food, the prolonger, is abominable","what day is it?","as you wish","have you ever purposefully lost a game?","remember those who fell before you","don't go outside stay in your head don't go","no randomization is completely unorganized. no certainty is without cha0s","which color tastes the best?","the difference between you and a madman is","fractured conscience =/= fractured memory","bits and bytes and ACTG and fine print","a 240p rose is still a røse","sunlight is cancerous","diseases thrive in the wild"],t=document.createElement("div");t.style.position="absolute",t.style.textAlign="center",t.style.width="100%",t.style.top="10%",t.style.color="#fff",t.style.fontFamily="Inconsolata",t.style.fontSize="1.5em",t.style.opacity=0,document.body.appendChild(t);var a=setInterval(function(){var a=e[Math.floor(Math.random()*e.length)];$(t).text(a),$(t).animate({opacity:1},5e3,function(){$(t).animate({opacity:0},5e3)})},15e3)}(),ee=!1})},window.onerror=function(){return!0},t=function(){if(H){var e=performance.now(),a=(e-prevTime)/500;L.x-=10*L.x*a,L.z-=10*L.z*a,L.y-=9.8*100*a,R&&(L.z-=400*a),M&&(L.z+=400*a),b&&(L.x-=400*a),x&&(L.x+=400*a),m.getObject().translateX(L.x*a),m.getObject().translateY(L.y*a),m.getObject().translateZ(L.z*a),m.getObject().position.y<10&&(L.y=0,m.getObject().position.y=10)}Y.length>0&&Y.forEach(function(e){e.__dirtyPosition=!0,e.__dirtyRotation=!0,e.setLinearVelocity(new THREE.Vector3(0,1.5,0)),e.setAngularVelocity(new THREE.Vector3(0,.2,0))}),o=requestAnimationFrame(t),Z?(O.pause(),document.exitPointerLock()):(ne||document.requestPointerLock(),O.play(),n.simulate(),h.render())},D.addEventListener("canplaythrough",e,!1)});