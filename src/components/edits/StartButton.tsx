import './startbutton.css'
import { uiValue } from '../../state/ui'
import { useSetRecoilState } from 'recoil'

export default function StartButton() {
  const setUiValue = useSetRecoilState(uiValue);

  return <div className="start-button" onClick={e => setUiValue('timer')}>
    <p>Start</p>
  </div>
}