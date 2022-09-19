import React from "react";
import Section from './Section';


function Header(){

    const products = [
        {
          itemName:'Fancy Product',
          price: '$40.00 - $80.00',
          addCard1: 'View options',
          addCard2: 'Add to card',
          sale:'Sale'
          
        },{
          itemName:'Special Item',
          price: '$18.00',
          mute:'$20.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        },{
          itemName:'Sale Item',
          price: '$25.00',
          mute:'$50.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        },{
          itemName:'Popular Item',
          price: '$40.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        },{
          itemName:'Sale Item',
          price: '$25.00',
          mute:'$50.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        },{
          itemName:'Fancy Product',
          price: '$120.00 - $180.00',
          addCard1: 'View options',
          addCard2: 'Add to card',
          sale:'Sale'
          
        },{
          itemName:'Special Item',
          price: '$18.00',
          mute:'$20.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        },{
          itemName:'Popular Item',
          price:  '$40.00',
          addCard1: 'Add to card',
          addCard2: 'View options',
          sale:'Sale'
          
        }
      ];
    return(
        <>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <div className="container py-5 my-5">
            <div className="row">
            {
              products.map((product)=>{
                return <Section productData={product}></Section>
              })
            }
            </div>
          </div>

        </>
    )
}

export default Header