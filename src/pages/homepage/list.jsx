import React from 'react'
import { Container } from 'react-bootstrap'

function List() {
const lists=[
{
    id:0,
    names:"david",
    class:"hero",
    phone:"samsung 26 ultra 512gb,iphone 17 promax 512gb, ipad pro m5 512gb, samsung tab s11 ultra 512gb,asus zephyrus g18 5090 32gb 2tb,macbook m5 max 128gb 4tb , ",
    balance:"700trillondollars",
    car:"bmw m5 e90, porsche gt3rs, toyato supra, rolls royce cullian"
},
{
    id:1,
    names:"rose",
    class:"civilian",
    balance:"700dollars",
    phone:"iphone 17 promax"
},
{
    id:2,
    names:"xavier",
    class:"villan",
    balance:"70billondollars",
    phone:"samsung 26 ultra"
},
]
const listing = lists.map((list,id) =>(
        <p key={id} style={{
            backgroundColor:id===0 ?"red":" black",color:"white"
        }}> i am {list.names},My role {list.class}, i have {list.balance} in my account and i use {list.phone},id===0 " my car is the {list.car}"</p>
    ))
  return (
    <Container>
        <div>
            <p>{listing}</p>
        </div>
    </Container>
  )
}

export default List
