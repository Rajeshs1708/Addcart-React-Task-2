import React, { createContext, useState } from "react";


export const MyValueContext = createContext();

function Section(props) {
    const [card, setcard] = useState(true);
    const [myvalue, setMyValue] = useState(0);

    const handleChange = () => {
        setcard(!card)
        setMyValue(myvalue + 1)
    }

    return (

        <>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="col mb-5">
                    <div className="card h-100">
                        {props.productData.itemName == "Special Item" ? <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{props.productData.sale}</div> : <div></div>}
                        {props.productData.itemName == "Sale Item" ? <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{props.productData.sale}</div> : <div></div>}
                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                        <div className="card-body p-4">
                            <div className="text-center">

                                <h5 className="fw-bolder">{props.productData.itemName}</h5>
                                {props.productData.itemName == "Popular Item" ?
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> : <div></div>
                                }
                                {props.productData.itemName == "Special Item" ?
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div> : <div></div>
                                }

                                <span className="text-muted text-decoration-line-through">{props.productData.mute}</span>
                                {props.productData.price}
                            </div>
                        </div>

                        <MyValueContext.Provider value={{ myvalue }}>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button onClick={handleChange} className="btn btn-outline-dark mt-auto" href="#">{card ? props.productData.addCard1 : props.productData.addCard2}</button></div>
                            </div>
                        </MyValueContext.Provider>

                    </div>
                </div>
            </div>
        </>


    )
}

export default Section