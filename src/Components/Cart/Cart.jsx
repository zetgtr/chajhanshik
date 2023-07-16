import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    Button,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight, ScrollView
} from 'react-native';
import style from "./cart.scss"
import {useDispatch, useSelector} from "react-redux";
import {cartSelector} from "../../Store/Cart/selector";
import {DeleteSvg} from "./DeleteSvg";
import {addCartAction, clearCartAction, deleteCartAction, removeCartAction} from "../../Store/Cart/actions";
import {getCartFirebase, setCartFirebase} from "../../API/api";

export const Cart = ({value}) => {
    const {cart} = useSelector(cartSelector)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    const calculateTotal = () => {
        let total = 0;

        cart.forEach((item) => {
            const itemTotal = item.price * item.count;
            total += itemTotal;
        });

        return total;
    };
    useEffect(()=>{
        getCartFirebase(dispatch,setLoading)
    },[dispatch])
    useEffect(()=>{
        if(!loading) setCartFirebase(cart)
    },[cart])
    return <Animated.View style={{ transform: [{ translateX: value.interpolate({ inputRange: [0, 70], outputRange: [0, 70] }) }],
        ...style.cart
    }}  >
        <View style={cart.length > 0 ? style.cart_container_header : style.cart_container_header_none}>
            <Text style={ style.cart_header}>Корзина</Text>
            {cart.length > 0 && <TouchableOpacity onPress={()=>dispatch(clearCartAction())}><Text style={style.cart_header_remove}>Очистить корзину</Text></TouchableOpacity>}
        </View>
        {cart.length > 0 ? (
            <>
                <View style={style.hr}/>
                <ScrollView style={ style.container_product}>
                    {cart.map(item=>(
                    <View key={item.id}>
                        <View  style={style.cart_container}>
                            <View style={style.cart_container_img}>
                                <Image style={style.cart_img} source={{uri: item.img}} />
                                <View style={style.cart_box}>
                                    <View style={style.cart_box_header}>
                                        <Text style={style.cart_box_header_text}>{item.title}</Text>
                                        <TouchableOpacity onPress={()=>dispatch(removeCartAction(item))}><DeleteSvg /></TouchableOpacity>
                                    </View>
                                    <View style={style.cart_box_price}>
                                        <View style={style.cart_box_price_box}>
                                            <View style={style.cart_box_price_container}>
                                                <TouchableOpacity onPress={()=>dispatch(deleteCartAction(item))} style={style.cart_box_price_btn} ><Text style={style.cart_box_price_btn_text}>-</Text></TouchableOpacity>
                                                <Text style={style.cart_box_count} >{item.count}</Text>
                                                <TouchableOpacity onPress={()=>dispatch(addCartAction(item))} style={style.cart_box_price_btn} ><Text style={style.cart_box_price_btn_text}>+</Text></TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={style.cart_box_price_price}>
                                            <Text style={style.cart_box_price_text} >{item.count * item.price} руб</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={style.hr}/>
                    </View>
                    ))}
                </ScrollView>
                <View style={style.hr}/>
                <View style={style.cart_buy_container}>
                    <View style={style.cart_buy_price_box}>
                        <Text>Сумма заказа:</Text>
                        <Text>{calculateTotal()} руб</Text>
                    </View>
                    <TouchableOpacity style={style.cart_buy_btn}><Text style={{color: "white"}}>Оформить заказ</Text></TouchableOpacity>
                </View>
            </>
       ) : (<View style={style.container_none}><Text>Товары отсутствуют</Text></View> ) }

    </Animated.View>
}