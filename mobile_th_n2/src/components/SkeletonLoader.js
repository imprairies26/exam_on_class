import { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

// shimmer effect
function ShimmerEffect({ width, height, borderRadius = 8, style }) {
    const animValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const shimmer = Animated.loop(
            Animated.sequence([
                Animated.timing(animValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        shimmer.start();
        return () => shimmer.stop();
    }, [animValue]);

    const opacity = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 0.7],
    });

    return (
        <Animated.View
            style={[
                {
                    width,
                    height,
                    borderRadius,
                    backgroundColor: '#E0E0E0',
                    opacity,
                },
                style,
            ]}
        />
    );
}

// skeleton box
export function SkeletonBox({ width = '100%', height = 20, borderRadius = 8, style }) {
    return <ShimmerEffect width={width} height={height} borderRadius={borderRadius} style={style} />;
}

// skeleton text
export function SkeletonText({ lines = 3, style }) {
    const widths = ['100%', '85%', '70%', '90%', '60%'];

    return (
        <View style={[styles.textContainer, style]}>
            {Array.from({ length: lines }).map((_, i) => (
                <ShimmerEffect
                    key={i}
                    width={widths[i % widths.length]}
                    height={14}
                    borderRadius={4}
                    style={styles.textLine}
                />
            ))}
        </View>
    );
}

// skeleton product card
export function SkeletonProductCard() {
    return (
        <View style={styles.productCard}>
            {/* image */}
            <ShimmerEffect width={100} height={80} borderRadius={8} style={styles.productImage} />
            {/* name */}
            <ShimmerEffect width={100} height={14} borderRadius={4} style={styles.productTitle} />
            {/* description */}
            <ShimmerEffect width={70} height={12} borderRadius={4} style={styles.productSubtitle} />
            {/* price + button */}
            <View style={styles.productFooter}>
                <ShimmerEffect width={50} height={16} borderRadius={4} />
                <ShimmerEffect width={36} height={36} borderRadius={12} />
            </View>
        </View>
    );
}

// skeleton product row
export function SkeletonProductRow({ count = 3 }) {
    return (
        <View style={styles.productRow}>
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonProductCard key={i} />
            ))}
        </View>
    );
}

// skeleton order card
export function SkeletonOrderCard() {
    return (
        <View style={styles.orderCard}>
            {/* header: order ID + date */}
            <View style={styles.orderHeader}>
                <ShimmerEffect width={120} height={16} borderRadius={4} />
                <ShimmerEffect width={100} height={14} borderRadius={4} />
            </View>

            {/* divider */}
            <View style={styles.divider} />

            {/* product rows */}
            {[1, 2].map(i => (
                <View key={i} style={styles.orderProductRow}>
                    <ShimmerEffect width={'50%'} height={14} borderRadius={4} />
                    <ShimmerEffect width={30} height={14} borderRadius={4} />
                    <ShimmerEffect width={50} height={14} borderRadius={4} />
                </View>
            ))}

            {/* divider */}
            <View style={styles.divider} />

            {/* total */}
            <View style={styles.orderTotalRow}>
                <ShimmerEffect width={50} height={16} borderRadius={4} />
                <ShimmerEffect width={70} height={18} borderRadius={4} />
            </View>
        </View>
    );
}

// skeleton category section
export function SkeletonCategorySection() {
    return (
        <View style={styles.categorySection}>
            {/* header: title + "See all" */}
            <View style={styles.categoryHeader}>
                <ShimmerEffect width={140} height={20} borderRadius={4} />
                <ShimmerEffect width={60} height={16} borderRadius={4} />
            </View>
            {/* product row */}
            <SkeletonProductRow count={3} />
        </View>
    );
}

// home skeleton
export function HomeSkeleton() {
    return (
        <View style={styles.homeContainer}>
            {/* Logo */}
            <View style={styles.homeLogo}>
                <ShimmerEffect width={26} height={30} borderRadius={6} />
                <ShimmerEffect width={162} height={20} borderRadius={4} style={{ marginTop: 8 }} />
            </View>

            {/* search bar */}
            <ShimmerEffect
                width={'90%'}
                height={48}
                borderRadius={12}
                style={styles.homeSearch}
            />

            {/* banner */}
            <ShimmerEffect
                width={'90%'}
                height={114}
                borderRadius={8}
                style={styles.homeBanner}
            />

            {/* category sections */}
            <SkeletonCategorySection />
            <SkeletonCategorySection />
        </View>
    );
}

// orders skeleton
export function OrdersSkeleton({ count = 3 }) {
    return (
        <View style={styles.ordersContainer}>
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonOrderCard key={i} />
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    textContainer: {
        gap: 8,
    },
    textLine: {
        marginBottom: 6,
    },

    // product card
    productCard: {
        width: 150,
        backgroundColor: '#FAFAFA',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        padding: 15,
        marginRight: 15,
    },
    productImage: {
        alignSelf: 'center',
        marginBottom: 15,
    },
    productTitle: {
        marginBottom: 6,
    },
    productSubtitle: {
        marginBottom: 15,
    },
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    // order card
    orderCard: {
        backgroundColor: '#F2F3F2',
        borderRadius: 18,
        padding: 20,
        marginBottom: 16,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E2E2',
        marginVertical: 10,
    },
    orderProductRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
    },
    orderTotalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ordersContainer: {
        padding: 20,
    },

    // category section
    categorySection: {
        marginBottom: 20,
    },
    categoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },

    // home skeleton
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    homeLogo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    homeSearch: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    homeBanner: {
        alignSelf: 'center',
        marginBottom: 30,
    },
});
