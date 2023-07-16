import {Categories} from "../Components/Categories/Categories";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {categoriesSelector} from "../Store/Catalog/selector";
import style from "./products.scss"
import {addCartAction} from "../Store/Cart/actions";

export const Products = () => {
    const {productCategory} = useSelector(categoriesSelector)
    const dispatch = useDispatch()
    return (
        <ScrollView style={style.container}>
            {/*<Categories />*/}
            {productCategory.map(product=>(
                <View key={product.id} style={style.product_box}>
                    <Image style={style.product_img} source={{uri: product.img}} />
                    <View style={style.product_box_container_text}>
                        <Text style={style.product_box_title}>{product.title}</Text>
                        <Text style={style.product_box_desc}>{product.desc}</Text>
                        <View style={style.product_box_container_price}>
                            <Text style={style.product_box_container_price_text}>{product.price} руб</Text>
                            <TouchableOpacity onPress={()=>dispatch(addCartAction(product))} style={style.product_box_container_price_btn}>
                                <Text style={{color: "#fff"}}>Купить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}