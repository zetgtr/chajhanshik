import {ScrollView, View} from "react-native";
import style from "./home.scss"
import {CarouselHome} from "../Components/Carusel/CarouselHome";
import {Categories} from "../Components/Categories/Categories";
export const Home = () => {
    return (
        <ScrollView style={style.container}>
            <CarouselHome />
            <Categories />
        </ScrollView>
    )
}