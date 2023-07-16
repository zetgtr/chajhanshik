import axios from "axios";
import {firebase} from "@react-native-firebase/database";
import {getCartAction} from "../Store/Cart/actions";
import messaging from "@react-native-firebase/messaging";

const firebaseDatabase = firebase.app().database("https://chayhanchik-c5599-default-rtdb.europe-west1.firebasedatabase.app/");
function api(url, fun) {
    axios
        .get(url)
        .then(({data}) => fun(data))
        .catch((error) => {
            console.log(error);
        });
}


export const getCategories = (dispatch) => {
    api('https://fakestoreapi.com/products/categories', (data) => {
        // console.log(data)
        // let posters = [];
        // res?.data?.map((element, index) => {
        //     posters[index] = setDataPoster(element, index);
        // });
        // dispatch(setAllPostersAction(posters));
    });
};

export const getCartFirebase = async (dispatch,setLoading) => {
    const token = await messaging().getToken()
    firebaseDatabase.ref("/cart/"+token).once('value')
        .then(snapshot => {
            const cart = snapshot.val()
            if (cart)
                dispatch(getCartAction(cart));
            else
                dispatch(getCartAction([]));
            setLoading(false)
        })
}

export const setCartFirebase = async (cart) => {
    const token = await messaging().getToken();
    const updates = {};

    if (cart.length > 0) {
        updates[`/cart/${token}`] = JSON.parse(JSON.stringify(cart));
    }else {
        updates["/cart/" + token] = null;
    }

    try {
        await firebaseDatabase.ref().update(updates);
    } catch (error) {
        console.log("Ошибка при обновлении корзины:", error);
    }
}

