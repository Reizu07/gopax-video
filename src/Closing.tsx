import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {colors} from './DemoScene';
export const Closing=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{background:colors.ink,color:colors.paper,fontFamily:'Arial, sans-serif',padding:90}}>
 <div style={{fontSize:38,fontWeight:700}}>gopax.</div>
 <h1 style={{fontFamily:'Georgia, serif',fontSize:88,fontWeight:400,lineHeight:1.12,letterSpacing:-2,margin:'100px 0 70px'}}>One ticket.<br/>Your journey, recorded.</h1>
 <div style={{display:'flex',gap:72}}>{[['01','Upload a ticket','Add proof of travel.'],['02','View the estimate','Review the verification and emissions.'],['03','Claim GOPAX','Confirm the reward in your wallet.']].map(([n,t,b],i)=><div key={n} style={{width:510,borderTop:'2px solid #8EA77D',paddingTop:26,opacity:interpolate(f,[12+i*14,30+i*14],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}><div style={{fontSize:28,color:colors.accent,marginBottom:24}}>{n}</div><div style={{fontSize:42,marginBottom:16}}>{t}</div><div style={{fontSize:29,lineHeight:1.4,color:'#D7E0CD'}}>{b}</div></div>)}</div>
 </AbsoluteFill>};
