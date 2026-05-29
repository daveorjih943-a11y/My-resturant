import { Container } from "react-bootstrap"

const Sectionfive =() => {
const Food =[
    {
        id:1,
        food:"Pork Tenderloin in Green Pepper",
        text:"Pork/ Tenderloin/ Green Pepper",
        price:20
    },
    {
        id:2,
        food:"Shrimp with Garlic",
        text:"Pork/ Tenderloin/ Green Pepper",
        price:17
    },
    {
        id:3,
        food:"Wild Mushroom with Chicken",
        text:"Pork/ Tenderloin/ Green Pepper",
        price:20
    },
    {
        id:4,
        food:"Oyster wih baked Potatoes",
        text:"Pork/ Tenderloin/ Green Pepper",
        price:20
    },
    {
        id:5,
        food:"Roast Pork ",
        text:"Pork/ Tenderloin/ Green Pepper",
        price:17
    },
]

const listFood = Food.map((foods,id)=> (
<p key={id}> {foods.food} <br /><span className="box-span">{foods.text}</span> <span className="box-span1">${foods.price}</span> <div className="ordernow">Order Now</div></p>))


    return (
    <Container>
        <div className="sect5">
           
           
            <div className="box" >
                <h1>Starter</h1>
               {listFood}
             </div>
           
            <div className="box">
                <h1>Main</h1>
                {listFood}
             </div>
           
            <div className="box" >
                <h1>Dessert</h1>
                {listFood}
             </div>
           
        </div>
    </Container>
  )
}

export default Sectionfive

