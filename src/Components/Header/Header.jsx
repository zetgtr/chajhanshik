import {View, Text, Button, StyleSheet, TouchableOpacity, Animated} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import style from "./header.scss";
import {useState} from "react";
import {CardSvg} from "./CardSvg";
import {Link, useNavigate} from "react-router-native";
import {ROUTER} from "../../Router/constants";
import {useSelector} from "react-redux";
import {cartSelector} from "../../Store/Cart/selector";


export const Header = ({startCartAnimate,animationBurger,endCartAnimate,animateCart,startBurgerAnimate,endBurgerAnimate,animateBurger}) => {

    const {count} = useSelector(cartSelector)

    const navigate = useNavigate();
    const toggleMenu = () => {
        animateBurger ? endBurgerAnimate() : startBurgerAnimate()
        if(animateCart) endCartAnimate()
        Animated.timing(animationBurger, {
            toValue: animateBurger ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    const toggleCart = () => {
        animateCart ? endCartAnimate() : startCartAnimate()
        if(animateBurger) {
            endBurgerAnimate()
            Animated.timing(animationBurger, {
                toValue: animateBurger ? 0 : 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    const firstBar = {
        transform: [
            {
                rotate: animationBurger.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg'],
                }),
            },
            {
                translateX: animationBurger.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 2],
                }),
            },
            {
                translateY: animationBurger.interpolate({
                    inputRange: [0, 1.6],
                    outputRange: [0,18],
                }),
            },
        ],
    };

    const secondBar = {
        opacity: animationBurger.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        }),
    };

    const thirdBar = {
        transform: [
            {
                rotate: animationBurger.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-45deg'],
                }),
            },
            {
                translateX: animationBurger.interpolate({
                    inputRange: [0, 15],
                    outputRange: [0, 1],
                }),
            },
            {
                translateY: animationBurger.interpolate({
                    inputRange: [0,17],
                    outputRange: [0, -180],
                }),
            },
        ],
    };
    return (
        <View style={[style.container,shadow.box]}>
            <TouchableOpacity style={style.touchMenu}  onPress={toggleMenu}>
                <View style={style.containerMenu}>
                    <Animated.View style={[style.barTop, firstBar]}  />
                    <Animated.View style={[style.barButton, secondBar]} />
                    <Animated.View style={[style.barButton, thirdBar]} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(animateBurger) toggleMenu()
                if(animateCart) toggleCart()
                navigate(ROUTER.HOME)
            }}><Text>header</Text></TouchableOpacity>
            <TouchableOpacity onPress={toggleCart}>
                <View style={style.boxBack}>
                    <CardSvg />
                    <View style={style.boxContainerCount}>
                        <Text style={style.boxCount}>{count}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const shadow =  StyleSheet.create({
    box: {
        zIndex: 1000000,
        width: "100%",
        backgroundColor: '#fff',
        // borderRadius: 1111,
        elevation:15,
        shadowColor: 'rgb(7,7,7)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0,
        shadowRadius: 5,
    },
});