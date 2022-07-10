import './time.css'
import { workValue, restValue, exercisesValue, roundsValue, roundRestValue } from "../../state/time";
import { useRecoilValue } from 'recoil';
import { totalTime } from '../../utils/math';

export default function Time() {
  const work = useRecoilValue(workValue);
  const rest = useRecoilValue(restValue);
  const ex = useRecoilValue(exercisesValue);
  const rounds = useRecoilValue(roundsValue);
  const roundRest = useRecoilValue(roundRestValue);

  const time = totalTime(work, rest, ex, rounds, roundRest);
  const date = new Date(0);
  date.setSeconds(time);
  let timeStr = time >= 60 * 60 ? date.toISOString().substr(11,8) : date.toISOString().substr(14,5);

  return <div className="box">
    <h2 className='time-text'>{timeStr}</h2>
  </div>
}