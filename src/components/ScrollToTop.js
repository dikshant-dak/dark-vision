import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathnamne } = useLocation;

    useEffect(
        () => {
            window.scrollTo(0,0);
        },
        [pathnamne]
    );
    return null;
}