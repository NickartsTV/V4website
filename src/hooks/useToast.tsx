import { toast } from "react-toastify";

const useToast = () => {
    const toastSuccess = (message:string, time:number = 1500) => {
        return toast.success(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
    const toastError = (message:string, time:number = 1500) => {
        return toast.error(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
    const toastInfo = (message:string, time:number = 1500) => {
        return toast.info(message, {
            position: "top-right",
            autoClose: time,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    return { toastSuccess, toastError, toastInfo };
}

export default useToast;