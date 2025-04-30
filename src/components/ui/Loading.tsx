import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SimpleBackdrop=({
    show = true,
    text = ""
} : {
    show: boolean,
    text: string
})=> {
    
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: '9999999999'}}
                open={show}
            >
                <CircularProgress color="inherit" />
                <p>{text}</p>
            </Backdrop>
        </div>
    );
}

export default SimpleBackdrop;