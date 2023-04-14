import { nanoid } from "nanoid";
import img_25 from 'assets/images/rewards/025.webp';
import img_100 from 'assets/images/rewards/100.webp';
import img_200 from 'assets/images/rewards/200.webp';
import img_300 from 'assets/images/rewards/300.webp';
import img_400 from 'assets/images/rewards/400.webp';
import fun from 'assets/images/rewards/1-fun-freebies.webp';
import fun_1 from 'assets/images/rewards/1A.webp';
import fun_2 from 'assets/images/rewards/1B.webp';
import fun_3 from 'assets/images/rewards/1C.webp';
import order from 'assets/images/rewards/2-order-and-pay-ahead.webp';
import order_1 from 'assets/images/rewards/2A.webp';
import order_2 from 'assets/images/rewards/2B.webp';
import get_free from 'assets/images/rewards/3-get-to-free-faster.webp';
import get_free_1 from 'assets/images/rewards/3A.webp';
import get_free_2 from 'assets/images/rewards/3B.webp';
import get_free_3 from 'assets/images/rewards/3C.webp';
import cash_1A from 'assets/images/rewards/1_A.png';
import cash_1B from 'assets/images/rewards/1_B.webp';
import cash_2A from 'assets/images/rewards/2_A.png';
import cash_2B from 'assets/images/rewards/1_B.webp';



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


  export const extras = [
    {
        id: nanoid(),
        img: fun,
        title: 'Fun freebies',
        text: 'Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.',
        items: [
            {
                id: nanoid(),
                img: fun_1,
                title: 'Free food, drinks & more',
                text: 'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.',
            },
            {
                id: nanoid(),
                img: fun_2,
                title: 'Complimentary birthday treat',
                text: 'Every year on your birthday get a free drink or food item of your choice.',
            },
            {
                id: nanoid(),
                img: fun_3,
                title: 'Brewed coffee & tea refills on us',
                text: 'More Caffè Verona® Blend, please. We’re happy to refill your hot cup while you’re in the store. Just ask.',
            }
        ]
    },
    {
        id: nanoid(),
        img: order,
        title: 'Order & pay ahead',
        text: 'Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.',
        items: [
            {
                id: nanoid(),
                img: order_1,
                title: 'Tap, go',
                text: 'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.',
            },
            {
                id: nanoid(),
                img: order_2,
                title: 'Just for you',
                text: 'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.',
            }
        ]
    },
    {
        id: nanoid(),
        img: get_free,
        title: 'Get to free faster',
        text: 'Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.',
        items: [
            {
                id: nanoid(),
                img: get_free_1,
                title: 'Bonus Star challenges',
                text: 'Rack up the Stars with regular opportunities to get rewarded for what you love.',
            },
            {
                id: nanoid(),
                img: get_free_2,
                title: 'Double Star Days',
                text: 'Watch for those special days where you’ll earn twice the Stars on almost everything.',
            },
            {
                id: nanoid(),
                img: get_free_3,
                title: 'Member-only games',
                text: 'Play for a chance to win exclusive prizes, free food and drinks, and more.',
            }
        ]
    },
  ]


export const cash = [
    {
        id: nanoid(),
        title: '1★Star per dollar',
        description: 'Pay as you go',
        items: [
            {
                id: nanoid(),
                title:'Scan and pay separately',
                text:'Use cash or credit/debit card at the register.',
                img: cash_1A 
            },
            {
                id: nanoid(),
                title:'Save payment in the app',
                text:'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.',
                img: cash_1B
            }
        ]
    },
    {
        id: nanoid(),
        title: '2★Stars per dollar',
        description: 'Add funds in the app',
        items: [
            {
                id: nanoid(),
                title:'Preload',
                text:'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
                img: cash_2A
            },
            {
                id: nanoid(),
                title:'Register your gift card',
                text:'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.',
                img: cash_2B
            }
        ]
    }
]