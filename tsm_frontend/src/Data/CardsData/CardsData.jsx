import {UilEstate, UilClipboardAlt, UilChart, } from '@iconscout/react-unicons'


export const CardsData =[

{
    title: 'Shipments',
    color: {
        backGround: 'Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
        boxShodow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 70,
    value: '25,970',
    icon: UilEstate,
    series:[{
        name: 'Shipments',
        data: [10, 20, 30, 40, 12, 14, 5, 20, 5],
    }]
},
{
    title: 'Moves',
    color: {
        backGround: 'Linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
        boxShodow: '0px 10px 20px 0px #FDC0C7',
    },
    barValue: 28,
    value: '19,864',
    icon: UilEstate,
    series:[{
        name: 'Moves',
        data: [10, 20, 30, 40, 12, 14, 5, 20, 5],
    }]
},
{
    title: 'Paid',
    color: {
        backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    value: '49,650',
    icon: UilEstate,
    series:[{
        name: 'Paid',
        data: [10, 20, 30, 40, 12, 14, 5, 20, 5],
    }]
},


];