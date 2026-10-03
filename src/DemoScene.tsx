import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Footage} from './Footage';
import {SceneData} from './timeline';
export const colors={paper:'#F4F3E9',ink:'#183E30',muted:'#506358',accent:'#BCD96E'};
export const DemoScene: React.FC<SceneData> = (scene) => {
 const f=useCurrentFrame();
 return<AbsoluteFill
  style={{
   background: colors.paper,
   color: colors.ink,
   fontFamily: 'Arial, sans-serif'
  }}
 >
   <div style={{position:'absolute',top:62,left:84,fontSize:30,fontWeight:700}}>gopax<span style={{color:'#46704B'}}>.</span></div>
   <div style={{position:'absolute',left:84,top:240,width:990,opacity:interpolate(f,[0,15],[0,1],{extrapolateRight:'clamp'}),translate:`0 ${interpolate(f,[0,20],[14,0],{extrapolateRight:'clamp'})}px`}}>
    <div style={{fontSize:27,color:colors.muted,marginBottom:30}}>{scene.chapter}</div>
    <h1 style={{fontFamily:'Georgia, serif',fontWeight:400,fontSize:82,lineHeight:1.08,letterSpacing:-2,whiteSpace:'pre-line',margin:'0 0 34px'}}>{scene.title}</h1>
    <p style={{fontSize:38,lineHeight:1.45,maxWidth:850,margin:0}}>{scene.body}</p>
    {scene.facts?<div style={{display:'flex',gap:65,marginTop:65,borderTop:'2px solid #CBD1BE',paddingTop:28}}>{scene.facts.map(([value,label])=><div key={label}><div style={{fontSize:51,fontWeight:700,letterSpacing:-1}}>{value}</div><div style={{fontSize:26,color:colors.muted,marginTop:10}}>{label}</div></div>)}</div>:null}
   </div>
   <Footage clips={scene.clips}/>
   <div style={{position:'absolute',left:84,bottom:94,width:990,borderLeft:'5px solid #89AB40',paddingLeft:20,fontSize:26,lineHeight:1.45,color:colors.muted}}>{scene.note}</div>
 </AbsoluteFill>;
};
