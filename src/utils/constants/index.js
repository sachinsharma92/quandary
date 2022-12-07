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
        id: 1,
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
        id: 2,
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
        id: 3,
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
