import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    Button,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableHighlightBase, TouchableWithoutFeedback
} from 'react-native';
import style from "./burger.scss"
import {useDispatch, useSelector} from "react-redux";
import {categoriesSelector} from "../../Store/Catalog/selector";
import {useNavigate} from "react-router-native";
import {setProductsCategoryAction} from "../../Store/Catalog/actions";
import {ROUTER} from "../../Router/constants";
import {getCategories} from "../../API/api";


export const Burger = ({value,animationBurger,endBurgerAnimate,animateBurger}) => {
    const dispatch = useDispatch()
    const {categories} = useSelector(categoriesSelector)
    const navigate = useNavigate();

    const closeBurger = () => {
        endBurgerAnimate()
        Animated.timing(animationBurger, {
            toValue: animateBurger ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }
    const productHandler = (id) => {
        closeBurger()
        dispatch(setProductsCategoryAction(id))
        navigate(ROUTER.PRODUCTS);
    }
    useEffect(()=>{
        getCategories(dispatch)
    })
    return <Animated.View style={{ transform: [{ translateX: value.interpolate({ inputRange: [0, 70], outputRange: [0, 70] }) }],
        ...style.burger,
    }}  >
        <View style={[style.container,styles.shadowProp]}>
            <Text style={style.burger_header}>Категории</Text>
            {categories.map(item=>(
                <View key={item.id} style={style.burger_container}>
                    <TouchableOpacity onPress={()=>productHandler(item.id)} style={style.burger_btn}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>

                </View>
                )
            )}
        </View>
        <TouchableWithoutFeedback onPress={closeBurger}  ><View style={style.container_close}></View></TouchableWithoutFeedback>
    </Animated.View>
}

const styles = StyleSheet.create({
    shadowProp: {
        width: "100%",
        backgroundColor: '#fff',
        // borderRadius: 1111,
        elevation:15,
        shadowColor: 'rgb(7,7,7)',
        shadowOffset: { width: 1111, height: 1111 },
        shadowOpacity: 0,
        shadowRadius: 5,

    },
});