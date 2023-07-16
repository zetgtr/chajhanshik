import * as React from 'react';
import {Button, Dimensions, ScrollView, Text, View,Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";
import Pagination from "./Pagination";
import {useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import {useState} from "react";
import {categoriesSelector} from "../../Store/Catalog/selector";
import {useSelector} from "react-redux";

export const CarouselHome = () => {
    const width = Dimensions.get('window').width;
    const [pagination,setPagination] = useState(0)
    const {products} = useSelector(categoriesSelector)

    const handleIndex = (index) => {
        setPagination(index);
    };
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, position: "relative"}}>
            <GestureHandlerRootView>
                <Carousel
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    onScrollBegin={()=>{}}
                    data={[...products]}
                    scrollAnimationDuration={1000}
                    onProgressChange={(_, absoluteProgress) => {
                        handleIndex(Math.round(absoluteProgress));
                    }}
                    onSnapToItem={(index) => {}}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image style={{width: "100%",height: 300}} source={{uri: products[index].img}} />
                        </View>
                    )}
                />
                <Pagination data={[...products]} pagination={pagination} />
            </GestureHandlerRootView>
        </ScrollView>
    );
}