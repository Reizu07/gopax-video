import React from 'react';
import {Video} from '@remotion/media';
import {Series, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Clip, FPS} from './timeline';

export const Footage: React.FC<{clips: Clip[]; intro?: boolean}> = ({clips,intro=false}) => {
  const frame=useCurrentFrame();
  return <div style={{position:'absolute',left:1220,top:42,width:560,height:996,overflow:'hidden',background:'#252525',scale:interpolate(frame,[0,90],[0.98,1.015],{extrapolateRight:'clamp',extrapolateLeft:'clamp'}),transformOrigin:'center center',boxShadow:'0 20px 55px #133e2420'}}>
    <Series>{clips.map((clip,i)=><Series.Sequence key={i} durationInFrames={Math.round(clip.seconds*FPS)}>
      <Video src={staticFile(clip.src)} trimBefore={Math.round(clip.start*FPS)} muted objectFit="cover" style={{width:'100%',height:'100%'}}/>
    </Series.Sequence>)}</Series>
    {intro?<div style={{position:'absolute',inset:0,border:'1px solid #fff3',pointerEvents:'none'}}/>:null}
  </div>;
};
