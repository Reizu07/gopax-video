export type VideoSource = 'gopax-wallet-login-h264.mp4' | 'gopax-app-demo-h264.mp4';
export type Clip = {src: VideoSource; start: number; seconds: number};
export type SceneData = {
  id: string; chapter: string; title: string; body: string;
  note: string; clips: Clip[];
  facts?: [string, string][];
};
export const FPS = 30;
export const scenes: SceneData[] = [
  {id:'Connect',chapter:'01 / Sign in',title:'Connect\nyour wallet.',body:'Choose a wallet, sign in, then enter your name to continue to the home screen.',note:'',clips:[{src:'gopax-wallet-login-h264.mp4',start:0,seconds:8},{src:'gopax-wallet-login-h264.mp4',start:27,seconds:7},{src:'gopax-wallet-login-h264.mp4',start:68,seconds:7}]},
  {id:'AddTrip',chapter:'02 / Add a trip',title:'Start with\na travel ticket.',body:'Open Add trip. Have your ticket or other proof of travel ready to upload.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:15,seconds:12}]},
  {id:'Upload',chapter:'03 / Upload a ticket',title:'Choose a file,\nthen verify it.',body:'Select Choose file, pick your ticket, then select Verify trip.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:20,seconds:12}]},
  {id:'Process',chapter:'03 / Upload a ticket',title:'Your ticket is\nbeing checked.',body:'Wait for verification to finish and the trip details to appear.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:32,seconds:6}]},
  {id:'Result',chapter:'04 / Trip results',title:'Review the estimate.\nCheck your reward.',body:'This demo shows a train journey from Cikarang to Tulungagung.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:58,seconds:8},{src:'gopax-app-demo-h264.mp4',start:80,seconds:8}],facts:[['8.31 kg CO₂e','Estimated trip emissions'],['95 GOPAX','Reward ready to claim']]},
  {id:'Claim',chapter:'05 / Claim a reward',title:'Claim your reward\nthrough your wallet.',body:'Select Claim reward, then confirm the transaction in your wallet.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:66,seconds:22}]},
  {id:'Impact',chapter:'06 / Trip impact',title:'Review your\ntrip impact.',body:'Open Impact to view an impact summary and emissions by transport mode.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:84,seconds:14}]},
  {id:'History',chapter:'07 / History and balance',title:'Journey recorded.\nReward saved.',body:'Review the details under Trips, then open your profile to check your GOPAX balance.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:92,seconds:14}]},
  {id:'Voucher',chapter:'08 / Redeem rewards',title:'Browse available\nvouchers.',body:'Open Redeem vouchers from your profile and choose one of the listed rewards.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:116,seconds:11}]},
  {id:'Redeem',chapter:'08 / Redeem rewards',title:'Confirm the\nredemption.',body:'Follow the wallet prompts until the app shows the redemption result.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:103,seconds:12},{src:'gopax-app-demo-h264.mp4',start:115,seconds:12}]},
  {id:'Success',chapter:'08 / Redeem rewards',title:'Voucher claimed\nsuccessfully.',body:'The app displays a confirmation and the code for the redeemed voucher.',note:'',clips:[{src:'gopax-app-demo-h264.mp4',start:129.5,seconds:6}]},
];
export const durationOf = (s: SceneData) => Math.round(s.clips.reduce((sum,c)=>sum+c.seconds,0)*FPS);
export const TOTAL_FRAMES = 12*FPS + scenes.reduce((sum,s)=>sum+durationOf(s),0) + 10*FPS - (scenes.length+1)*12;
