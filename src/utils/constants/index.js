import FarmerImage from '../../assets/images/farmer.png';
import TeacherImage from '../../assets/images/teacher.png';
import DoctorImage from '../../assets/images/doctor.png';
import WifeImage from '../../assets/images/housewife.png';
import GuardImage from '../../assets/images/guard.png';
import LandlordImage from '../../assets/images/landlord.png';
import Cage from '../../assets/images/cage.svg';
import LandlordDp from '../../assets/images/landlord-profile.png';
import Poison from '../../assets/images/poison.svg';
import HousewifeDp from '../../assets/images/housewife-profile.png';
import Fence from '../../assets/images/fence.svg';
import GuardDp from '../../assets/images/guard-profile.png';

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
    REVEAL: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {duration: 0.5, delay: 0.25},
        },
        exit: {
            opacity: 0,
        },
    },
};
export const QUESTIONS = [
    {
        dialog: 'Foxes are extremely clever and dangerous.',
        name: 'Ramesh',
        designation: 'Farmer',
        age: '28 yrs',
        characterImage: FarmerImage,
    },
    {
        dialog: 'We should build a good trap quickly. I have full confidence in our hunters.',
        name: 'Suresh',
        designation: 'Landlord',
        age: '32 yrs',
        characterImage: LandlordImage,
    },
    {
        dialog: 'Whatever we decide, harming animals would be very wrong.',
        name: 'Sunita',
        designation: 'Teacher',
        age: '25 yrs',
        characterImage: TeacherImage,
    },
    {
        dialog: 'These foxes can do a lot of damage. We should poison them.',
        name: 'Aasha',
        designation: 'Housewife',
        age: '35 yrs',
        characterImage: WifeImage,
    },
    {
        dialog: 'The saliva of wild foxes can be used to make medicines.',
        name: 'Rakesh',
        designation: 'Doctor',
        age: '30 yrs',
        characterImage: DoctorImage,
    },
    {
        dialog: 'We should build a strong fence to protect the sheep. This is a long-term solution.',
        name: 'Nilesh',
        designation: 'Guard',
        age: '22 yrs',
        characterImage: GuardImage,
    },
];
export const OPTIONS = ['Fact', 'Opinion', 'Idea'];
export const SOLUTIONS = [
    {
        id: 'trap',
        icon: Cage,
        label: 'Trap the foxes',
        isExpanded: true,
        readMoreContent: {
            profilePicture: LandlordDp,
            comment:
                '“We should build a good trap quickly. I have full confidence in our hunters.”',
            name: 'Suresh •',
            detail: 'Landlord • 32 yrs',
        },
    },
    {
        id: 'poison',
        icon: Poison,
        label: 'Poison the foxes',
        readMoreContent: {
            profilePicture: HousewifeDp,
            comment:
                '“These foxes can do a lot of damage. We should poison them.”',
            name: 'Aasha •',
            detail: 'Housewife • 35 yrs',
        },
    },
    {
        id: 'fence',
        icon: Fence,
        label: 'Build a fence',
        readMoreContent: {
            profilePicture: GuardDp,
            comment:
                '“We should build a strong fence to protect the sheep. This is a long-term solution.”',
            name: 'Nilesh •',
            detail: 'Shopkeeper • 28 yrs',
        },
    },
];
export const VILLAGERS_OPINIONS = {
    trap_poison: [
        {
            villagerName: 'Ramesh',
            characterImage: FarmerImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'It’ll take a long time to build a trap. More sheep might get attacked!',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'poison',
                    opinion:
                        'Yeah let’s poison them. This will scare the foxes away from our village.',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
            ],
        },
        {
            villagerName: 'Nilesh',
            characterImage: GuardImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Foxes are very clever and can easily escape any traps.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'poison',
                    opinion:
                        'I agree, we need to act fast. Wild foxes can attack our children too!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
            ],
        },
        {
            villagerName: 'Sunita',
            characterImage: WifeImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Trapping a few foxes will not eliminate the entire threat.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'poison',
                    opinion:
                        'This is wrong! We should not upset the balance of nature!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
            ],
        },
        {
            villagerName: 'Rakesh',
            characterImage: DoctorImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Yes! If we trap them, the whole village will benefit from the medicines.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'poison',
                    opinion:
                        'I don’t support this. Killing them seems too extreme!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
            ],
        },
    ],
    trap_fence: [
        {
            villagerName: 'Ramesh',
            characterImage: FarmerImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'It’ll take a long time to build a trap. More sheep might get attacked!',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'A fence will be expensive. We can use the money to prepare for winter.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Aasha',
            characterImage: WifeImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Foxes are very clever and can easily escape any traps.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'The fence will have to be strong enough to keep the foxes out.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Sunita',
            characterImage: TeacherImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Trapping a few foxes will not eliminate the entire threat.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'Perfect! We can save the sheep without harming any animals.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Rakesh',
            characterImage: DoctorImage,
            opinions: [
                {
                    id: 'trap',
                    opinion:
                        'Yes! If we trap them, the whole village will benefit from the medicines.',
                    icon: Cage,
                    label: 'Trap the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'This will save the sheep, but I will not be able to make medicines.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
    ],
    poison_fence: [
        {
            villagerName: 'Ramesh',
            characterImage: FarmerImage,
            opinions: [
                {
                    id: 'poison',
                    opinion:
                        'Yeah let’s poison them. This will scare the foxes away from our village.',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'A fence will be expensive. We can use the money to prepare for winter.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Aasha',
            characterImage: WifeImage,
            opinions: [
                {
                    id: 'poison',
                    opinion:
                        'I agree, we need to act fast. Wild foxes can attack our children too!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'A fence will take a lot of time! We won’t feel safe till it’s ready.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Sunita',
            characterImage: TeacherImage,
            opinions: [
                {
                    id: 'poison',
                    opinion:
                        'This is wrong! We should not upset the balance of nature!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'Perfect! We can save the sheep without harming any animals.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
        {
            villagerName: 'Rakesh',
            characterImage: DoctorImage,
            opinions: [
                {
                    id: 'poison',
                    opinion:
                        'I don’t support this. Killing them seems too extreme!',
                    icon: Poison,
                    label: 'Poison the foxes',
                },
                {
                    id: 'fence',
                    opinion:
                        'This will save the sheep, but I will not be able to make medicines.',
                    icon: Fence,
                    label: 'Build a fence',
                },
            ],
        },
    ],
};
export const FINAL_DECISIONS = {
    trap_poison: [
        {
            id: 'trap',
            decision:
                'Some villagers feel that a trap could be easy to build, but others feel the foxes might escape it',
            icon: Cage,
            label: 'Trap the foxes',
        },
        {
            id: 'poison',
            decision:
                'Some villagers feel that poisoning the foxes will completely eliminate the threat while others feel that it might be cruel and risky.',
            icon: Poison,
            label: 'Poison the foxes',
        },
    ],
    trap_fence: [
        {
            id: 'trap',
            decision:
                'Some villagers feel that a trap could be easy to build, but others feel the foxes might escape it',
            icon: Cage,
            label: 'Trap the foxes',
        },
        {
            id: 'fence',
            decision:
                'Some villagers feel that building a fence would be a long-term solution, while others feel that it would be too costly and time-consuming.',
            icon: Fence,
            label: 'Build a fence',
        },
    ],
    poison_fence: [
        {
            id: 'fence',
            decision:
                'Some villagers feel that building a fence would be a long-term solution, while others feel that it would be too costly and time-consuming.',
            icon: Fence,
            label: 'Build a fence',
        },
        {
            id: 'poison',
            decision:
                'Some villagers feel that poisoning the foxes will completely eliminate the threat while others feel that it might be cruel and risky.',
            icon: Poison,
            label: 'Poison the foxes',
        },
    ],
};
export const IMPACTS = {
    poison: {
        icon: Poison,
        label: 'Poison the foxes',
        heading:
            'Three months later... A few foxes ate the poisoned bait and died.',
        statement:
            'But the attacks didn’t stop. A few sheep got poisoned as well.',
        extendedSuggestions: [
            {
                id: 1,
                text: 'Do nothing and wait some more time patiently.',
            },
            {
                id: 2,
                text: 'Increase the quantity of bait to kill more foxes.',
            },
            {
                id: 3,
                text: 'Build traps to capture the foxes as the poison is causing more harm.',
            },
            {
                id: 4,
                text: 'Start building a strong fence to keep the sheep safe inside.',
            },
        ],
    },
    fence: {
        icon: Fence,
        label: 'Build a fence',
        heading:
            'Three months later... It took a long time to build the fence but it was ready before the winter.',
        statement:
            'The sheep are well protected now and the attacks have reduced. But some foxes are still around and they can be a threat to the villagers.',
        extendedSuggestions: [
            {
                id: 1,
                text: 'Do nothing and wait, the foxes will slowly leave as they can’t hunt anymore.',
            },
            {
                id: 2,
                text: 'Build traps to capture the foxes because otherwise, they will never leave.',
            },
            {
                id: 3,
                text: 'Start poisoning the foxes because they are a big threat to the villagers.',
            },
            {
                id: 4,
                text: 'Try a new approach for scaring the remaining foxes away.',
            },
        ],
    },
    trap: {
        icon: Cage,
        label: 'Trap the foxes',
        heading:
            'Three months later... A few foxes got trapped and the attacks stopped for a while.',
        statement:
            'The good thing is the doctor was able to make the medicine. But the foxes have figured how to avoid traps and the attacks have started again.',
        extendedSuggestions: [
            {
                id: 1,
                text: 'Do nothing and wait some more time patiently.',
            },
            {
                id: 2,
                text: 'Start from scratch and build a better, stronger trap.',
            },
            {
                id: 3,
                text: 'Start leaving some poisoned bait out because the traps are not perfect.',
            },
            {
                id: 4,
                text: 'Start building a strong fence to keep the sheep safe inside.',
            },
        ],
    },
};
