import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import ButtonComponent from '../components/ButtonComponent';
import ShareIcon from '../../assets/icon/share.svg';
import HeartIconGrey from '../../assets/icon/heart-icon-grey.svg';
import StarIcon from '../../assets/icon/star-icon.svg';
import NextIcon from '../../assets/icon/next-icon.svg';

export default function ProductDetailScreen({ navigation, route }) {
    const { title, subTitle, price, picture } = route.params || {};
    const [isDetailExpanded, setIsDetailExpanded] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F2F3F2" />
            <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                
                
                <View style={styles.imageBackground}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                            <AntDesign name="left" size={24} color="#181725" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <ShareIcon width={18} height={18} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productImageContainer}>
                        <Image source={picture} style={styles.productImage} resizeMode="contain" />
                    </View>
                </View>

                {/* Info Container */}
                <View style={styles.infoContainer}>
                    
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity>
                            <HeartIconGrey width={24} height={24} />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.subTitle}>{subTitle}</Text>

                    <View style={styles.priceRow}>
                        <View style={styles.quantityController}>
                            <TouchableOpacity>
                                <AntDesign name="minus" size={24} color="#B3B3B3" />
                            </TouchableOpacity>
                            <View style={styles.quantityBox}>
                                <Text style={styles.quantityText}>1</Text>
                            </View>
                            <TouchableOpacity>
                                <AntDesign name="plus" size={24} color="#53B175" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.price}>{price}</Text>
                    </View>

                    <View style={styles.divider} />

                    {/* Product Detail Accordion */}
                    <TouchableOpacity 
                        style={styles.accordionHeader} 
                        onPress={() => setIsDetailExpanded(!isDetailExpanded)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.accordionTitle}>Product Detail</Text>
                        <View style={{ transform: [{ rotate: isDetailExpanded ? '90deg' : '0deg' }] }}>
                            <NextIcon width={8} height={14} />
                        </View>
                    </TouchableOpacity>
                    
                    {isDetailExpanded && (
                        <Text style={styles.accordionContent}>
                            Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.
                        </Text>
                    )}

                    <View style={styles.divider} />
                    
                    <TouchableOpacity style={styles.accordionHeader} activeOpacity={0.7}>
                        <Text style={styles.accordionTitle}>Nutritions</Text>
                        <View style={styles.rightAccordionArea}>
                            <View style={styles.nutritionBadge}>
                                <Text style={styles.nutritionBadgeText}>100gr</Text>
                            </View>
                            <NextIcon width={8} height={14} />
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.accordionHeader} activeOpacity={0.7}>
                        <Text style={styles.accordionTitle}>Review</Text>
                        <View style={styles.rightAccordionArea}>
                            <View style={styles.starsContainer}>
                                <StarIcon width={14} height={14} />
                                <StarIcon width={14} height={14} />
                                <StarIcon width={14} height={14} />
                                <StarIcon width={14} height={14} />
                                <StarIcon width={14} height={14} />
                            </View>
                            <NextIcon width={8} height={14} />
                        </View>
                    </TouchableOpacity>

                </View>

                {/* Bottom Basket Button */}
                <View style={styles.buttonContainer}>
                    <ButtonComponent title="Add To Basket" onPress={() => {}} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    imageBackground: {
        backgroundColor: '#F2F3F2',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        height: 350,
        paddingTop: 15,
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        padding: 5,
    },
    productImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    productImage: {
        width: 329,
        height: 199,
    },
    infoContainer: {
        paddingHorizontal: 25,
        paddingTop: 30,
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    subTitle: {
        fontSize: 16,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
        marginTop: 5,
        marginBottom: 30,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    quantityController: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityBox: {
        width: 45,
        height: 45,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E2E2',
        width: '100%',
        marginVertical: 18,
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accordionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#181725',
        fontFamily: 'Gilroy',
    },
    accordionContent: {
        fontSize: 13,
        color: '#7C7C7C',
        fontFamily: 'Gilroy',
        lineHeight: 21,
        marginTop: 10,
    },
    rightAccordionArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    nutritionBadge: {
        backgroundColor: '#EBEBEB',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    nutritionBadgeText: {
        color: '#7C7C7C',
        fontSize: 9,
        fontWeight: '600',
        fontFamily: 'Gilroy',
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
    }
});
