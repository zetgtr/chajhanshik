import {StyleSheet, View} from 'react-native';
import React from 'react';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import style from "./style.scss"

const Pagination = ({data, pagination}) => {

    return (
        <View style={style.pagination}>
            <AnimatedDotsCarousel
                length={data.length}
                currentIndex={pagination}
                maxIndicators={2}
                interpolateOpacityAndColor={false}
                activeIndicatorConfig={{
                    color: '#EC3C4C',
                    margin: 3,
                    opacity: 1,
                    size: 8,
                }}
                inactiveIndicatorConfig={{
                    color: '#F96B2B',
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                }}
                decreasingDots={[
                    {
                        config: { color: '#F96B2B', margin: 3, opacity: 0.5, size: 6 },
                        quantity: 1,
                    },
                    {
                        config: { color: '#F96B2B', margin: 3, opacity: 0.5, size: 6 },
                        quantity: 1,
                    },
                ]}
            />
        </View>
    );
};

export default Pagination;