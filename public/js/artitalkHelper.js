const artitalkHelper={headers:{},api:{get:"https://ssapi.esmyy.com/1.1/classes/moments",post:"https://ssapi.esmyy.com/1.1/classes/moments",login:"https://ssapi.esmyy.com/1.1/login"},onReady:[],getElement:e=>document.querySelector(e),pureSelector:e=>e.replace(/[\.#]/g,""),getTime(e){const t=new Date(e);return`${t.getFullYear()}-${["0",t.getMonth()+1].join("").slice(-2)}-${["0",t.getDay()+1].join("").slice(-2)} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`},init(){const{appId:e,appKey:t,serverUrls:s}=window.hexoHelper.get_leancloud();new Artitalk({appId:e,appKey:t,serverUrls:s}),this.listen()},register(e){e.onReady&&(this.options.onReady.push(e.onReady),this.headers&&e.onReady(this.headers))},listen(){window.leancloudRequestData?this.onReadyToLoad(leancloudRequestData):window.onLeancloudReady=this.onReadyToLoad.bind(this)},onReadyToLoad(e){this.headers=e,this.onReady.forEach((t=>{t(e)}))},getMoments(e){const t=e.pageSize,s=(e.pageNum-1)*e.pageSize,r=`${this.api.get}?where=%7B%7D&limit=${t}&skip=${s}&order=-createdAt`;return this.fetch(r,{headers:this.headers})},fetch:(...e)=>fetch.apply(e).then((e=>e.json())).then((e=>e.error?(toastr.error(e.error),Promise.reject(new Error(e.error))):Promise.resolve(e))),login(e){return this.fetch(this.api.login,{method:"POST",headers:this.headers,body:JSON.stringify(e)})},postMoment(e){return this.fetch(this.api.post,{method:"POST",headers:{...this.headers},body:JSON.stringify(e)})}};window.artitalkHelper=artitalkHelper,artitalkHelper.init();