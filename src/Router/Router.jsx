import {Animated, Button, Dimensions, ScrollView, StyleSheet, View} from "react-native";
import {NativeRouter, Route, Routes} from "react-router-native";
import {ROUTER} from "./constants";
import {Home} from "../Pages/Home";
import {Header} from "../Components/Header/Header";
import {Burger} from "../Components/Burger/Burger";
import {useRef, useState} from "react";
import {Products} from "../Pages/Products";
import {Cart} from "../Components/Cart/Cart";
import {GestureHandlerRootView, PanGestureHandler, State} from 'react-native-gesture-handler';

const Router = () => {
    const valueBurger = useRef(new Animated.Value(0)).current
    const valueCart = useRef(new Animated.Value(1)).current
    const [animateBurger,setAnimateBurger] = useState(false)
    const [animateCart,setAnimateCart] = useState(false)
    const { width } = Dimensions.get('window');
    const [animationBurger] = useState(new Animated.Value(0));
    const startBurgerAnimate = () => {
        setAnimateBurger(true)
        Animated.timing(valueBurger, { toValue: width, useNativeDriver: true, duration: 500 }).start()
    }
    const endBurgerAnimate = () => {
        setAnimateBurger(false)
        Animated.timing(valueBurger, { toValue: -width, useNativeDriver: true, duration: 500 }).start()
    }
    const startCartAnimate = () => {
        setAnimateCart(true)
        Animated.timing(valueCart, { toValue: -width, useNativeDriver: true, duration: 500 }).start()
    }
    const endCartAnimate = () => {
        setAnimateCart(false)
        Animated.timing(valueCart, { toValue: width, useNativeDriver: true, duration: 500 }).start()
    }

    return (
        <NativeRouter>
            <Header
                startBurgerAnimate={startBurgerAnimate}
                animationBurger={animationBurger}
                endBurgerAnimate={endBurgerAnimate}
                animateBurger={animateBurger}
                startCartAnimate={startCartAnimate}
                endCartAnimate={endCartAnimate}
                animateCart={animateCart}
            />

            <Burger value={valueBurger} animationBurger={animationBurger} animateBurger={animateBurger} endBurgerAnimate={endBurgerAnimate}/>

            <Cart value={valueCart}/>
            <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={style.container}>
                {/*<PanGestureHandler*/}
                {/*    onGestureEvent={onGestureEvent}*/}
                {/*    onHandlerStateChange={onHandlerStateChange}*/}
                {/*>*/}
                    <Routes>
                        <Route
                            exact
                            path={ROUTER.HOME}
                            element={
                                <Home />
                            }
                        />
                        <Route
                            exact
                            path={ROUTER.PRODUCTS}
                            element={
                                <Products />
                            }
                        />
                    </Routes>
                {/*</PanGestureHandler>*/}
            </View>
            </GestureHandlerRootView>
        </NativeRouter>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        // width: 100,
        // alignItems: "center",
        // justifyContent: "center",
        height: 100,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: '100%',
        backgroundColor: 'white'
    }
});


export default Router;