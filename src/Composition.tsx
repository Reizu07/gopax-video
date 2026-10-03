import React from 'react';
import {Audio} from "@remotion/media";
import {AbsoluteFill,interpolate,useCurrentFrame,staticFile} from 'remotion';
import {TransitionSeries,linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {Opening} from './Opening';
import {Closing} from './Closing';
import {DemoScene} from './DemoScene';
import {scenes,durationOf,TOTAL_FRAMES} from './timeline';
export const GopaxDemo=()=>{const f=useCurrentFrame();return <AbsoluteFill>
 <Audio src={staticFile('background-voice.m4a')} volume={0.75}/>
 <TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={360}><Opening/></TransitionSeries.Sequence>
  {scenes.map(s=><React.Fragment key={s.id}>
   <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
   <TransitionSeries.Sequence durationInFrames={durationOf(s)}><DemoScene {...s}/></TransitionSeries.Sequence>
  </React.Fragment>)}
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
  <TransitionSeries.Sequence durationInFrames={300}><Closing/></TransitionSeries.Sequence>
 </TransitionSeries>
 <div style={{position:'absolute',left:0,bottom:0,height:6,background:'#90B44C',width:`${interpolate(f,[0,TOTAL_FRAMES-1],[0,100])}%`}}/>
 </AbsoluteFill>};
