import { useCallback, useMemo, useState } from 'react';

interface useHoverBind {
    onMouseEnter: () => void;
    onMouseLive: () => void;
}

type useHoverResult = [boolean, useHoverBind];

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
