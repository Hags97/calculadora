import { Button as MuiButton } from '@mui/material';

export const CustomButton = ({ children, onClick }) => {
   

    return (
        <MuiButton variant="contained" size="large" onClick={ onClick }>
            { children }
        </MuiButton>
    )
}

