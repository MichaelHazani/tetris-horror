"use strict";$(function(){Physijs.scripts.worker="./js/physijs_worker.js",Physijs.scripts.ammo="./ammo.js";var e,t,n,o,i,a,r,s,d,c,l,u,E,m,w,h,p,y,f,g,v,R,T,H,x,M,k=new THREE.Raycaster,b=new THREE.Vector2,L=window.innerWidth,P=window.innerHeight,j=0,z=1,S=!1,B=!1,C=!1,q=!1,F=!1,W=!1,O=performance.now(),V=new THREE.Vector3,A=-20,G=200,I=[],J=0,N=500,_=3e3,Y="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document;if(Y){var D=document.body,X=function(e){document.pointerLockElement===D||document.mozPointerLockElement===D||document.webkitPointerLockElement===D?(S=!0,H.enabled=!0):H.enabled=!1},Z=function(e){};document.addEventListener("pointerlockchange",X,!1),document.addEventListener("mozpointerlockchange",X,!1),document.addEventListener("webkitpointerlockchange",X,!1),document.addEventListener("pointerlockerror",Z,!1),document.addEventListener("mozpointerlockerror",Z,!1),document.addEventListener("webkitpointerlockerror",Z,!1),document.body.addEventListener("click",function(e){if(D.requestPointerLock=D.requestPointerLock||D.mozRequestPointerLock||D.webkitRequestPointerLock,/Firefox/i.test(navigator.userAgent)){var t=function(e){(document.fullscreenElement===D||document.mozFullscreenElement===D||document.mozFullScreenElement===D)&&(document.removeEventListener("fullscreenchange",t),document.removeEventListener("mozfullscreenchange",t),D.requestPointerLock())};document.addEventListener("fullscreenchange",t,!1),document.addEventListener("mozfullscreenchange",t,!1),D.requestFullscreen=D.requestFullscreen||D.mozRequestFullscreen||D.mozRequestFullScreen||D.webkitRequestFullscreen,D.requestFullscreen()}else D.requestPointerLock()},!1)}else document.body.innerHTML="Your browser doesn't seem to support Pointer Lock API";e=function(){function e(e){$(b).text(e),$(b).fadeIn(3e3),$(b).fadeOut(1500)}function a(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),$(".chair")[0].style.top=window.innerHeight/2+"px",$(".chair")[0].style.left=window.innerWidth/2+"px",M.style.top=window.innerHeight-50+"px",M.style.left=window.innerWidth/2+"px"}function s(){setTimeout(function(){var e=Math.floor(Math.random()*G+1),t=Math.floor(Math.random()*G+1);p.load("./JSON/R-shape.json",function(n){var i=new Physijs.BoxMesh(n,new THREE.MeshPhongMaterial({color:39168}));i.scale.set(2,2,2),i.position.y=100,i.position.x=e,i.position.z=t,i.rotation.x=e,i.rotation.y=t,i.rotation.z=e,o.add(i)})},2e3)}function c(){setTimeout(function(){var e=Math.floor(Math.random()*G+1),t=Math.floor(Math.random()*G+1);p.load("./JSON/cube.json",function(n){var i=new Physijs.BoxMesh(n,new THREE.MeshPhongMaterial({color:128}));i.scale.set(2,2,2),i.position.y=100,i.position.x=e,i.position.z=t,i.rotation.x=e,i.rotation.y=t,i.rotation.z=e,o.add(i)})},2e3)}function u(){setTimeout(function(){var e=Math.floor(Math.random()*G+1),t=Math.floor(Math.random()*G+1);p.load("./JSON/squiggly.json",function(n){var i=new Physijs.BoxMesh(n,new THREE.MeshPhongMaterial({color:32896}));i.scale.set(2,2,2),i.position.y=100,i.position.x=e,i.position.z=t,i.rotation.x=e,i.rotation.y=t,i.rotation.z=e,o.add(i)})},2e3)}function m(){setTimeout(function(){var e=Math.floor(Math.random()*G+1),t=Math.floor(Math.random()*G+1);p.load("./JSON/pedestal.json",function(n){var i=new Physijs.BoxMesh(n,new THREE.MeshPhongMaterial({color:13789470}));i.scale.set(2,2,2),i.position.y=100,i.position.x=e,i.position.z=t,i.rotation.x=e,i.rotation.y=t,i.rotation.z=e,o.add(i)})},2e3)}function h(){setTimeout(function(){var e=Math.floor(Math.random()*G+1),t=Math.floor(Math.random()*G+1);p.load("./JSON/longline.json",function(n){var i=new Physijs.BoxMesh(n,new THREE.MeshPhongMaterial({color:8388608}));i.scale.set(2,2,2),i.position.y=100,i.position.x=e,i.position.z=t,i.rotation.x=e,i.rotation.y=t,i.rotation.z=e,o.add(i)})},2e3)}function y(){var e=new THREE.TextureLoader;g=new SPE.Group({texture:{value:e.load("../images/star1.png")},fog:!1,maxParticleCount:8e3}),v=new SPE.Emitter({type:SPE.distributions.SPHERE,maxAge:2,position:{value:new THREE.Vector3(0,70,0),spread:new THREE.Vector3(2e3,30,2e3)},particleCount:8e3,isStatic:!0}),g.addEmitter(v),o.add(g.mesh)}R=new THREE.Clock,n=new THREE.WebGLRenderer({antialias:!0}),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(16777215),document.body.appendChild(n.domElement),o=new Physijs.Scene,o.setGravity(new THREE.Vector3(0,A,0)),i=new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1e3),i.position.set(0,0,10),o.add(i),H=new THREE.PointerLockControls(i),o.add(H.getObject());var T=document.createElement("img");T.src="../images/crosshair.png",T["class"]="chair",T.style.position="absolute",document.body.appendChild(T),T.style.top=window.innerHeight/2+"px",T.style.left=window.innerWidth/2+"px";var M=document.createElement("div");M["class"]="hitcounter",M.style.position="absolute",M.style.top=window.innerHeight-50+"px",M.style.left=window.innerWidth/2+"px",M.style.color="#fff",M.style.fontFamily="Raleway",M.style.fontWeight="100",M.style.fontSize="2rem",document.body.appendChild(M),$(M).text(j),M.style.display="none";var b=document.createElement("div");b["class"]="levelcounter",b.style.position="absolute",b.style.top=window.innerHeight/2+"px",b.style.left=window.innerWidth/2+"px",b.style.color="#fff",b.style.width=window.innerWidth/3+"px",b.style.height=window.innerHeight/3+"px",b.style.marginLeft=-1*window.innerWidth/6+"px",b.style.marginTop=-1*window.innerHeight/1.4+"px",b.style.fontFamily="Raleway",b.style.fontWeight="100",b.style.fontSize="60rem",b.style.textAlign="center",b.style.color="#333",document.body.appendChild(b),$(b).text(z),$(b).hide();var S=function(e){switch(e.keyCode){case 38:case 87:e.preventDefault(),B=!0;break;case 37:case 65:q=!0;break;case 40:case 83:C=!0;break;case 39:case 68:F=!0;break;case 32:W===!0&&(V.y+=200),W=!1}},O=function(e){switch(e.keyCode){case 38:case 87:B=!1;break;case 37:case 65:q=!1;break;case 40:case 83:C=!1;break;case 39:case 68:F=!1}};document.addEventListener("keydown",S,!1),document.addEventListener("keyup",O,!1),window.addEventListener("resize",a,!1),d=l=E=w=p=new THREE.JSONLoader;var Y=setInterval(function(){function e(e){switch(e){case 1:s();break;case 2:c();break;case 3:u();break;case 4:m();break;case 5:h()}}var t=Math.round(5*Math.random())+1;e(t%3==0?1:t%4==0?2:t%5==0?3:t%2==0?4:5),J++,J>=N&&clearInterval(Y)},_),D=13391189;f=new Physijs.CylinderMesh(new THREE.CylinderGeometry(500,500,5,34),new THREE.MeshLambertMaterial({color:D}),0),f.rotation.x=Math.PI,f.position.set(0,0,0),f.name="plane",f.addEventListener("collision",function(e){e.dead=!0}),o.add(f),r=new THREE.PointLight(16746632,.2),r.position.set(0,347,0),o.add(r);var X=new THREE.AmbientLight(16768477,.2);o.add(X),requestAnimationFrame(t);var Z=new THREE.BoxGeometry(700,700,700),K=[],Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/sides3.jpg"),side:THREE.BackSide}));var Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/sides3.jpg"),side:THREE.BackSide}));var Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/top3.jpg"),side:THREE.BackSide}));var Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/bottom3.jpg"),side:THREE.BackSide}));var Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/sides3.jpg"),side:THREE.BackSide}));var Q=new THREE.TextureLoader;K.push(new THREE.MeshBasicMaterial({map:Q.load("../images/sides3.jpg"),side:THREE.BackSide}));var U=new THREE.MeshFaceMaterial(K),ee=new THREE.Mesh(Z,U);ee.position.y=250,o.add(ee),y();var te=new THREE.BokehPass(o,i,{focus:1,aperture:.09,maxblur:1.1,width:L,height:P});te.renderToScreen=!0,x=new THREE.EffectComposer(n),x.addPass(new THREE.RenderPass(o,i)),x.addPass(te),i.lookAt(new THREE.Vector3(0,20,-100)),document.addEventListener("mousedown",function(){var t=new THREE.Vector2;t.x=0,t.y=0,k.setFromCamera(t,i);for(var n=k.intersectObjects(o.children),a=0;a<n.length;a++)"plane"==n[a].object.name||"Points"==n[a].object.type||n[a].object.dead||(n[a].object.material.transparent=!0,I.push(n[a].object),n[a].object.dead=!0,j++,$(M).text(j),j>=10*z&&(z++,_-=200*z,G+=15*z,A-=10,o.setGravity(new THREE.Vector3(0,A,0)),console.log("next up! Level "+z+", dropInterval: "+_,"dropRadius: "+G+", gravity: "+A),e(z)))},!1),e(z),console.log(z)},window.onerror=function(){return!0},t=function(){if(S){var e=performance.now(),n=(e-O)/500;V.x-=10*V.x*n,V.z-=10*V.z*n,V.y-=9.8*100*n,B&&(V.z-=400*n),C&&(V.z+=400*n),q&&(V.x-=400*n),F&&(V.x+=400*n),H.getObject().translateX(V.x*n),H.getObject().translateY(V.y*n),H.getObject().translateZ(V.z*n),H.getObject().position.y<10&&(V.y=0,H.getObject().position.y=10),O=e}I.length>0&&I.forEach(function(e){e.setLinearVelocity(new THREE.Vector3(0,0,0)),e.setAngularVelocity(new THREE.Vector3(0,0,0)),e.__dirtyPosition=!0,e.__dirtyRotation=!0,e.material.opacity=.5}),requestAnimationFrame(t),o.simulate(),x.render()},e()});