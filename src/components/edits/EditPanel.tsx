import { RecoilState, useRecoilState } from 'recoil';
import './editpanel.css'

export interface EditPanelProps {
  name: string;
  type: 'time' | 'number';
  backgroundColor: string;
  textColor?: string;
  buttonBackgroundColor: string;
  value: RecoilState<number>;
}

export default function EditPanel(props: EditPanelProps) {
  const [value, setValue] = useRecoilState(props.value);

  const handleChange = (type: 'increment' | 'decrement') => {
    let change = props.type === 'time' ? 5 : 1;
    if (type === 'decrement') {
      change *= -1;
    }
    if (value + change > 0) { 
      setValue(value + change)
    }
  }

  const getFormattedValue = (val: number) => {
    if(props.type === 'number') {
      return val;
    }
    const date = new Date(0);
    date.setSeconds(val);
    return date.toISOString().substr(14,5);
  }

  return <div className='edit-panel' style={{ backgroundColor: props.backgroundColor}}>
    <p className='name' style={{ color: props.textColor }}>{ props.name }</p>
    <p className='value'>{getFormattedValue(value)}</p>
    <div className='buttons' style={{ backgroundColor: props.buttonBackgroundColor}}>
      <div className='button' onClick={e => handleChange('decrement')}>-</div>
      <div className='button' onClick={e => handleChange('increment')}>+</div>
    </div>
  </div>
}