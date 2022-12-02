export const ANIMATION = {
    ENTRY_ANIMATION: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {duration: 0.5},
        },
        exit: {
            opacity: 0,
        },
    },
    SLIDE_OUT_LEFT: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {duration: 1, delay: 0.1},
        },
        exit: {
            x: '-100vw',
            transition: {ease: 'easeInOut'},
        },
    },
    SLIDE_IN_LEFT: {
        initial: {
            opacity: 0,
            x: '100vw',
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {duration: 1},
        },
        exit: {
            x: '-100vw',
            transition: {ease: 'easeInOut'},
        },
    },
};
