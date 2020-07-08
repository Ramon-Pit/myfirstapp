import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'


import './item-cart.scss'



const ItemCart = (props) => {
    
 const {image, name, price, year, property} = props.location.item
    return(
        <div className="item-cart">
            <div className="item-cart__header">
                <Link to="/list-car">Вернуться</Link>
                <hr />
            </div>
                <div className="container item-cart__top">
                    <div className="row">
                        <div className="col-5">
                            <img src={image} alt="Mercedes S550 4matic" width="100%"/>
                        </div>
                        <div className="col-7">
                            <h3>{name}</h3>
                            <p>Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий. </p>
                        </div> 
                    </div>   

                    <div className="item-cart__center">               
                        <div className="">
                            <label><b>Цвет авто:</b></label>
                            <select>
                                {property.color.map((col, index) =>{
                                    return(
                                    <option key={col}>{col}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className=""></div>
                            <label><b>Год выпуска:</b></label>
                            <span>{year}</span>                      
                        <div className="">
                            <label><b>Тип топлива:</b></label>
                            <span>{property.fuel}</span>
                        </div>
                        <div className="">
                            <label><b>Стоимость:</b></label>
                            <span>{price}$</span>                   
                            </div>
                        <div className="">
                            <button className="btn btn-primary">Беру!!!</button>
                        </div>
                    </div>  

                    

            </div>

                      
        </div>
    )
}

export default ItemCart