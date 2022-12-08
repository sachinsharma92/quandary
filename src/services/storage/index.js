const ROOT_KEY = '@quandary';
const LS_KEY = {
    user_choices: ROOT_KEY + ':user_choices',
};

const set = {
    userChoices: (data) => {
        localStorage.setItem(
            LS_KEY.user_choices,
            JSON.stringify({
                user_choices: data,
            }),
        );
    },
};

const fetch = {
    userChoices: () => {
        const data = localStorage.getItem(LS_KEY.user_choices);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.user_choices;
            } catch (err) {
                console.log(err);
            }
        }
    },
};

const destroy = {
    userChoices: () => {
        localStorage.removeItem(LS_KEY.user_choices);
    },
    all: () => {
        localStorage.removeItem(LS_KEY.user_choices);
    },
};

export const storage = {
    set,
    fetch,
    destroy,
};
