import './index.css';
import {Composition,Folder} from 'remotion';
import {GopaxDemo} from './Composition';
import {DemoScene} from './DemoScene';
import {Opening} from './Opening';
import {Closing} from './Closing';
import {scenes,durationOf,TOTAL_FRAMES} from './timeline';
export const RemotionRoot=()=> <>
 <Composition id="GopaxDemo" component={GopaxDemo} durationInFrames={TOTAL_FRAMES} fps={30} width={1920} height={1080}/>
 <Folder name="Scenes">
  <Composition id="Opening" component={Opening} durationInFrames={360} fps={30} width={1920} height={1080}/>
  {scenes.map(s=><Composition key={s.id} id={s.id} component={DemoScene} defaultProps={s} durationInFrames={durationOf(s)} fps={30} width={1920} height={1080}/>)}
  <Composition id="Closing" component={Closing} durationInFrames={300} fps={30} width={1920} height={1080}/>
 </Folder>
 </>;
