import images from "./images";
import {IoRestaurantOutline} from 'react-icons/io5'
import {MdSchool} from "react-icons/md"
import {BsDribbble, BsYoutube, BsBasket} from 'react-icons/bs'

const transactions = [
    {
        id: 1,
        image: images.card_icon_one,
        title: "Always Protected",
        detail: "Shopping with UNINE is even more secure thanks to Buyer Protection."
    },
    {
        id: 2,
        image: images.card_icon_two,
        title: "Get Reward",
        detail: "You can keep using your favorite card and keep getting rewards."
    },
    {
        id: 3,
        image: images.card_icon_three,
        title: "No Hidden Fees",
        detail: "You will only be charged when selling goods or requesting payment."
    },
    {
        id: 4,
        image: images.card_icon_four,
        title: "Free Shipping",
        detail: "Changed your mind after buying? Send back the item you purchased."
    }
    
]


const expenses = [
    {
        id: 1,
        image: <IoRestaurantOutline />,
        title: "Restaurant",
        date: "Sept 12, 2023",
        amount: "$340.12",
        discount: "$14.12"
    },
    {
        id: 2,
        image: <BsDribbble />,
        title: "Dribble",
        date: "Aug 29, 2023",
        amount: "$120.12",
        discount: "$10.02"
    },
    {
        id: 3,
        image: <BsYoutube />,
        title: "YouTube",
        date: "July 06, 2023",
        amount: "$90.00",
        discount: "$00.00"
    },{
        id: 4,
        image: <BsBasket />,
        title: "Picnic",
        date: "June 20, 2023",
        amount: "$40.12",
        discount: "$10.02"
    },{
        id: 5,
        image: <MdSchool />,
        title: "School",
        date: "May 29, 2023",
        amount: "$1200.12",
        discount: "$50.99"
    },
]

// const partners = [
//     {
//         id: 1,
//         image: images.chainlink,
//         link: "chainlink.com"
//     },
//     {
//         id: 2,
//         image: images.floodlight,
//         link: "google.com"
//     },
//     {
//         id: 3,
//         image: images.kr1,
//         link: "google.com"
//     },
//     {
//         id: 4,
//         image: images.lemonade,
//         link: "google.com"
//     },
//     {
//         id: 5,
//         image: images.pula,
//         link: "google.com"
//     },
// ]

// const faq = [
//     {
//         question: 'Question 1',
//         answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
//     },
//     {
//         question: 'Question 2',
//         answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
//     },
//     {
//         question: 'Question 3',
//         answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
//     },
//     {
//         question: 'Question 4',
//         answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
//     },
//     {
//         question: 'Question 5',
//         answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla tenetur corporis minus deleniti incidunt culpa quaerat alias exercitationem, sit consectetur esse quas error quod maxime optio nostrum molestiae! Tempore?'
//     }
// ]
export default { transactions, expenses };