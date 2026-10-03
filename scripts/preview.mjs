import {openBrowser,selectComposition,renderStill} from '@remotion/renderer';
import {bundle} from '@remotion/bundler';
import fs from 'node:fs';
const browser=await openBrowser('chrome',{browserExecutable:'/usr/bin/google-chrome'});
try {
 const page=await browser.newPage({context:()=>null,logLevel:'error',indent:false,pageIndex:0,onBrowserLog:(log)=>{if(log.type==='error')console.log(log)},onLog:()=>{}});
 await page.setViewport({width:1600,height:1000,deviceScaleFactor:1});
 await page.goto({url:'http://localhost:3000/GopaxDemo',timeout:60000});
 await new Promise(r=>setTimeout(r,3000));
 console.log('STUDIO',await page.evaluate(()=>({title:document.title,text:document.body.innerText.slice(0,1400)})));
 await page._client().send('Input.dispatchKeyEvent',{type:'keyDown',key:' ',code:'Space',windowsVirtualKeyCode:32});
 await page._client().send('Input.dispatchKeyEvent',{type:'keyUp',key:' ',code:'Space',windowsVirtualKeyCode:32});
 await new Promise(r=>setTimeout(r,3000));
 const shot=await page._client().send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('out/studio-preview.png',Buffer.from(shot.value.data,'base64'));
 await page.close();
 const url=await bundle({entryPoint:'src/index.ts',onProgress:()=>{}});
 const composition=await selectComposition({serveUrl:url,id:'GopaxDemo',puppeteerInstance:browser});
 console.log('COMPOSITION',composition);
 const frames=[150,660,1200,1560,1800,2200,2660,3030,3460,3820,4240,4750,5130];
 for (const frame of frames){await renderStill({serveUrl:url,composition,frame,output:`out/preview-${frame}.jpg`,imageFormat:'jpeg',puppeteerInstance:browser});console.log('CHECKED',frame);}
 fs.writeFileSync('out/composition.json',JSON.stringify(composition,null,2));
} finally {await browser.close({silent:true});}
