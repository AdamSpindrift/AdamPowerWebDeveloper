import { useEffect, useState }  from "react";

function ScrollHandler(pos) {

    const [scroll, setScroll] = useState(1);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > pos;

            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            };
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        }
    }, [scroll, setScroll]);

    return scroll;
};

export default ScrollHandler;