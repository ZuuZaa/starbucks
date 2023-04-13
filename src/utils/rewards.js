import { nanoid } from "nanoid";
import img_25 from 'assets/images/rewards/025.webp';
import img_100 from 'assets/images/rewards/100.webp';
import img_200 from 'assets/images/rewards/200.webp';
import img_300 from 'assets/images/rewards/300.webp';
import img_400 from 'assets/images/rewards/400.webp';
import burger from 'assets/images/home/burger.png';
export const starters = [
    {
        id: 1,
        img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg",
        title: "Create an account",
        description: "To get started, <a href='#' >join now</a>. You can also <a href='#'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits."
    },
    {
        id: 2,
        img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg",
        title: "Order and pay how you’d like",
        description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways <a href='#'>Learn how</a>"
    },
    {
        id: 3,
        img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg",
        title: "Earn Stars, get Rewards",
        description: "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
    }]


export const favorites = [

    {
        id: nanoid(),
        star: 25,
        img: img_25,
        title: 'Customize your drink',
        text: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.'
    },
    {
        id: nanoid(),
        star: 100,
        img: img_100,
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        text: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.'
    },
    {
        id: nanoid(),
        star: 200,
        img: img_200,
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        text: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.'
    },
    {
        id: nanoid(),
        star: 300,
        img: img_300,
        title: 'Sandwich, protein box or at-home coffee',
        text: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.'
    },
    {
        id: nanoid(),
        star: 400,
        img: img_400,
        title: 'Select Starbucks® merchandise',
        text: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.'
    }
  ]