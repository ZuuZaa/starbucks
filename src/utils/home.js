import { nanoid } from "nanoid";
import join from 'assets/images/home/join.webp';
import espresso from 'assets/images/home/espresso.jpeg';
import milkshake from 'assets/images/home/milkshake.jpeg';
import burger from 'assets/images/home/burger.png';


export const homeDetails = [
    {
        id: nanoid(),
        img: join,
        color: '#d4e9e2',
        title: 'Spring in your step, Rewards in your cup',
        content: 'Shake up your usual and start earning Rewards —join today!*',
        btnText: 'Join now',
        link: '/join'
    },
    {
        id: nanoid(),
        img: espresso,
        color: '#f6bfd9',
        title: 'Uplifting anytime',
        content: 'Recharge with a lively Brown Sugar Oatmilk or Toasted Vanilla Oatmilk Shaken Espresso—140 calories or less in a grande.',
        btnText: 'Order now',
        link: '/menu'
    },
    {
        id: nanoid(),
        img: milkshake,
        color: '#fff4d4',
        title: 'Oh, so vibrant',
        content: 'Dive into our bold, fruity and refreshing Dragon Drink® with coconutmilk.',
        btnText: 'Order now',
        link: '/menu'
    },
    {
        id: nanoid(),
        img: burger,
        color: '#d4e9e2',
        title: 'Savory and satisfying',
        content: 'The Impossible™ Breakfast Sandwich, featuring an Impossible™ Sausage Patty Made From Plants, is always a great choice.',
        btnText: 'Order now',
        link: '/menu'
    },
]