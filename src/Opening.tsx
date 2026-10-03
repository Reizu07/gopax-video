import {AbsoluteFill,interpolate,useCurrentFrame} from 'remotion';
import {Footage} from './Footage';
import {colors} from './DemoScene';
export const Opening=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{background:colors.paper,color:colors.ink,fontFamily:'Arial, sans-serif'}}>
 <div style={{position:'absolute',left:84,top:230,width:1040,opacity:interpolate(f,[0,22],[0,1],{extrapolateRight:'clamp'})}}>
  <div style={{fontSize:124,fontWeight:700,letterSpacing:-7,marginBottom:30}}>gopax.</div>
  <h1 style={{fontFamily:'Georgia, serif',fontSize:76,fontWeight:400,lineHeight:1.13,letterSpacing:-2,margin:'0 0 36px'}}>From a travel ticket<br/>to an impact estimate.</h1>
  <p style={{fontSize:37,lineHeight:1.45,width:900}}>Gopax uses your travel ticket to show estimated emissions and GOPAX rewards.</p>
 </div>
 <Footage clips={[{src:'gopax-app-demo-h264.mp4',start:0,seconds:12}]} intro/>
 </AbsoluteFill>};
