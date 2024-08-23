import React from 'react'
import { buttonStyle, wrapper } from './StatusWarningModal.styled';
interface StatusWarningProps{
    name?: number | null;
    updateStatus?:()=>void;
}
const StatusWarningModal:React.FC<StatusWarningProps> = ({name}) => {
  return (
    <div css={wrapper}>
        <h2>Ви збираєтесь відхилити замовлення!</h2> 
        <p>
        При відхилинні замовлення, буде не дійсним!
        !!!
      </p>
      <p>Підтвердіть відхилиння замовлення:</p>
      <span>{name}</span>
      <button type="button" css={buttonStyle}>
        Підтвердіть
      </button>
    </div>
  )
}

export default StatusWarningModal
/* onClick={() => updateStatus()} */