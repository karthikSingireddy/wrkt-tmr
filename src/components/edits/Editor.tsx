import React, { useState } from 'react';
import './editor.css'
import { useSpeechSynthesis } from "react-speech-kit";
import Time from './Time'
import StartButton from './StartButton';
import EditPanel from './EditPanel';
import { exercisesValue, restValue, roundRestValue, roundsValue, workValue } from '../../state/time';

export default function Editor() {
  return <div className='container'>
    <Time />
    <StartButton />
    <EditPanel name='Work' type='time' value={workValue} backgroundColor='lightgreen' buttonBackgroundColor='lightseagreen'/>
    <EditPanel name='Rest' type='time' value={restValue} backgroundColor='lightgreen' buttonBackgroundColor='lightseagreen'/>
    <EditPanel name='Excercises' type='number' value={exercisesValue} backgroundColor='lightgreen' buttonBackgroundColor='lightseagreen'/>
    <EditPanel name='Rounds' type='number' value={roundsValue} backgroundColor='lightgreen' buttonBackgroundColor='lightseagreen'/>
    <EditPanel name='Round rest' type='time' value={roundRestValue} backgroundColor='lightgreen' buttonBackgroundColor='lightseagreen'/>
  </div>
}