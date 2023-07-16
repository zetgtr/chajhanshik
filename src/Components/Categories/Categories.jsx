import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories} from "../../API/api";
import {categoriesSelector} from "../../Store/Catalog/selector";
import {Image, View, Text, TouchableOpacity} from "react-native";
import style from "./categories.scss"
import Svg, {G, Path} from "react-native-svg";
import {useNavigate} from "react-router-native";
import {ROUTER} from "../../Router/constants";
import {setProductsCategoryAction} from "../../Store/Catalog/actions";
export const Categories = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(categoriesSelector)
    const navigate = useNavigate();
    const productHandler = (id) => {
        dispatch(setProductsCategoryAction(id))
        navigate(ROUTER.PRODUCTS);
    }
    useEffect(()=>{
        getCategories(dispatch)
    })
    return (
        <View style={style.category_container}>
            {categories.map(category=>(
                    <TouchableOpacity key={category.id} onPress={()=>productHandler(category.id)} style={style.category_box} >
                        <Image  style={style.image} source={{uri: category.img}} />
                    </TouchableOpacity>
                )
            )}
        </View>
    )
}
