import { useEffect, RefObject } from "react";

function useOutsideAlerter<T extends HTMLElement>(ref: RefObject<T>, action: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            console.log("unmount")
        };
    }, [ref, action]);
    
}

export default useOutsideAlerter;