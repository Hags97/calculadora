import { Display } from './Display';
import { CustomButton } from './Button';
import { Grid } from '@mui/material';
import { useState } from 'react';
import '../styles/App.css';
//import { evaluate } from 'mathjs';

export const App = () => {

    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = ( value ) => {
        setDisplayValue( displayValue + value);
    }

    const handleClear = () =>{
        setDisplayValue('');
    }

    const handleResult = () => {
        if (displayValue) {
            try {
                const result = eval(displayValue); // Utilizamos la función eval() para evaluar la expresión
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        }
        
    }

  return (
    <>    
    <div className="calculadora">
        <Display value = { displayValue } />
        <div className="buttons">
        <Grid container spacing={4}>
            <Grid item xs = {3} >
                <CustomButton onClick={ ()=> handleButtonClick('1') }>1</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('2') }>2</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('3') }>3</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('/') }>/</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('4') }>4</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('5') }>5</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('6') }>6</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('+') }>+</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('7') }>7</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('8') }>8</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('9') }>9</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('-') }>-</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('0') }>0</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={ handleClear }>C</CustomButton>
            </Grid>

            <Grid item xs = {3}>
                <CustomButton onClick={handleResult}>=</CustomButton> 
            </Grid>
            <Grid item xs = {3}>
                <CustomButton onClick={ ()=> handleButtonClick('*') }>X</CustomButton>
            </Grid>


        </Grid>
        </div>
        
    </div>
    </>
  )
}
