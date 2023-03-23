import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addValueOnDisplay, getDisplayValue } from './DataSlice';
import { useSelector } from 'react-redux';

const Form = () => {
    const[inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    
    const textOnScreen = useSelector(getDisplayValue);
   
    

    const onChange = (e) =>{
        setInputValue(e.target.value);
        
    }
    const onFormSubmit= (e) =>{
        e.preventDefault();
        dispatch(addValueOnDisplay(inputValue));
        console.log(inputValue);
        setInputValue('');
    }
   
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type='text' value={inputValue} onChange={onChange}/>
            <button type='submit'>Submit</button>
        </form>

        <div>
            {textOnScreen}
        </div>
    </div>
  )
}

export default Form