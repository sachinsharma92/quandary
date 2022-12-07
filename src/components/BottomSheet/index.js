import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useState,
} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import './index.scss';
import CloseIcon from '../../assets/images/close-icon.svg';

export const BottomSheet = forwardRef(({onClose, ...props}, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsVisible(true),
        close: () => setIsVisible(false),
    }));

    const closeSheet = useCallback(() => {
        setIsVisible(false);
        onClose?.();
    }, [onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{
                        translateY: '100vh',
                    }}
                    animate={{
                        translateY: 0,
                        transition: {duration: 0.8, type: 'spring'},
                    }}
                    exit={{
                        translateY: '100vh',
                        transition: {ease: 'linear'},
                    }}
                    className={'bottom-sheet'}
                >
                    <motion.div
                        onClick={closeSheet}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {duration: 0.5, delay: 0.05},
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className={'background'}
                    />
                    <div className={'content'}>
                        <img
                            onClick={closeSheet}
                            alt={'close-icon'}
                            className={'close-icon'}
                            src={CloseIcon}
                        />
                        {props.children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
