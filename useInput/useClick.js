export const useClick = (onClick) => {
    const ref = useRef();
    const element = ref.current;
    useEffect(() => {
        if (typeof onClick !== "function") {
            return;
        }
        if (element) {
            element.addEventListner("click", onClick);
        }
        return () => {
            if (element) {
                element.removeEventListner("click", onClick);
            }
        };
    }, []);
    if (typeof onClick !== "object") {
        return;
    }
    return ref;
};