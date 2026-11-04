(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="170",ri={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,_l=1,wd=2,uu=1,du=2,Jn=3,kn=0,sn=1,Ot=2,Ti=0,xs=1,xl=2,yl=3,vl=4,Td=5,Gi=100,Ed=101,Ad=102,Rd=103,Cd=104,Pd=200,Ld=201,Id=202,Dd=203,Na=204,Ua=205,Nd=206,Ud=207,Od=208,Fd=209,Bd=210,kd=211,zd=212,Hd=213,Gd=214,Oa=0,Fa=1,Ba=2,bs=3,ka=4,za=5,Ha=6,Ga=7,fu=0,Vd=1,Wd=2,Ei=0,Xd=1,qd=2,Yd=3,pu=4,jd=5,Kd=6,$d=7,Ml="attached",Zd="detached",mu=300,ws=301,Ts=302,Va=303,Wa=304,Eo=306,Xi=1e3,ni=1001,dr=1002,$t=1003,Pc=1004,ps=1005,an=1006,rr=1007,Bn=1008,ai=1009,gu=1010,_u=1011,fr=1012,Lc=1013,qi=1014,In=1015,Mr=1016,Ic=1017,Dc=1018,Es=1020,xu=35902,yu=1021,vu=1022,pn=1023,Mu=1024,Su=1025,ys=1026,As=1027,Nc=1028,Uc=1029,bu=1030,Oc=1031,Fc=1033,ao=33776,co=33777,lo=33778,ho=33779,Xa=35840,qa=35841,Ya=35842,ja=35843,Ka=36196,$a=37492,Za=37496,Ja=37808,Qa=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,uo=36492,dc=36494,fc=36495,wu=36283,pc=36284,mc=36285,gc=36286,Rs=2300,Cs=2301,Oo=2302,Sl=2400,bl=2401,wl=2402,Jd=2500,Qd=0,Tu=1,_c=2,ef=3200,tf=3201,Eu=0,nf=1,ti="",At="srgb",Wt="srgb-linear",Ao="linear",gt="srgb",Zi=7680,Tl=519,sf=512,rf=513,of=514,Au=515,af=516,cf=517,lf=518,hf=519,xc=35044,El="300 es",ii=2e3,_o=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const or=Math.PI/180,Ps=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Bc(i,e){return(i%e+e)%e}function uf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function df(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function ff(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function pf(i,e=1){return e-Math.abs(Bc(i,e*2)-e)}function mf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _f(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xf(i,e){return i+Math.random()*(e-i)}function yf(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(Al=i);let e=Al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(i){return i*or}function Sf(i){return i*Ps}function bf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pr={DEG2RAD:or,RAD2DEG:Ps,generateUUID:Sn,clamp:It,euclideanModulo:Bc,mapLinear:uf,inverseLerp:df,lerp:ar,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:xf,randFloatSpread:yf,seededRandom:vf,degToRad:Mf,radToDeg:Sf,isPowerOfTwo:bf,ceilPowerOfTwo:wf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Ef,normalize:mt,denormalize:Pn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],y=s[4],x=s[7],P=s[2],E=s[5],A=s[8];return r[0]=o*_+a*v+c*P,r[3]=o*p+a*y+c*E,r[6]=o*m+a*x+c*A,r[1]=l*_+h*v+u*P,r[4]=l*p+h*y+u*E,r[7]=l*m+h*x+u*A,r[2]=d*_+f*v+g*P,r[5]=d*p+f*y+g*E,r[8]=d*m+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fo.makeScale(e,t)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Ye;function Ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=mr("canvas");return i.style.display="block",i}const Rl={};function Js(i){i in Rl||(Rl[i]=!0,console.warn(i))}function Rf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cl=[.64,.33,.3,.6,.15,.06],Pl=[.2126,.7152,.0722],Ll=[.3127,.329],Il=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Wt]:{primaries:Cl,whitePoint:Ll,transfer:Ao,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:Pl,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:Cl,whitePoint:Ll,transfer:gt,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:Pl,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});let Ji;class Lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=mr("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;class Dt extends Ki{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=ni,s=ni,r=an,o=Bn,a=pn,c=ai,l=Dt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Sn(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=mu;Dt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,P=(m+1)/2,E=(h+d)/4,A=(u+_)/4,C=(g+p)/4;return y>x&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cu extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,m*v);p=Math.sin(p*E)/P,a=Math.sin(a*E)/P}const x=a*v;if(c=c*p+d*x,l=l*p+f*x,h=h*p+g*x,u=u*p+_*x,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new T,Nl=new Nn;class cn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Cr.subVectors(this.max,Gs),Qi.subVectors(e.a,Gs),es.subVectors(e.b,Gs),ts.subVectors(e.c,Gs),di.subVectors(es,Qi),fi.subVectors(ts,es),Ii.subVectors(Qi,ts);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,di.z,0,-di.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!zo(t,Qi,es,ts,Cr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Qi,es,ts,Cr))?!1:(Pr.crossVectors(di,fi),t=[Pr.x,Pr.y,Pr.z],zo(t,Qi,es,ts,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new T,new T,new T,new T,new T,new T,new T,new T],An=new T,Rr=new cn,Qi=new T,es=new T,ts=new T,di=new T,fi=new T,Ii=new T,Gs=new T,Cr=new T,Pr=new T,Di=new T;function zo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Of=new cn,Vs=new T,Ho=new T;class Hn{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Ho)),this.expandByPoint(Vs.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new T,Go=new T,Lr=new T,pi=new T,Vo=new T,Ir=new T,Wo=new T;class Sr{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=pi.dot(this.direction),c=-pi.dot(Lr),l=pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Go).addScaledVector(Lr,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){Vo.subVectors(t,e),Ir.subVectors(n,e),Wo.crossVectors(Vo,Ir);let o=this.direction.dot(Wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(pi,Ir));if(c<0)return null;const l=a*this.direction.dot(Vo.cross(pi));if(l<0||c+l>o)return null;const h=-a*pi.dot(Wo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Bf)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),mi.crossVectors(n,un),mi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),mi.crossVectors(n,un)),mi.normalize(),Dr.crossVectors(un,mi),s[0]=mi.x,s[4]=Dr.x,s[8]=un.x,s[1]=mi.y,s[5]=Dr.y,s[9]=un.y,s[2]=mi.z,s[6]=Dr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],y=n[7],x=n[11],P=n[15],E=s[0],A=s[4],C=s[8],b=s[12],M=s[1],L=s[5],k=s[9],F=s[13],X=s[2],V=s[6],W=s[10],K=s[14],q=s[3],le=s[7],de=s[11],te=s[15];return r[0]=o*E+a*M+c*X+l*q,r[4]=o*A+a*L+c*V+l*le,r[8]=o*C+a*k+c*W+l*de,r[12]=o*b+a*F+c*K+l*te,r[1]=h*E+u*M+d*X+f*q,r[5]=h*A+u*L+d*V+f*le,r[9]=h*C+u*k+d*W+f*de,r[13]=h*b+u*F+d*K+f*te,r[2]=g*E+_*M+p*X+m*q,r[6]=g*A+_*L+p*V+m*le,r[10]=g*C+_*k+p*W+m*de,r[14]=g*b+_*F+p*K+m*te,r[3]=v*E+y*M+x*X+P*q,r[7]=v*A+y*L+x*V+P*le,r[11]=v*C+y*k+x*W+P*de,r[15]=v*b+y*F+x*K+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=u*p*l-_*d*l+_*c*f-a*p*f-u*c*m+a*d*m,y=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*m+o*u*m,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,E=t*v+n*y+s*x+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*A,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*A,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,e[4]=y*A,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*m-t*u*m)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=P*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*p+t*u*p)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,v=c*l,y=c*h,x=c*u,P=n.x,E=n.y,A=n.z;return s[0]=(1-(_+m))*P,s[1]=(f+x)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(p-v)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,h=1/o,u=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,_;if(a===ii)g=(o+r)*u,_=-2*u;else if(a===_o)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new T,Rn=new qe,Ff=new T(0,0,0),Bf=new T(1,1,1),mi=new T,Dr=new T,un=new T,Ul=new qe,Ol=new Nn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kf=0;const Fl=new T,is=new Nn,jn=new qe,Nr=new T,Ws=new T,zf=new T,Hf=new Nn,Bl=new T(1,0,0),kl=new T(0,1,0),zl=new T(0,0,1),Hl={type:"added"},Gf={type:"removed"},ss={type:"childadded",child:null},Xo={type:"childremoved",child:null};class yt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new T,t=new zn,n=new Nn,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ws,Nr,this.up):jn.lookAt(Nr,Ws,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(jn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gf),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new T(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new T,Kn=new T,qo=new T,$n=new T,rs=new T,os=new T,Gl=new T,Yo=new T,jo=new T,Ko=new T,$o=new ut,Zo=new ut,Jo=new ut;class Ln{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),Kn.subVectors(n,t),qo.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(Kn),c=Cn.dot(qo),l=Kn.dot(Kn),h=Kn.dot(qo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return $o.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),$o.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Jo,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),Kn.subVectors(e,t),Cn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,n),os.subVectors(r,n),Yo.subVectors(e,n);const c=rs.dot(Yo),l=os.dot(Yo);if(c<=0&&l<=0)return t.copy(n);jo.subVectors(e,s);const h=rs.dot(jo),u=os.dot(jo);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(rs,o);Ko.subVectors(e,r);const f=rs.dot(Ko),g=os.dot(Ko);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(os,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Gl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Gl,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Bc(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qo(o,r,e+1/3),this.g=Qo(o,r,e),this.b=Qo(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return st.fromWorkingColorSpace(Yt.copy(this),e),Math.round(It(Yt.r*255,0,255))*65536+Math.round(It(Yt.g*255,0,255))*256+Math.round(It(Yt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=At){st.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Ur);const n=ar(gi.h,Ur.h,t),s=ar(gi.s,Ur.s,t),r=ar(gi.l,Ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ce;Ce.NAMES=Lu;let Vf=0;class Dn extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Sn(),this.name="",this.blending=xs,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends Dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new T,Or=new ie;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class Iu extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Du extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wf=0;const yn=new qe,ea=new yt,as=new T,dn=new cn,Xs=new cn,Ht=new T;class zt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Du:Iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(dn.min,Xs.min),dn.expandByPoint(Ht),Ht.addVectors(dn.max,Xs.max),dn.expandByPoint(Ht)):(dn.expandByPoint(Xs.min),dn.expandByPoint(Xs.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(e,l),Ht.add(as)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new T,c[C]=new T;const l=new T,h=new T,u=new T,d=new ie,f=new ie,g=new ie,_=new T,p=new T;function m(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(_),a[b].add(_),a[M].add(_),c[C].add(p),c[b].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,b=v.length;C<b;++C){const M=v[C],L=M.start,k=M.count;for(let F=L,X=L+k;F<X;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new T,x=new T,P=new T,E=new T;function A(C){P.fromBufferAttribute(s,C),E.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(E,b);const L=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,b=v.length;C<b;++C){const M=v[C],L=M.start,k=M.count;for(let F=L,X=L+k;F<X;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new qe,Ni=new Sr,Fr=new Hn,Wl=new T,Br=new T,kr=new T,zr=new T,ta=new T,Hr=new T,Xl=new T,Gr=new T;class Ze extends yt{constructor(e=new zt,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ta.fromBufferAttribute(u,e),o?Hr.addScaledVector(ta,h):Hr.addScaledVector(ta.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Fr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Fr,Wl)===null||Ni.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){const E=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=Vr(this,m,e,n,l,h,u,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=Vr(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=v,P=y;x<P;x+=3){const E=x,A=x+1,C=x+2;s=Vr(this,m,e,n,l,h,u,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,x=p+2;s=Vr(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Xf(i,e,t,n,s,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===kn,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Br),i.getVertexPosition(c,kr),i.getVertexPosition(l,zr);const h=Xf(i,e,t,n,Br,kr,zr,Xl);if(h){const u=new T;Ln.getBarycoord(Xl,Br,kr,zr,u),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,c,l,u,new ie)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};Ln.getNormal(Br,kr,zr,d.normal),h.face=d,h.barycoord=u}return h}class pe extends zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(_,p,m,v,y,x,P,E,A,C,b){const M=x/A,L=P/C,k=x/2,F=P/2,X=E/2,V=A+1,W=C+1;let K=0,q=0;const le=new T;for(let de=0;de<W;de++){const te=de*L-F;for(let Me=0;Me<V;Me++){const je=Me*M-k;le[_]=je*v,le[p]=te*y,le[m]=X,l.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[m]=E>0?1:-1,h.push(le.x,le.y,le.z),u.push(Me/A),u.push(1-de/C),K+=1}}for(let de=0;de<C;de++)for(let te=0;te<A;te++){const Me=d+te+V*de,je=d+te+V*(de+1),z=d+(te+1)+V*(de+1),Q=d+(te+1)+V*de;c.push(Me,je,Q),c.push(je,z,Q),q+=6}a.addGroup(f,q,b),f+=q,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ls(i[t]);for(const s in n)e[s]=n[s]}return e}function qf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Yf={clone:Ls,merge:Qt};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new T,ql=new ie,Yl=new ie;class tn extends Uu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,ls=1;class $f extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(cs,ls,e,t);s.layers=this.layers,this.add(s);const r=new tn(cs,ls,e,t);r.layers=this.layers,this.add(r);const o=new tn(cs,ls,e,t);o.layers=this.layers,this.add(o);const a=new tn(cs,ls,e,t);a.layers=this.layers,this.add(a);const c=new tn(cs,ls,e,t);c.layers=this.layers,this.add(c);const l=new tn(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ou extends Dt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ou(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pe(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ti});r.uniforms.tEquirect.value=t;const o=new Ze(s,r),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=an),new $f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const na=new T,Jf=new T,Qf=new Ye;class vi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Hn,Wr=new T;class zc{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,p-f,x-m).normalize(),n[1].setComponents(c+r,d+l,p+f,x+m).normalize(),n[2].setComponents(c+o,d+h,p+g,x+v).normalize(),n[3].setComponents(c-o,d-h,p-g,x-v).normalize(),n[4].setComponents(c-a,d-u,p-_,x-y).normalize(),t===ii)n[5].setComponents(c+a,d+u,p+_,x+y).normalize();else if(t===_o)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ep(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Us extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*d-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+l*m,x=v+l*(m+1),P=v+1+l*(m+1),E=v+1+l*m;f.push(y,x,E),f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:cp,batching_pars_vertex:lp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:bp,common:wp,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Yp,envmap_vertex:Fp,fog_vertex:Bp,fog_pars_vertex:kp,fog_fragment:zp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Gp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:jp,lights_toon_pars_fragment:Kp,lights_phong_fragment:$p,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:xm,normal_fragment_maps:ym,normal_pars_fragment:vm,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Um,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:Bm,shadowmask_pars_fragment:km,skinbase_vertex:zm,skinning_pars_vertex:Hm,skinning_vertex:Gm,skinnormal_vertex:Vm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:jm,transmission_pars_fragment:Km,uv_pars_fragment:$m,uv_pars_vertex:Zm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:c0,distanceRGBA_frag:l0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:x0,meshmatcap_frag:y0,meshnormal_vert:v0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:b0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:E0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:I0,sprite_frag:D0},fe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};On.physical={uniforms:Qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Xr={r:0,b:0,g:0},Oi=new zn,N0=new qe;function U0(i,e,t,n,s,r,o){const a=new Ce(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?m(a,c):x&&x.isColor&&(m(x,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Eo)?(h===void 0&&(h=new Ze(new pe(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ls(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Oi.copy(y.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(Oi)),h.material.toneMapped=st.getTransfer(x.colorSpace)!==gt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ze(new Us(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ls(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Xr,Nu(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:p}}function O0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,L,k,F,X){let V=!1;const W=u(F,k,L);r!==W&&(r=W,l(r.object)),V=f(M,F,k,X),V&&g(M,F,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(M,L,k,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,k){const F=k.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let V=X[L.id];V===void 0&&(V={},X[L.id]=V);let W=V[F];return W===void 0&&(W=d(c()),V[F]=W),W}function d(M){const L=[],k=[],F=[];for(let X=0;X<t;X++)L[X]=0,k[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,L,k,F){const X=r.attributes,V=L.attributes;let W=0;const K=k.getAttributes();for(const q in K)if(K[q].location>=0){const de=X[q];let te=V[q];if(te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),de===void 0||de.attribute!==te||te&&de.data!==te.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(M,L,k,F){const X={},V=L.attributes;let W=0;const K=k.getAttributes();for(const q in K)if(K[q].location>=0){let de=V[q];de===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const te={};te.attribute=de,de&&de.data&&(te.data=de.data),X[q]=te,W++}r.attributes=X,r.attributesNum=W,r.index=F}function _(){const M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function p(M){m(M,0)}function m(M,L){const k=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;k[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),X[M]!==L&&(i.vertexAttribDivisor(M,L),X[M]=L)}function v(){const M=r.newAttributes,L=r.enabledAttributes;for(let k=0,F=L.length;k<F;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function y(M,L,k,F,X,V,W){W===!0?i.vertexAttribIPointer(M,L,k,X,V):i.vertexAttribPointer(M,L,k,F,X,V)}function x(M,L,k,F){_();const X=F.attributes,V=k.getAttributes(),W=L.defaultAttributeValues;for(const K in V){const q=V[K];if(q.location>=0){let le=X[K];if(le===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const de=le.normalized,te=le.itemSize,Me=e.get(le);if(Me===void 0)continue;const je=Me.buffer,z=Me.type,Q=Me.bytesPerElement,ue=z===i.INT||z===i.UNSIGNED_INT||le.gpuType===Lc;if(le.isInterleavedBufferAttribute){const re=le.data,Ue=re.stride,We=le.offset;if(re.isInstancedInterleavedBuffer){for(let Ge=0;Ge<q.locationSize;Ge++)m(q.location+Ge,re.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ge=0;Ge<q.locationSize;Ge++)p(q.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ge=0;Ge<q.locationSize;Ge++)y(q.location+Ge,te/q.locationSize,z,de,Ue*Q,(We+te/q.locationSize*Ge)*Q,ue)}else{if(le.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)m(q.location+re,le.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let re=0;re<q.locationSize;re++)p(q.location+re);i.bindBuffer(i.ARRAY_BUFFER,je);for(let re=0;re<q.locationSize;re++)y(q.location+re,te/q.locationSize,z,de,te*Q,te/q.locationSize*re*Q,ue)}}else if(W!==void 0){const de=W[K];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(q.location,de);break;case 3:i.vertexAttrib3fv(q.location,de);break;case 4:i.vertexAttrib4fv(q.location,de);break;default:i.vertexAttrib1fv(q.location,de)}}}}v()}function P(){C();for(const M in n){const L=n[M];for(const k in L){const F=L[k];for(const X in F)h(F[X].object),delete F[X];delete L[k]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const F=L[k];for(const X in F)h(F[X].object),delete F[X];delete L[k]}delete n[M.id]}function A(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const F=k[M.id];for(const X in F)h(F[X].object),delete F[X];delete k[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function F0(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function B0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:E}}function k0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new vi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const v=r?0:n,y=v*4;let x=m.clippingState||null;c.value=x,x=h(g,d,y,f);for(let P=0;P!==y;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function z0(i){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=ws:a===Wa&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Wa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hc extends Uu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,jl=[.125,.215,.35,.446,.526,.582],Vi=20,ia=new Hc,Kl=new Ce;let sa=null,ra=0,oa=0,aa=!1;const ki=(1+Math.sqrt(5))/2,hs=1/ki,$l=[new T(-ki,hs,0),new T(ki,hs,0),new T(-hs,0,ki),new T(hs,0,ki),new T(0,ki,-hs),new T(0,ki,hs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Mr,format:pn,colorSpace:Wt,depthBuffer:!1},s=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(r)),this._blurMaterial=G0(r,e,t)}return s}_compileMaterial(e){const t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,s){const a=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kl),h.toneMapping=Ei,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Ze(new pe,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Kl),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;qr(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ws||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$l[(s-r-1)%$l.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ze(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Vi;p>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const m=[];let v=0;for(let A=0;A<Vi;++A){const C=A/_,b=Math.exp(-C*C/2);m.push(b),A===0?v+=b:A<p&&(v+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],P=3*x*(s>y-ms?s-y+ms:0),E=4*(this._cubeSize-x);qr(t,P,E,3*x,2*x),c.setRenderTarget(t),c.render(u,ia)}}function H0(i){const e=[],t=[],n=[];let s=i;const r=i-ms+1+jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ms?c=jl[o-i+ms-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),y=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,C=E>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(b,_*g*E),y.set(d,p*g*E);const M=[E,E,E,E,E,E];x.set(M,m*g*E)}const P=new zt;P.setAttribute("position",new Tt(v,_)),P.setAttribute("uv",new Tt(y,p)),P.setAttribute("faceIndex",new Tt(x,m)),e.push(P),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zl(i,e,t){const n=new Yi(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function G0(i,e,t){const n=new Float32Array(Vi),s=new T(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jl(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ql(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Va||c===Wa,h=c===ws||c===Ts;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new yc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function W0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const P=v[y+0],E=v[y+1],A=v[y+2];d.push(P,E,E,A,A,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const P=y+0,E=y+1,A=y+2;d.push(P,E,E,A,A,P)}}else return;const p=new(Ru(d)?Du:Iu)(d,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function q0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*_[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let P=a.attributes.position.count*x,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*E*4*u),C=new Cu(A,P,E,u);C.type=In,C.needsUpdate=!0;const b=x*4;for(let L=0;L<u;L++){const k=m[L],F=v[L],X=y[L],V=P*E*4*L;for(let W=0;W<k.count;W++){const K=W*b;g===!0&&(s.fromBufferAttribute(k,W),A[V+K+0]=s.x,A[V+K+1]=s.y,A[V+K+2]=s.z,A[V+K+3]=0),_===!0&&(s.fromBufferAttribute(F,W),A[V+K+4]=s.x,A[V+K+5]=s.y,A[V+K+6]=s.z,A[V+K+7]=0),p===!0&&(s.fromBufferAttribute(X,W),A[V+K+8]=s.x,A[V+K+9]=s.y,A[V+K+10]=s.z,A[V+K+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ie(P,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function K0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Bu extends Dt{constructor(e,t,n,s,r,o,a,c,l,h=ys){if(h!==ys&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=qi),n===void 0&&h===As&&(n=Es),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ku=new Dt,eh=new Bu(1,1),zu=new Cu,Hu=new Uf,Gu=new Ou,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Os(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ro(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),kt(t,n)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),kt(t,n)}}function ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),kt(t,n)}}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=Au,r=eh):r=ku,t.setTexture2D(e||r,s)}function dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hu,s)}function fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gu,s)}function pg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zu,s)}function mg(i){switch(i){case 5126:return $0;case 35664:return Z0;case 35665:return J0;case 35666:return Q0;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){const t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function xg(i,e){const t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function yg(i,e){const t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){const t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sg(i,e){const t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Tg(i,e){i.uniform3iv(this.addr,e)}function Eg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function Rg(i,e){i.uniform2uiv(this.addr,e)}function Cg(i,e){i.uniform3uiv(this.addr,e)}function Pg(i,e){i.uniform4uiv(this.addr,e)}function Lg(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ku,r[o])}function Ig(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hu,r[o])}function Dg(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gu,r[o])}function Ng(i,e,t){const n=this.cache,s=e.length,r=Ro(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zu,r[o])}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return yg;case 35674:return vg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){const n=i.name,s=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oh(t,l===void 0?new Og(a,i,e):new Fg(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Bg(a),oh(t,u)),t=u}}}class fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);kg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zg=37297;let Hg=0;function Gg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ch=new Ye;function Vg(i){st._getMatrix(ch,st.workingColorSpace,i);const e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gg(i.getShaderSource(e),o)}else return s}function Wg(i,e){const t=Vg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,e){let t;switch(e){case Xd:t="Linear";break;case qd:t="Reinhard";break;case Yd:t="Cineon";break;case pu:t="ACESFilmic";break;case Kd:t="AgX";break;case $d:t="Neutral";break;case jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new T;function qg(){st.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function jg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace($g,Jg)}const Zg=new Map;function Jg(i,e){let t=Qe[e];if(t===void 0){const n=Zg.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace(Qg,e_)}function e_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function r_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=t_(t),l=n_(t),h=i_(t),u=s_(t),d=r_(t),f=Yg(t),g=jg(r),_=s.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(p=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=vc(o),o=hh(o,t),o=uh(o,t),a=vc(a),a=hh(a,t),a=uh(a,t),o=dh(o),a=dh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+o,x=v+m+a,P=ah(s,s.VERTEX_SHADER,y),E=ah(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(E).trim();let V=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,E);else{const K=lh(s,P,"vertex"),q=lh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+K+`
`+q)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:V,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(P),s.deleteShader(E),C=new fo(s,_),b=Kg(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,zg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let a_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l_(e),t.set(e,n)),n}}class l_{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function h_(i,e,t,n,s,r,o){const a=new Pu,c=new c_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,M,L,k,F){const X=k.fog,V=F.geometry,W=b.isMeshStandardMaterial?k.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),q=K&&K.mapping===Eo?K.image.height:null,le=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=de!==void 0?de.length:0;let Me=0;V.morphAttributes.position!==void 0&&(Me=1),V.morphAttributes.normal!==void 0&&(Me=2),V.morphAttributes.color!==void 0&&(Me=3);let je,z,Q,ue;if(le){const pt=On[le];je=pt.vertexShader,z=pt.fragmentShader}else je=b.vertexShader,z=b.fragmentShader,c.update(b),Q=c.getVertexShaderID(b),ue=c.getFragmentShaderID(b);const re=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),We=F.isInstancedMesh===!0,Ge=F.isBatchedMesh===!0,ct=!!b.map,ee=!!b.matcap,ae=!!K,I=!!b.aoMap,Ne=!!b.lightMap,se=!!b.bumpMap,we=!!b.normalMap,he=!!b.displacementMap,ze=!!b.emissiveMap,Se=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,B=b.clearcoat>0,j=b.dispersion>0,ne=b.iridescence>0,$=b.sheen>0,Re=b.transmission>0,me=S&&!!b.anisotropyMap,be=B&&!!b.clearcoatMap,it=B&&!!b.clearcoatNormalMap,oe=B&&!!b.clearcoatRoughnessMap,Te=ne&&!!b.iridescenceMap,He=ne&&!!b.iridescenceThicknessMap,Ve=$&&!!b.sheenColorMap,Ee=$&&!!b.sheenRoughnessMap,rt=!!b.specularMap,Je=!!b.specularColorMap,vt=!!b.specularIntensityMap,N=Re&&!!b.transmissionMap,ge=Re&&!!b.thicknessMap,Y=!!b.gradientMap,J=!!b.alphaMap,ye=b.alphaTest>0,_e=!!b.alphaHash,Ke=!!b.extensions;let Et=Ei;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Xt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:z,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&F._colorsTexture!==null,instancing:We,instancingColor:We&&F.instanceColor!==null,instancingMorph:We&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Wt,alphaToCoverage:!!b.alphaToCoverage,map:ct,matcap:ee,envMap:ae,envMapMode:ae&&K.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:Ne,bumpMap:se,normalMap:we,displacementMap:d&&he,emissiveMap:ze,normalMapObjectSpace:we&&b.normalMapType===nf,normalMapTangentSpace:we&&b.normalMapType===Eu,metalnessMap:Se,roughnessMap:R,anisotropy:S,anisotropyMap:me,clearcoat:B,clearcoatMap:be,clearcoatNormalMap:it,clearcoatRoughnessMap:oe,dispersion:j,iridescence:ne,iridescenceMap:Te,iridescenceThicknessMap:He,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Ee,specularMap:rt,specularColorMap:Je,specularIntensityMap:vt,transmission:Re,transmissionMap:N,thicknessMap:ge,gradientMap:Y,opaque:b.transparent===!1&&b.blending===xs&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ye,alphaHash:_e,combine:b.combine,mapUv:ct&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:Ne&&_(b.lightMap.channel),bumpMapUv:se&&_(b.bumpMap.channel),normalMapUv:we&&_(b.normalMap.channel),displacementMapUv:he&&_(b.displacementMap.channel),emissiveMapUv:ze&&_(b.emissiveMap.channel),metalnessMapUv:Se&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:me&&_(b.anisotropyMap.channel),clearcoatMapUv:be&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(b.sheenRoughnessMap.channel),specularMapUv:rt&&_(b.specularMap.channel),specularColorMapUv:Je&&_(b.specularColorMap.channel),specularIntensityMapUv:vt&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:ge&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(we||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ct||J),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:ct&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:ze&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&b.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let L;if(M){const k=On[M];L=Yf.clone(k.uniforms)}else L=b.uniforms;return L}function P(b,M){let L;for(let k=0,F=h.length;k<F;k++){const X=h[k];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new o_(i,M,b,r),h.push(L)),L}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function u_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function d_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||d_),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function f_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new mh,i.set(n,[o])):s>=r.length?(o=new mh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function p_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ce};break;case"SpotLight":t={position:new T,direction:new T,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function m_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g_=0;function __(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function x_(i){const e=new p_,t=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new qe,o=new qe;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,y=0,x=0,P=0,E=0,A=0;l.sort(__);for(let b=0,M=l.length;b<M;b++){const L=l[b],k=L.color,F=L.intensity,X=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],F);A++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=W,f++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(k).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const K=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,K.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=V,x++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(k).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,q=t.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=A,n.version=g_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const y=l[m];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function gh(i){const e=new x_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function y_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gh(i),e.set(s,[a])):r>=o.length?(a=new gh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class v_ extends Dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(i,e,t){let n=new zc;const s=new ie,r=new ie,o=new ut,a=new v_({depthPacking:tf}),c=new M_,l={},h=t.maxTextureSize,u={[kn]:sn,[sn]:kn,[Ot]:Ot},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:S_,fragmentShader:b_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ze(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let m=this.type;this.render=function(E,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=m!==Jn&&this.type===Jn,X=m===Jn&&this.type!==Jn;for(let V=0,W=E.length;V<W;V++){const K=E[V],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||F===!0||X===!0){const te=this.type!==Jn?{minFilter:$t,magFilter:$t}:{};q.map!==null&&q.map.dispose(),q.map=new Yi(s.x,s.y,te),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const de=q.getViewportCount();for(let te=0;te<de;te++){const Me=q.getViewport(te);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),k.viewport(o),q.updateMatrices(K,te),n=q.getFrustum(),x(A,C,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Jn&&v(q,C),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,L)};function v(E,A){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,f,_,null)}function y(E,A,C,b){let M=null;const L=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,F=A.uuid;let X=l[k];X===void 0&&(X={},l[k]=X);let V=X[F];V===void 0&&(V=M.clone(),X[F]=V,A.addEventListener("dispose",P)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Jn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=C}return M}function x(E,A,C,b,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=e.update(E),X=E.material;if(Array.isArray(X)){const V=F.groups;for(let W=0,K=V.length;W<K;W++){const q=V[W],le=X[q.materialIndex];if(le&&le.visible){const de=y(E,le,b,M);E.onBeforeShadow(i,E,A,C,F,de,q),i.renderBufferDirect(C,null,F,de,E,q),E.onAfterShadow(i,E,A,C,F,de,q)}}}else if(X.visible){const V=y(E,X,b,M);E.onBeforeShadow(i,E,A,C,F,V,null),i.renderBufferDirect(C,null,F,V,E,null),E.onAfterShadow(i,E,A,C,F,V,null)}}const k=E.children;for(let F=0,X=k.length;F<X;F++)x(k[F],A,C,b,M)}function P(E){E.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const T_={[Oa]:Fa,[Ba]:Ha,[ka]:Ga,[bs]:za,[Fa]:Oa,[Ha]:Ba,[Ga]:ka,[za]:bs};function E_(i,e){function t(){let N=!1;const ge=new ut;let Y=null;const J=new ut(0,0,0,0);return{setMask:function(ye){Y!==ye&&!N&&(i.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){N=ye},setClear:function(ye,_e,Ke,Et,Xt){Xt===!0&&(ye*=Et,_e*=Et,Ke*=Et),ge.set(ye,_e,Ke,Et),J.equals(ge)===!1&&(i.clearColor(ye,_e,Ke,Et),J.copy(ge))},reset:function(){N=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,Y=null,J=null,ye=null;return{setReversed:function(_e){if(ge!==_e){const Ke=e.get("EXT_clip_control");ge?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const Et=ye;ye=null,this.setClear(Et)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?re(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!N&&(i.depthMask(_e),Y=_e)},setFunc:function(_e){if(ge&&(_e=T_[_e]),J!==_e){switch(_e){case Oa:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=_e}},setLocked:function(_e){N=_e},setClear:function(_e){ye!==_e&&(ge&&(_e=1-_e),i.clearDepth(_e),ye=_e)},reset:function(){N=!1,Y=null,J=null,ye=null,ge=!1}}}function s(){let N=!1,ge=null,Y=null,J=null,ye=null,_e=null,Ke=null,Et=null,Xt=null;return{setTest:function(pt){N||(pt?re(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!N&&(i.stencilMask(pt),ge=pt)},setFunc:function(pt,Tn,Wn){(Y!==pt||J!==Tn||ye!==Wn)&&(i.stencilFunc(pt,Tn,Wn),Y=pt,J=Tn,ye=Wn)},setOp:function(pt,Tn,Wn){(_e!==pt||Ke!==Tn||Et!==Wn)&&(i.stencilOp(pt,Tn,Wn),_e=pt,Ke=Tn,Et=Wn)},setLocked:function(pt){N=pt},setClear:function(pt){Xt!==pt&&(i.clearStencil(pt),Xt=pt)},reset:function(){N=!1,ge=null,Y=null,J=null,ye=null,_e=null,Ke=null,Et=null,Xt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,P=null,E=null,A=new Ce(0,0,0),C=0,b=!1,M=null,L=null,k=null,F=null,X=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=K>=2);let le=null,de={};const te=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),je=new ut().fromArray(te),z=new ut().fromArray(Me);function Q(N,ge,Y,J){const ye=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Y;Ke++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ge+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return _e}const ue={};ue[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(bs),se(!1),we(_l),re(i.CULL_FACE),I(Ti);function re(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ue(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function We(N,ge){return u[N]!==ge?(i.bindFramebuffer(N,ge),u[N]=ge,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ge(N,ge){let Y=f,J=!1;if(N){Y=d.get(ge),Y===void 0&&(Y=[],d.set(ge,Y));const ye=N.textures;if(Y.length!==ye.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ke=ye.length;_e<Ke;_e++)Y[_e]=i.COLOR_ATTACHMENT0+_e;Y.length=ye.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function ct(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ee={[Gi]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};ee[Rd]=i.MIN,ee[Cd]=i.MAX;const ae={[Pd]:i.ZERO,[Ld]:i.ONE,[Id]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Ud]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[zd]:i.ONE_MINUS_CONSTANT_COLOR,[Hd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,ge,Y,J,ye,_e,Ke,Et,Xt,pt){if(N===Ti){_===!0&&(Ue(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),N!==Td){if(N!==p||pt!==b){if((m!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),m=Gi,x=Gi),pt)switch(N){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,P=null,E=null,A.set(0,0,0),C=0,p=N,b=pt}return}ye=ye||ge,_e=_e||Y,Ke=Ke||J,(ge!==m||ye!==x)&&(i.blendEquationSeparate(ee[ge],ee[ye]),m=ge,x=ye),(Y!==v||J!==y||_e!==P||Ke!==E)&&(i.blendFuncSeparate(ae[Y],ae[J],ae[_e],ae[Ke]),v=Y,y=J,P=_e,E=Ke),(Et.equals(A)===!1||Xt!==C)&&(i.blendColor(Et.r,Et.g,Et.b,Xt),A.copy(Et),C=Xt),p=N,b=!1}function Ne(N,ge){N.side===Ot?Ue(i.CULL_FACE):re(i.CULL_FACE);let Y=N.side===sn;ge&&(Y=!Y),se(Y),N.blending===xs&&N.transparent===!1?I(Ti):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function we(N){N!==bd?(re(i.CULL_FACE),N!==L&&(N===_l?i.cullFace(i.BACK):N===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),L=N}function he(N){N!==k&&(W&&i.lineWidth(N),k=N)}function ze(N,ge,Y){N?(re(i.POLYGON_OFFSET_FILL),(F!==ge||X!==Y)&&(i.polygonOffset(ge,Y),F=ge,X=Y)):Ue(i.POLYGON_OFFSET_FILL)}function Se(N){N?re(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+V-1),le!==N&&(i.activeTexture(N),le=N)}function S(N,ge,Y){Y===void 0&&(le===null?Y=i.TEXTURE0+V-1:Y=le);let J=de[Y];J===void 0&&(J={type:void 0,texture:void 0},de[Y]=J),(J.type!==N||J.texture!==ge)&&(le!==Y&&(i.activeTexture(Y),le=Y),i.bindTexture(N,ge||ue[N]),J.type=N,J.texture=ge)}function B(){const N=de[le];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(N){je.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ee(N){z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),z.copy(N))}function rt(N,ge){let Y=l.get(ge);Y===void 0&&(Y=new WeakMap,l.set(ge,Y));let J=Y.get(N);J===void 0&&(J=i.getUniformBlockIndex(ge,N.name),Y.set(N,J))}function Je(N,ge){const J=l.get(ge).get(N);c.get(ge)!==J&&(i.uniformBlockBinding(ge,J,N.__bindingPointIndex),c.set(ge,J))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,de={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,y=null,x=null,P=null,E=null,A=new Ce(0,0,0),C=0,b=!1,M=null,L=null,k=null,F=null,X=null,je.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ue,bindFramebuffer:We,drawBuffers:Ge,useProgram:ct,setBlending:I,setMaterial:Ne,setFlipSided:se,setCullFace:we,setLineWidth:he,setPolygonOffset:ze,setScissorTest:Se,activeTexture:R,bindTexture:S,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:Te,texImage3D:He,updateUBOMapping:rt,uniformBlockBinding:Je,texStorage2D:it,texStorage3D:oe,texSubImage2D:$,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:be,scissor:Ve,viewport:Ee,reset:vt}}function _h(i,e,t,n){const s=A_(n);switch(t){case yu:return i*e;case Mu:return i*e;case Su:return i*e*2;case Nc:return i*e/s.components*s.byteLength;case Uc:return i*e/s.components*s.byteLength;case bu:return i*e*2/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case vu:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Fc:return i*e*4/s.components*s.byteLength;case ao:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case ja:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wu:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A_(i){switch(i){case ai:case gu:return{byteLength:1,components:1};case fr:case _u:case Mr:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case qi:case Lc:case In:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function R_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):mr("canvas")}function _(R,S,B){let j=1;const ne=Se(R);if((ne.width>B||ne.height>B)&&(j=B/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(j*ne.width),Re=Math.floor(j*ne.height);u===void 0&&(u=g($,Re));const me=S?g($,Re):u;return me.width=$,me.height=Re,me.getContext("2d").drawImage(R,0,0,$,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Re+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,B,j,ne=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const Re=ne?Ao:st.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Re===gt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,S){let B;return R?S===null||S===qi||S===Es?B=i.DEPTH24_STENCIL8:S===In?B=i.DEPTH32F_STENCIL8:S===fr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Es?B=i.DEPTH_COMPONENT24:S===In?B=i.DEPTH_COMPONENT32F:S===fr&&(B=i.DEPTH_COMPONENT16),B}function P(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,j=d.get(B);if(j){const ne=j[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(j).length===0&&d.delete(B)}n.remove(R)}function b(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const B=R.source,j=d.get(B);delete j[S.__cacheKey],o.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ne=0;ne<S.__webglFramebuffer[j].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[j][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,ne=B.length;j<ne;j++){const $=n.get(B[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(R)}let L=0;function k(){L=0}function F(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const B=n.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(B,R,S);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function W(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){z(B,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function K(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){z(B,R,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function q(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){Q(B,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const le={[Xi]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},de={[$t]:i.NEAREST,[Pc]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},te={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Au]:i.LEQUAL,[of]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[cf]:i.NOTEQUAL};function Me(R,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===rr||S.magFilter===ps||S.magFilter===Bn||S.minFilter===an||S.minFilter===rr||S.minFilter===ps||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==ps&&S.minFilter!==Bn||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const j=S.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const $=X(S);if($!==R.__cacheKey){ne[$]===void 0&&(ne[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[$].usedTimes++;const Re=ne[R.__cacheKey];Re!==void 0&&(ne[R.__cacheKey].usedTimes--,Re.usedTimes===0&&b(S)),R.__cacheKey=$,R.__webglTexture=ne[$].texture}return B}function z(R,S,B){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const ne=je(R,S),$=S.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+B);const Re=n.get($);if($.version!==Re.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const me=st.getPrimaries(st.workingColorSpace),be=S.colorSpace===ti?null:st.getPrimaries(S.colorSpace),it=S.colorSpace===ti||me===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let oe=_(S.image,!1,s.maxTextureSize);oe=ze(S,oe);const Te=r.convert(S.format,S.colorSpace),He=r.convert(S.type);let Ve=y(S.internalFormat,Te,He,S.colorSpace,S.isVideoTexture);Me(j,S);let Ee;const rt=S.mipmaps,Je=S.isVideoTexture!==!0,vt=Re.__version===void 0||ne===!0,N=$.dataReady,ge=P(S,oe);if(S.isDepthTexture)Ve=x(S.format===As,S.type),vt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ve,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ve,oe.width,oe.height,0,Te,He,null));else if(S.isDataTexture)if(rt.length>0){Je&&vt&&t.texStorage2D(i.TEXTURE_2D,ge,Ve,rt[0].width,rt[0].height);for(let Y=0,J=rt.length;Y<J;Y++)Ee=rt[Y],Je?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,He,Ee.data):t.texImage2D(i.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Te,He,Ee.data);S.generateMipmaps=!1}else Je?(vt&&t.texStorage2D(i.TEXTURE_2D,ge,Ve,oe.width,oe.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Te,He,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,oe.width,oe.height,0,Te,He,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ve,rt[0].width,rt[0].height,oe.depth);for(let Y=0,J=rt.length;Y<J;Y++)if(Ee=rt[Y],S.format!==pn)if(Te!==null)if(Je){if(N)if(S.layerUpdates.size>0){const ye=_h(Ee.width,Ee.height,S.format,S.type);for(const _e of S.layerUpdates){const Ke=Ee.data.subarray(_e*ye/Ee.data.BYTES_PER_ELEMENT,(_e+1)*ye/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_e,Ee.width,Ee.height,1,Te,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,oe.depth,Te,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ve,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,oe.depth,Te,He,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ve,Ee.width,Ee.height,oe.depth,0,Te,He,Ee.data)}else{Je&&vt&&t.texStorage2D(i.TEXTURE_2D,ge,Ve,rt[0].width,rt[0].height);for(let Y=0,J=rt.length;Y<J;Y++)Ee=rt[Y],S.format!==pn?Te!==null?Je?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,Te,He,Ee.data):t.texImage2D(i.TEXTURE_2D,Y,Ve,Ee.width,Ee.height,0,Te,He,Ee.data)}else if(S.isDataArrayTexture)if(Je){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ve,oe.width,oe.height,oe.depth),N)if(S.layerUpdates.size>0){const Y=_h(oe.width,oe.height,S.format,S.type);for(const J of S.layerUpdates){const ye=oe.data.subarray(J*Y/oe.data.BYTES_PER_ELEMENT,(J+1)*Y/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,Te,He,ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,He,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,oe.width,oe.height,oe.depth,0,Te,He,oe.data);else if(S.isData3DTexture)Je?(vt&&t.texStorage3D(i.TEXTURE_3D,ge,Ve,oe.width,oe.height,oe.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,He,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,oe.width,oe.height,oe.depth,0,Te,He,oe.data);else if(S.isFramebufferTexture){if(vt)if(Je)t.texStorage2D(i.TEXTURE_2D,ge,Ve,oe.width,oe.height);else{let Y=oe.width,J=oe.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ve,Y,J,0,Te,He,null),Y>>=1,J>>=1}}else if(rt.length>0){if(Je&&vt){const Y=Se(rt[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ve,Y.width,Y.height)}for(let Y=0,J=rt.length;Y<J;Y++)Ee=rt[Y],Je?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Te,He,Ee):t.texImage2D(i.TEXTURE_2D,Y,Ve,Te,He,Ee);S.generateMipmaps=!1}else if(Je){if(vt){const Y=Se(oe);t.texStorage2D(i.TEXTURE_2D,ge,Ve,Y.width,Y.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,He,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Te,He,oe);p(S)&&m(j),Re.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,B){if(S.image.length!==6)return;const j=je(R,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const $=n.get(ne);if(ne.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const Re=st.getPrimaries(st.workingColorSpace),me=S.colorSpace===ti?null:st.getPrimaries(S.colorSpace),be=S.colorSpace===ti||Re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const it=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let J=0;J<6;J++)!it&&!oe?Te[J]=_(S.image[J],!0,s.maxCubemapSize):Te[J]=oe?S.image[J].image:S.image[J],Te[J]=ze(S,Te[J]);const He=Te[0],Ve=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),rt=y(S.internalFormat,Ve,Ee,S.colorSpace),Je=S.isVideoTexture!==!0,vt=$.__version===void 0||j===!0,N=ne.dataReady;let ge=P(S,He);Me(i.TEXTURE_CUBE_MAP,S);let Y;if(it){Je&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,He.width,He.height);for(let J=0;J<6;J++){Y=Te[J].mipmaps;for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];S.format!==pn?Ve!==null?Je?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,Ve,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,rt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,Ve,Ee,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,rt,_e.width,_e.height,0,Ve,Ee,_e.data)}}}else{if(Y=S.mipmaps,Je&&vt){Y.length>0&&ge++;const J=Se(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,J.width,J.height)}for(let J=0;J<6;J++)if(oe){Je?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te[J].width,Te[J].height,Ve,Ee,Te[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,rt,Te[J].width,Te[J].height,0,Ve,Ee,Te[J].data);for(let ye=0;ye<Y.length;ye++){const Ke=Y[ye].image[J].image;Je?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ke.width,Ke.height,Ve,Ee,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,rt,Ke.width,Ke.height,0,Ve,Ee,Ke.data)}}else{Je?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ve,Ee,Te[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,rt,Ve,Ee,Te[J]);for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];Je?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ve,Ee,_e.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,rt,Ve,Ee,_e.image[J])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),$.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ue(R,S,B,j,ne,$){const Re=r.convert(B.format,B.colorSpace),me=r.convert(B.type),be=y(B.internalFormat,Re,me,B.colorSpace),it=n.get(S),oe=n.get(B);if(oe.__renderTarget=S,!it.__hasExternalTextures){const Te=Math.max(1,S.width>>$),He=Math.max(1,S.height>>$);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,be,Te,He,S.depth,0,Re,me,null):t.texImage2D(ne,$,be,Te,He,0,Re,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),we(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ne,oe.__webglTexture,0,se(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ne,oe.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,ne=j&&j.isDepthTexture?j.type:null,$=x(S.stencilBuffer,ne),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=se(S);we(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,$,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,R)}else{const j=S.textures;for(let ne=0;ne<j.length;ne++){const $=j[ne],Re=r.convert($.format,$.colorSpace),me=r.convert($.type),be=y($.internalFormat,Re,me,$.colorSpace),it=se(S);B&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,be,S.width,S.height):we(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const ne=j.__webglTexture,$=se(S);if(S.depthTexture.format===ys)we(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(S.depthTexture.format===As)we(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function We(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),re(S.__webglDepthbuffer[j],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(R,S,B){const j=n.get(R);S!==void 0&&ue(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&We(R)}function ct(R){const S=R.texture,B=n.get(R),j=n.get(S);R.addEventListener("dispose",A);const ne=R.textures,$=R.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let be=0;be<S.mipmaps.length;be++)B.__webglFramebuffer[me][be]=i.createFramebuffer()}else B.__webglFramebuffer[me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)B.__webglFramebuffer[me]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Re)for(let me=0,be=ne.length;me<be;me++){const it=n.get(ne[me]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const be=ne[me];B.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const it=r.convert(be.format,be.colorSpace),oe=r.convert(be.type),Te=y(be.internalFormat,it,oe,be.colorSpace,R.isXRRenderTarget===!0),He=se(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Te,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,B.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),re(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Me(i.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ue(B.__webglFramebuffer[me][be],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,be);else ue(B.__webglFramebuffer[me],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,be=ne.length;me<be;me++){const it=ne[me],oe=n.get(it);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Me(i.TEXTURE_2D,it),ue(B.__webglFramebuffer,R,it,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),p(it)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,j.__webglTexture),Me(me,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ue(B.__webglFramebuffer[be],R,S,i.COLOR_ATTACHMENT0,me,be);else ue(B.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,me,0);p(S)&&m(me),t.unbindTexture()}R.depthBuffer&&We(R)}function ee(R){const S=R.textures;for(let B=0,j=S.length;B<j;B++){const ne=S[B];if(p(ne)){const $=v(R),Re=n.get(ne).__webglTexture;t.bindTexture($,Re),m($),t.unbindTexture()}}}const ae=[],I=[];function Ne(R){if(R.samples>0){if(we(R)===!1){const S=R.textures,B=R.width,j=R.height;let ne=i.COLOR_BUFFER_BIT;const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(R),me=S.length>1;if(me)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<S.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const it=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,ne,i.NEAREST),c===!0&&(ae.length=0,I.length=0,ae.push(i.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ae.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);const it=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function se(R){return Math.min(s.maxSamples,R.samples)}function we(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ze(R,S){const B=R.colorSpace,j=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Wt&&B!==ti&&(st.getTransfer(B)===gt?(j!==pn||ne!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=we}function C_(i,e){function t(n,s=ti){let r;const o=st.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===yu)return i.ALPHA;if(n===vu)return i.RGB;if(n===pn)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Fc)return i.RGBA_INTEGER;if(n===ao||n===co||n===lo||n===ho)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===$a||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===$a)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class P_ extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Ki{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new N_,p=t.getContextAttributes();let m=null,v=null;const y=[],x=[],P=new ie;let E=null;const A=new tn;A.viewport=new ut;const C=new tn;C.viewport=new ut;const b=[A,C],M=new P_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Q=y[z];return Q===void 0&&(Q=new la,y[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=y[z];return Q===void 0&&(Q=new la,y[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=y[z];return Q===void 0&&(Q=new la,y[z]=Q),Q.getHandSpace()};function F(z){const Q=x.indexOf(z.inputSource);if(Q===-1)return;const ue=y[Q];ue!==void 0&&(ue.update(z.inputSource,z.frame,l||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",V);for(let z=0;z<y.length;z++){const Q=x[z];Q!==null&&(x[z]=null,y[z].disconnect(Q))}L=null,k=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?As:ys,ue=p.stencil?Es:qi);const Ue={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Yi(d.textureWidth,d.textureHeight,{format:pn,type:ai,depthTexture:new Bu(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(z){for(let Q=0;Q<z.removed.length;Q++){const ue=z.removed[Q],re=x.indexOf(ue);re>=0&&(x[re]=null,y[re].disconnect(ue))}for(let Q=0;Q<z.added.length;Q++){const ue=z.added[Q];let re=x.indexOf(ue);if(re===-1){for(let We=0;We<y.length;We++)if(We>=x.length){x.push(ue),re=We;break}else if(x[We]===null){x[We]=ue,re=We;break}if(re===-1)break}const Ue=y[re];Ue&&Ue.connect(ue)}}const W=new T,K=new T;function q(z,Q,ue){W.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const re=W.distanceTo(K),Ue=Q.projectionMatrix.elements,We=ue.projectionMatrix.elements,Ge=Ue[14]/(Ue[10]-1),ct=Ue[14]/(Ue[10]+1),ee=(Ue[9]+1)/Ue[5],ae=(Ue[9]-1)/Ue[5],I=(Ue[8]-1)/Ue[0],Ne=(We[8]+1)/We[0],se=Ge*I,we=Ge*Ne,he=re/(-I+Ne),ze=he*-I;if(Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ze),z.translateZ(he),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Ue[10]===-1)z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Se=Ge+he,R=ct+he,S=se-ze,B=we+(re-ze),j=ee*ct/R*Se,ne=ae*ct/R*Se;z.projectionMatrix.makePerspective(S,B,j,ne,Se,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function le(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let Q=z.near,ue=z.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),M.near=C.near=A.near=Q,M.far=C.far=A.far=ue,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),A.layers.mask=z.layers.mask|2,C.layers.mask=z.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const re=z.parent,Ue=M.cameras;le(M,re);for(let We=0;We<Ue.length;We++)le(Ue[We],re);Ue.length===2?q(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),de(z,M,re)};function de(z,Q,ue){ue===null?z.matrix.copy(Q.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(Q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Q.projectionMatrix),z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ps*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let te=null;function Me(z,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let We=0;We<ue.length;We++){const Ge=ue[We];let ct=null;if(f!==null)ct=f.getViewport(Ge);else{const ae=u.getViewSubImage(d,Ge);ct=ae.viewport,We===0&&(e.setRenderTargetTextures(v,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(v))}let ee=b[We];ee===void 0&&(ee=new tn,ee.layers.enable(We),ee.viewport=new ut,b[We]=ee),ee.matrix.fromArray(Ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ct.x,ct.y,ct.width,ct.height),We===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(ee)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const We=u.getDepthInformation(ue[0]);We&&We.isValid&&We.texture&&_.init(e,We,s.renderState)}}for(let ue=0;ue<y.length;ue++){const re=x[ue],Ue=y[ue];re!==null&&Ue!==void 0&&Ue.update(re,Q,l||o)}te&&te(z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const je=new Fu;je.setAnimationLoop(Me),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}const Fi=new zn,O_=new qe;function F_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,x=v.envMapRotation;y&&(p.envMap.value=y,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Fi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",p));const P=y.program;n.updateUBOMapping(v,P);const E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),P=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=x.length;E<A;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,M=C.length;b<M;b++){const L=C[b];if(f(L,E,b,P)===!0){const k=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let V=0;V<F.length;V++){const W=F[V],K=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,P){const E=v.value,A=y+"_"+x;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{const C=P[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const y=v.uniforms;let x=0;const P=16;for(let A=0,C=y.length;A<C;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=b.length;M<L;M++){const k=b[M],F=Array.isArray(k.value)?k.value:[k.value];for(let X=0,V=F.length;X<V;X++){const W=F[X],K=_(W),q=x%P,le=q%K.boundary,de=q+le;x+=le,de!==0&&P-de<K.storage&&(x+=P-de),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=K.storage}}}const E=x%P;return E>0&&(x+=P-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class k_{constructor(e={}){const{canvas:t=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let P=!1,E=0,A=0,C=null,b=-1,M=null;const L=new ut,k=new ut;let F=null;const X=new Ce(0);let V=0,W=t.width,K=t.height,q=1,le=null,de=null;const te=new ut(0,0,W,K),Me=new ut(0,0,W,K);let je=!1;const z=new zc;let Q=!1,ue=!1;const re=new qe,Ue=new qe,We=new T,Ge=new ut,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ae(){return C===null?q:1}let I=n;function Ne(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){const U="webgl2";if(I=Ne(U,w),I===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,we,he,ze,Se,R,S,B,j,ne,$,Re,me,be,it,oe,Te,He,Ve,Ee,rt,Je,vt,N;function ge(){se=new W0(I),se.init(),Je=new C_(I,se),we=new B0(I,se,e,Je),he=new E_(I,se),we.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),ze=new Y0(I),Se=new u_,R=new R_(I,se,he,Se,we,Je,ze),S=new z0(x),B=new V0(x),j=new ep(I),vt=new O0(I,j),ne=new X0(I,j,ze,vt),$=new K0(I,ne,j,ze),Ve=new j0(I,we,R),oe=new k0(Se),Re=new h_(x,S,B,se,we,vt,oe),me=new F_(x,Se),be=new f_,it=new y_(se),He=new U0(x,S,B,he,$,f,c),Te=new w_(x,$,we),N=new B_(I,ze,we,he),Ee=new F0(I,se,ze),rt=new q0(I,se,ze),ze.programs=Re.programs,x.capabilities=we,x.extensions=se,x.properties=Se,x.renderLists=be,x.shadowMap=Te,x.state=he,x.info=ze}ge();const Y=new U_(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(W,K,!1))},this.getSize=function(w){return w.set(W,K)},this.setSize=function(w,U,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,K=U,t.width=Math.floor(w*q),t.height=Math.floor(U*q),H===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*q,K*q).floor()},this.setDrawingBufferSize=function(w,U,H){W=w,K=U,q=H,t.width=Math.floor(w*H),t.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,U,H,G){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,U,H,G),he.viewport(L.copy(te).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,U,H,G){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,U,H,G),he.scissor(k.copy(Me).multiplyScalar(q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){he.setScissorTest(je=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let O=!1;if(C!==null){const ce=C.texture.format;O=ce===Fc||ce===Oc||ce===Uc}if(O){const ce=C.texture.type,xe=ce===ai||ce===qi||ce===fr||ce===Es||ce===Ic||ce===Dc,Pe=He.getClearColor(),Le=He.getClearAlpha(),Xe=Pe.r,$e=Pe.g,Ie=Pe.b;xe?(g[0]=Xe,g[1]=$e,g[2]=Ie,g[3]=Le,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Xe,_[1]=$e,_[2]=Ie,_[3]=Le,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),be.dispose(),it.dispose(),Se.dispose(),S.dispose(),B.dispose(),$.dispose(),vt.dispose(),N.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ll),Y.removeEventListener("sessionend",hl),Li.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ze.autoReset,U=Te.enabled,H=Te.autoUpdate,G=Te.needsUpdate,O=Te.type;ge(),ze.autoReset=w,Te.enabled=U,Te.autoUpdate=H,Te.needsUpdate=G,Te.type=O}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const U=w.target;U.removeEventListener("dispose",Ke),Et(U)}function Et(w){Xt(w),Se.remove(w)}function Xt(w){const U=Se.get(w).programs;U!==void 0&&(U.forEach(function(H){Re.releaseProgram(H)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,O,ce){U===null&&(U=ct);const xe=O.isMesh&&O.matrixWorld.determinant()<0,Pe=vd(w,U,H,G,O);he.setMaterial(G,xe);let Le=H.index,Xe=1;if(G.wireframe===!0){if(Le=ne.getWireframeAttribute(H),Le===void 0)return;Xe=2}const $e=H.drawRange,Ie=H.attributes.position;let ht=$e.start*Xe,Mt=($e.start+$e.count)*Xe;ce!==null&&(ht=Math.max(ht,ce.start*Xe),Mt=Math.min(Mt,(ce.start+ce.count)*Xe)),Le!==null?(ht=Math.max(ht,0),Mt=Math.min(Mt,Le.count)):Ie!=null&&(ht=Math.max(ht,0),Mt=Math.min(Mt,Ie.count));const St=Mt-ht;if(St<0||St===1/0)return;vt.setup(O,G,Pe,H,Le);let rn,dt=Ee;if(Le!==null&&(rn=j.get(Le),dt=rt,dt.setIndex(rn)),O.isMesh)G.wireframe===!0?(he.setLineWidth(G.wireframeLinewidth*ae()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(O.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),he.setLineWidth(Oe*ae()),O.isLineSegments?dt.setMode(I.LINES):O.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else O.isPoints?dt.setMode(I.POINTS):O.isSprite&&dt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Oe=O._multiDrawStarts,Xn=O._multiDrawCounts,ft=O._multiDrawCount,En=Le?j.get(Le).bytesPerElement:1,$i=Se.get(G).currentProgram.getUniforms();for(let hn=0;hn<ft;hn++)$i.setValue(I,"_gl_DrawID",hn),dt.render(Oe[hn]/En,Xn[hn])}else if(O.isInstancedMesh)dt.renderInstances(ht,St,O.count);else if(H.isInstancedBufferGeometry){const Oe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xn=Math.min(H.instanceCount,Oe);dt.renderInstances(ht,St,Xn)}else dt.render(ht,St)};function pt(w,U,H){w.transparent===!0&&w.side===Ot&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Ar(w,U,H),w.side=kn,w.needsUpdate=!0,Ar(w,U,H),w.side=Ot):Ar(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),m=it.get(H),m.init(U),y.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Pe=ce[xe];pt(Pe,H,O),G.add(Pe)}else pt(ce,H,O),G.add(ce)}),y.pop(),m=null,G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(O=>{function ce(){if(G.forEach(function(xe){Se.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){O(w);return}setTimeout(ce,10)}se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Tn=null;function Wn(w){Tn&&Tn(w)}function ll(){Li.stop()}function hl(){Li.start()}const Li=new Fu;Li.setAnimationLoop(Wn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Tn=w,Y.setAnimationLoop(w),w===null?Li.stop():Li.start()},Y.addEventListener("sessionstart",ll),Y.addEventListener("sessionend",hl),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,C),m=it.get(w,y.length),m.init(U),y.push(m),Ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(Ue),ue=this.localClippingEnabled,Q=oe.init(this.clippingPlanes,ue),p=be.get(w,v.length),p.init(),v.push(p),Y.enabled===!0&&Y.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Uo(ce,U,-1/0,x.sortObjects)}Uo(w,U,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(le,de),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&He.addToRenderList(p,w),this.info.render.frame++,Q===!0&&oe.beginShadows();const H=m.state.shadowsArray;Te.render(H,w,U),Q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,O=p.transmissive;if(m.setupLights(),U.isArrayCamera){const ce=U.cameras;if(O.length>0)for(let xe=0,Pe=ce.length;xe<Pe;xe++){const Le=ce[xe];dl(G,O,w,Le)}ee&&He.render(w);for(let xe=0,Pe=ce.length;xe<Pe;xe++){const Le=ce[xe];ul(p,w,Le,Le.viewport)}}else O.length>0&&dl(G,O,w,U),ee&&He.render(w),ul(p,w,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,U),vt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],Q===!0&&oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Uo(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){G&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ue);const xe=$.update(w),Pe=w.material;Pe.visible&&p.push(w,xe,Pe,H,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const xe=$.update(w),Pe=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Ue)),Array.isArray(Pe)){const Le=xe.groups;for(let Xe=0,$e=Le.length;Xe<$e;Xe++){const Ie=Le[Xe],ht=Pe[Ie.materialIndex];ht&&ht.visible&&p.push(w,xe,ht,H,Ge.z,Ie)}}else Pe.visible&&p.push(w,xe,Pe,H,Ge.z,null)}}const ce=w.children;for(let xe=0,Pe=ce.length;xe<Pe;xe++)Uo(ce[xe],U,H,G)}function ul(w,U,H,G){const O=w.opaque,ce=w.transmissive,xe=w.transparent;m.setupLightsView(H),Q===!0&&oe.setGlobalState(x.clippingPlanes,H),G&&he.viewport(L.copy(G)),O.length>0&&Er(O,U,H),ce.length>0&&Er(ce,U,H),xe.length>0&&Er(xe,U,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function dl(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Yi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Mr:ai,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ce=m.state.transmissionRenderTarget[G.id],xe=G.viewport||L;ce.setSize(xe.z,xe.w);const Pe=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(X),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),ee&&He.render(H);const Le=x.toneMapping;x.toneMapping=Ei;const Xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Q===!0&&oe.setGlobalState(x.clippingPlanes,G),Er(w,H,G),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),se.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ie=0,ht=U.length;Ie<ht;Ie++){const Mt=U[Ie],St=Mt.object,rn=Mt.geometry,dt=Mt.material,Oe=Mt.group;if(dt.side===Ot&&St.layers.test(G.layers)){const Xn=dt.side;dt.side=sn,dt.needsUpdate=!0,fl(St,H,G,rn,dt,Oe),dt.side=Xn,dt.needsUpdate=!0,$e=!0}}$e===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}x.setRenderTarget(Pe),x.setClearColor(X,V),Xe!==void 0&&(G.viewport=Xe),x.toneMapping=Le}function Er(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ce=w.length;O<ce;O++){const xe=w[O],Pe=xe.object,Le=xe.geometry,Xe=G===null?xe.material:G,$e=xe.group;Pe.layers.test(H.layers)&&fl(Pe,U,H,Le,Xe,$e)}}function fl(w,U,H,G,O,ce){w.onBeforeRender(x,U,H,G,O,ce),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,U,H,G,w,ce),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,x.renderBufferDirect(H,U,G,O,w,ce),O.side=kn,O.needsUpdate=!0,x.renderBufferDirect(H,U,G,O,w,ce),O.side=Ot):x.renderBufferDirect(H,U,G,O,w,ce),w.onAfterRender(x,U,H,G,O,ce)}function Ar(w,U,H){U.isScene!==!0&&(U=ct);const G=Se.get(w),O=m.state.lights,ce=m.state.shadowsArray,xe=O.state.version,Pe=Re.getParameters(w,O.state,ce,U,H),Le=Re.getProgramCacheKey(Pe);let Xe=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",Ke),Xe=new Map,G.programs=Xe);let $e=Xe.get(Le);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===xe)return ml(w,Pe),$e}else Pe.uniforms=Re.getUniforms(w),w.onBeforeCompile(Pe,x),$e=Re.acquireProgram(Pe,Le),Xe.set(Le,$e),G.uniforms=Pe.uniforms;const Ie=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=oe.uniform),ml(w,Pe),G.needsLights=Sd(w),G.lightsStateVersion=xe,G.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=$e,G.uniformsList=null,$e}function pl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ml(w,U){const H=Se.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function vd(w,U,H,G,O){U.isScene!==!0&&(U=ct),R.resetTextureUnits();const ce=U.fog,xe=G.isMeshStandardMaterial?U.environment:null,Pe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wt,Le=(G.isMeshStandardMaterial?B:S).get(G.envMap||xe),Xe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,Mt=!!H.morphAttributes.color;let St=Ei;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=x.toneMapping);const rn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=rn!==void 0?rn.length:0,Oe=Se.get(G),Xn=m.state.lights;if(Q===!0&&(ue===!0||w!==M)){const xn=w===M&&G.id===b;oe.setState(G,w,xn)}let ft=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xn.state.version||Oe.outputColorSpace!==Pe||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==Le||G.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Xe||Oe.vertexTangents!==$e||Oe.morphTargets!==Ie||Oe.morphNormals!==ht||Oe.morphColors!==Mt||Oe.toneMapping!==St||Oe.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Oe.__version=G.version);let En=Oe.currentProgram;ft===!0&&(En=Ar(G,U,O));let $i=!1,hn=!1,zs=!1;const bt=En.getUniforms(),Un=Oe.uniforms;if(he.useProgram(En.program)&&($i=!0,hn=!0,zs=!0),G.id!==b&&(b=G.id,hn=!0),$i||M!==w){he.buffers.depth.getReversed()?(re.copy(w.projectionMatrix),Cf(re),Pf(re),bt.setValue(I,"projectionMatrix",re)):bt.setValue(I,"projectionMatrix",w.projectionMatrix),bt.setValue(I,"viewMatrix",w.matrixWorldInverse);const hi=bt.map.cameraPosition;hi!==void 0&&hi.setValue(I,We.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,hn=!0,zs=!0)}if(O.isSkinnedMesh){bt.setOptional(I,O,"bindMatrix"),bt.setOptional(I,O,"bindMatrixInverse");const xn=O.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),bt.setValue(I,"boneTexture",xn.boneTexture,R))}O.isBatchedMesh&&(bt.setOptional(I,O,"batchingTexture"),bt.setValue(I,"batchingTexture",O._matricesTexture,R),bt.setOptional(I,O,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",O._indirectTexture,R),bt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",O._colorsTexture,R));const Hs=H.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Ve.update(O,H,En),(hn||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,bt.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Un.envMap.value=Le,Un.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),hn&&(bt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&Md(Un,zs),ce&&G.fog===!0&&me.refreshFogUniforms(Un,ce),me.refreshMaterialUniforms(Un,G,q,K,m.state.transmissionRenderTarget[w.id]),fo.upload(I,pl(Oe),Un,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fo.upload(I,pl(Oe),Un,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(I,"center",O.center),bt.setValue(I,"modelViewMatrix",O.modelViewMatrix),bt.setValue(I,"normalMatrix",O.normalMatrix),bt.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let hi=0,ui=xn.length;hi<ui;hi++){const gl=xn[hi];N.update(gl,En),N.bind(gl,En)}}return En}function Md(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Sd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,H){Se.get(w.texture).__webglTexture=U,Se.get(w.depthTexture).__webglTexture=H;const G=Se.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=Se.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){C=w,E=U,A=H;let G=!0,O=null,ce=!1,xe=!1;if(w){const Le=Se.get(w);if(Le.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Le.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Le.__hasExternalTextures)R.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&Se.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(xe=!0);const $e=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[U])?O=$e[U][H]:O=$e[U],ce=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Se.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?O=$e[H]:O=$e,L.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else L.copy(te).multiplyScalar(q).floor(),k.copy(Me).multiplyScalar(q).floor(),F=je;if(he.bindFramebuffer(I.FRAMEBUFFER,O)&&G&&he.drawBuffers(w,O),he.viewport(L),he.scissor(k),he.setScissorTest(F),ce){const Le=Se.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,H)}else if(xe){const Le=Se.get(w.texture),Xe=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,H||0,Xe)}b=-1},this.readRenderTargetPixels=function(w,U,H,G,O,ce,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){he.bindFramebuffer(I.FRAMEBUFFER,Pe);try{const Le=w.texture,Xe=Le.format,$e=Le.type;if(!we.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-O&&I.readPixels(U,H,G,O,Je.convert(Xe),Je.convert($e),ce)}finally{const Le=C!==null?Se.get(C).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,O,ce,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const Le=w.texture,Xe=Le.format,$e=Le.type;if(!we.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-O){he.bindFramebuffer(I.FRAMEBUFFER,Pe);const Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(U,H,G,O,Je.convert(Xe),Je.convert($e),0);const ht=C!==null?Se.get(C).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,ht);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rf(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Ie),I.deleteSync(Mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(w.image.width*G),ce=Math.floor(w.image.height*G),xe=U!==null?U.x:0,Pe=U!==null?U.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,xe,Pe,O,ce),he.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,G=null,O=0){w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let ce,xe,Pe,Le,Xe,$e,Ie,ht,Mt;const St=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(ce=H.max.x-H.min.x,xe=H.max.y-H.min.y,Pe=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,Xe=H.min.y,$e=H.isBox3?H.min.z:0):(ce=St.width,xe=St.height,Pe=St.depth||1,Le=0,Xe=0,$e=0),G!==null?(Ie=G.x,ht=G.y,Mt=G.z):(Ie=0,ht=0,Mt=0);const rn=Je.convert(U.format),dt=Je.convert(U.type);let Oe;U.isData3DTexture?(R.setTexture3D(U,0),Oe=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Oe=I.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Xn=I.getParameter(I.UNPACK_ROW_LENGTH),ft=I.getParameter(I.UNPACK_IMAGE_HEIGHT),En=I.getParameter(I.UNPACK_SKIP_PIXELS),$i=I.getParameter(I.UNPACK_SKIP_ROWS),hn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const zs=w.isDataArrayTexture||w.isData3DTexture,bt=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Un=Se.get(w),Hs=Se.get(U),xn=Se.get(Un.__renderTarget),hi=Se.get(Hs.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Pe;ui++)zs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,O,$e+ui),w.isDepthTexture?(bt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,O,Mt+ui),I.blitFramebuffer(Le,Xe,ce,xe,Ie,ht,ce,xe,I.DEPTH_BUFFER_BIT,I.NEAREST)):bt?I.copyTexSubImage3D(Oe,O,Ie,ht,Mt+ui,Le,Xe,ce,xe):I.copyTexSubImage2D(Oe,O,Ie,ht,Mt+ui,Le,Xe,ce,xe);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Oe,O,Ie,ht,Mt,ce,xe,Pe,rn,dt,St.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,O,Ie,ht,Mt,ce,xe,Pe,rn,St.data):I.texSubImage3D(Oe,O,Ie,ht,Mt,ce,xe,Pe,rn,dt,St):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ie,ht,ce,xe,rn,dt,St.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ie,ht,St.width,St.height,rn,St.data):I.texSubImage2D(I.TEXTURE_2D,O,Ie,ht,ce,xe,rn,dt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),I.pixelStorei(I.UNPACK_SKIP_PIXELS,En),I.pixelStorei(I.UNPACK_SKIP_ROWS,$i),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hn),O===0&&U.generateMipmaps&&I.generateMipmap(Oe),he.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,G=null,O=0){return w.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,G,O)},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,he.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Vc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xo extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new T;class Wc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xh=new T,yh=new ut,vh=new ut,H_=new T,Mh=new qe,jr=new T,ha=new Hn,Sh=new qe,ua=new Sr;class G_ extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ml,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(s),e.ray.intersectsSphere(ha)!==!1&&(Sh.copy(s).invert(),ua.copy(e.ray).applyMatrix4(Sh),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;yh.fromBufferAttribute(s.attributes.skinIndex,e),vh.fromBufferAttribute(s.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vh.getComponent(r);if(o!==0){const a=yh.getComponent(r);Mh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(H_.copy(xh).applyMatrix4(Mh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vu extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wu extends Dt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=$t,h=$t,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new qe,V_=new qe;class Xc{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:V_;bh.multiplyMatrices(a,t[r]),bh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wu(t,e,e,pn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vu),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Mc extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new qe,wh=new qe,Kr=[],Th=new cn,W_=new qe,qs=new Ze,Ys=new Hn;class Co extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Th.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ys.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),wh.multiplyMatrices(n,us),qs.matrixWorld=wh,qs.raycast(e,Kr);for(let o=0,a=Kr.length;o<a;o++){const c=Kr[o];c.instanceId=r,c.object=this,t.push(c)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wu(new Float32Array(s*this.count),s,this.count,Nc,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qc extends Dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yo=new T,vo=new T,Eh=new qe,js=new Sr,$r=new Hn,da=new T,Ah=new T;class Yc extends yt{constructor(e=new zt,t=new qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yo.fromBufferAttribute(t,s-1),vo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yo.distanceTo(vo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Eh.copy(s).invert(),js.copy(e.ray).applyMatrix4(Eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=h.getX(_),v=h.getX(_+1),y=Zr(this,e,js,c,m,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=Zr(this,e,js,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=Zr(this,e,js,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Zr(this,e,js,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(yo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(yo,vo,da,Ah)>n)return;da.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(da);if(!(c<e.near||c>e.far))return{distance:c,point:Ah.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rh=new T,Ch=new T;class Xu extends Yc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Rh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X_ extends Yc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qu extends Dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new qe,Sc=new Sr,Jr=new Hn,Qr=new T;class q_ extends yt{constructor(e=new zt,t=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Ph.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);Qr.fromBufferAttribute(u,p),Lh(Qr,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Qr.fromBufferAttribute(u,g),Lh(Qr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lh(i,e,t,n,s,r,o){const a=Sc.distanceSqToPoint(i);if(a<t){const c=new T;Sc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fa extends Dt{constructor(e,t,n,s,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Yu extends Dt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ie:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,s=[],r=[],o=[],a=new T,c=new qe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(It(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jc extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Y_ extends jc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const eo=new T,pa=new Kc,ma=new Kc,ga=new Kc;class $c extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),l=eo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),pa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,p),ma.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,p),ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ma.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ih(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function j_(i,e){const t=1-i;return t*t*e}function K_(i,e){return 2*(1-i)*i*e}function $_(i,e){return i*i*e}function cr(i,e,t,n){return j_(i,e)+K_(i,t)+$_(i,n)}function Z_(i,e){const t=1-i;return t*t*t*e}function J_(i,e){const t=1-i;return 3*t*t*i*e}function Q_(i,e){return 3*(1-i)*i*i*e}function ex(i,e){return i*i*i*e}function lr(i,e,t,n,s){return Z_(i,e)+J_(i,t)+Q_(i,n)+ex(i,s)}class ju extends Gn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,s.x,r.x,o.x,a.x),lr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tx extends Gn{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,s.x,r.x,o.x,a.x),lr(e,s.y,r.y,o.y,a.y),lr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ku extends Gn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nx extends Gn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends Gn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zu extends Gn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,s.x,r.x,o.x),cr(e,s.y,r.y,o.y),cr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ih(a,c.x,l.x,h.x,u.x),Ih(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:Y_,CatmullRomCurve3:$c,CubicBezierCurve:ju,CubicBezierCurve3:tx,EllipseCurve:jc,LineCurve:Ku,LineCurve3:nx,QuadraticBezierCurve:$u,QuadraticBezierCurve3:Zu,SplineCurve:Ju});class ix extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Mo[s.type]().fromJSON(s))}return this}}class bc extends ix{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ku(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new $u(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ju(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ju(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new jc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Po extends zt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new T,d=new ie,f=new T,g=new T,_=new T;let p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*h*s,x=Math.sin(y),P=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*P,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);const A=c[3*E+0]*x,C=c[3*E+1],b=c[3*E+0]*P;l.push(A,C,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,P=x,E=x+e.length,A=x+e.length+1,C=x+1;r.push(P,E,C),r.push(A,C,E)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.points,e.segments,e.phiStart,e.phiLength)}}class Kt extends Po{constructor(e=1,t=1,n=4,s=8){const r=new bc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Kt(e.radius,e.length,e.capSegments,e.radialSegments)}}class br extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new T,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Be extends zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const x=new T,P=new T;let E=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const b=[],M=C/r,L=M*(t-e)+e;for(let k=0;k<=s;k++){const F=k/s,X=F*c+a,V=Math.sin(X),W=Math.cos(X);P.x=L*V,P.y=-M*n+p,P.z=L*W,u.push(P.x,P.y,P.z),x.set(V,A,W).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const M=_[b][C],L=_[b+1][C],k=_[b+1][C+1],F=_[b][C+1];(e>0||b!==0)&&(h.push(M,L,F),E+=3),(t>0||b!==r-1)&&(h.push(L,k,F),E+=3)}l.addGroup(m,E,0),m+=E}function y(x){const P=g,E=new ie,A=new T;let C=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=s;k++){const X=k/s*c+a,V=Math.cos(X),W=Math.sin(X);A.x=b*W,A.y=p*M,A.z=b*V,u.push(A.x,A.y,A.z),d.push(0,M,0),E.x=V*.5+.5,E.y=W*.5*M+.5,f.push(E.x,E.y),g++}for(let k=0;k<s;k++){const F=P+k,X=L+k;x===!0?h.push(X,X+1,F):h.push(X+1,X,F),C+=3}l.addGroup(m,C,x===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Be(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pt extends Be{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zc extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new T,x=new T,P=new T;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],x),f(t[E+2],P),c(y,x,P,v)}function c(v,y,x,P){const E=P+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const b=v.clone().lerp(x,C/E),M=y.clone().lerp(x,C/E),L=E-C;for(let k=0;k<=L;k++)k===0&&C===E?A[C][k]=b:A[C][k]=b.clone().lerp(M,k/L)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const M=Math.floor(b/2);b%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function l(v){const y=new T;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new T;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=p(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;o.push(x,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],P=o[v+4],E=Math.max(y,x,P),A=Math.min(y,x,P);E>.9&&A<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new T,y=new T,x=new T,P=new T,E=new ie,A=new ie,C=new ie;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(v).add(y).add(x).divideScalar(3);const L=p(P);_(E,M+0,v,L),_(A,M+2,y,L),_(C,M+4,x,L)}}function _(v,y,x,P){P<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.vertices,e.indices,e.radius,e.details)}}let sx=class extends bc{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new bc().fromJSON(s))}return this}};const rx={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Qu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=hx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return gr(r,o,t,a,c,f,0),o}};function Qu(i,e,t,n,s){let r,o;if(s===Mx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Dh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Dh(r,i[r],i[r+1],o);return o&&Lo(o,o.next)&&(xr(o),o=o.next),o}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Lo(t,t.next)||wt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ax(i,n,s,r):ox(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),xr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=cx(ji(i),e,t),gr(i,e,t,n,s,r,2)):o===2&&lx(i,e,t,n,s,r):gr(ji(i),e,t,n,s,r,1);break}}}function ox(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gs(s,a,r,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ax(i,e,t,n){const s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=wc(f,g,e,t,n),v=wc(_,p,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&gs(a,h,c,u,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&gs(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&gs(a,h,c,u,l,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&gs(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cx(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Lo(s,r)&&ed(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xr(n),xr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function lx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xx(o,a)){let c=td(o,a);o=ji(o,o.next),c=ji(c,c.next),gr(o,e,t,n,s,r,0),gr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hx(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(_x(l));for(s.sort(ux),r=0;r<s.length;r++)t=dx(s[r],t);return t}function ux(i,e){return i.x-e.x}function dx(i,e){const t=fx(i,e);if(!t)return e;const n=td(t,i);return ji(n,n.next),ji(t,t.next)}function fx(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&gs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),_r(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&px(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function px(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function mx(i,e,t,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gx(s)}function gx(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function wc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _x(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yx(i,e)&&(_r(i,e)&&_r(e,i)&&vx(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Lo(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Lo(i,e){return i.x===e.x&&i.y===e.y}function ed(i,e,t,n){const s=no(wt(i,e,t)),r=no(wt(i,e,n)),o=no(wt(t,n,i)),a=no(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&to(i,t,e)||r===0&&to(i,n,e)||o===0&&to(t,i,n)||a===0&&to(t,e,n))}function to(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function no(i){return i>0?1:i<0?-1:0}function yx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ed(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _r(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function vx(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function td(i,e){const t=new Tc(i.i,i.x,i.y),n=new Tc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dh(i,e,t,n){const s=new Tc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class hr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return hr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Nh(e),Uh(n,e);let o=e.length;t.forEach(Nh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Uh(n,t[c]);const a=rx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Nh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class wr extends zt{constructor(e=new sx([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Sx;let y,x=!1,P,E,A,C;m&&(y=m.getSpacedPoints(h),x=!0,d=!1,P=m.computeFrenetFrames(h,!1),E=new T,A=new T,C=new T),d||(p=0,f=0,g=0,_=0);const b=a.extractPoints(l);let M=b.shape;const L=b.holes;if(!hr.isClockWise(M)){M=M.reverse();for(let ee=0,ae=L.length;ee<ae;ee++){const I=L[ee];hr.isClockWise(I)&&(L[ee]=I.reverse())}}const F=hr.triangulateShape(M,L),X=M;for(let ee=0,ae=L.length;ee<ae;ee++){const I=L[ee];M=M.concat(I)}function V(ee,ae,I){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ae,I)}const W=M.length,K=F.length;function q(ee,ae,I){let Ne,se,we;const he=ee.x-ae.x,ze=ee.y-ae.y,Se=I.x-ee.x,R=I.y-ee.y,S=he*he+ze*ze,B=he*R-ze*Se;if(Math.abs(B)>Number.EPSILON){const j=Math.sqrt(S),ne=Math.sqrt(Se*Se+R*R),$=ae.x-ze/j,Re=ae.y+he/j,me=I.x-R/ne,be=I.y+Se/ne,it=((me-$)*R-(be-Re)*Se)/(he*R-ze*Se);Ne=$+he*it-ee.x,se=Re+ze*it-ee.y;const oe=Ne*Ne+se*se;if(oe<=2)return new ie(Ne,se);we=Math.sqrt(oe/2)}else{let j=!1;he>Number.EPSILON?Se>Number.EPSILON&&(j=!0):he<-Number.EPSILON?Se<-Number.EPSILON&&(j=!0):Math.sign(ze)===Math.sign(R)&&(j=!0),j?(Ne=-ze,se=he,we=Math.sqrt(S)):(Ne=he,se=ze,we=Math.sqrt(S/2))}return new ie(Ne/we,se/we)}const le=[];for(let ee=0,ae=X.length,I=ae-1,Ne=ee+1;ee<ae;ee++,I++,Ne++)I===ae&&(I=0),Ne===ae&&(Ne=0),le[ee]=q(X[ee],X[I],X[Ne]);const de=[];let te,Me=le.concat();for(let ee=0,ae=L.length;ee<ae;ee++){const I=L[ee];te=[];for(let Ne=0,se=I.length,we=se-1,he=Ne+1;Ne<se;Ne++,we++,he++)we===se&&(we=0),he===se&&(he=0),te[Ne]=q(I[Ne],I[we],I[he]);de.push(te),Me=Me.concat(te)}for(let ee=0;ee<p;ee++){const ae=ee/p,I=f*Math.cos(ae*Math.PI/2),Ne=g*Math.sin(ae*Math.PI/2)+_;for(let se=0,we=X.length;se<we;se++){const he=V(X[se],le[se],Ne);re(he.x,he.y,-I)}for(let se=0,we=L.length;se<we;se++){const he=L[se];te=de[se];for(let ze=0,Se=he.length;ze<Se;ze++){const R=V(he[ze],te[ze],Ne);re(R.x,R.y,-I)}}}const je=g+_;for(let ee=0;ee<W;ee++){const ae=d?V(M[ee],Me[ee],je):M[ee];x?(A.copy(P.normals[0]).multiplyScalar(ae.x),E.copy(P.binormals[0]).multiplyScalar(ae.y),C.copy(y[0]).add(A).add(E),re(C.x,C.y,C.z)):re(ae.x,ae.y,0)}for(let ee=1;ee<=h;ee++)for(let ae=0;ae<W;ae++){const I=d?V(M[ae],Me[ae],je):M[ae];x?(A.copy(P.normals[ee]).multiplyScalar(I.x),E.copy(P.binormals[ee]).multiplyScalar(I.y),C.copy(y[ee]).add(A).add(E),re(C.x,C.y,C.z)):re(I.x,I.y,u/h*ee)}for(let ee=p-1;ee>=0;ee--){const ae=ee/p,I=f*Math.cos(ae*Math.PI/2),Ne=g*Math.sin(ae*Math.PI/2)+_;for(let se=0,we=X.length;se<we;se++){const he=V(X[se],le[se],Ne);re(he.x,he.y,u+I)}for(let se=0,we=L.length;se<we;se++){const he=L[se];te=de[se];for(let ze=0,Se=he.length;ze<Se;ze++){const R=V(he[ze],te[ze],Ne);x?re(R.x,R.y+y[h-1].y,y[h-1].x+I):re(R.x,R.y,u+I)}}}z(),Q();function z(){const ee=s.length/3;if(d){let ae=0,I=W*ae;for(let Ne=0;Ne<K;Ne++){const se=F[Ne];Ue(se[2]+I,se[1]+I,se[0]+I)}ae=h+p*2,I=W*ae;for(let Ne=0;Ne<K;Ne++){const se=F[Ne];Ue(se[0]+I,se[1]+I,se[2]+I)}}else{for(let ae=0;ae<K;ae++){const I=F[ae];Ue(I[2],I[1],I[0])}for(let ae=0;ae<K;ae++){const I=F[ae];Ue(I[0]+W*h,I[1]+W*h,I[2]+W*h)}}n.addGroup(ee,s.length/3-ee,0)}function Q(){const ee=s.length/3;let ae=0;ue(X,ae),ae+=X.length;for(let I=0,Ne=L.length;I<Ne;I++){const se=L[I];ue(se,ae),ae+=se.length}n.addGroup(ee,s.length/3-ee,1)}function ue(ee,ae){let I=ee.length;for(;--I>=0;){const Ne=I;let se=I-1;se<0&&(se=ee.length-1);for(let we=0,he=h+p*2;we<he;we++){const ze=W*we,Se=W*(we+1),R=ae+Ne+ze,S=ae+se+ze,B=ae+se+Se,j=ae+Ne+Se;We(R,S,B,j)}}}function re(ee,ae,I){c.push(ee),c.push(ae),c.push(I)}function Ue(ee,ae,I){Ge(ee),Ge(ae),Ge(I);const Ne=s.length/3,se=v.generateTopUV(n,s,Ne-3,Ne-2,Ne-1);ct(se[0]),ct(se[1]),ct(se[2])}function We(ee,ae,I,Ne){Ge(ee),Ge(ae),Ge(Ne),Ge(ae),Ge(I),Ge(Ne);const se=s.length/3,we=v.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);ct(we[0]),ct(we[1]),ct(we[3]),ct(we[1]),ct(we[2]),ct(we[3])}function Ge(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function ct(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mo[s.type]().fromJSON(s)),new wr(n,e.options)}}const Sx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(d,1-g),new ie(_,1-m)]:[new ie(a,1-c),new ie(h,1-u),new ie(f,1-g),new ie(p,1-m)]}};function bx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Io extends Zc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Io(e.radius,e.detail)}}class ke extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const E=P/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(E+x,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=h[m][v+1],x=h[m][v],P=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&f.push(y,x,E),(m!==n-1||c<Math.PI)&&f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zt extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Do extends zt{constructor(e=new Zu(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,c=new T,l=new ie;let h=new T;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function _(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),v(),m()}function p(y){h=e.getPointAt(y/t,h);const x=o.normals[y],P=o.binormals[y];for(let E=0;E<=s;E++){const A=E/s*Math.PI*2,C=Math.sin(A),b=-Math.cos(A);c.x=b*x.x+C*P.x,c.y=b*x.y+C*P.y,c.z=b*x.z+C*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const P=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),A=(s+1)*y+x,C=(s+1)*(y-1)+x;g.push(P,E,C),g.push(E,A,C)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Do(new Mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wx extends Dn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Rt extends Dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends Rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Tx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ex(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Oh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function nd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Tr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ax extends Tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bl:r=e,a=2*t-n;break;case wl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bl:o=e,c=2*n-t;break;case wl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+v*o[l+P]+y*o[c+P]+x*o[u+P];return r}}class Rx extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Cx extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ax(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Tx(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Cs;class Fs extends Vn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Rs;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class id extends Vn{}id.prototype.ValueTypeName="color";class Is extends Vn{}Is.prototype.ValueTypeName="number";class Px extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ds extends Vn{InterpolantFactoryMethodLinear(e){return new Px(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Vn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Rs;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Vn{}Ns.prototype.ValueTypeName="vector";class Lx{constructor(e="",t=-1,n=[],s=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Ex(c);c=Oh(c,1,h),l=Oh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Is(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];nd(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new Is(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ns,f+".position",d,"pos",s),n(Ds,f+".quaternion",d,"rot",s),n(Ns,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ix(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return id;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(i.type);if(i.times===void 0){const t=[],n=[];nd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ux=new Nx;class ks{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class Ox extends Error{constructor(e,t){super(e),this.response=t}}class sd extends ks{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:s});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){u.read().then(({done:y,value:x})=>{if(y)m.close();else{_+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,A=h.length;E<A;E++){const C=h[E];C.onProgress&&C.onProgress(P)}m.enqueue(x),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Ox(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{bi.add(e,l);const h=Zn[e];delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fx extends ks{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=mr("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Bx extends ks{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,o=new Fx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class No extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kx extends No{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new qe,Fh=new T,Bh=new T;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zx extends Jc{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hx extends No{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kh=new qe,Ks=new T,xa=new T;class Gx extends Jc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),xa.copy(n.position),xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}}class Qc extends No{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vx extends Jc{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Vx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ur{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wx extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}}class Xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zh(){return performance.now()}const el="\\[\\]\\.:\\/",qx=new RegExp("["+el+"]","g"),tl="[^"+el+"]",Yx="[^"+el.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",tl),Kx=/(WCOD+)?/.source.replace("WCOD",Yx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),Jx=new RegExp("^"+jx+Kx+$x+Zx+"$"),Qx=["material","materials","bones","map"];class ey{constructor(e,t,n){const s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(e){const t=Jx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=ey;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ty extends Xu{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ce(n),s=new Ce(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new zt;h.setAttribute("position",new at(c,3)),h.setAttribute("color",new at(l,3));const u=new qc({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);const $s=new T;function vn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;$s.copy(e),$s[n]=0,$s.normalize();const l=.5*o/(o+a),h=1-$s.angleTo(i)/c;return Math.sign($s[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Ft extends pe{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new T,c=new T,l=new T(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new T,_=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[m+0]=vn(g,c,"z","y",r,n),d[m+1]=1-vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[m+0]=1-vn(g,c,"z","y",r,n),d[m+1]=1-vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[m+0]=1-vn(g,c,"x","z",r,e),d[m+1]=vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[m+0]=1-vn(g,c,"x","z",r,e),d[m+1]=1-vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[m+0]=1-vn(g,c,"x","y",r,e),d[m+1]=1-vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[m+0]=vn(g,c,"x","y",r,e),d[m+1]=1-vn(g,c,"y","x",r,t);break}}}const ya=new Map;function Fn(i,e,t=256,n=256,s=At){if(ya.has(i))return ya.get(i);const r=document.createElement("canvas");r.width=t,r.height=n,e(r.getContext("2d"),t,n);const o=new Yu(r);return o.colorSpace=s,o.anisotropy=8,ya.set(i,o),o}function Vt(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function rd(i,e){const t=new Ce(i||"#cccccc");return e>0&&t.lerp(new Ce("#ffffff"),.38),e<0&&t.lerp(new Ce("#000000"),.4),`#${t.getHexString()}`}function zi(i,e,t,n,s){return Fn(`grain:${i}:${e}:${t}:${s}`,(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a);for(let c=0;c<t;c++){const l=Vt(c+1)*o,h=Vt(c+9)*a,u=n+Vt(c+3)*(s-n);r.fillStyle=Vt(c+5)>.5?e:rd(e,Vt(c)>.5?1:-1),r.beginPath(),r.ellipse(l,h,u,u*(.7+Vt(c+4)*.5),Vt(c)*6,0,Math.PI*2),r.fill()}})}function iy(i){return Fn(`wood:${i}`,(e,t,n)=>{e.fillStyle=i,e.fillRect(0,0,t,n);for(let s=0;s<n;s+=3)e.fillStyle=`rgba(40,20,8,${.05+(s%18===0?.18:.04)})`,e.fillRect(0,s,t,1+(s%12===0?2:0));e.strokeStyle="rgba(60,30,10,0.25)",e.beginPath(),e.moveTo(40,0),e.bezierCurveTo(80,n*.3,20,n*.6,70,n),e.stroke()})}function sy(i,e){const t=[];for(let n=0;n<i;n++)t.push({x:Vt(n+2)*e,y:Vt(n+4)*e,r:8+Vt(n+6)*34});return t}function Gh(i,e,t,n,{bump:s=!1}={}){i.fillStyle=s?"#8d8d8d":"#f0c14b",i.fillRect(0,0,e,t);for(const r of n){const o=i.createRadialGradient(r.x,r.y,r.r*.12,r.x,r.y,r.r);s?(o.addColorStop(0,"#141414"),o.addColorStop(.55,"#5c5c5c"),o.addColorStop(1,"#c8c8c8")):(o.addColorStop(0,"#5a3a0c"),o.addColorStop(.45,"#c4842a"),o.addColorStop(1,"#ffe7a3")),i.fillStyle=o,i.beginPath(),i.arc(r.x,r.y,r.r,0,Math.PI*2),i.fill()}}function ry(i,e,t){i.fillStyle="#f4efe6",i.fillRect(0,0,e,t),i.strokeStyle="#8d7b5e",i.lineWidth=3;for(let n=0;n<=e;n+=14)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke(),i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke();i.fillStyle="#5c4a32";for(let n=7;n<t;n+=14)for(let s=7;s<e;s+=14)i.beginPath(),i.arc(s,n,2.4,0,Math.PI*2),i.fill()}function Vh(i,e,t,n,s,r,o){const c=[];for(let u=0;u<s;u++)c.push({x:Vt(u+1)*512,y:Vt(u+9)*512,r:r+Vt(u+3)*(o-r),rot:Vt(u)*6,tone:Vt(u+5)});const l=Fn(`sand:${i}`,(u,d,f)=>{u.fillStyle=e,u.fillRect(0,0,d,f);for(const g of c)u.fillStyle=g.tone>.66?n:g.tone>.33?e:t,u.beginPath(),u.ellipse(g.x,g.y,g.r,g.r*(.62+g.tone%.2),g.rot,0,Math.PI*2),u.fill()},512,512),h=Fn(`sand-bump:${i}`,(u,d,f)=>{u.fillStyle="#7a7a7a",u.fillRect(0,0,d,f);for(const g of c){const _=u.createRadialGradient(g.x,g.y,g.r*.15,g.x,g.y,g.r);_.addColorStop(0,"#ffffff"),_.addColorStop(1,"#6e6e6e"),u.fillStyle=_,u.beginPath(),u.ellipse(g.x,g.y,g.r,g.r*.7,g.rot,0,Math.PI*2),u.fill()}},512,512,Wt);return{map:l,bump:h,bumpScale:.16}}const va=new Map;function oy(i){if(va.has(i))return va.get(i);let e;switch(i){case"sponge":{const t=sy(70,512);e={map:Fn("layer:sponge:v2",(n,s,r)=>Gh(n,s,r,t),512,512),bump:Fn("layer:sponge:bump",(n,s,r)=>Gh(n,s,r,t,{bump:!0}),512,512,Wt),bumpScale:.42};break}case"cotton":e={map:zi("#f7f4ee","#d9d3c5",220,2,7),bump:null,bumpScale:0};break;case"cloth":e={map:Fn("layer:cloth:v2",(t,n,s)=>{t.fillStyle="#f3ead6",t.fillRect(0,0,n,s),t.strokeStyle="#a89068",t.lineWidth=2;for(let r=0;r<n;r+=7)t.beginPath(),t.moveTo(r,0),t.lineTo(r,s),t.stroke(),t.beginPath(),t.moveTo(0,r),t.lineTo(n,r),t.stroke()},256,256),bump:null,bumpScale:0};break;case"screen":e={map:Fn("layer:screen",(t,n,s)=>ry(t,n,s),256,256),bump:null,bumpScale:0};break;case"sand":e=Vh("fine","#e7c98a","#8a5a28","#fff1c9",780,2.2,6.5);break;case"coarseSand":e=Vh("coarse","#d1a25a","#6a4218","#f0d7a0",420,4,11),e.bumpScale=.22;break;case"charcoal":e={map:zi("#2a2a2a","#0d0d0d",180,4,14),bump:null,bumpScale:0};break;case"gravel":e={map:zi("#b7b1a4","#6e675c",160,5,11),bump:null,bumpScale:0};break;case"coarseGravel":e={map:zi("#9a9286","#4e463c",70,10,22),bump:null,bumpScale:0};break;case"pebbles":e={map:zi("#c5bfb4","#7d5a45",80,8,18),bump:null,bumpScale:0};break;case"ceramic":e={map:Fn("layer:ceramic",(t,n,s)=>{t.fillStyle="#efe6d8",t.fillRect(0,0,n,s);for(let r=16;r<s;r+=28)for(let o=16;o<n;o+=28)t.strokeStyle="#c4553a",t.lineWidth=3,t.beginPath(),t.arc(o,r,8,0,Math.PI*2),t.stroke()}),bump:null,bumpScale:0};break;case"bioballs":e={map:Fn("layer:bio",(t,n,s)=>{t.fillStyle="#e9eef2",t.fillRect(0,0,n,s);for(let r=0;r<40;r++){const o=Vt(r+1)*n,a=Vt(r+2)*s;t.strokeStyle="#90a4ae",t.beginPath(),t.arc(o,a,10,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(o-8,a),t.lineTo(o+8,a),t.moveTo(o,a-8),t.lineTo(o,a+8),t.stroke()}}),bump:null,bumpScale:0};break;default:e={map:zi("#cccccc","#888888",200,2,5),bump:null,bumpScale:0}}return va.set(i,e),e}function ci(i="#e7f6ff"){return new bn({color:i,metalness:0,roughness:.06,transmission:.92,thickness:.45,ior:1.5,transparent:!0,opacity:1,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1})}function Ci(i="#4fc3f7",e=!1){return new bn({color:i,metalness:0,roughness:e?.22:.06,transmission:e?.55:.82,thickness:e?.8:.6,ior:1.333,transparent:!0,opacity:e?.92:.9,attenuationColor:i,attenuationDistance:e?.35:.8,clearcoat:.4,envMapIntensity:1})}function xt(i,e=.86,t=.28){return new Rt({color:i,metalness:e,roughness:t,envMapIntensity:1})}function nn(i){return new Rt({color:i,emissive:i,emissiveIntensity:.85,roughness:.35,metalness:.15})}function Z(i={},e="#90a4c8",t){const n=i.material||t||"plastic";let s=i.color||e;return i.lightness&&(s=rd(s,i.lightness)),i.glow||n==="glow"?nn(s):n==="glass"?ci(s):n==="water"?Ci(s,!1):n==="metal"?xt(s):n==="gold"?xt(i.color||"#d4af37",1,.22):n==="copper"?xt(i.color||"#b87333",.92,.3):n==="wood"?new Rt({color:"#ffffff",map:iy(s),roughness:.72,metalness:.04}):n==="stone"?new Rt({color:"#ffffff",map:zi(s,"#5c5348",500,1,3),roughness:.92,metalness:.02}):n==="rubber"||n==="fabric"?new Rt({color:s,roughness:.96,metalness:0}):n==="ceramic"?new Rt({color:s,roughness:.32,metalness:.05}):new Rt({color:s,roughness:.4,metalness:.05})}function yr(i,e){const t=oy(i),n=i==="sponge"||i==="cloth"||i==="cotton"||i==="screen";return new Rt({color:"#ffffff",map:t.map,bumpMap:t.bump||null,bumpScale:t.bumpScale||0,roughness:i==="charcoal"?.95:i==="sponge"?.68:i==="screen"?.5:.86,metalness:i==="screen"?.08:0,emissive:"#000000",emissiveIntensity:.04,side:n?Ot:kn})}const Ma={sponge:"#f3d27a",cotton:"#f4f1ea",cloth:"#e6dcc4",sand:"#e7d3a1",coarseSand:"#d1a866",charcoal:"#3a3a3a",gravel:"#b7b1a4",coarseGravel:"#8d8578",pebbles:"#c5bfb4",ceramic:"#e8d2c4",bioballs:"#d5dee6"},ay=new T(0,1,0),Sa=new Ce,cy=Math.PI*1.05;function Ut(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function ly(i){if(!i)return{start:0,length:Math.PI*2,gapMid:0,open:!1};const e=cy;return{start:Math.PI-e/2,length:e,gapMid:0,open:!0}}function Pi(i,e,t,n,s,r=40){const o=new Ze(new Be(i,e,Math.max(t,.012),r,1,!1,s.start,s.length),n);return o.castShadow=!(n&&n.transmission>0),o.receiveShadow=!0,n&&(n.side=Ot),o}function So(i,e,t,n,s,r){if(s.open)for(const o of[s.start,s.start+s.length]){const a=new Ze(new Us(Math.max(e,.02),Math.max(t,.02)),r);a.castShadow=!1,a.receiveShadow=!0,a.position.set(Math.sin(o)*e*.5,n,Math.cos(o)*e*.5),a.rotation.y=Math.atan2(Math.cos(o),-Math.sin(o)),i.add(a)}}function hy(i){return i==="sponge"?.86:i==="cloth"||i==="cotton"?.42:i==="sand"?1.22:i==="coarseSand"?1.05:i==="charcoal"?.98:i==="coarseGravel"||i==="pebbles"?1.16:i==="ceramic"||i==="bioballs"?.9:1}const uy={sand:{kind:"grains",count:210,size:.062,stretch:.55,colors:["#f8e7b8","#e8c56a","#c9943c","#fff6d2","#a56a28","#f0d48a"]},coarseSand:{kind:"grains",count:78,size:.092,stretch:.6,colors:["#d39a45","#a86a28","#e8b86a","#7a4e18","#f0c27a"]},charcoal:{kind:"chunks",count:26,size:.1,stretch:.9,colors:["#2c2c2c","#101010","#45403c","#1a1614","#5a5048"]},gravel:{kind:"stones",count:28,size:.1,stretch:.48,colors:["#d5cfc2","#8e877c","#eee6da","#6a6358","#b7ad9e"]},coarseGravel:{kind:"stones",count:12,size:.16,stretch:.42,colors:["#9a9184","#5c564c","#d2c6b4","#3f3a34","#ece3d4"]},pebbles:{kind:"stones",count:22,size:.062,stretch:.2,round:!0,colors:["#ece6dc","#c4a890","#f7f4ee","#a88878"]},ceramic:{kind:"rings",count:16,colors:["#d4765a","#c4553a","#e8b39a"]},bioballs:{kind:"balls",count:12,colors:["#eef3f6","#c5d0d8","#f7fbff"]}};function dy(i,e,t,n,s){const r=yr(s?"screen":"cloth"),o=s?.042:.02,a=Pi(t*.9,t*.9,o,r,n,32);a.position.y=e,i.add(a);const c=new Ze(new Be(t*.93,t*.93,o+.01,36,1,!0,n.start,n.length),xt("#d7ccc8",.72,.3));c.position.y=e,c.castShadow=!1,i.add(c)}function fy(i,e,t,n,s,r){const o=yr("sponge");o.roughness=.66,o.bumpScale=Math.max(o.bumpScale||0,.4);const a=n/.5,c=Math.max(t*.68,.06),l=n*.74,h=Pi(l*.94,l,c,o,s,36);h.position.y=e-t*.03,i.add(h),So(i,l,c,h.position.y,s,o);const u=Pi(l*.58,l*.66,c*.4,o,s,24);u.position.set(.015*a,e+t*.14,.01*a),i.add(u);const d=new Co(new ke(1,7,6),new Rt({color:"#ffffff",roughness:1}),24),f=new yt,g=new Ce;for(let _=0;_<24;_++){const p=_%2,m=p===0?s.start+.02:s.start+s.length-.02,v=Ut(r+_*4.1)*l*.88,y=h.position.y+(Ut(r+_*6.3)-.5)*c*.8,x=(.038+Ut(r+_*2.7)*.04)*a,P=p===0?-Math.cos(m):Math.cos(m),E=p===0?Math.sin(m):-Math.sin(m);f.position.set(Math.sin(m)*v+P*x*.4,y,Math.cos(m)*v+E*x*.4),f.scale.setScalar(x),f.rotation.set(0,0,0),f.updateMatrix(),d.setMatrixAt(_,f.matrix),g.set(_%3===0?"#3a2712":_%3===1?"#a86b22":"#e7b45a"),d.setColorAt(_,g)}d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=!1,i.add(d)}function py(i,e,t,n,s,r){const o=yr(r),a=Math.min(Math.max(t*.5,.025),.07),c=Pi(n*.9,n*.9,a,o,s,32);c.position.y=e,i.add(c),So(i,n*.9,a,e,s,o);const l=Pi(n*.76,n*.76,Math.max(a*.42,.012),yr("screen"),s,28);l.position.y=e+a*.62,i.add(l)}function my(i,e,t,n,s,r,o){const a=Math.max(.35,s/.5),c=Math.max(.32,Math.min(1.15,a*a*(n/.3))),l=Math.max(8,Math.round(e.count*c));let h;if(e.kind==="rings"){const v=.046*a;h=new Zt(v,v*.32,5,10)}else e.kind==="balls"?h=new ke(.052*a,10,8):e.round?h=new ke(1,8,6):h=new Io(1,0);const u=new Rt({roughness:e.kind==="balls"?.4:e.kind==="chunks"?.97:.9,metalness:e.kind==="balls"?.05:0}),d=new Co(h,u,l),f=new yt,g=new Ce,_=t-n*.5,p=Math.max(n*.84,.04),m=e.kind==="rings"||e.kind==="balls";for(let v=0;v<l;v++){const y=Ut(o+v*1.7);let x;r.open&&y<.3?x=r.start+Ut(o+v*3.1)*.05:r.open&&y<.6?x=r.start+r.length-Ut(o+v*4.3)*.05:x=r.start+(v%13+Ut(o+v*5.1))/13*r.length;const P=Math.sqrt(.06+Ut(o+v*6.7)*.94)*s*.76,E=_+.02*a+Ut(o+v*8.3)*p;let A=m?.82+Ut(o+v*2.2)*.36:(e.size||.05)*a*(.75+Ut(o+v*2.2)*.5);m||(A=Math.min(A,n*.42));const C=e.stretch??.3;f.position.set(Math.sin(x)*P,E,Math.cos(x)*P),f.rotation.set(Ut(o+v*12)*6.3,Ut(o+v*13)*6.3,Ut(o+v*14)*6.3),m?f.scale.setScalar(A):f.scale.set(A*(1+(Ut(o+v*9.1)-.5)*C),A*(e.round?.75:.6+Ut(o+v*10.4)*.55),A*(1+(Ut(o+v*11.6)-.5)*C)),f.updateMatrix(),d.setMatrixAt(v,f.matrix),g.set(e.colors[v%e.colors.length]),g.offsetHSL(0,(Ut(o+v*15)-.5)*.05,(Ut(o+v*16)-.5)*.1),d.setColorAt(v,g)}if(d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d.castShadow=!1,d.receiveShadow=!0,i.add(d),!m){const v=Pi(s*.86,s*.86,.012,new Rt({color:"#3a3128",roughness:.96}),r,24);v.position.y=_+.006,i.add(v)}}function gy(i,e,t,n,s,r,o){if(e==="sponge"){fy(i,t,n,s,r,o);return}if(e==="cloth"||e==="cotton"){py(i,t,n,s,r,e);return}my(i,uy[e]||{kind:"grains",count:70,size:.05,stretch:.4,colors:["#d0d0d0","#8d8d8d","#f4f4f4"]},t,n,s,r,o)}function _y(){const i=Ae("WasteBin"),e=.2,t=.48,n=ci("#f6ebe3"),s=new Ze(new Be(e,e*.94,t,28,1,!0),n);s.material.side=Ot,s.castShadow=!1,s.receiveShadow=!0,s.position.y=t/2+.05;const r=D(new Be(e*1.12,e*1.16,.07,24),xt("#5d4037",.55,.45),0,.035,0),o=.16,a=D(new Be(e*.78,e*.84,o,20),Ci("#4e342e",!0),0,.09+o/2,0),c=D(new Zt(e,.018,8,24),xt("#8d6e63",.7,.35),0,t+.05,0);c.rotation.x=Math.PI/2,i.add(r,s,a,c);const l=new Rt({color:"#3e2723",roughness:1});for(let h=0;h<5;h++){const u=h/5*Math.PI*2,d=new Ze(new Io(.028+h%2*.012,0),l);d.position.set(Math.cos(u)*.07,.15+h%3*.03,Math.sin(u)*.07),d.rotation.set(h,h*.7,.2),d.castShadow=!1,i.add(d)}return i.userData.top=t+.05,i.userData.radius=e,i}function nl({layers:i,lang:e="en",radius:t=.5,cutaway:n=!0,tr:s,layerLabel:r,labelX:o=null}){const a=Ae("FilterColumn"),c=ly(n),l=i?.length?i:["sponge","sand","charcoal","coarseGravel"],h=t>=.4,u=l.map(hy),d=u.reduce((z,Q)=>z+Q,0)||1,f=h?.09:.045,g=Math.min(h?2.2:1.2,(h?.33:.26)*l.length+(h?.46:.2)),_=Math.max(.2,g-f*Math.max(0,l.length-1)),p=h?.28:.16,m=h?.4:.26,v=p+g+m,y=.08,x=ci("#e7f6ff"),P=new Ze(new Be(t,t,v,h?64:40,1,!0,c.start,c.length),x);P.material.side=Ot,P.castShadow=!1,P.receiveShadow=!0,P.position.y=y+v/2,a.add(P),a.add(D(new Be(t*1.14,t*1.18,.09,36),xt("#37474f",.72,.38),0,.045,0));const E=Ci("#4fc3f7",!1),A=h?.12:.07,C=Pi(t*.8,t*.8,A,E,c,32);C.position.y=y+p*.55,a.add(C),So(a,t*.8,A,C.position.y,c,E);let b=y+p+g;const M=[];let L=y+p+_*.45;l.forEach((z,Q)=>{const ue=u[Q]/d*_;b-=ue;const re=b+ue/2;gy(a,z,re,ue*.9,t,c,50+Q*97);const Ue=new Ze(new Be(t*1.004,t*1.004,.016,h?48:28,1,!0,c.start,c.length),new Rt({color:Ma[z]||"#90a4ae",emissive:Ma[z]||"#000000",emissiveIntensity:.2,roughness:.4,metalness:.05}));Ue.position.y=re,Ue.castShadow=!1,a.add(Ue),M.push({id:z,y:re,h:ue}),["sponge","cloth","cotton","sand","coarseSand","charcoal"].includes(z)&&(L=b),Q<l.length-1&&(b-=f,dy(a,b+f/2,t,c,z==="sponge"||z==="cloth"||z==="cotton"||z==="sand"))});const k=y+p+g,F=m*.52,X=Ci("#8d6e63",!0),V=Pi(t*.78,t*.78,F,X,c,32);V.position.y=k+.025+F/2,a.add(V),So(a,t*.78,F,V.position.y,c,X);const W=Z({},"#4e342e","rubber");for(let z=0;z<(h?7:4);z++){const Q=c.start+(.12+.76*(z/Math.max(1,h?6:3)))*c.length,ue=t*(.16+z%3*.16);a.add(D(new ke(.016*(t/.5),7,5),W,Math.sin(Q)*ue,V.position.y,Math.cos(Q)*ue))}const K=xt("#eceff1",.82,.24);if(a.add(ln(D(new Zt(t,.026,8,h?40:24),K,0,y+v,0),Math.PI/2,0,0)),a.add(ln(D(new Zt(t,.026,8,h?40:24),K,0,y+.02,0),Math.PI/2,0,0)),c.open){const z=nn("#8be4ff");for(const Q of[c.start,c.start+c.length])a.add(D(new pe(.015,v*.98,.015),z,Math.sin(Q)*t,y+v/2,Math.cos(Q)*t))}const q=new Qc("#fff6ea",h?.9:.35,h?7:3,2),le=Math.sin(c.gapMid),de=Math.cos(c.gapMid);q.position.set(le*t*2.2,y+v*.55,de*t*2.2),a.add(q);const te=Ai(s?s("filterColumn"):"Filter",{rtl:e==="ar",accent:"#5ad1ff",width:h?1.05:.85});te.position.set(0,y+v+(h?.3:.22),t*.15),a.add(te),M.forEach((z,Q)=>{const ue=r?r(z.id):z.id,re=Ai(`${Q+1}. ${ue}`,{rtl:e==="ar",accent:Ma[z.id]||"#5ad1ff",width:h?.72:.62});re.position.set(o??t+.95,z.y,0),a.add(re)});const Me=c.open?t*.3:t*.05;a.userData.top=y+v,a.userData.radius=t,a.userData.fallTop=new T(le*Me,V.position.y,de*Me),a.userData.fallBottom=new T(le*Me*.75,C.position.y,de*Me*.75),a.userData.wasteJoin=new T(le*Me,L+f*.35,de*Me),a.userData.inlet=new T(-t,y+v*.92,0),a.userData.outlet=new T(t*.96,C.position.y,.03);const je=1.16;return a.userData.wasteBin=new T(Math.sin(je)*(t+.64),0,Math.cos(je)*(t+.64)),a}function xy(i,e,t){for(const n of i.userData.flows||[]){const s=n.beads.length||1;for(let r=0;r<n.beads.length;r++){const o=n.beads[r];if(o.visible=t,!t)continue;const a=(e*n.speed+r/s)%1;if(o.position.copy(n.curve.getPoint(a)),n.colorTo){const c=Math.min(1,Math.max(0,(a-.12)/.7)),l=c*c*(3-2*c);Sa.copy(n.color).lerp(n.colorTo,l),o.material.color.copy(Sa),o.material.emissive.copy(Sa)}}if(n.arrows)for(let r=0;r<n.arrows.length;r++){const o=t?1+Math.sin(e*3.4+r*1.2)*.16:1;n.arrows[r].scale.set(o,o,o)}}}function Hi(i,e,t=3,n={}){const s=n.color||"#80deea",r=new $c(e,!1,"centripetal");if(n.tube!==!1){const h=new Ze(new Do(r,Math.max(24,e.length*14),n.tubeRadius??.042,8,!1),xt(n.tubeColor||"#cfd8dc",.78,.28));h.castShadow=!0,h.receiveShadow=!0,i.add(h)}const o=[],a=n.radius??.036;for(let h=0;h<t;h++){const u=new Ze(new ke(a,8,6),nn(s));u.castShadow=!1,u.visible=!1,u.userData.flowBead=!0,i.add(u),o.push(u)}const c=[],l=n.arrows??3;if(l>0){const h=new Rt({color:n.arrowColor||s,emissive:n.arrowColor||s,emissiveIntensity:.25,roughness:.4,metalness:.15});for(let u=0;u<l;u++){const d=(u+1)/(l+1),f=r.getPoint(d),_=r.getPoint(Math.min(.985,d+.035)).clone().sub(f);if(_.lengthSq()<1e-8)continue;const p=new Ze(new Pt(n.arrowRadius??.03,n.arrowLength??.08,7),h);p.castShadow=!1,p.position.copy(f),p.quaternion.setFromUnitVectors(ay,_.normalize()),p.userData.isFlowArrow=!0,i.add(p),c.push(p)}}i.userData.flows||(i.userData.flows=[],i.userData.flowTick=(h,u)=>xy(i,h,!!u)),i.userData.flows.push({curve:r,beads:o,speed:n.speed??.18,color:new Ce(s),colorTo:n.colorTo?new Ce(n.colorTo):null,arrows:c})}const Gt=new Map;function De(i,e){for(const t of i){const n=typeof t=="string"?t:t.t,s={...e};t&&typeof t=="object"&&(t.plural&&(s.plural=!0),t.variant&&(s.variant=t.variant));const r=ad(n);Gt.set(r,s);const o=r.split(/\s+/).map(a=>yy(a)).join(" ");Gt.has(o)||Gt.set(o,s)}}function yy(i){if(!/[\u0600-\u06FF]/.test(i))return i;const e=["وبال","وال","بال","فال","كال","ولل","لل","ال"];for(const t of e)if(i.startsWith(t)&&i.length-t.length>=2)return i.slice(t.length);return i}const li=(i,e={})=>({kind:"object",id:i,...e}),od=i=>({kind:"system",id:i}),_n=i=>({kind:"layer",id:i}),vy=i=>({kind:"color",hex:i}),wn=i=>({kind:"material",id:i});De(["water filtration system","filtration system","water filter system","purification system","water purification","water treatment","filtration","purifier","water purifier","نظام ترشيح مياه","نظام ترشيح","محطه معالجه","معالجه المياه","تنقيه المياه","محطه تنقيه","ترشيح","تنقيه","تصفيه"],od("filtration"));De(["aquaponics system","aquaponic system","aquaponics","aquaponic","hydroponic system","hydroponics","hydroponic","نظام زراعه مائيه","زراعه مائيه","نظام اكوابونيك","اكوابونيك","اكوابونكس","نظام هيدروبونيك","هيدروبونيك","احواض زراعه"],od("aquaponics"));const My=[[["cube","block","مكعب","مكعبات"],"cube"],[["crate","صندوق","صناديق"],"cube",{variant:"crate"}],[["dice","die","نرد"],"cube",{variant:"dice"}],[["sphere","ball","orb","كره","كرات","كروي"],"sphere"],[["cylinder","column","pillar","can","اسطوانه","اسطوانات","عمود","علبه"],"cylinder"],[["barrel","برميل"],"cylinder",{variant:"barrel"}],[["cone","مخروط","قمع"],"cone"],[["torus","ring","donut","doughnut","حلقه","خاتم","دونات","طوق"],"torus"],[["pyramid","هرم","اهرام","اهرامات"],"pyramid"],[["capsule","pill","كبسوله"],"capsule"],[["star","نجمه","نجم",{t:"نجوم",plural:!0}],"star"],[["heart","قلب","قلوب"],"heart"],[["water tank","خزان مياه","tank","reservoir","vessel","خزان","خزانات","صهريج","حاويه"],"tank"],[["pipe","tube","hose","انبوب","انابيب","ماسوره","مواسير","خرطوم"],"pipe"],[["filter column","filter cylinder","عمود فلتر","اسطوانه فلتر","filter","فلتر","مرشح","فلاتر","مرشحات"],"filter"],[["pump","مضخه","مضخات","طلمبه"],"pump"],[["house","home","villa","cottage","منزل","بيت","دار","فيلا","كوخ","منازل","بيوت"],"house"],[["table","desk","طاوله","طاولات","منضده","مكتب"],"table"],[["chair","كرسي","كراسي","مقعد"],"chair"],[["sofa","couch","اريكه","كنبه","كنب"],"sofa"],[["bed","سرير","اسره"],"bed"],[["car","automobile","taxi","سياره","سيارات","عربه","مركبه"],"car"],[["bus","حافله","باص"],"bus"],[["bicycle","bike","دراجه"],"bicycle"],[["tree","شجره","شجر"],"tree"],[["trees",{t:"اشجار",plural:!0}],"tree"],[["palm","palm tree","نخله","نخيل"],"tree",{variant:"palm"}],[["pine","pine tree","صنوبر"],"tree",{variant:"pine"}],[["robot","android","روبوت","انسان الي"],"robot"],[["skyscraper","ناطحه سحاب","ناطحه"],"building",{variant:"skyscraper"}],[["tower","برج",{t:"ابراج",plural:!0}],"building",{variant:"tower"}],[["building","مبني","مباني","عماره"],"building"],[["lamp","lantern","مصباح","لمبه","ابجوره","فانوس"],"lamp"],[["rocket","spaceship","صاروخ","مركبه فضائيه"],"rocket"],[["airplane","plane","aircraft","طائره","طائرات","طياره"],"airplane"],[["boat","ship","sailboat","yacht","قارب","سفينه","مركب","يخت"],"boat"],[["cup","mug","كوب","فنجان","كاس"],"cup"],[["bottle","flask","زجاجه","قاروره","قنينه"],"bottle"],[["flower","rose","tulip","زهره","ورده","ازهار","ورود"],"flower"],[["saturn","زحل"],"planet",{variant:"saturn"}],[["earth","الارض"],"planet",{variant:"earth"}],[["moon","قمر"],"planet",{variant:"moon"}],[["planet","كوكب","كواكب"],"planet"],[["bridge","جسر","كوبري"],"bridge"],[["mountain","hill","جبل","جبال","تل"],"mountain"],[["snowman","رجل ثلج","رجل الثلج"],"snowman"],[["greenhouse","بيت زجاجي","صوبه"],"greenhouse"],[["fountain","نافوره"],"fountain"],[["castle","قلعه","قصر"],"castle"],[["windmill","طاحونه","طاحونه هواء"],"windmill"],[["bench","مقعد حديقه","دكه"],"bench"],[["solar panel","لوح شمسي","الواح شمسيه"],"solar"],[["fence","سياج","سور"],"fence"],[["stairs","staircase","سلم","درج"],"stairs"],[["well","بئر"],"well"],[["cloud","سحابه","سحاب","غيمه"],"cloud"],[["sun","شمس"],"sun"],[["cactus","صبار"],"cactus"],[["mushroom","فطر","عش الغراب"],"mushroom"],[["fish","سمكه","سمك","اسماك"],"fish"],[["plant","seedling","نبات","نبته","نباتات"],"plant"],[["grow bed","حوض زراعه","حوض نباتات"],"planter"],[["person","human","man","woman","شخص","انسان","رجل","امرأه"],"person"],[["gear","cog","ترس","تروس"],"gear"],[["crown","تاج"],"crown"],[["umbrella","مظله"],"umbrella"],[["book","كتاب","كتب"],"book"]];for(const[i,e,t]of My)De(i,li(e,t));De([{t:"سيارات",plural:!0}],li("car"));De([{t:"كرات",plural:!0}],li("sphere"));De([{t:"مكعبات",plural:!0}],li("cube"));De([{t:"صناديق",plural:!0}],li("cube",{variant:"crate"}));De([{t:"منازل",plural:!0},{t:"بيوت",plural:!0}],li("house"));De([{t:"كراسي",plural:!0}],li("chair"));De([{t:"نباتات",plural:!0}],li("plant"));De([{t:"اسماك",plural:!0}],li("fish"));De(["sponge","foam","اسفنج"],_n("sponge"));De(["cotton","wool","قطن"],_n("cotton"));De(["filter cloth","cloth","قماش","شاش"],_n("cloth"));De(["fine sand","رمل ناعم"],_n("sand"));De(["coarse sand","رمل خشن"],_n("coarseSand"));De(["sand","رمل","رمال"],_n("sand"));De(["activated charcoal","charcoal","carbon","فحم نشط","فحم","كربون"],_n("charcoal"));De(["fine gravel","حصى ناعم"],_n("gravel"));De(["coarse gravel","حصى خشن"],_n("coarseGravel"));De(["gravel","حصى","حصا"],_n("gravel"));De(["pebbles","stones","حجاره","زلط"],_n("pebbles"));De(["ceramic rings","حلقات سيراميك","سيراميك فلتر"],_n("ceramic"));De(["bio balls","bioballs","كرات حيويه"],_n("bioballs"));const Sy={"#e53935":["red","احمر","حمراء","حمرا","قرمزي"],"#1e88e5":["blue","ازرق","زرقاء","زرقا"],"#1a237e":["navy","كحلي"],"#43a047":["green","اخضر","خضراء","خضرا"],"#fdd835":["yellow","اصفر","صفراء","صفرا","ليموني"],"#fb8c00":["orange","برتقالي","برتقاليه"],"#8e24aa":["purple","violet","بنفسجي","ارجواني","موف"],"#ec407a":["pink","وردي","زهري","زهريه"],"#212121":["black","اسود","سوداء","سودا"],"#f5f5f5":["white","ابيض","بيضاء","بيضا"],"#9e9e9e":["gray","grey","رمادي","رصاصي"],"#795548":["brown","بني","بنيه"],"#d4af37":["gold","ذهبي","ذهبيه"],"#c0c0c0":["silver","فضي","فضيه"],"#00bcd4":["cyan","sky blue","سماوي","تركوازي","فيروزي"],"#d7c4a3":["beige","cream","بيج","كريمي"],"#00897b":["teal","تركواز"]};for(const[i,e]of Object.entries(Sy))De(e,vy(i));De(["glass","transparent","clear","crystal","زجاج","زجاجي","زجاجيه","شفاف","شفافه","شفافين","كريستال","بلور"],wn("glass"));De(["metal","metallic","steel","iron","معدن","معدني","معدنيه","حديد","فولاذ","ستانلس","المنيوم","كروم"],wn("metal"));De(["wood","wooden","خشب","خشبي","خشبيه"],wn("wood"));De(["plastic","pvc","بلاستيك"],wn("plastic"));De(["golden","ذهب"],wn("gold"));De(["stone","concrete","marble","rock","حجر","خرسانه","رخام","اسمنت"],wn("stone"));De(["rubber","matte","مطاط"],wn("rubber"));De(["water","ماء","مياه"],wn("water"));De(["ceramic","سيراميك"],wn("ceramic"));De(["copper","نحاس","نحاسي"],wn("copper"));De(["fabric","قماش مفروشات"],wn("fabric"));De(["glowing","neon","luminous","shiny","مضيء","مضيء","مضيئه","متوهج","نيون","لامع","منير","مشع"],wn("glow"));De(["huge","giant","enormous","ضخم","عملاق","هائل"],{kind:"size",s:2.15});De(["big","large","كبير","كبيره","كبار"],{kind:"size",s:1.5});De(["small","little","mini","صغير","صغيره","صغار"],{kind:"size",s:.62});De(["tiny","صغير جدا","ضئيل","دقيق"],{kind:"size",s:.4});De(["tall","high","طويل","طويله","مرتفع","عالي","عاليه"],{kind:"size",sy:1.65});De(["short","low","flat","قصير","قصيره","منخفض","منخفضه"],{kind:"size",sy:.62});De(["wide","broad","عريض","عريضه","واسع"],{kind:"size",sx:1.5});De(["narrow","thin","نحيف","رفيع"],{kind:"size",sx:.7});De(["on top of","on","above","over","atop","فوق","علي","اعلي","اعلاه"],{kind:"relation",id:"on"});De(["under","below","beneath","تحت","اسفل"],{kind:"relation",id:"under"});De(["next to","beside","بجانب","جانب","قرب","بجوار"],{kind:"relation",id:"beside"});De(["behind","خلف","وراء"],{kind:"relation",id:"behind"});De(["in front of","in front","امام"],{kind:"relation",id:"front"});De(["left of","left","يسار"],{kind:"relation",id:"left"});De(["right of","right","يمين"],{kind:"relation",id:"right"});De(["light","pale","فاتح","فاتحه"],{kind:"lightness",id:"light"});De(["dark","deep","غامق","غامقه","داكن","داكنه"],{kind:"lightness",id:"dark"});De(["coarse","rough","خشن","خشنه"],{kind:"modifier",id:"coarse"});De(["fine","ناعم","ناعمه"],{kind:"modifier",id:"fine"});De(["cutaway","cross section","section","open","مقطع","مقطوع","مقطوعه","مفتوح"],{kind:"modifier",id:"cutaway"});De(["closed","مغلق","مغلقه"],{kind:"modifier",id:"closed"});const ba=new Set(["a","an","the","of","with","in","from","to","for","some","my","please","showing","show","into","by","its","it","that","this","very","من","في","الي","عن","مع","ثم","يظهر","تظهر","فيه","فيها","بها","به","هذا","هذه","ذلك","طبقات","طبقه","داخل","عليها","عليه","بعض","اي"]),by=new Set(["floor","floors","story","stories","storey","storeys","level","levels","طابق","طوابق","دور","ادوار"]),wy={one:1,single:1,two:2,pair:2,couple:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,dozen:12,several:4,few:3,many:6},Ty={واحد:1,واحده:1,اثنان:2,اثنين:2,اثنتان:2,اثنتين:2,زوج:2,ثلاث:3,ثلاثه:3,اربع:4,اربعه:4,خمس:5,خمسه:5,ست:6,سته:6,سبع:7,سبعه:7,ثماني:8,ثمانيه:8,ثمان:8,تسع:9,تسعه:9,عشر:10,عشره:10,عده:4,كثير:6};function ad(i){return String(i||"").replace(/[\u064B-\u0652\u0670\u0640]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/ؤ/g,"و").replace(/ئ/g,"ي").replace(/ء/g,"").replace(/[٠-٩]/g,e=>String("٠١٢٣٤٥٦٧٨٩".indexOf(e))).replace(/[۰-۹]/g,e=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(e))).toLowerCase().replace(/['’]/g,"").replace(/\s+/g," ").trim()}function Ey(i){if(Gt.has(i)||Gt.has(`${i}ه`))return!0;for(const[e,t]of[["تين",3],["ين",2],["تان",3],["ان",2],["ات",2]])if(i.endsWith(e)&&i.length>t+2){const n=i.slice(0,-t);if(Gt.has(n)||Gt.has(`${n}ه`))return!0}return!1}function vr(i){if(!/[\u0600-\u06FF]/.test(i))return i;let e=i;const t=["وبال","وال","بال","فال","كال","ولل","لل","ال"];let n=0;for(;n++<3;){const s=t.find(r=>e.startsWith(r)&&e.length-r.length>=2);if(!s)break;e=e.slice(s.length)}for(const s of["و","ب","ل","ف","ك"]){if(!e.startsWith(s)||e.length-s.length<3)continue;const r=e.slice(s.length);if(Ey(r))return r}return e}function Ay(i){let e=ad(i);return e=e.replace(/\band\b/g," | "),e=e.replace(/\sو\s/g," | "),e=e.replace(/[,،;؛.!?]+/g," | "),e.split(/\s+/).filter(Boolean).map(t=>({n:t,sep:t==="|"}))}function wa(i){return!i||i.sep?!1:by.has(vr(i.n))}function Ry(i){const e=vr(i);if(Gt.has(e))return null;const t=[["تين",3],["ين",2],["تان",3],["ان",2]];for(const[n,s]of t){if(!e.endsWith(n)||e.length<=s+2)continue;const r=e.slice(0,-s),o=Gt.get(r)||Gt.get(`${r}ه`);if(o&&(o.kind==="object"||o.kind==="system"))return{...o,dual:!0,plural:!1}}if(e.endsWith("ات")&&e.length>4){const n=e.slice(0,-2),s=Gt.get(n)||Gt.get(`${n}ه`)||Gt.get(n.slice(0,-1));if(s&&s.kind==="object")return{...s,dual:!1,plural:!0}}return null}function Wh(i){return i.endsWith("ies")&&i.length>4?`${i.slice(0,-3)}y`:/(sses|shes|ches|xes|zes)$/.test(i)?i.slice(0,-2):i.endsWith("s")&&!i.endsWith("ss")&&i.length>3?i.slice(0,-1):i}function Xh(i,e){for(let t=Math.min(4,i.length-e);t>=1;t--){const n=i.slice(e,e+t);if(n.some(a=>a.sep))continue;const s=n.map(a=>a.n).join(" "),r=n.map(a=>vr(a.n)).join(" "),o=Gt.get(s)||Gt.get(r);if(o){const a=Wh(i[e].n),c=!!o.plural||t===1&&a!==i[e].n&&Gt.get(a)?.id===o.id&&Gt.get(a)?.kind===o.kind;return{...o,len:t,dual:!1,plural:c}}}if(!i[e].sep){const t=Wh(i[e].n);if(t!==i[e].n){const s=Gt.get(t);if(s&&(s.kind==="object"||s.kind==="layer"||s.kind==="system"))return{...s,len:1,dual:!1,plural:!0}}const n=Ry(i[e].n);if(n)return{...n,len:1}}return null}function Cy(i,e){return{type:i.id,token:i.i,clause:i.clause,count:i.dual?2:i.plural?3:1,explicitCount:!1,color:null,material:null,scale:1,sx:1,sy:1,glow:!1,lightness:0,floors:null,on:null,anchor:null,slot:null,variant:i.variant||null,seed:ld(`${e}:${i.i}:${i.id}`)}}function ds(i,e,t,n=()=>!0,s=8){let r=null,o=1e9;for(const a of i){if(!n(a))continue;let c=Math.abs(a.token-e.i);a.clause!==e.clause&&(c+=7),t==="ar"&&e.i<a.token&&(c+=1.15),t!=="ar"&&e.i>a.token&&(c+=1.15),c<o&&(o=c,r=a)}return!r||o>s?null:r}function cd(i,e,t){let n=null,s=1e9;for(const r of i){if(!t(r))continue;const o=Math.abs(r.i-e.i)+(r.clause===e.clause?0:6);o<s&&(s=o,n=r)}return s<=4?n:null}function er(i,e,t){return Math.max(e,Math.min(t,i))}const Ec=["sponge","cloth","cotton","sand","charcoal","coarseSand","gravel","pebbles","coarseGravel","ceramic","bioballs"],Py=["sponge","sand","charcoal","coarseSand","gravel","coarseGravel"];function qh(i){return[...i].sort((e,t)=>{const n=Ec.indexOf(e),s=Ec.indexOf(t);return(n<0?99:n)-(s<0?99:s)})}function Ly(i){const e=[];for(const t of i.filter(n=>n.kind==="layer")){let n=t.id;const s=cd(i,t,r=>r.kind==="modifier"&&(r.id==="coarse"||r.id==="fine"));(n==="sand"||n==="gravel")&&s?.id==="coarse"&&(n=n==="sand"?"coarseSand":"coarseGravel"),e.includes(n)||e.push(n)}return e}function Iy(i,e){const t=e.filter(s=>s.type==="tank");if(!t.length)return 2;let n=0;for(const s of t){const r=cd(i,{i:s.token,clause:s.clause},a=>a.kind==="number"),o=r?r.value:s.count;n=Math.max(n,o)}return er(n||2,1,4)}function Dy(i,e){return{mode:"scene",lang:i,text:e,unknown:!1,objects:[],filtration:null,aquaponics:null}}function Ny(i,e,t){const n=Dy(e,t),s=i.filter(_=>_.kind==="system"),r=s.some(_=>_.id==="aquaponics"),o=s.some(_=>_.id==="filtration"),c=i.filter(_=>_.kind==="object"&&_.id!=="filtration"&&_.id!=="aquaponics").map(_=>Cy(_,t)),l=Ly(i),h=c.some(_=>_.type==="filter"),u=c.some(_=>_.type==="tank");let d="scene";r&&!o?d="aquaponics":o&&!r?d="filtration":r&&o?d=i.find(_=>_.kind==="system").id==="aquaponics"?"aquaponics":"filtration":(h&&(u||l.length>=2)||l.length>=3)&&(d="filtration");const f=!i.some(_=>_.kind==="modifier"&&_.id==="closed"),g=new Set;for(const _ of i)if(_.kind==="color"){const p=ds(c,_,e,m=>!m.color);p&&(p.color=_.hex)}else if(_.kind==="material"){const p=ds(c,_,e);if(!p)continue;_.id==="glow"?p.glow=!0:_.id==="gold"?(p.material="metal",p.color=p.color||"#d4af37"):p.material||(p.material=_.id)}else if(_.kind==="size"){const p=ds(c,_,e);if(!p)continue;_.s&&(p.scale*=_.s),_.sy&&(p.sy*=_.sy),_.sx&&(p.sx*=_.sx)}else if(_.kind==="lightness"){const p=ds(c,_,e);p&&(p.lightness=_.id==="light"?1:-1)}else if(_.kind==="number"&&!g.has(_)){const p=ds(c,_,e,m=>!m.explicitCount,5);if(!p)continue;p.count=er(_.value,1,24),p.explicitCount=!0,g.add(_)}else if(_.kind==="floors"){const p=ds(c,_,e,m=>["building","castle","house"].includes(m.type),8);p&&(p.floors=er(_.value,1,60))}for(const _ of i.filter(p=>p.kind==="relation")){const p=[...c].reverse().find(y=>y.token<_.i),m=c.find(y=>y.token>_.i);if(!p||!m||p===m)continue;const v=c.indexOf(m);_.id==="on"?(p.on=v,p.slot="on"):_.id==="under"?(p.on=v,p.slot="under"):(p.anchor=v,p.slot=_.id)}for(const _ of c)(_.color==="#c0c0c0"||_.color==="#d4af37")&&!_.material&&(_.material="metal"),_.type==="building"&&!_.floors&&(_.floors=_.variant==="skyscraper"?22:_.variant==="tower"?12:8),_.type==="castle"&&!_.floors&&(_.floors=3);if(d==="filtration")return n.mode="filtration",n.filtration={layers:qh(l.length>=2?l:Py.slice()),tanks:Iy(i,c),cutaway:f||i.some(_=>_.kind==="modifier"&&_.id==="cutaway"),orderHint:Ec},n.objects=c.filter(_=>!["tank","filter","pipe","pump"].includes(_.type)),n;if(d==="aquaponics"){n.mode="aquaponics";const _=c.find(m=>m.type==="plant"||m.type==="planter"),p=c.find(m=>m.type==="fish");return n.aquaponics={plants:er(_?.count||6,3,12),fish:er(p?.count||3,1,8),withFilter:h||o||l.length>0,layers:qh(l.length?l:["sponge","ceramic","bioballs"])},n.objects=c.filter(m=>!["tank","filter","pipe","pump","fish","plant","planter"].includes(m.type)),n}if(!c.length){const _=i.find(m=>m.kind==="color"),p=i.find(m=>m.kind==="material");return n.unknown=!0,n.objects=[{type:"abstract",token:0,clause:0,count:1,color:_?.hex||null,material:p&&p.id!=="glow"?p.id:null,scale:1,sx:1,sy:1,glow:p?.id==="glow",lightness:0,floors:null,on:null,anchor:null,slot:null,variant:null,seed:ld(t)}],n}return n.objects=c,n}function Uy(i){const e=String(i||""),t=/[\u0600-\u06FF]/.test(e)?"ar":"en",n=Ay(e),s=[];let r=0;for(let o=0;o<n.length;){const a=n[o];if(a.sep){r+=1,o+=1;continue}if(ba.has(a.n)||ba.has(vr(a.n))){o+=1;continue}if(/^\d+$/.test(a.n)){const h=Number.parseInt(a.n,10),u=wa(n[o+1]);s.push({kind:u?"floors":"number",value:h,clause:r,i:o,len:1}),o+=u?2:1;continue}const c=wy[a.n]||Ty[vr(a.n)];if(c){const h=wa(n[o+1]);s.push({kind:h?"floors":"number",value:c,clause:r,i:o,len:1}),o+=h?2:1;continue}if(wa(a)){o+=1;continue}if(a.n==="light"||a.n==="lights"){const h=n[o+1],u=h&&!h.sep&&!ba.has(h.n)?Xh(n,o+1):null;if(!(u&&["color","material","size","object","layer"].includes(u.kind))){s.push({kind:"object",id:"lamp",len:1,dual:!1,plural:a.n==="lights",clause:r,i:o,variant:null}),o+=1;continue}}const l=Xh(n,o);if(l){s.push({...l,clause:r,i:o}),o+=l.len;continue}o+=1}return Ny(s,t,e)}function ld(i){let e=2166136261;const t=String(i);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Oy(i){let e=i>>>0||1;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)}const Fy=new T(0,1,0);function D(i,e,t=0,n=0,s=0){const r=new Ze(i,e);r.position.set(t,n,s);const o=e&&e.transmission>0;return r.castShadow=!o,r.receiveShadow=!0,r}function Ae(i,...e){const t=new mn;t.name=i;for(const n of e.flat())n&&t.add(n);return t}function ln(i,e=0,t=0,n=0){return i.rotation.set(e,t,n),i}function _s(i,e,t,n){const s=new T().subVectors(e,i),r=Math.max(s.length(),.001),o=D(new Be(t,t,r,14),n);return o.position.copy(i).add(e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(Fy,s.normalize()),o}function Ai(i,{rtl:e=!1,accent:t="#5ad1ff",width:n=.86}={}){const s=document.createElement("canvas");s.width=640,s.height=160;const r=s.getContext("2d");r.clearRect(0,0,640,160),r.fillStyle="rgba(8,14,28,0.78)",By(r,8,28,624,104,28),r.fill(),r.fillStyle=t,r.fillRect(8,28,624,6),r.font='600 52px "IBM Plex Sans Arabic", "Noto Naskh Arabic", Tahoma, sans-serif',r.fillStyle="#f4f7ff",r.direction=e?"rtl":"ltr",r.textAlign="center",r.textBaseline="middle",r.fillText(String(i).slice(0,42),320,86);const o=new Yu(s);o.colorSpace=At;const a=new Ze(new Us(n,n*.25),new si({map:o,transparent:!0,depthWrite:!1}));return a.userData.isLabel=!0,a}function By(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function wi(i,e,t,n,s=.22){const r=D(new Be(s,s,.14,24),Z({},"#222","rubber"),e,t,n);ln(r,0,0,Math.PI/2);const o=D(new Be(s*.45,s*.45,.16,16),xt("#cfd8dc",.8,.3),e,t,n);return ln(o,0,0,Math.PI/2),[r,o]}function ky(i,e,t,n,s=.45){const r=Z({},i,"rubber");return[D(new ke(s,22,16),r,e,t,n),D(new ke(s*.75,18,14),r,e+s*.55,t+s*.15,n),D(new ke(s*.7,18,14),r,e-s*.4,t+s*.05,n+s*.2)]}function il(i,e,t,n=.34,s="#43a047"){const r=D(new Be(.015,.02,n,8),Z({},"#2e7d32"),i,e+n/2,t),o=Z({},s,"rubber");return[r,D(new ke(.07,12,10),o,i,e+n,t),D(new ke(.045,10,8),o,i+.05,e+n*.7,t),D(new ke(.04,10,8),o,i-.04,e+n*.62,t+.03)]}function hd(i="#ff8a65"){const e=Ae("Fish"),t=D(new ke(.11,20,14),Z({},i));t.scale.set(1.7,.62,.48);const n=D(new Pt(.07,.14,4),Z({},i),-.2,0,0);ln(n,0,0,Math.PI/2);const s=D(new ke(.016,10,8),Z({},"#fff"),.12,.03,.04),r=D(new ke(.008,8,8),Z({},"#111"),.132,.03,.04);return e.add(t,n,s,r),e}function ud(i,e,t,n,s,r){const o=t/(e+.4),a=.1,c=new Rt({color:"#d7ecff",emissive:"#ffcc80",emissiveIntensity:.35,roughness:.15,metalness:.05}),l=new pe(o*.55,a,.03),h=i*e*2,u=new Co(l,c,h);u.castShadow=!1,u.receiveShadow=!1;const d=new yt;let f=0;for(let g=0;g<i;g++)for(let _=0;_<e;_++){const p=-t/2+o*.7+_*o,m=r+g*(n/i)+n/i*.55;d.position.set(p,m,s/2+.02),d.updateMatrix(),u.setMatrixAt(f++,d.matrix),d.position.set(p,m,-s/2-.02),d.rotation.y=Math.PI,d.updateMatrix(),u.setMatrixAt(f++,d.matrix),d.rotation.y=0}return u.count=f,u}function zy(i){if(i.variant==="dice"){const r=D(new Ft(.9,.9,.9,3,.08),Z(i,"#f5f5f5"));r.position.y=.45;const o=Z({},"#222"),a=[[0,.45,.46],[-.18,.62,.46],[.18,.28,.46]].map(([c,l,h])=>D(new ke(.06,12,10),o,c,l,h));return Ae("Dice",r,a)}const e=Z(i,i.variant==="crate"?"#a97142":"#5b8def",i.variant==="crate"?"wood":void 0),t=D(new Ft(1,1,1,3,.06),e,0,.5,0);if(i.variant!=="crate")return Ae("Cube",t);const n=Z({},"#6d4c41","wood"),s=[D(new pe(1.04,.08,.08),n,0,.2,.5),D(new pe(1.04,.08,.08),n,0,.8,.5),D(new pe(1.04,.08,.08),n,0,.2,-.5),D(new pe(1.04,.08,.08),n,0,.8,-.5)];return Ae("Crate",t,s)}function Hy(i){return Ae("Sphere",D(new ke(.55,48,32),Z(i,"#ff6b6b"),0,.55,0))}function Gy(i){if(i.variant==="barrel"){const e=Z(i,"#8d5a32","wood"),t=xt("#9aa4ad",.8,.35),n=D(new Be(.42,.42,1.05,32),e,0,.55,0);return Ae("Barrel",n,D(new Zt(.44,.035,8,30),t,0,.85,0),D(new Zt(.44,.035,8,30),t,0,.28,0))}return Ae("Cylinder",D(new Be(.42,.42,1.15,40),Z(i,"#38bdf8"),0,.58,0))}function Vy(i){return Ae("Cone",D(new Pt(.55,1.15,40),Z(i,"#fb923c"),0,.58,0))}function Wy(i){const e=D(new Zt(.48,.16,24,64),Z(i,"#a78bfa"));return ln(e,Math.PI/2,0,0),e.position.y=.2,Ae("Torus",e)}function Xy(i){const e=D(new Pt(.72,1.05,4),Z(i,"#e0b354",i.material||"stone"));return e.rotation.y=Math.PI/4,e.position.y=.52,Ae("Pyramid",e)}function qy(i){return Ae("Capsule",D(new Kt(.32,.7,8,24),Z(i,"#34d399"),0,.67,0))}function Yy(i){const e=new Shape;for(let s=0;s<10;s++){const r=s%2?.22:.55,o=s/10*Math.PI*2+Math.PI/2,a=Math.cos(o)*r,c=Math.sin(o)*r;s===0?e.moveTo(a,c):e.lineTo(a,c)}const t=new wr(e,{depth:.16,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2});t.center();const n=D(t,Z(i,"#facc15"));return n.position.y=.62,Ae("Star",n)}function jy(i){const e=new Shape;e.moveTo(0,.35),e.bezierCurveTo(0,.55,-.45,.55,-.45,.15),e.bezierCurveTo(-.45,-.15,0,-.25,0,-.55),e.bezierCurveTo(0,-.25,.45,-.15,.45,.15),e.bezierCurveTo(.45,.55,0,.55,0,.35);const t=new wr(e,{depth:.22,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:2});t.center();const n=D(t,Z(i,"#ef4444"));return n.position.y=.55,Ae("Heart",n)}function Ky(i){return sl({radius:.5,height:1.15,water:i.color||"#4fc3f7",dirty:!1,glass:i.material==="metal"?xt(i.color||"#90a4ae",.7,.35):ci("#e7f8ff")})}function sl({radius:i=.48,height:e=1.15,water:t="#4fc3f7",dirty:n=!1,glass:s}){const r=Ae("Tank"),o=D(new Be(i,i,e,48,1,!0),s||ci("#e7f8ff"),0,e/2+.08,0);o.material.side=Ot;const a=D(new Be(i*1.05,i*1.08,.08,32),xt("#546e7a",.7,.4),0,.04,0),c=e*(n?.78:.7),l=D(new Be(i*.9,i*.9,c,36),Ci(t,n),0,.1+c/2,0);l.userData.baseY=l.position.y,l.userData.tick=u=>{l.position.y=l.userData.baseY+Math.sin(u*1.7)*.012};const h=D(new Zt(i,.028,10,40),xt("#b0bec5",.75,.3),0,e+.08,0);if(ln(h,Math.PI/2,0,0),r.add(a,o,l,h),n){const u=Z({},"#5d4037","rubber");for(let d=0;d<8;d++){const f=d/8*Math.PI*2;r.add(D(new ke(.03,8,8),u,Math.cos(f)*i*.45,.25+d%3*.18,Math.sin(f)*i*.45))}}return r.userData.top=e+.08,r.userData.radius=i,r.userData.inlet=new T(i,e*.62,0),r.userData.outlet=new T(-i,e*.9,0),r}function $y(i){const e=Z(i,"#cfd8dc",i.material||"metal"),t=new $c([new T(-.8,.2,0),new T(-.3,.2,0),new T(0,.55,0),new T(.35,.95,0),new T(.85,.95,0)]),n=new Ze(new Do(t,60,.07,16,!1),e);n.castShadow=!0;const s=xt("#90a4ae",.8,.3);return Ae("Pipe",n,ln(D(new Be(.12,.12,.05,20),s,-.8,.2,0),0,0,Math.PI/2),ln(D(new Be(.12,.12,.05,20),s,.85,.95,0),0,0,Math.PI/2))}function rl(i){const e=Z(i,"#1e88e5",i.material||"metal"),t=Ae("Pump");t.add(D(new Ft(.55,.28,.4,3,.04),xt("#37474f"),0,.14,0));const n=D(new Be(.16,.16,.42,24),e,0,.36,0);ln(n,0,0,Math.PI/2),t.add(n);const s=D(new pe(.08,.16,.08),nn("#7ee0ff"),0,.5,.12);return s.name="PumpLamp",t.add(s),t.userData.inlet=new T(-.28,.36,0),t.userData.outlet=new T(.28,.36,0),t}function Zy(i){const e=Z(i,"#f4ead7"),t=Z({},"#b5442f","stone"),n=Z({},"#6b4226","wood");ci("#c8ecff");const s=D(new Ft(1.55,.95,1.25,3,.04),e,0,.5,0),r=new Shape([new ie(-.95,0),new ie(0,.62),new ie(.95,0)]),o=new wr(r,{depth:1.45,bevelEnabled:!1}),a=new Ze(o,t);a.position.set(0,.98,-.72),a.castShadow=!0;const c=D(new pe(.32,.52,.05),n,0,.3,.64),l=D(new ke(.03,10,8),xt("#d4af37",1,.25),.1,.3,.68),h=new Rt({color:"#b9e6ff",emissive:"#ffd59a",emissiveIntensity:.25,roughness:.12});return Ae("House",s,a,c,l,D(new pe(.32,.28,.05),h,-.48,.58,.64),D(new pe(.32,.28,.05),h,.48,.58,.64),D(new pe(.18,.4,.18),Z({},"#8d6e63","stone"),.48,1.35,-.15),D(new pe(.55,.06,.28),Z({},"#9e9e9e","stone"),0,.04,.78))}function Jy(i){const e=Z(i,"#a97142",i.material||"wood"),t=D(new Ft(1.55,.08,.9,2,.02),e,0,.78,0),n=[[-.68,-.36],[.68,-.36],[-.68,.36],[.68,.36]].map(([s,r])=>D(new pe(.08,.74,.08),e,s,.37,r));return Ae("Table",t,n)}function Qy(i){const e=Z(i,"#8d5a3b",i.material||"wood");return Ae("Chair",D(new Ft(.48,.06,.48,2,.02),e,0,.48,0),D(new Ft(.48,.5,.06,2,.02),e,0,.75,-.21),...[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]].map(([t,n])=>D(new Be(.025,.025,.48,10),e,t,.24,n)))}function ev(i){const e=Z(i,"#5c6d92",i.material||"fabric"),t=Z({},"#4e342e","wood");return Ae("Sofa",D(new Ft(1.8,.38,.78,3,.06),e,0,.32,0),D(new Ft(1.8,.5,.2,3,.05),e,0,.62,-.28),D(new Ft(.2,.42,.78,3,.05),e,-.85,.46,0),D(new Ft(.2,.42,.78,3,.05),e,.85,.46,0),D(new Be(.04,.04,.12,10),t,-.75,.06,.28),D(new Be(.04,.04,.12,10),t,.75,.06,.28))}function tv(i){const e=Z({},"#8d6e63","wood"),t=Z(i,"#f7f7f7",i.material||"fabric");return Ae("Bed",D(new pe(1.3,.28,2),e,0,.2,0),D(new pe(1.3,.7,.08),e,0,.55,-.96),D(new Ft(1.15,.18,1.75,2,.04),t,0,.42,.04),D(new pe(.35,.1,.22),Z({},"#ffffff"),-.3,.56,-.7),D(new pe(.35,.1,.22),Z({},"#ffffff"),.3,.56,-.7))}function nv(i){const e=Z(i,"#e53935"),t=ci("#d7f1ff"),n=Ae("Car");return n.add(D(new Ft(1.9,.38,.86,3,.08),e,0,.42,0)),n.add(D(new Ft(1.05,.36,.78,3,.08),e,-.05,.74,0)),n.add(D(new pe(.85,.22,.8),t,-.05,.78,0)),n.add(D(new ke(.05,12,10),nn("#fff6cc"),.9,.42,.28)),n.add(D(new ke(.05,12,10),nn("#fff6cc"),.9,.42,-.28)),n.add(D(new ke(.04,10,8),nn("#ff5555"),-.92,.42,.28)),n.add(D(new ke(.04,10,8),nn("#ff5555"),-.92,.42,-.28)),n.add(...[wi(null,.62,.22,.42),wi(null,-.62,.22,.42),wi(null,.62,.22,-.42),wi(null,-.62,.22,-.42)].flat()),n}function iv(i){const e=Z(i,"#fdd835"),t=Ae("Bus");return t.add(D(new Ft(2.4,.85,.9,3,.06),e,0,.7,0)),t.add(ud(1,5,2.1,.85,.9,.35)),t.add(...[wi(null,.75,.24,.42,.24),wi(null,-.75,.24,.42,.24),wi(null,.75,.24,-.42,.24),wi(null,-.75,.24,-.42,.24)].flat()),t}function sv(i){const e=Z(i,"#42a5f5",i.material||"metal"),t=Ae("Bicycle"),n=D(new Zt(.32,.035,10,28),Z({},"#222","rubber"),-.55,.32,0),s=n.clone();return s.position.x=.55,t.add(n,s),t.add(_s(new T(-.55,.32,0),new T(0,.32,0),.02,e)),t.add(_s(new T(0,.32,0),new T(.55,.32,0),.02,e)),t.add(_s(new T(0,.32,0),new T(-.15,.7,0),.02,e)),t.add(_s(new T(.35,.32,0),new T(.15,.62,0),.02,e)),t.add(D(new pe(.12,.04,.1),Z({},"#333","rubber"),-.12,.74,0)),t.add(D(new Be(.02,.02,.28,8),e,.5,.5,0)),t}function rv(i){const e=Ae("Tree"),t=D(new Be(.08,.12,.7,12),Z({},"#6d4c41","wood"),0,.35,0);if(e.add(t),i.variant==="palm"){e.add(D(new Be(.07,.09,1.3,10),Z({},"#8d6e63","wood"),0,.7,0));const n=Z(i,"#2e7d32","rubber");for(let s=0;s<6;s++){const r=s/6*Math.PI*2,o=D(new pe(.55,.03,.12),n,Math.cos(r)*.28,1.35,Math.sin(r)*.28);o.rotation.y=-r,o.rotation.z=.5,e.add(o)}return e}if(i.variant==="pine"){const n=Z(i,"#2e7d32","rubber");return e.add(D(new Pt(.48,.7,12),n,0,.95,0)),e.add(D(new Pt(.36,.55,12),n,0,1.35,0)),e}return e.add(...ky(i.color||"#43a047",0,1.05,0,.42)),e}function ov(i){const e=Z(i,"#cfd8dc",i.material||"metal"),t=nn(i.glow&&i.color||"#7ef9ff"),n=Ae("Robot");return n.add(D(new Ft(.7,.8,.4,3,.06),e,0,.85,0)),n.add(D(new Ft(.46,.36,.38,3,.05),e,0,1.45,0)),n.add(D(new ke(.06,12,10),t,-.1,1.48,.18)),n.add(D(new ke(.06,12,10),t,.1,1.48,.18)),n.add(D(new Be(.02,.02,.18,8),e,0,1.72,0)),n.add(D(new ke(.04,10,8),t,0,1.84,0)),n.add(D(new Kt(.07,.4,4,10),e,-.48,.85,0)),n.add(D(new Kt(.07,.4,4,10),e,.48,.85,0)),n.add(D(new Kt(.09,.35,4,10),e,-.18,.32,0)),n.add(D(new Kt(.09,.35,4,10),e,.18,.32,0)),n}function av(i){const e=Math.max(1,i.floors||(i.variant==="skyscraper"?22:i.variant==="tower"?12:8)),t=i.variant==="tower"?.72:i.variant==="skyscraper"?1.2:1.05,n=i.variant==="tower"?.72:.86,s=i.variant==="skyscraper"?.22:.26,r=e*s,o=Z(i,i.variant==="skyscraper"?"#c5d0dc":"#7f93b5",i.material||"stone"),a=Ae("Building");return a.add(D(new pe(t,r,n),o,0,r/2,0)),a.add(ud(e,i.variant==="tower"?2:4,t,r,n,0)),a.add(D(new pe(t*.22,s*.7,.04),Z({},"#4e342e","wood"),0,s*.4,n/2+.02)),i.variant==="tower"||i.variant==="skyscraper"?(a.add(D(new Be(.03,.03,.45,8),xt("#eceff1"),0,r+.22,0)),a.add(D(new ke(.05,10,8),nn("#ff5252"),0,r+.48,0))):a.add(D(new pe(t+.08,.06,n+.08),Z({},"#546e7a","stone"),0,r+.03,0)),a}function cv(i){const e=Z(i,"#b0bec5","metal"),t=Z(i,"#f5e6c8",i.material||"fabric"),n=Ae("Lamp");n.add(D(new Be(.16,.2,.06,20),e,0,.03,0)),n.add(D(new Be(.025,.025,.7,10),e,0,.4,0)),n.add(D(new Pt(.22,.2,24,1,!0),t,0,.78,0));const s=D(new ke(.06,16,12),nn("#fff4cc"),0,.75,0);return n.add(s),n}function lv(i){const e=Z(i,"#eceff1",i.material||"metal"),t=Ae("Rocket");t.add(D(new Be(.22,.22,1.1,28),e,0,.7,0)),t.add(D(new Pt(.22,.4,28),Z(i,"#e53935"),0,1.45,0));for(const r of[-.16,.16]){const o=D(new pe(.28,.22,.04),Z({},"#e53935"),0,.28,r);t.add(o)}const n=D(new pe(.04,.22,.28),Z({},"#e53935"),0,.28,0);t.add(n),t.add(D(new ke(.07,16,12),ci("#9ad7ff"),0,.95,.18));const s=D(new Pt(.1,.28,16),nn("#ffb74d"),0,.05,0);return s.rotation.x=Math.PI,s.userData.tick=r=>{s.scale.setScalar(.85+Math.sin(r*18)*.12)},t.add(s),t}function hv(i){const e=Z(i,"#eceff1",i.material||"metal"),t=Ae("Airplane"),n=D(new Kt(.16,1.15,6,16),e,0,.55,0);return n.rotation.z=Math.PI/2,t.add(n),t.add(D(new pe(1.5,.04,.28),e,.05,.55,0)),t.add(D(new pe(.35,.04,.22),e,-.55,.7,0)),t.add(D(new pe(.04,.22,.22),e,-.7,.66,0)),t.add(D(new Be(.07,.08,.2,16),xt("#90a4ae"),.28,.42,.18)),t.add(D(new Be(.07,.08,.2,16),xt("#90a4ae"),.28,.42,-.18)),t}function uv(i){const e=Z(i,"#1565c0"),t=Ae("Boat"),n=D(new ke(.55,28,16),e,0,.32,0);n.scale.set(1.8,.55,.75),t.add(n),t.add(D(new pe(.45,.28,.32),Z({},"#ffffff"),.15,.55,0)),t.add(D(new Be(.02,.02,.9,8),Z({},"#6d4c41","wood"),-.15,.9,0));const s=D(new pe(.02,.55,.38),Z({},"#fafafa","fabric"),-.05,.95,0);return t.add(s),t}function dv(i){const e=Z(i,"#f5f5f5",i.material||"ceramic"),t=Ae("Cup"),n=D(new Be(.22,.18,.42,28,1,!0),e,0,.24,0);n.material.side=Ot,t.add(n);const s=D(new br(.18,24),e,0,.04,0);s.rotation.x=-Math.PI/2,t.add(s);const r=D(new Zt(.1,.025,8,18),e,0,.26,0);return r.position.x=.24,t.add(r),t}function fv(i){const e=[],t=[[0,0],[.16,0],[.18,.08],[.18,.55],[.1,.68],[.07,.95],[.08,1.02],[0,1.02]];for(const[s,r]of t)e.push(new ie(s,r));const n=new Po(e,28);return Ae("Bottle",D(n,Z(i,"#7e57c2",i.material||"glass")))}function pv(i){const e=Ae("Flower");e.add(D(new Be(.015,.02,.55,8),Z({},"#2e7d32"),0,.28,0));const t=Z(i,"#ec407a");for(let n=0;n<6;n++){const s=n/6*Math.PI*2;e.add(D(new ke(.09,12,10),t,Math.cos(s)*.1,.58,Math.sin(s)*.1))}return e.add(D(new ke(.06,12,10),Z({},"#fdd835"),0,.6,0)),e}function mv(i){const e=Ae("Planet");let t=i.color||"#42a5f5";if(i.variant==="saturn"&&(t=i.color||"#e6c07b"),i.variant==="moon"&&(t=i.color||"#d7d2c8"),i.variant==="earth"&&(t=i.color||"#1e88e5"),e.add(D(new ke(.55,40,28),Z({...i,color:t},t,i.material||"stone"),0,.6,0)),i.variant==="earth"&&e.add(D(new ke(.16,14,10),Z({},"#43a047","rubber"),.22,.78,.32)),i.variant==="saturn"){const n=D(new Zt(.86,.05,8,70),Z({},"#f3e2b3","stone"),0,.6,0);ln(n,Math.PI/2.5,.2,0),e.add(n)}return e}function gv(i){const e=Z(i,"#b0bec5",i.material||"stone"),t=Ae("Bridge"),n=D(new pe(2.4,.08,.55),e,0,.55,0);t.add(n),t.add(D(new pe(.12,.7,.55),e,-1,.35,0)),t.add(D(new pe(.12,.7,.55),e,1,.35,0));const s=D(new Zt(.7,.045,8,30,Math.PI),e,0,.45,0);ln(s,0,0,Math.PI),t.add(s);for(const r of[-.7,.7])t.add(_s(new T(r,.95,0),new T(r*.3,.6,0),.012,xt("#90a4ae")));return t.add(D(new pe(.08,.45,.08),e,-1.05,.95,0)),t.add(D(new pe(.08,.45,.08),e,1.05,.95,0)),t.add(_s(new T(-1.05,1.15,0),new T(1.05,1.15,0),.02,Z(i,"#e53935"))),t}function _v(i){const e=Z(i,"#8d8f86",i.material||"stone"),t=Z({},"#f7f7f7"),n=Ae("Mountain");return n.add(D(new Pt(1.1,1.5,6),e,0,.75,0)),n.add(D(new Pt(.38,.4,6),t,0,1.4,0)),n.add(D(new Pt(.55,.8,5),e,.7,.4,.2)),n}function xv(i){const e=Z(i,"#f7fbff"),t=Ae("Snowman");t.add(D(new ke(.38,24,18),e,0,.38,0)),t.add(D(new ke(.28,24,18),e,0,.92,0)),t.add(D(new ke(.2,24,16),e,0,1.32,0)),t.add(D(new Be(.16,.18,.08,16),Z({},"#212121"),0,1.52,0)),t.add(D(new Be(.22,.22,.28,16),Z({},"#212121"),0,1.68,0));const n=D(new Pt(.03,.16,8),Z({},"#fb8c00"),0,1.32,.18);return n.rotation.x=Math.PI/2,t.add(n),t.add(D(new ke(.025,8,8),Z({},"#212121"),-.06,1.38,.16)),t.add(D(new ke(.025,8,8),Z({},"#212121"),.06,1.38,.16)),t}function yv(i){const e=xt(i.color||"#cfd8dc",.75,.3),t=ci("#e5f8ff"),n=Ae("Greenhouse");n.add(D(new pe(1.6,.06,1),Z({},"#6d4c41","wood"),0,.03,0)),n.add(D(new pe(1.5,.7,.02),t,0,.45,.45)),n.add(D(new pe(1.5,.7,.02),t,0,.45,-.45)),n.add(D(new pe(.02,.7,.9),t,.75,.45,0)),n.add(D(new pe(.02,.7,.9),t,-.75,.45,0));const s=D(new pe(1.55,.02,.55),t,0,.95,.22);s.rotation.x=.45;const r=s.clone();r.position.z=-.22,r.rotation.x=-.45,n.add(s,r),n.add(D(new pe(1.55,.04,.04),e,0,.8,0));for(let o=0;o<4;o++)n.add(...il(-.45+o*.3,.06,0,.28));return n}function vv(i){const e=Z(i,"#b0bec5",i.material||"stone"),t=Ae("Fountain");t.add(D(new Be(.7,.78,.22,32),e,0,.11,0)),t.add(D(new Be(.55,.55,.12,28),Ci("#4fc3f7"),0,.2,0)),t.add(D(new Be(.08,.1,.45,16),e,0,.4,0));const n=D(new Be(.02,.04,.35,8),Ci("#b3e5fc"),0,.75,0);return n.userData.tick=s=>{n.scale.y=.8+Math.sin(s*4)*.15},t.add(n),t}function Mv(i){const e=Z(i,"#9e9e9e",i.material||"stone"),t=Ae("Castle");t.add(D(new pe(1.5,.7,1.1),e,0,.35,0));for(const[n,s]of[[-.7,-.5],[.7,-.5],[-.7,.5],[.7,.5]])t.add(D(new Be(.18,.2,1.15,12),e,n,.55,s)),t.add(D(new Pt(.24,.28,12),Z(i,"#b5442f"),n,1.2,s));return t.add(D(new pe(.28,.4,.06),Z({},"#5d4037","wood"),0,.22,.56)),t}function Sv(i){const e=Z(i,"#efe6d2",i.material||"stone"),t=Ae("Windmill");t.add(D(new Be(.28,.4,1.3,8),e,0,.65,0)),t.add(D(new Pt(.34,.35,8),Z({},"#8d6e63","wood"),0,1.4,0));const n=new mn;n.position.set(0,1.15,.28);const s=Z({},"#f5f5f5");for(let r=0;r<4;r++){const o=new mn;o.rotation.z=r*Math.PI/2,o.add(D(new pe(.08,.65,.03),s,0,.38,0)),n.add(o)}return n.userData.tick=r=>{n.rotation.z=r*.8},t.add(n),hub,t}function bv(i){const e=Z(i,"#a1887f",i.material||"wood"),t=xt("#546e7a");return Ae("Bench",D(new pe(1.3,.06,.4),e,0,.45,0),D(new pe(1.3,.4,.06),e,0,.7,-.17),D(new pe(.06,.45,.36),t,-.55,.22,0),D(new pe(.06,.45,.36),t,.55,.22,0))}function wv(i){const e=Ae("SolarPanel"),t=D(new pe(1.1,.05,.6),new Rt({color:i.color||"#1565c0",emissive:"#0d47a1",emissiveIntensity:.25,metalness:.4,roughness:.3}));return t.position.set(0,.7,0),t.rotation.x=-.6,e.add(t),e.add(D(new pe(.06,.55,.06),xt("#cfd8dc"),0,.28,0)),e.add(D(new pe(.4,.04,.25),xt("#90a4ae"),0,.04,0)),e}function Tv(i){const e=Z(i,"#bcaaa4",i.material||"wood"),t=Ae("Fence");for(let n=0;n<5;n++)t.add(D(new pe(.08,.7,.08),e,-.8+n*.4,.35,0));return t.add(D(new pe(1.7,.06,.04),e,0,.55,0)),t.add(D(new pe(1.7,.06,.04),e,0,.25,0)),t}function Ev(i){const e=Z(i,"#bdbdbd",i.material||"stone"),t=Ae("Stairs");for(let n=0;n<6;n++)t.add(D(new pe(.8,.1,.28),e,0,.05+n*.1,-.7+n*.26));return t}function Av(i){const e=Z(i,"#9e9e9e",i.material||"stone"),t=Ae("Well"),n=D(new Be(.4,.42,.55,24,1,!0),e,0,.32,0);n.material.side=Ot,t.add(n);const s=D(new br(.36,20),Ci("#4fc3f7"),0,.2,0);s.rotation.x=-Math.PI/2,t.add(s),t.add(D(new pe(.06,.7,.06),Z({},"#6d4c41","wood"),-.28,.75,0)),t.add(D(new pe(.06,.7,.06),Z({},"#6d4c41","wood"),.28,.75,0));const r=D(new Pt(.4,.28,4),Z({},"#b5442f"),0,1.2,0);return r.rotation.y=Math.PI/4,t.add(r),t}function Rv(i){const e=Z(i,"#f7fbff");return Ae("Cloud",D(new ke(.32,18,14),e,0,.55,0),D(new ke(.24,16,12),e,.28,.5,0),D(new ke(.22,16,12),e,-.26,.48,.05),D(new ke(.18,14,10),e,.08,.68,-.05))}function Cv(i){const e=Ae("Sun"),t=D(new ke(.45,32,24),nn(i.color||"#ffd54f"),0,.55,0);e.add(t);const n=D(new Zt(.62,.03,8,40),nn("#ffe082"),0,.55,0);return e.add(n),t.userData.tick=s=>{n.rotation.x=s*.4,n.rotation.y=s*.3},e}function Pv(i){const e=Z(i,"#43a047","rubber"),t=Ae("Cactus");return t.add(D(new Kt(.12,.7,6,12),e,0,.5,0)),t.add(ln(D(new Kt(.07,.28,4,10),e,.2,.55,0),0,0,Math.PI/2)),t.add(ln(D(new Kt(.06,.22,4,10),e,-.18,.4,0),0,0,Math.PI/2)),t}function Lv(i){return Ae("Mushroom",D(new Be(.06,.08,.35,12),Z({},"#efebe9"),0,.18,0),D(new ke(.22,20,12,0,Math.PI*2,0,Math.PI/2),Z(i,"#e53935"),0,.34,0))}function Iv(i){const e=hd(i.color||"#ff8a65");return e.position.y=.2,e.userData.tick=t=>{e.position.y=.25+Math.sin(t*2)*.05,e.rotation.y=Math.sin(t)*.4},e}function Dv(i){return Ae("Plant",...il(0,0,0,.45,i.color||"#43a047"))}function dd(i){const e=Ae("GrowBed");e.add(D(new pe(1.2,.16,.55),Z({},"#6d4c41","wood"),0,.2,0)),e.add(D(new pe(1.1,.06,.46),yr("pebbles"),0,.28,0));const t=5;for(let n=0;n<t;n++)e.add(...il(-.4+n*.2,.3,0,.28,i.color||"#43a047"));return e}function Nv(i){const e=Z(i,"#5c6bc0",i.material||"fabric"),t=Z({},"#f1c27d");return Ae("Person",D(new Kt(.16,.45,4,12),e,0,.55,0),D(new ke(.16,18,14),t,0,1.05,0),D(new Kt(.05,.28,3,8),e,-.24,.6,0),D(new Kt(.05,.28,3,8),e,.24,.6,0),D(new Kt(.06,.35,3,8),Z({},"#37474f"),-.08,.22,0),D(new Kt(.06,.35,3,8),Z({},"#37474f"),.08,.22,0))}function Uv(i){const e=Z(i,"#90a4ae",i.material||"metal"),t=Ae("Gear"),n=D(new Be(.32,.32,.08,24),e,0,.2,0);t.add(n),t.add(D(new Be(.08,.08,.1,16),xt("#eceff1"),0,.2,0));for(let s=0;s<8;s++){const r=s/8*Math.PI*2,o=D(new pe(.1,.1,.1),e,Math.cos(r)*.38,.2,Math.sin(r)*.38);t.add(o)}return t}function Ov(i){const e=Z(i,"#d4af37","metal"),t=Ae("Crown");t.add(D(new Be(.28,.32,.16,8),e,0,.16,0));for(let n=0;n<5;n++){const s=n/5*Math.PI*2;t.add(D(new Pt(.06,.18,6),e,Math.cos(s)*.24,.32,Math.sin(s)*.24))}return t.add(D(new ke(.05,10,8),nn("#ef5350"),0,.28,.26)),t}function Fv(i){const e=Ae("Umbrella");e.add(D(new Be(.02,.02,.9,8),Z({},"#6d4c41","wood"),0,.45,0));const t=D(new Pt(.45,.22,18,1,!0),Z(i,"#e53935"),0,.9,0);return t.material.side=Ot,e.add(t),e}function Bv(i){const e=Z(i,"#5c6bc0"),t=Ae("Book");return t.add(D(new pe(.55,.08,.4),e,0,.06,0)),t.add(D(new pe(.5,.05,.36),Z({},"#fff8e1"),0,.1,0)),t}function fd(i){const e=Oy(i.seed||1),t=Ae("Abstract"),n=[()=>new ke(.35,24,16),()=>new pe(.55,.55,.55),()=>new Zt(.28,.1,12,24),()=>new Pt(.3,.6,4)];for(let s=0;s<4;s++){const r=n[s%n.length](),o=D(r,Z({...i,color:i.color},s%2?"#7c4dff":"#26c6da"));o.position.set((e()-.5)*.8,.35+e()*.7,(e()-.5)*.8),o.rotation.set(e(),e(),e()),t.add(o)}return t}function kv(i,e){const t=e.lang||i.lang||"en",n=e.tr||(te=>te),s=i.filtration.layers,r=i.filtration.tanks,o=Ae("FiltrationSystem"),a=Math.floor(r/2),c=r-a,l=2.05,h=[];for(let te=0;te<a;te++)h.push({kind:"tank",role:te===0?"dirty":"settle"});h.push({kind:"filter"});for(let te=0;te<c;te++)h.push({kind:"tank",role:te===c-1?"clean":"storage"});const u=Math.max((h.length-1)*l,0);h.forEach((te,Me)=>{te.x=-u/2+Me*l}),h.forEach(te=>{if(te.kind==="filter"){const Me=nl({layers:s,lang:t,radius:.5,cutaway:i.filtration.cutaway!==!1,tr:n,layerLabel:e.layer,labelX:-u/2-1.28});Me.position.x=te.x,o.add(Me),te.ref=Me}else{const Me=te.role==="dirty"||te.role==="settle",je=te.role==="clean",z=sl({radius:je?.58:.48,height:je?1.5:1.28,water:Me?"#8d6e63":"#4fc3f7",dirty:Me});z.position.x=te.x,o.add(z);const Q=te.role==="dirty"?"dirtyTank":te.role==="clean"?"cleanTank":te.role==="settle"?"settleTank":"storageTank",ue=Ai(n(Q),{rtl:t==="ar",accent:Me?"#d7ccc8":"#81d4fa",width:je?1.05:.92});ue.position.set(te.x,(z.userData.top||1.3)+.28,.55),o.add(ue),te.ref=z}});const d=h.find(te=>te.kind==="filter"),f=h.indexOf(d),g=d.x,_=d.ref.userData;for(let te=0;te<h.length-1;te++){if(te===f||te+1===f)continue;const Me=h[te],je=h[te+1],z=Me.role==="dirty"||Me.role==="settle",Q=new T(Me.x+Me.ref.userData.radius*.85,(Me.ref.userData.top||1)*.68,0),ue=new T(je.x-je.ref.userData.radius*.85,(je.ref.userData.top||1)*.6,0),re=Math.max(Q.y,ue.y)+.24;Hi(o,[Q,new T(Q.x,re,0),new T(ue.x,re,0),ue],4,{color:z?"#a1887f":"#4fc3f7",speed:.16,tubeRadius:.04,arrowColor:z?"#bcaaa4":"#81d4fa"})}const p=_.fallTop.clone();p.x+=g;const m=_.fallBottom.clone();m.x+=g;const v=_.wasteJoin.clone();v.x+=g;const y=h[f-1],x=rl({color:"#1e88e5",material:"metal"}),P=y?(y.x+g)*.5:g-.95;x.position.set(P,0,.82),x.scale.setScalar(.9),o.add(x);const E=Ai(n("pump"),{rtl:t==="ar",width:.72});E.position.set(P,.98,.82),o.add(E);const A=x.getObjectByName("PumpLamp");A&&(x.userData.flowTick=(te,Me)=>{A.material.emissiveIntensity=Me?.35+Math.sin(te*7)*.5:.7});const C=(_.top||p.y)+.14,b=y?new T(y.x+y.ref.userData.radius*.75,(y.ref.userData.top||1.2)*.58,.08):new T(P-.2,.72,.82);Hi(o,[b,new T(P-.24,.42,.82),new T(P+.24,.42,.82),new T(P+.24,C,.42),new T(p.x,C,p.z),p],6,{color:"#e08a3c",speed:.13,radius:.046,tubeRadius:.04,arrowColor:"#e0b080"});const M=p.clone().lerp(m,.5);M.x+=.012,Hi(o,[p,M,m],9,{color:"#d06a28",colorTo:"#7ee7ff",tube:!1,speed:.095,radius:.062,arrows:5,arrowColor:"#cfd8dc",arrowLength:.1});const L=_y();L.position.set(g+_.wasteBin.x,0,_.wasteBin.z),o.add(L);const k=Ai(n("wasteBin"),{rtl:t==="ar",accent:"#bcaaa4",width:1.02});k.position.set(L.position.x,L.userData.top+.34,L.position.z),o.add(k);const F=new T(v.x,v.y,v.z+.55),X=new T(L.position.x,L.userData.top-.03,L.position.z);Hi(o,[v,F,new T(L.position.x,v.y+.08,L.position.z+.08),new T(L.position.x,L.userData.top+.14,L.position.z),X],5,{color:"#c4622d",speed:.17,radius:.05,tubeRadius:.03,arrowColor:"#e09a6a"});const V=new T(L.position.x,.2,L.position.z);Hi(o,[V.clone().add(new T(.07,0,0)),V.clone().add(new T(0,.03,.07)),V.clone().add(new T(-.07,.01,0)),V.clone().add(new T(0,0,-.06))],3,{color:"#a15a32",tube:!1,arrows:0,speed:.3,radius:.034});const W=h[f+1],K=_.outlet.clone();K.x+=g;const q=W?new T(W.x,(W.ref.userData.top||1.3)+.02,.02):new T(g+1.25,1.15,0),le=W?new T(W.x,(W.ref.userData.top||1.3)*.58,.02):new T(q.x,.7,0);Hi(o,[m,K,new T(K.x+.28,q.y,.06),q,le],6,{color:"#4fc3f7",speed:.15,radius:.04,tubeRadius:.04,arrowColor:"#81d4fa"});const de=u+2.8;return o.add(D(new Ft(Math.max(de,3.2),.08,2.55,3,.02),xt("#263238",.5,.55),0,.02,.32)),o.rotation.y=.62,o}function zv(i,e){const t=e.lang||"en",n=e.tr||(d=>d),s=Ae("Aquaponics"),r=sl({radius:.7,height:.85,water:"#4fc3f7",dirty:!1});r.scale.set(1.15,.85,1),r.position.set(-.85,0,0),s.add(r);const o=i.aquaponics.fish||3;for(let d=0;d<o;d++){const f=hd(["#ff8a65","#ffd54f","#80cbc4","#ef9a9a"][d%4]);f.position.set(-.85,.35,0),f.userData.phase=d,f.userData.tick=g=>{const _=g*.7+d*1.3;f.position.set(-.85+Math.cos(_)*.28,.32+Math.sin(g*2+d)*.05,Math.sin(_)*.22),f.rotation.y=-_+Math.PI/2},s.add(f)}const a=Ai(n("fishTank"),{rtl:t==="ar",accent:"#81d4fa",width:1});a.position.set(-.85,1.25,0),s.add(a);const c=dd({color:"#43a047"});c.position.set(.95,.85,0),s.add(c),s.add(D(new pe(.08,.85,.08),Z({},"#6d4c41","wood"),.6,.42,.2)),s.add(D(new pe(.08,.85,.08),Z({},"#6d4c41","wood"),1.3,.42,.2)),s.add(D(new pe(.08,.85,.08),Z({},"#6d4c41","wood"),.6,.42,-.2)),s.add(D(new pe(.08,.85,.08),Z({},"#6d4c41","wood"),1.3,.42,-.2));const l=Ai(n("growBed"),{rtl:t==="ar",accent:"#a5d6a7",width:.95});if(l.position.set(.95,1.55,0),s.add(l),i.aquaponics.withFilter!==!1){const d=nl({layers:i.aquaponics.layers,lang:t,radius:.28,cutaway:!0,tr:n,layerLabel:e.layer});d.scale.setScalar(.75),d.position.set(.15,0,.85),s.add(d)}const h=rl({material:"metal",color:"#1e88e5"});h.position.set(-.1,0,-.85),h.scale.setScalar(.8),s.add(h),Hi(s,[new T(-.2,.7,0),new T(-.2,1.15,0),new T(.95,1.15,0),new T(.95,1.02,0)],3);const u=Ai(n("aquaponicsTitle"),{rtl:t==="ar",accent:"#80cbc4",width:1.5});return u.position.set(0,1.95,0),s.add(u),s.add(D(new Ft(3.2,.08,2.2,2,.02),xt("#263238",.45,.6),.1,.02,0)),s}const Hv={cube:zy,sphere:Hy,cylinder:Gy,cone:Vy,torus:Wy,pyramid:Xy,capsule:qy,star:Yy,heart:jy,tank:Ky,pipe:$y,pump:rl,filter:(i,e)=>nl({layers:["sponge","sand","charcoal","gravel","coarseGravel"],lang:e.lang,cutaway:!0,tr:e.tr,layerLabel:e.layer}),house:Zy,table:Jy,chair:Qy,sofa:ev,bed:tv,car:nv,bus:iv,bicycle:sv,tree:rv,robot:ov,building:av,lamp:cv,rocket:lv,airplane:hv,boat:uv,cup:dv,bottle:fv,flower:pv,planet:mv,bridge:gv,mountain:_v,snowman:xv,greenhouse:yv,fountain:vv,castle:Mv,windmill:Sv,bench:bv,solar:wv,fence:Tv,stairs:Ev,well:Av,cloud:Rv,sun:Cv,cactus:Pv,mushroom:Lv,fish:Iv,plant:Dv,planter:dd,person:Nv,gear:Uv,crown:Ov,umbrella:Fv,book:Bv,abstract:fd};function Yh(i,e={}){const n=(Hv[i.type]||fd)(i,e);return n.userData.kind=i.type,n}function Gv(i){i.updateMatrixWorld(!0);const t=new cn().setFromObject(i).getSize(new T);return{w:Math.max(t.x,.25),h:Math.max(t.y,.25),d:Math.max(t.z,.25)}}function Vv(i,e){if(!i?.length)return null;const t=i.map((l,h)=>{const u=Math.max(1,l.count||1);return Array.from({length:u},(d,f)=>{let g;try{g=Yh({...l,count:1},e)}catch(p){console.error(p),g=Yh({...l,type:"abstract",count:1},e)}g.scale.set((l.sx||1)*(l.scale||1),(l.sy||1)*(l.scale||1),l.scale||1);const _=Gv(g);return{spec:l,source:h,copy:f,group:g,..._,placed:!1}})}).flat(),n=new Map;t.forEach((l,h)=>{n.has(l.source)||n.set(l.source,h)});const s=new Set;t.forEach((l,h)=>{const u=l.spec.slot==="on"||l.spec.slot==="under"?l.spec.on:l.spec.anchor;u!=null&&u!==l.source&&n.has(u)&&s.add(h)});let r=0;for(let l=0;l<t.length;){if(s.has(l)){l+=1;continue}const h=t[l].source;let u=0,d=l;for(;d<t.length&&!s.has(d)&&t[d].source===h;){const f=t[d];f.group.position.set(r+u+f.w/2,0,0),f.placed=!0,u+=f.w+.22,d+=1}r+=Math.max(u-.22,0)+.6,l=Math.max(d,l+1)}const o=t.filter((l,h)=>s.has(h));let a=0;for(;o.length&&a++<10;)for(let l=o.length-1;l>=0;l--){const h=o[l],u=h.spec.slot||"on",d=u==="on"||u==="under"?h.spec.on:h.spec.anchor,f=t[n.get(d)];if(!f?.placed)continue;const g=t.filter(x=>{const P=x.spec.slot||"on";return(P==="on"||P==="under"?x.spec.on:x.spec.anchor)===d&&P===u}),p=Math.max(0,g.indexOf(h))-(g.length-1)/2,m=f.group.position.x,v=f.group.position.y,y=f.group.position.z;u==="on"?h.group.position.set(m+p*(h.w+.08),v+f.h,y):u==="under"?h.group.position.set(m+p*.25,v,y):u==="left"?h.group.position.set(m-f.w/2-h.w/2-.32+p*(h.w+.12),v,y):u==="behind"?h.group.position.set(m,v,y-f.d/2-h.d/2-.28+p*.2):u==="front"?h.group.position.set(m,v,y+f.d/2+h.d/2+.28+p*.2):h.group.position.set(m+f.w/2+h.w/2+.32+p*(h.w+.12),v,y),h.placed=!0,o.splice(l,1)}const c=new mn;return c.name="Objects",t.forEach(l=>c.add(l.group)),c}function Wv(i){i.updateMatrixWorld(!0);const e=new cn().setFromObject(i);if(e.isEmpty())return i;const t=e.getCenter(new T);return i.position.x-=t.x,i.position.z-=t.z,i.position.y-=e.min.y,i}function Xv(i,e){const t=new mn;t.name="MujassamModel",i.mode==="filtration"&&t.add(kv(i,e)),i.mode==="aquaponics"&&t.add(zv(i,e));const n=Vv(i.objects||[],e);if(n){t.updateMatrixWorld(!0);const s=new cn().setFromObject(t);if(!s.isEmpty()){const r=new cn().setFromObject(n);n.position.x+=s.max.x-r.min.x+.7}t.add(n)}return Wv(t)}const jh={ar:{appName:"استوديو مجسّم ثلاثي الأبعاد",tagline:"حوّل وصفك إلى نموذج ثلاثي الأبعاد — مجاني ومفتوح المصدر",promptLabel:"صف النموذج الذي تريده",promptPlaceholder:"مثال: نظام ترشيح مياه بخزانين شفافين وأسطوانة فلتر فيها رمل وفحم وحصى…",generate:"ولّد النموذج",generating:"جارٍ التوليد…",examples:"أمثلة سريعة",presets:"معرض النماذج",loadFile:"فتح GLB/GLTF",understood:"ما فهمته من الوصف",nothingYet:"لم يتم توليد أي نموذج بعد",emptyTitle:"ابدأ بكتابة وصف",emptyBody:"اكتب وصفًا بالعربية أو الإنجليزية، أو اختر نموذجًا من المعرض.",downloadGLB:"GLB",downloadPNG:"صورة",downloadOBJ:"OBJ",resetView:"إعادة الكاميرا",autoRotate:"دوران",wireframe:"سلكي",labels:"تسميات",grid:"شبكة",fullscreen:"ملء الشاشة",exitFullscreen:"خروج",clear:"مسح",unknown:"لم أتعرف على شكل محدد، فأنشأت مجسمًا فنيًا. جرّب: مكعب، كرة، سيارة، منزل، خزان، فلتر.",exported:"تم التصدير",exportFail:"تعذّر التصدير",loaded:"تم تحميل الملف",loadFail:"تعذّر تحميل الملف",objects:"عناصر",hint:"اسحب للتدوير · اقرص للتكبير · إصبعان للتحريك · ثابت/متحرك لمسار الماء",flowView:"مسار الماء",flowStatic:"ثابت",flowLive:"متحرك",flowStaticTitle:"عرض ثابت للمقطع",flowLiveTitle:"عرض متحرك: مياه قذرة، ثم مخلفات، ثم مياه نقية",wasteBin:"حاوية المخلفات",lang:"English",footer:"مفتوح المصدر · Three.js · توليد إجرائي داخل المتصفح بدون مفتاح API",filtrationTitle:"نظام ترشيح المياه",dirtyTank:"خزان المياه الخام",cleanTank:"خزان المياه النقية",settleTank:"خزان الترويق",storageTank:"خزان التخزين",filterColumn:"عمود الفلتر (مقطع)",pump:"المضخة",fishTank:"حوض الأسماك",growBed:"حوض الزراعة",aquaponicsTitle:"نظام زراعة مائية",sceneSettings:"الخلفية والإضاءة",background:"لون الخلفية",lighting:"الإضاءة",intensity:"شدة الضوء",shadows:"الظلال",lightStudio:"استوديو",lightDay:"نهار",lightSunset:"غروب",lightNight:"ليل",progressParse:"تحليل الوصف",progressBuild:"بناء الأشكال",progressPlace:"ترتيب المشهد",progressDone:"جاهز",large:"كبير",small:"صغير",glowing:"مضيء",floors:"طابق",on:"فوق",presetHint:"اضغط بطاقة لتحميل وصفها وتوليد النموذج"},en:{appName:"Mujassam 3D Studio",tagline:"Turn a description into a 3D model — free and open source",promptLabel:"Describe the model you want",promptPlaceholder:"e.g. A water filtration system with two glass tanks and a filter of sand, charcoal and gravel…",generate:"Generate model",generating:"Generating…",examples:"Quick examples",presets:"Model gallery",loadFile:"Open GLB/GLTF",understood:"What I understood",nothingYet:"No model generated yet",emptyTitle:"Start with a description",emptyBody:"Type a description in Arabic or English, or pick a model from the gallery.",downloadGLB:"GLB",downloadPNG:"PNG",downloadOBJ:"OBJ",resetView:"Reset camera",autoRotate:"Rotate",wireframe:"Wire",labels:"Labels",grid:"Grid",fullscreen:"Fullscreen",exitFullscreen:"Exit",clear:"Clear",unknown:"No specific shape was recognised, so I made an abstract sculpture. Try: cube, sphere, car, house, tank, filter.",exported:"Exported",exportFail:"Export failed",loaded:"File loaded",loadFail:"Could not load the file",objects:"objects",hint:"Drag to rotate · Pinch to zoom · Two fingers to pan · Static/Live for the water path",flowView:"Flow",flowStatic:"Static",flowLive:"Live",flowStaticTitle:"Static cutaway",flowLiveTitle:"Animated live: dirty water, waste bin, then clean water",wasteBin:"Waste bin",lang:"العربية",footer:"Open source · Three.js · Procedural generation in the browser, no API key",filtrationTitle:"Water filtration system",dirtyTank:"Raw water tank",cleanTank:"Clean water tank",settleTank:"Settling tank",storageTank:"Storage tank",filterColumn:"Filter column (cutaway)",pump:"Pump",fishTank:"Fish tank",growBed:"Grow bed",aquaponicsTitle:"Aquaponics system",sceneSettings:"Background and lighting",background:"Background",lighting:"Lighting",intensity:"Light intensity",shadows:"Shadows",lightStudio:"Studio",lightDay:"Daylight",lightSunset:"Sunset",lightNight:"Night",progressParse:"Reading the description",progressBuild:"Building shapes",progressPlace:"Placing the scene",progressDone:"Ready",large:"large",small:"small",glowing:"glowing",floors:"floors",on:"on",presetHint:"Tap a card to load its description and generate it"}},qv={cube:["مكعب","Cube"],sphere:["كرة","Sphere"],cylinder:["أسطوانة","Cylinder"],cone:["مخروط","Cone"],torus:["حلقة","Torus"],pyramid:["هرم","Pyramid"],capsule:["كبسولة","Capsule"],star:["نجمة","Star"],heart:["قلب","Heart"],tank:["خزان","Tank"],pipe:["أنبوب","Pipe"],filter:["فلتر","Filter"],pump:["مضخة","Pump"],house:["منزل","House"],table:["طاولة","Table"],chair:["كرسي","Chair"],sofa:["أريكة","Sofa"],bed:["سرير","Bed"],car:["سيارة","Car"],bus:["حافلة","Bus"],bicycle:["دراجة","Bicycle"],tree:["شجرة","Tree"],robot:["روبوت","Robot"],building:["مبنى","Building"],lamp:["مصباح","Lamp"],rocket:["صاروخ","Rocket"],airplane:["طائرة","Airplane"],boat:["قارب","Boat"],cup:["كوب","Cup"],bottle:["زجاجة","Bottle"],flower:["زهرة","Flower"],planet:["كوكب","Planet"],bridge:["جسر","Bridge"],mountain:["جبل","Mountain"],snowman:["رجل ثلج","Snowman"],greenhouse:["بيت زجاجي","Greenhouse"],fountain:["نافورة","Fountain"],castle:["قلعة","Castle"],windmill:["طاحونة","Windmill"],bench:["مقعد","Bench"],solar:["لوح شمسي","Solar panel"],fence:["سياج","Fence"],stairs:["سلم","Stairs"],well:["بئر","Well"],cloud:["سحابة","Cloud"],sun:["شمس","Sun"],cactus:["صبار","Cactus"],mushroom:["فطر","Mushroom"],fish:["سمكة","Fish"],plant:["نبات","Plant"],planter:["حوض زراعة","Grow bed"],person:["شخص","Person"],gear:["ترس","Gear"],crown:["تاج","Crown"],umbrella:["مظلة","Umbrella"],book:["كتاب","Book"],abstract:["مجسم فني","Abstract sculpture"],filtration:["نظام ترشيح","Filtration system"],aquaponics:["زراعة مائية","Aquaponics"]},Yv={sponge:["إسفنج","Sponge"],cotton:["قطن","Cotton"],cloth:["قماش","Cloth"],sand:["رمل ناعم","Fine sand"],coarseSand:["رمل خشن","Coarse sand"],charcoal:["فحم نشط","Activated charcoal"],gravel:["حصى ناعم","Fine gravel"],coarseGravel:["حصى خشن","Coarse gravel"],pebbles:["حجارة","Pebbles"],ceramic:["حلقات سيراميك","Ceramic rings"],bioballs:["كرات حيوية","Bio balls"]},jv={glass:["زجاج","glass"],metal:["معدن","metal"],wood:["خشب","wood"],plastic:["بلاستيك","plastic"],stone:["حجر","stone"],rubber:["مطاط","rubber"],water:["ماء","water"],ceramic:["سيراميك","ceramic"],copper:["نحاس","copper"],fabric:["قماش","fabric"],gold:["ذهب","gold"]},Kv={ar:["مكعب أحمر","كرة زجاجية زرقاء كبيرة فوق طاولة خشبية","ثلاث أشجار خضراء وسيارة حمراء","مبنى من 20 طابق","نظام ترشيح بخزانين وفلتر فيه إسفنج ورمل وفحم وحصى","نظام زراعة مائية مع أسماك ونباتات","روبوت فضي كبير بعيون مضيئة","صاروخ وكوكب زحل","منزل وكرسيان ومصباح","قارب وجسر أحمر وجبل"],en:["red cube","a big blue glass sphere on a wooden table","three green trees and a red car","a 20 floor building","water filtration system with two tanks, sponge, sand, charcoal and gravel","aquaponics system with fish and plants","a big silver robot with glowing eyes","a rocket and saturn","a house, two chairs and a lamp","a boat, a red bridge and a mountain"]},Ac=[{id:"filtration",icon:"💧",featured:!0,name:["نظام ترشيح المياه","Water filtration"],desc:["مقطع للطبقات وحاوية مخلفات","Cutaway layers and a side waste bin"],prompt:["نظام ترشيح مياه بخزانين شفافين وأسطوانة فلتر مقطوعة تظهر طبقات الإسفنج والرمل الناعم والفحم النشط والرمل الخشن والحصى الناعم والحصى الخشن","Water filtration system with two transparent tanks and a cutaway filter cylinder showing sponge, fine sand, activated charcoal, coarse sand, fine gravel and coarse gravel"]},{id:"aquaponics",icon:"🌱",featured:!0,name:["زراعة مائية","Aquaponics"],desc:["حوض أسماك وحوض زراعة ومضخة","Fish tank, grow bed and a pump"],prompt:["نظام زراعة مائية مع أسماك ونباتات وفلتر","aquaponics system with fish and plants and a filter"]},{id:"house",icon:"🏡",name:["منزل وحديقة","House and garden"],desc:["منزل وأشجار وسيارة","House, trees and a car"],prompt:["منزل وثلاث أشجار خضراء وسيارة حمراء","a house, three green trees and a red car"]},{id:"robot",icon:"🤖",name:["روبوت","Robot"],desc:["روبوت معدني بعيون مضيئة","Metal robot with glowing eyes"],prompt:["روبوت فضي كبير بعيون مضيئة","a big silver robot with glowing eyes"]},{id:"city",icon:"🏙️",name:["مدينة","City block"],desc:["أبراج بعدة طوابق","Towers with many floors"],prompt:["مبنى من 14 طابق ومبنى أزرق من 9 طوابق وشجرة","a 14 floors building, a blue building with 9 floors and a tree"]},{id:"dining",icon:"🪑",name:["غرفة طعام","Dining set"],desc:["طاولة خشبية وكراسي وكوب","Wooden table, chairs and a cup"],prompt:["كوب أبيض فوق طاولة خشبية وكرسيين","a white cup on a wooden table and two chairs"]},{id:"space",icon:"🚀",name:["الفضاء","Space"],desc:["صاروخ وزحل","A rocket and Saturn"],prompt:["صاروخ وكوكب زحل برتقالي","a rocket and an orange saturn"]},{id:"shapes",icon:"🔷",name:["أشكال هندسية","Geometric shapes"],desc:["مكعب وكرة زجاجية وهرم وحلقة","Cube, glass sphere, pyramid, torus"],prompt:["مكعب أحمر وكرة زجاجية وهرم ذهبي وحلقة بنفسجية مضيئة","red cube, glass sphere, golden pyramid and a glowing purple torus"]},{id:"harbor",icon:"⛵",name:["ميناء","Harbor"],desc:["قارب وجسر وجبل","Boat, bridge and a mountain"],prompt:["قارب وجسر أحمر وجبل","a boat, a red bridge and a mountain"]},{id:"greenhouse",icon:"🪴",name:["بيت زجاجي","Greenhouse"],desc:["بيت زجاجي ومقعد وشمس","Greenhouse, bench and a sun"],prompt:["بيت زجاجي ومقعد خشبي وشمس","a greenhouse, a wooden bench and a sun"]},{id:"workshop",icon:"💡",name:["ورشة","Workshop"],desc:["طاولة ومصباح وزجاجة","Table, lamp and a bottle"],prompt:["مصباح فوق طاولة خشبية وزجاجة زجاجية","a lamp on a wooden table and a glass bottle"]},{id:"winter",icon:"⛄",name:["شتاء","Winter"],desc:["رجل ثلج وجبل","Snowman and a mountain"],prompt:["رجل ثلج وجبل","a snowman and a mountain"]}];function ot(i,e){return jh[i]?.[e]??jh.en[e]??e}function yi(i,e){const t=qv[e];return t?i==="ar"?t[0]:t[1]:e}function pd(i,e){const t=Yv[e];return t?i==="ar"?t[0]:t[1]:e}function $v(i,e){const t=jv[e];return t?i==="ar"?t[0]:t[1]:e}const ol="mujassam.studio.v1";function al(){try{return JSON.parse(localStorage.getItem(ol)||"{}")}catch{return{}}}function Zv(i){const e={...al(),...i};return localStorage.setItem(ol,JSON.stringify(e)),e}function Jv(){const i=al();delete i.prompt,delete i.presetId,localStorage.setItem(ol,JSON.stringify(i))}const Kh={type:"change"},cl={type:"start"},md={type:"end"},so=new Sr,$h=new vi,Qv=Math.cos(70*pr.DEG2RAD),Nt=new T,on=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ta=1e-6;class eM extends ny{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Nn,this._lastTargetPosition=new T,this._quat=new Nn().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hh,this._sphericalDelta=new Hh,this._scale=1,this._panOffset=new T,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new T,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nM.bind(this),this._onPointerDown=tM.bind(this),this._onPointerUp=iM.bind(this),this._onContextMenu=hM.bind(this),this._onMouseWheel=oM.bind(this),this._onKeyDown=aM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=lM.bind(this),this._onMouseDown=sM.bind(this),this._onMouseMove=rM.bind(this),this._interceptControlDown=uM.bind(this),this._interceptControlUp=dM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kh),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<Qv?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ta||this._lastTargetPosition.distanceToSquared(this.target)>Ta?(this.dispatchEvent(Kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function tM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function nM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function iM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(md),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_t.DOLLY;break;case ri.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}break;case ri.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(cl)}function rM(i){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function oM(i){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(i.preventDefault(),this.dispatchEvent(cl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(md))}function aM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function cM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_t.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_t.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(cl)}function lM(i){switch(this._trackPointer(i),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_t.NONE}}function hM(i){this.enabled!==!1&&i.preventDefault()}function uM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class fM extends xo{constructor(){super();const e=new pe;e.deleteAttribute("uv");const t=new Rt({side:sn}),n=new Rt,s=new Qc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ze(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ze(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Ze(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ze(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Ze(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ze(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ze(e,fs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Ze(e,fs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Ze(e,fs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ze(e,fs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new Ze(e,fs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new Ze(e,fs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function fs(i){const e=new si;return e.color.setScalar(i),e}const Zh={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class bo{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new bM(e)}),this.register(function(e){return new wM(e)}),this.register(function(e){return new RM(e)}),this.register(function(e){return new CM(e)}),this.register(function(e){return new PM(e)}),this.register(function(e){return new LM(e)}),this.register(function(e){return new TM(e)}),this.register(function(e){return new EM(e)}),this.register(function(e){return new AM(e)}),this.register(function(e){return new IM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new NM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new OM(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){const r=new SM,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}}const tt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ea="KHR_mesh_quantization",gn={};gn[$t]=tt.NEAREST;gn[Pc]=tt.NEAREST_MIPMAP_NEAREST;gn[ps]=tt.NEAREST_MIPMAP_LINEAR;gn[an]=tt.LINEAR;gn[rr]=tt.LINEAR_MIPMAP_NEAREST;gn[Bn]=tt.LINEAR_MIPMAP_LINEAR;gn[ni]=tt.CLAMP_TO_EDGE;gn[Xi]=tt.REPEAT;gn[dr]=tt.MIRRORED_REPEAT;const Jh={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},pM=new Ce,Qh=12,mM=1179937895,gM=2,eu=8,_M=1313821514,xM=5130562;function tr(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function yM(i){return new TextEncoder().encode(i).buffer}function vM(i){return tr(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function MM(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=pr.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function gd(i){return Math.ceil(i/4)*4}function Aa(i,e=0){const t=gd(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function tu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function nu(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}class SM{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+To}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(c);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){const f=Aa(d.result),g=new DataView(new ArrayBuffer(eu));g.setUint32(0,f.byteLength,!0),g.setUint32(4,xM,!0);const _=Aa(yM(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(eu));p.setUint32(0,_.byteLength,!0),p.setUint32(4,_M,!0);const m=new ArrayBuffer(Qh),v=new DataView(m);v.setUint32(0,mM,!0),v.setUint32(4,gM,!0);const y=Qh+p.byteLength+_.byteLength+g.byteLength+f.byteLength;v.setUint32(8,y,!0);const x=new Blob([m,p,_,g,f],{type:"application/octet-stream"}),P=new FileReader;P.readAsArrayBuffer(x),P.onloadend=function(){t(P.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){const f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new T;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new T;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===At?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof fa&&(e=await this.decompressTextureAsync(e)),t instanceof fa&&(t=await this.decompressTextureAsync(t));const s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=tu();c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);const h=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);const f=n(e),g=l.getImageData(0,0,o,a).data;for(let _=2;_<g.length;_+=4)h.data[_]=f(g[_]/256)*256}if(r){l.drawImage(r,0,0,o,a);const f=n(t),g=l.getImageData(0,0,o,a).data;for(let _=1;_<g.length;_+=4)h.data[_]=f(g[_]/256)*256}l.putImageData(h,0,0);const d=(e||t).clone();return d.source=new kc(c),d.colorSpace=ti,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case tt.BYTE:case tt.UNSIGNED_BYTE:a=1;break;case tt.SHORT:case tt.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;r===tt.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=gd(s*c),h=new DataView(new ArrayBuffer(l));let u=0;for(let g=n;g<n+s;g++){for(let _=0;_<e.itemSize;_++){let p;e.itemSize>4?p=e.array[g*e.itemSize+_]:(_===0?p=e.getX(g):_===1?p=e.getY(g):_===2?p=e.getZ(g):_===3&&(p=e.getW(g)),e.normalized===!0&&(p=pr.normalize(p,e.array))),t===tt.FLOAT?h.setFloat32(u,p,!0):t===tt.INT?h.setInt32(u,p,!0):t===tt.UNSIGNED_INT?h.setUint32(u,p,!0):t===tt.SHORT?h.setInt16(u,p,!0):t===tt.UNSIGNED_SHORT?h.setUint16(u,p,!0):t===tt.BYTE?h.setInt8(u,p):t===tt.UNSIGNED_BYTE&&h.setUint8(u,p),u+=a}u%c!==0&&(u+=c-u%c)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(d.target=r),r===tt.ARRAY_BUFFER&&(d.byteStride=c),this.byteOffset+=l,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Aa(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=tt.FLOAT;else if(e.array.constructor===Int32Array)a=tt.INT;else if(e.array.constructor===Uint32Array)a=tt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=tt.SHORT;else if(e.array.constructor===Uint16Array)a=tt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=tt.BYTE;else if(e.array.constructor===Uint8Array)a=tt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const c=MM(e,n,s);let l;t!==void 0&&(l=e===t.index?tt.ELEMENT_ARRAY_BUFFER:tt.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const d={mimeType:s},f=tu();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==pn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(nu(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(nu(f,s).then(p=>new FileReader().readAsDataURL(p)).then(p=>{d.uri=p}));const _=a.images.push(d)-1;return h[u]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:gn[e.magFilter],minFilter:gn[e.minFilter],wrapS:gn[e.wrapS],wrapT:gn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof fa&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,a)});const c=r.textures.push(a)-1;return s.textures.set(e,c),c}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(tr(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Ot&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,s)});const o=n.materials.push(s)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,P=e.material.length;x<P;x++)s.push(e.material[x].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=tt.LINES:e.isLineLoop?a=tt.LINE_LOOP:e.isLine?a=tt.LINE_STRIP:e.isPoints?a=tt.POINTS:a=e.material.wireframe?tt.LINES:tt.TRIANGLES;const c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const P=o.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(P))){l[x]=t.attributes.get(this.getUID(P));continue}g=null;const A=P.array;x==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Tt(new Uint16Array(A),P.itemSize,P.normalized)):(A instanceof Uint32Array||A instanceof Int32Array)&&!x.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${x}" converted to type FLOAT.`),g=bo.Utils.toFloat32BufferAttribute(P));const C=this.processAccessor(g||P,o);C!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,P),l[x]=C,t.attributes.set(this.getUID(P),C))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],P=[],E={};if(e.morphTargetDictionary!==void 0)for(const A in e.morphTargetDictionary)E[e.morphTargetDictionary[A]]=A;for(let A=0;A<e.morphTargetInfluences.length;++A){const C={};let b=!1;for(const M in o.morphAttributes){if(M!=="position"&&M!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const L=o.morphAttributes[M][A],k=M.toUpperCase(),F=o.attributes[M];if(t.attributes.has(this.getUID(L,!0))){C[k]=t.attributes.get(this.getUID(L,!0));continue}const X=L.clone();if(!o.morphTargetsRelative)for(let V=0,W=L.count;V<W;V++)for(let K=0;K<L.itemSize;K++)K===0&&X.setX(V,L.getX(V)-F.getX(V)),K===1&&X.setY(V,L.getY(V)-F.getY(V)),K===2&&X.setZ(V,L.getZ(V)-F.getZ(V)),K===3&&X.setW(V,L.getW(V)-F.getW(V));C[k]=this.processAccessor(X,o),t.attributes.set(this.getUID(F,!0),C[k])}u.push(C),x.push(e.morphTargetInfluences[A]),e.morphTargetDictionary!==void 0&&P.push(E[A])}c.weights=x,P.length>0&&(c.extras={},c.extras.targetNames=P)}const _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let p=!1;if(_&&o.index===null){const x=[];for(let P=0,E=o.attributes.position.count;P<E;P++)x[P]=P;o.setIndex(x),p=!0}const m=_?e.material:[e.material],v=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,P=v.length;x<P;x++){const E={mode:a,attributes:l};if(this.serializeUserData(o,E),u.length>0&&(E.targets=u),o.index!==null){let C=this.getUID(o.index);(v[x].start!==void 0||v[x].count!==void 0)&&(C+=":"+v[x].start+":"+v[x].count),t.attributes.has(C)?E.indices=t.attributes.get(C):(E.indices=this.processAccessor(o.index,o,v[x].start,v[x].count),t.attributes.set(C,E.indices)),E.indices===null&&delete E.indices}const A=await this.processMaterialAsync(m[v[x].materialIndex]);A!==null&&(E.material=A),h.push(E)}p===!0&&o.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(x){x.writeMesh&&x.writeMesh(e,c)});const y=n.meshes.push(c)-1;return t.meshes.set(r,y),y}detectMeshQuantization(e,t){if(this.extensionsUsed[Ea])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];Zh[s]&&Zh[s].includes(n)&&(this.extensionsUsed[Ea]=!0,this.extensionsRequired[Ea]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:pr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=bo.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){const l=r[c],h=lt.parseTrackName(l.name);let u=lt.findNode(t,h.nodeName);const d=Jh[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const f=1;let g=l.values.length/l.times.length;d===Jh.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let _;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",g/=3):l.getInterpolation()===Rs?_="STEP":_="LINEAR",a.push({input:this.processAccessor(new Tt(l.times,f)),output:this.processAccessor(new Tt(l.values,g)),interpolation:_}),o.push({sampler:a.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],c=new Float32Array(r.bones.length*16),l=new qe;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Tt(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();tr(a,[0,0,0,1])||(r.rotation=a),tr(c,[0,0,0])||(r.translation=c),tr(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),vM(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let c=0,l=e.children.length;c<l;c++){const h=e.children[c];if(h.visible||n.onlyVisible===!1){const u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return s.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let o=0,a=e.children.length;o<a;o++){const c=e.children[o];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){const t=new xo;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof xo?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class bM{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}let wM=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},TM=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},EM=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},AM=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},RM=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},CM=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},PM=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},LM=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(pM)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},IM=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},DM=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},NM=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},UM=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},OM=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new qe,l=new T,h=new Nn,u=new T;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(r,f*3),h.toArray(o,f*4),u.toArray(a,f*3);const d={TRANSLATION:n.processAccessor(new Tt(r,3)),ROTATION:n.processAccessor(new Tt(o,4)),SCALE:n.processAccessor(new Tt(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};bo.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){const t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=lt.parseTrackName(o.name),c=lt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Cs)}const l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[c.uuid]===void 0){u=o.clone();const f=new u.ValueBufferType(l*u.times.length);for(let g=0;g<u.times.length;g++)f[g*l+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,t.push(u);continue}const d=o.createInterpolant(new o.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){const g=this.insertKeyframe(u,o.times[f]);u.values[g*l+h]=o.values[f]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new Tt(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let s=0;s<i.itemSize;s++)e.setComponent(t,s,i.getComponent(t,s));return e}};class FM{parse(e){let t="",n=0,s=0,r=0;const o=new T,a=new Ce,c=new T,l=new ie,h=[];function u(g){let _=0,p=0,m=0;const v=g.geometry,y=new Ye,x=v.getAttribute("position"),P=v.getAttribute("normal"),E=v.getAttribute("uv"),A=v.getIndex();if(t+="o "+g.name+`
`,g.material&&g.material.name&&(t+="usemtl "+g.material.name+`
`),x!==void 0)for(let C=0,b=x.count;C<b;C++,_++)o.fromBufferAttribute(x,C),o.applyMatrix4(g.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z+`
`;if(E!==void 0)for(let C=0,b=E.count;C<b;C++,m++)l.fromBufferAttribute(E,C),t+="vt "+l.x+" "+l.y+`
`;if(P!==void 0){y.getNormalMatrix(g.matrixWorld);for(let C=0,b=P.count;C<b;C++,p++)c.fromBufferAttribute(P,C),c.applyMatrix3(y).normalize(),t+="vn "+c.x+" "+c.y+" "+c.z+`
`}if(A!==null)for(let C=0,b=A.count;C<b;C+=3){for(let M=0;M<3;M++){const L=A.getX(C+M)+1;h[M]=n+L+(P||E?"/"+(E?s+L:"")+(P?"/"+(r+L):""):"")}t+="f "+h.join(" ")+`
`}else for(let C=0,b=x.count;C<b;C+=3){for(let M=0;M<3;M++){const L=C+M+1;h[M]=n+L+(P||E?"/"+(E?s+L:"")+(P?"/"+(r+L):""):"")}t+="f "+h.join(" ")+`
`}n+=_,s+=m,r+=p}function d(g){let _=0;const p=g.geometry,m=g.type,v=p.getAttribute("position");if(t+="o "+g.name+`
`,v!==void 0)for(let y=0,x=v.count;y<x;y++,_++)o.fromBufferAttribute(v,y),o.applyMatrix4(g.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z+`
`;if(m==="Line"){t+="l ";for(let y=1,x=v.count;y<=x;y++)t+=n+y+" ";t+=`
`}if(m==="LineSegments")for(let y=1,x=y+1,P=v.count;y<P;y+=2,x=y+1)t+="l "+(n+y)+" "+(n+x)+`
`;n+=_}function f(g){let _=0;const p=g.geometry,m=p.getAttribute("position"),v=p.getAttribute("color");if(t+="o "+g.name+`
`,m!==void 0){for(let y=0,x=m.count;y<x;y++,_++)o.fromBufferAttribute(m,y),o.applyMatrix4(g.matrixWorld),t+="v "+o.x+" "+o.y+" "+o.z,v!==void 0&&(a.fromBufferAttribute(v,y),st.fromWorkingColorSpace(a,At),t+=" "+a.r+" "+a.g+" "+a.b),t+=`
`;t+="p ";for(let y=1,x=m.count;y<=x;y++)t+=n+y+" ";t+=`
`}n+=_}return e.traverse(function(g){g.isMesh===!0&&u(g),g.isLine===!0&&d(g),g.isPoints===!0&&f(g)}),t}}function iu(i,e){if(e===Qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_c||e===Tu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===_c)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class BM extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new iS(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ur.extractUrlBase(e);o=ur.resolveURL(l,this.path)}else o=ur.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_d){try{o[nt.KHR_BINARY_GLTF]=new sS(e)}catch(u){s&&s(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _S(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new HM;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new rS(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new oS;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new aS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function kM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zM{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new po(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Qc(h),l.distance=u;break;case"spot":l=new Hx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class HM{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const s=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}}class GM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class VM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class qM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class YM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class jM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class $M{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class eS{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tS{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nS{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class iS{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new qe,p=new T,m=new Nn,v=new T(1,1,1),y=new Co(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(p,m,v));for(const x in c)if(x==="_COLOR_0"){const P=c[x];y.instanceColor=new Mc(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);yt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const _d="glTF",Zs=12,su={JSON:1313821514,BIN:5130562};class sS{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Zs,r=new DataView(e,Zs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===su.JSON){const l=new Uint8Array(e,Zs+o,a);this.content=n.decode(l)}else if(c===su.BIN){const l=Zs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Rc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Rc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ms[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},a,l,Wt,d)})})}}class oS{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aS{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class xd extends Tr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,v=1-p,y=m-d+u;for(let x=0;x!==a;x++){const P=o[_+x+a],E=o[_+x+c]*h,A=o[g+x+a],C=o[g+x]*h;r[x]=v*P+y*E+p*A+m*C}return r}}const cS=new Nn;class lS extends xd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return cS.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ru={9728:$t,9729:an,9984:Pc,9985:rr,9986:ps,9987:Bn},ou={33071:ni,33648:dr,10497:Xi},Ra={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hS={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},Ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function Bi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pS(i){let e;const t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pa(t.attributes):e=i.indices+":"+Pa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Pa(i.targets[n]);return e}function Pa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gS=new qe;class _S{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Bx(this.options.manager):this.textureLoader=new Wx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Bi(r,a,s),Qn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ur.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ra[s.type],a=Ms[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Tt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ra[s.type],l=Ms[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,m*f,s.count*f/h),y=new z_(_,f/h),t.cache.add(v,y)),p=new Wc(y,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Tt(_,c,g);if(s.sparse!==void 0){const m=Ra.SCALAR,v=Ms[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,P=new v(o[1],y,s.sparse.count*m),E=new l(o[2],x,s.sparse.count*c);a!==null&&(p=new Tt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,C=P.length;A<C;A++){const b=P[A];if(p.setX(b,E[A*c]),c>=2&&p.setY(b,E[A*c+1]),c>=3&&p.setZ(b,E[A*c+2]),c>=4&&p.setW(b,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ru[d.magFilter]||an,h.minFilter=ru[d.minFilter]||Bn,h.wrapS=ou[d.wrapS]||Xi,h.wrapT=ou[d.wrapT]||Xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==an,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Dt(_);p.needsUpdate=!0,d(p)}),t.load(ur.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Qn(u,o),u.userData.mimeType=o.mimeType||mS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qu,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qc,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Rt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){const u=s[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);const h=r.alphaMode||Ca.OPAQUE;if(h===Ca.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ca.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si){const u=r.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==si&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Qn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bi(s,u,r),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return au(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=pS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=au(new zt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?uS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const v=l[f];if(p.mode===Mn.TRIANGLES||p.mode===Mn.TRIANGLE_STRIP||p.mode===Mn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new G_(_,v):new Ze(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Mn.TRIANGLE_STRIP?m.geometry=iu(m.geometry,Tu):p.mode===Mn.TRIANGLE_FAN&&(m.geometry=iu(m.geometry,_c));else if(p.mode===Mn.LINES)m=new Xu(_,v);else if(p.mode===Mn.LINE_STRIP)m=new Yc(_,v);else if(p.mode===Mn.LINE_LOOP)m=new X_(_,v);else if(p.mode===Mn.POINTS)m=new q_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&fS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Qn(m,r),p.extensions&&Bi(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Bi(s,u[0],r),u[0];const d=new mn;r.extensions&&Bi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(pr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xc(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],P=f[v],E=g[v],A=_[v],C=p[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,P,E,A,C);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new Lx(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Vu:l.length>1?h=new mn:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Qn(h,r),r.extensions&&Bi(n,h,r),r.matrix!==void 0){const u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new mn;n.name&&(r.name=s.createUniqueName(n.name)),Qn(r,n),n.extensions&&Bi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Dn||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(xi[r.path]){case xi.weights:l=Is;break;case xi.rotation:l=Ds;break;case xi.position:case xi.scale:l=Ns;break;default:switch(n.itemSize){case 1:l=Is;break;case 2:case 3:default:l=Ns;break}break}const h=s.interpolation!==void 0?hS[s.interpolation]:Cs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+xi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ds?lS:xd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xS(i,e,t){const n=e.attributes,s=new cn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),a.normalized){const h=Cc(Ms[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new T,c=new T;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Cc(Ms[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Hn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function au(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Rc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Qn(i,e),xS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dS(i,e.targets,t):i})}const La={studio:{bg:"#0b1020",hemiSky:"#d7e6ff",hemiGround:"#1a2033",hemi:.55,key:"#ffffff",keyI:3.1,fill:"#8eb6ff",fillI:.7,rim:"#c4b5fd",rimI:.85},day:{bg:"#c5d7ef",hemiSky:"#fff7ea",hemiGround:"#8aa0b8",hemi:.75,key:"#fff1d0",keyI:3.6,fill:"#c5d8ff",fillI:.9,rim:"#ffe0b2",rimI:.45},sunset:{bg:"#2a1630",hemiSky:"#ffb07a",hemiGround:"#241428",hemi:.45,key:"#ff9a62",keyI:2.6,fill:"#7e57c2",fillI:.55,rim:"#ff7043",rimI:1.15},night:{bg:"#070b16",hemiSky:"#9ec9ff",hemiGround:"#10131c",hemi:.25,key:"#d6e4ff",keyI:1.15,fill:"#3949ab",fillI:.35,rim:"#5ad1ff",rimI:.7}};function yS(i){const e=new Set;i.traverse(t=>{t.geometry&&t.geometry.dispose(),(t.material?[].concat(t.material):[]).forEach(s=>e.add(s))}),e.forEach(t=>t.dispose())}class vS{constructor(e){this.container=e,this.scene=new xo,this.camera=new tn(42,1,.08,80),this.camera.position.set(4.4,2.5,6.4),this.renderer=new k_({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=At,this.renderer.toneMapping=pu,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=du,this.renderer.domElement.style.touchAction="none",this.renderer.domElement.setAttribute("aria-label","3D viewport"),e.appendChild(this.renderer.domElement),this.controls=new eM(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.85,this.controls.zoomSpeed=1.05,this.controls.panSpeed=.85,this.controls.screenSpacePanning=!0,this.controls.zoomToCursor=!0,this.controls.minDistance=.6,this.controls.maxDistance=40,this.controls.maxPolarAngle=Math.PI*.92,this.controls.minPolarAngle=.08,this.controls.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.controls.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.hemi=new kx("#d7e6ff","#1a2033",.55),this.key=new po("#ffffff",3.1),this.key.position.set(5,9,4),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02;const t=this.key.shadow.camera;t.near=.4,t.far=40,t.left=-8,t.right=8,t.top=8,t.bottom=-8,this.fill=new po("#8eb6ff",.7),this.fill.position.set(-6,3,-2),this.rim=new po("#c4b5fd",.85),this.rim.position.set(-2,4,-6),this.scene.add(this.hemi,this.key,this.key.target,this.fill,this.rim),this.ground=new Ze(new br(24,64),new wx({opacity:.38})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.position.y=0,this.grid=new ty(20,20,5951999,2371657),this.grid.position.y=.001,this.scene.add(this.ground,this.grid),this.model=new mn,this.scene.add(this.model);const n=new yc(this.renderer);this.scene.environment=n.fromScene(new fM,.04).texture,n.dispose(),this.clock=new Xx,this.labelsOn=!0,this.wireOn=!1,this.flowLive=!1,this.shadowsOn=!0,this.intensity=1,this.lightName="studio",this.autoBg=!0,this.homePos=this.camera.position.clone(),this.homeTarget=new T,this.fly=null,this.setLighting("studio"),this.resize(),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.renderer.setAnimationLoop(()=>this.tick())}resize(){const{clientWidth:e,clientHeight:t}=this.container;!e||!t||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1))}setBackground(e,t=!1){t||(this.autoBg=!1),this.bg=e,this.scene.background=new Ce(e),this.scene.fog=new Vc(e,16,42)}setLighting(e){const t=La[e]||La.studio;return this.lightName=La[e]?e:"studio",this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemi,this.key.color.set(t.key),this.fill.color.set(t.fill),this.fill.intensity=t.fillI,this.rim.color.set(t.rim),this.rim.intensity=t.rimI,this.baseKey=t.keyI,this.key.intensity=t.keyI*this.intensity,this.autoBg=!0,this.setBackground(t.bg,!0),t.bg}setIntensity(e){this.intensity=e,this.key.intensity=this.baseKey*e}setShadows(e){this.shadowsOn=e,this.renderer.shadowMap.enabled=e,this.key.castShadow=e,this.ground.visible=e}setGrid(e){this.grid.visible=e}setAutoRotate(e){this.controls.autoRotate=e,this.controls.autoRotateSpeed=.9}setWireframe(e){this.wireOn=e,this.model.traverse(t=>{t.isMesh&&[].concat(t.material||[]).forEach(n=>{n&&"wireframe"in n&&(n.wireframe=e)})})}setFlowLive(e){this.flowLive=!!e}setLabels(e){this.labelsOn=e,this.model.traverse(t=>{t.userData?.isLabel&&(t.visible=e)})}hasModel(){return this.model.children.length>0}clear(){for(const e of[...this.model.children])this.model.remove(e),yS(e)}setModel(e){this.clear(),this.model.add(e),e.traverse(t=>{t.isMesh&&(t.castShadow=!(t.material&&t.material.transmission>0),t.receiveShadow=!0),t.userData?.isLabel&&(t.visible=this.labelsOn)}),this.wireOn&&this.setWireframe(!0),this.frame(!1)}frame(e=!1){const t=new cn().setFromObject(this.model);if(t.isEmpty())return;const n=t.getSize(new T),s=t.getCenter(new T),r=Math.max(n.x,n.y,n.z,.6),o=r/(2*Math.tan(this.camera.fov*Math.PI/360))*1.38,a=new T(s.x+o*.72,s.y+Math.max(n.y*.35,o*.38),s.z+o*.95);this.homePos.copy(a),this.homeTarget.copy(s);const c=Math.max(8,r*2),l=this.key.shadow.camera;l.left=-c,l.right=c,l.top=c,l.bottom=-c,l.updateProjectionMatrix(),this.key.position.set(s.x+c*.45,s.y+c*.8,s.z+c*.3),this.key.target.position.copy(s),this.key.target.updateMatrixWorld(),e?this.flyTo(a,s):(this.fly=null,this.camera.position.copy(a),this.controls.target.copy(s),this.controls.update())}resetCamera(){this.flyTo(this.homePos,this.homeTarget)}flyTo(e,t){this.fly={fromP:this.camera.position.clone(),fromT:this.controls.target.clone(),toP:e.clone(),toT:t.clone(),t:0}}tick(){const e=this.clock.getElapsedTime(),t=e-(this.prevTime||0);if(this.prevTime=e,this.fly){this.fly.t=Math.min(1,this.fly.t+t*2.2);const n=1-(1-this.fly.t)**3;this.camera.position.lerpVectors(this.fly.fromP,this.fly.toP,n),this.controls.target.lerpVectors(this.fly.fromT,this.fly.toT,n),this.fly.t>=1&&(this.fly=null)}this.model.traverse(n=>{n.userData?.tick?.(e,n),n.userData?.flowTick?.(e,this.flowLive),n.userData?.isLabel&&n.lookAt(this.camera.position)}),this.controls.update(),this.renderer.render(this.scene,this.camera)}stats(){let e=0,t=0;return this.model.traverse(n=>{if(!n.isMesh||!n.geometry)return;e+=1;const s=n.geometry,r=s.index?s.index.count/3:s.attributes.position.count/3;t+=r*(n.isInstancedMesh?n.count:1)}),{meshes:e,tris:Math.round(t)}}screenshot(){const e=this.renderer.getPixelRatio();this.renderer.setPixelRatio(Math.min(2.5,(window.devicePixelRatio||1)*1.5)),this.resize(),this.renderer.render(this.scene,this.camera);const t=this.renderer.domElement.toDataURL("image/png");return this.renderer.setPixelRatio(e),this.resize(),t}async exportGLB(){const t=await new bo().parseAsync(this.model,{binary:!0});return new Blob([t],{type:"model/gltf-binary"})}exportOBJ(){const e=new FM().parse(this.model);return new Blob([e],{type:"text/plain"})}}async function MS(i){const e=URL.createObjectURL(i);try{const t=await new BM().loadAsync(e);return t.scene.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),t.scene}finally{URL.revokeObjectURL(e)}}const ve=i=>document.getElementById(i),jt=ve("prompt"),et=new vS(ve("viewport"));let Fe="ar",Wi=null,Ct=null,Ss="",yd=!1;function fn(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function en(i,e=!1){const t=ve("toast");t.textContent=i,t.classList.toggle("warn",e),t.classList.add("show"),clearTimeout(en._t),en._t=setTimeout(()=>t.classList.remove("show"),e?4600:2400)}function ro(i){return new Promise(e=>setTimeout(e,i))}function nr(i,e){ve("progressBar").style.width=`${Math.round(i*100)}%`,ve("progressLabel").textContent=ot(Fe,e)}function wo(i){yd=i,ve("loading").classList.toggle("hidden",!i),ve("btnGenerate").disabled=i,ve("btnGenerate").querySelector("span").textContent=ot(Fe,i?"generating":"generate")}function mo(){document.documentElement.lang=Fe,document.documentElement.dir=Fe==="ar"?"rtl":"ltr",document.title=ot(Fe,"appName"),document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=ot(Fe,t.dataset.i18n)}),document.querySelectorAll("[data-i18n-ph]").forEach(t=>{t.setAttribute("placeholder",ot(Fe,t.dataset.i18nPh))}),document.querySelectorAll(".tbtn, #langBtn").forEach(t=>{const n=t.querySelector("[data-i18n]");n&&t.setAttribute("aria-label",n.textContent)});const i=ve("lightPreset"),e=i.value||"studio";i.innerHTML=["studio","day","sunset","night"].map(t=>`<option value="${t}">${fn(ot(Fe,`light${t[0].toUpperCase()}${t.slice(1)}`))}</option>`).join(""),i.value=e,ve("btnFullscreen").querySelector("span").textContent=ot(Fe,document.fullscreenElement||ve("stage").classList.contains("pseudo-fs")?"exitFullscreen":"fullscreen"),ve("flowSwitch").setAttribute("aria-label",ot(Fe,"flowView")),ve("btnFlowStatic").title=ot(Fe,"flowStaticTitle"),ve("btnFlowLive").title=ot(Fe,"flowLiveTitle")}function cu(){const i=ve("examples");i.replaceChildren();for(const e of Kv[Fe]){const t=document.createElement("button");t.type="button",t.className="chip",t.textContent=e,t.dir="auto",t.addEventListener("click",()=>{jt.value=e,ei(e,{preset:null})}),i.appendChild(t)}}function ir(){const i=ve("presets");i.replaceChildren();const e=Fe==="ar"?0:1;for(const t of Ac){const n=document.createElement("button");n.type="button",n.className=`preset${t.featured?" featured":""}${t.id===Wi?" active":""}`,n.innerHTML=`<span class="pi" aria-hidden="true">${t.icon}</span><span class="pn">${fn(t.name[e])}</span><span class="pd">${fn(t.desc[e])}</span>`,n.addEventListener("click",()=>{const s=t.prompt[e];jt.value=s,ei(s,{preset:t.id})}),i.appendChild(n)}}function sr(){const i=ve("understood");if(!Ct){i.innerHTML=`<span class="empty-note">${fn(ot(Fe,"nothingYet"))}</span>`;return}const e=[];Ct.mode==="filtration"?(e.push(`<span class="tag">💧 ${fn(yi(Fe,"filtration"))}</span>`),e.push(`<span class="tag">${Ct.filtration.tanks} × ${fn(yi(Fe,"tank"))}</span>`),Ct.filtration.layers.forEach((t,n)=>{e.push(`<span class="tag layer">${n+1}. ${fn(pd(Fe,t))}</span>`)})):Ct.mode==="aquaponics"&&(e.push(`<span class="tag">🌱 ${fn(yi(Fe,"aquaponics"))}</span>`),e.push(`<span class="tag">${Ct.aquaponics.fish} × ${fn(yi(Fe,"fish"))}</span>`),e.push(`<span class="tag">${Ct.aquaponics.plants} × ${fn(yi(Fe,"plant"))}</span>`));for(const t of Ct.objects||[]){const n=t.color?`<span class="sw" style="background:${t.color}"></span>`:"",s=[t.material&&$v(Fe,t.material),t.glow&&ot(Fe,"glowing"),t.scale>1.2&&ot(Fe,"large"),t.scale<.85&&ot(Fe,"small"),t.floors&&`${t.floors} ${ot(Fe,"floors")}`,t.slot==="on"&&`${ot(Fe,"on")} ${yi(Fe,Ct.objects[t.on]?.type||"")}`].filter(Boolean);e.push(`<span class="tag">${n}${t.count} × ${fn(yi(Fe,t.type))}${s.length?` <span class="mat">${fn(s.join(" · "))}</span>`:""}</span>`)}Ct.unknown&&e.push(`<p class="notice">${fn(ot(Fe,"unknown"))}</p>`),i.innerHTML=e.join("")}function SS(){return Ss||(Ct?Ct.mode==="filtration"?ot(Fe,"filtrationTitle"):Ct.mode==="aquaponics"?ot(Fe,"aquaponicsTitle"):(Ct.objects||[]).map(i=>`${i.count>1?`${i.count}× `:""}${yi(Fe,i.type)}`).join(" + "):"")}function go(){const i=et.hasModel()?et.stats():null;ve("modelTitle").textContent=SS(),ve("modelStats").textContent=i?`${i.meshes} ${ot(Fe,"objects")} · ${i.tris.toLocaleString()} △`:""}function Ia(i){return`${((Ct?.mode==="filtration"?"filtration":Ct?.mode==="aquaponics"?"aquaponics":(Ct?.objects||[]).map(t=>t.type).join("-"))||"model").slice(0,48)}.${i}`}function Mi(){Zv({lang:Fe,prompt:jt.value,presetId:Wi,bg:ve("bgColor").value,light:ve("lightPreset").value,intensity:Number(ve("lightIntensity").value),shadows:ve("shadows").checked,rotate:ve("btnRotate").classList.contains("on"),wire:ve("btnWire").classList.contains("on"),labels:ve("btnLabels").classList.contains("on"),grid:ve("btnGrid").classList.contains("on"),flowLive:ve("btnFlowLive").classList.contains("on")})}async function ei(i,{preset:e=null,keepCamera:t=!1}={}){const n=(i??jt.value).trim();if(!n){jt.focus(),en(ot(Fe,"emptyBody"),!0);return}jt.value=n,Wi=e,Ss="";const s=t?{pos:et.camera.position.clone(),target:et.controls.target.clone()}:null;wo(!0),nr(.12,"progressParse"),await ro(30);try{const r=Uy(n);nr(.46,"progressBuild"),await ro(20);const o=Xv(r,{lang:Fe,tr:c=>ot(Fe,c),layer:c=>pd(Fe,c)});nr(.82,"progressPlace"),await ro(16),et.setModel(o),s&&(et.fly=null,et.camera.position.copy(s.pos),et.controls.target.copy(s.target),et.controls.update()),Ct=r,ve("emptyState").classList.add("hidden"),sr(),ir(),go(),r.unknown&&en(ot(Fe,"unknown"),!0);const a=new URL(location.href);a.searchParams.set("q",n),history.replaceState(null,"",a),Mi(),nr(1,"progressDone"),await ro(160)}catch(r){console.error(r),en(r?.message||ot(Fe,"exportFail"),!0)}finally{wo(!1)}}function Da(i,{persistNow:e=!0}={}){et.setFlowLive(i);const t=ve("btnFlowStatic"),n=ve("btnFlowLive");t.classList.toggle("on",!i),t.setAttribute("aria-pressed",String(!i)),n.classList.toggle("on",i),n.setAttribute("aria-pressed",String(i)),e&&Mi()}function oo(i,e){const t=ve(i);t.addEventListener("click",()=>{const n=!t.classList.contains("on");t.classList.toggle("on",n),t.setAttribute("aria-pressed",String(n)),e(n),Mi()})}async function lu(){const i=ve("stage");if(document.fullscreenElement||i.classList.contains("pseudo-fs"))document.fullscreenElement?await document.exitFullscreen():i.classList.remove("pseudo-fs");else try{await i.requestFullscreen()}catch{i.classList.add("pseudo-fs")}mo(),et.resize()}function hu(i,e){const t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),1500)}async function bS(){const i=al();if(Fe=i.lang==="en"?"en":"ar",mo(),cu(),ir(),sr(),i.light){const t=et.setLighting(i.light);ve("lightPreset").value=i.light,ve("bgColor").value=i.bg||t,i.bg&&et.setBackground(i.bg)}i.intensity&&(ve("lightIntensity").value=String(i.intensity),et.setIntensity(Number(i.intensity))),i.shadows===!1&&(ve("shadows").checked=!1,et.setShadows(!1)),i.grid===!1&&(ve("btnGrid").classList.remove("on"),ve("btnGrid").setAttribute("aria-pressed","false"),et.setGrid(!1)),i.labels===!1&&(ve("btnLabels").classList.remove("on"),ve("btnLabels").setAttribute("aria-pressed","false"),et.setLabels(!1)),i.rotate&&(ve("btnRotate").classList.add("on"),ve("btnRotate").setAttribute("aria-pressed","true"),et.setAutoRotate(!0)),i.wire&&(ve("btnWire").classList.add("on"),ve("btnWire").setAttribute("aria-pressed","true"),et.setWireframe(!0)),Da(i.flowLive===!0,{persistNow:!1}),ve("promptForm").addEventListener("submit",t=>{t.preventDefault(),yd||ei(jt.value,{preset:null})}),jt.addEventListener("keydown",t=>{t.key==="Enter"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),ei(jt.value,{preset:null}))}),ve("btnClear").addEventListener("click",()=>{jt.value="",et.clear(),Ct=null,Wi=null,Ss="",ve("emptyState").classList.remove("hidden"),sr(),ir(),go(),Jv();const t=new URL(location.href);t.searchParams.delete("q"),history.replaceState(null,"",t)}),ve("langBtn").addEventListener("click",()=>{if(Fe=Fe==="ar"?"en":"ar",mo(),cu(),ir(),sr(),go(),Mi(),!(!Ct&&!Ss)){if(Wi){const t=Ac.find(n=>n.id===Wi);if(t){const n=t.prompt[Fe==="ar"?0:1];jt.value=n,ei(n,{preset:t.id,keepCamera:!0});return}}jt.value.trim()&&ei(jt.value,{preset:null,keepCamera:!0})}}),ve("btnReset").addEventListener("click",()=>et.resetCamera()),ve("btnFlowStatic").addEventListener("click",()=>Da(!1)),ve("btnFlowLive").addEventListener("click",()=>Da(!0)),oo("btnRotate",t=>et.setAutoRotate(t)),oo("btnWire",t=>et.setWireframe(t)),oo("btnLabels",t=>et.setLabels(t)),oo("btnGrid",t=>et.setGrid(t)),ve("btnFullscreen").addEventListener("click",lu),document.addEventListener("fullscreenchange",()=>{mo(),et.resize()}),ve("btnGLB").addEventListener("click",async()=>{if(!et.hasModel())return en(ot(Fe,"emptyBody"),!0);try{hu(await et.exportGLB(),Ia("glb")),en(ot(Fe,"exported"))}catch(t){console.error(t),en(ot(Fe,"exportFail"),!0)}}),ve("btnPNG").addEventListener("click",()=>{if(!et.hasModel())return en(ot(Fe,"emptyBody"),!0);const t=document.createElement("a");t.href=et.screenshot(),t.download=Ia("png"),t.click(),en(ot(Fe,"exported"))}),ve("btnOBJ").addEventListener("click",()=>{if(!et.hasModel())return en(ot(Fe,"emptyBody"),!0);try{hu(et.exportOBJ(),Ia("obj")),en(ot(Fe,"exported"))}catch(t){console.error(t),en(ot(Fe,"exportFail"),!0)}}),ve("fileInput").addEventListener("change",async t=>{const n=t.target.files?.[0];if(t.target.value="",!!n){wo(!0),nr(.4,"progressBuild");try{const s=await MS(n);et.setModel(s),Ct=null,Wi=null,Ss=n.name,ve("emptyState").classList.add("hidden"),sr(),ir(),go(),en(ot(Fe,"loaded"))}catch(s){console.error(s),en(ot(Fe,"loadFail"),!0)}finally{wo(!1)}}}),ve("bgColor").addEventListener("input",()=>{et.setBackground(ve("bgColor").value),Mi()}),ve("lightPreset").addEventListener("change",()=>{const t=et.setLighting(ve("lightPreset").value);ve("bgColor").value=t,et.setIntensity(Number(ve("lightIntensity").value)),Mi()}),ve("lightIntensity").addEventListener("input",()=>{et.setIntensity(Number(ve("lightIntensity").value)),Mi()}),ve("shadows").addEventListener("change",()=>{et.setShadows(ve("shadows").checked),Mi()}),window.addEventListener("keydown",t=>{t.target.matches("textarea, input, select")||(t.key==="r"&&et.resetCamera(),t.key==="f"&&lu())}),document.fonts?.ready&&await document.fonts.ready;const e=new URLSearchParams(location.search).get("q");if(e)jt.value=e,ei(e,{preset:null});else if(i.prompt)jt.value=i.prompt,ei(i.prompt,{preset:i.presetId||null});else{const t=Ac[0],n=t.prompt[Fe==="ar"?0:1];jt.value=n,ei(n,{preset:t.id})}}bS().catch(i=>console.error(i));
