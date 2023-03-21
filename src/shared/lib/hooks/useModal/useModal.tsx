import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface useModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number;
}

export function useModal({
    onClose, isOpen, animationDelay,
}: useModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onkeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onkeydown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onkeydown);
        };
    }, [isOpen, onkeydown]);

    return {
        isClosing,
        isMounted,
        close,
    };
}
