import './time.css'
import { workValue, restValue, exercisesValue, roundsValue, roundRestValue } from "../../state/time";
import { useRecoilValue } from 'recoil';

export default function Time() {
  const work = useRecoilValue(workValue);
  const rest = useRecoilValue(restValue);
  const ex = useRecoilValue(exercisesValue);
  const rounds = useRecoilValue(roundsValue);
  const roundRest = useRecoilValue(roundRestValue);

  const time = ((((work + rest) * ex) + roundRest) * rounds) - roundRest;
  console.log(time);
  const date = new Date(0);
  date.setSeconds(time);
  let timeStr = date.toISOString().substr(11,8);

  return <div className="box">
    <h2 className='time-text'>{timeStr}</h2>
  </div>
}