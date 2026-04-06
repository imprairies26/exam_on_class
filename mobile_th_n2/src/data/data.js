const products = [
    {
        id: 1,
        title: 'Diet Coke',
        subTitle: '355ml, Price',
        price: '$1.99',
        picture: require('../../assets/pic/diet-coke.png'),
        category: 'Beverages',
        brand: 'Cocola',
    },
    {
        id: 2,
        title: 'Sprite Can',
        subTitle: '325ml, Price',
        price: '$1.50',
        picture: require('../../assets/pic/sprite-can.png'),
        category: 'Beverages',
        brand: 'Cocola',
    },
    {
        id: 3,
        title: 'Apple & Grape Juice',
        subTitle: '2L, Price',
        price: '$15.99',
        picture: require('../../assets/pic/apple-grape-juice.png'),
        category: 'Beverages',
        brand: 'Individual Callection',
    },
    {
        id: 4,
        title: 'Orange Juice',
        subTitle: '2L, Price',
        price: '$15.99',
        picture: require('../../assets/pic/orenge-juice.png'),
        category: 'Beverages',
        brand: 'Individual Callection',
    },
    {
        id: 5,
        title: 'Coca Cola Can',
        subTitle: '325ml, Price',
        price: '$4.99',
        picture: require('../../assets/pic/coca-cola-can.png'),
        category: 'Beverages',
        brand: 'Cocola',
    },
    {
        id: 6,
        title: 'Pepsi Can',
        subTitle: '330ml, Price',
        price: '$4.99',
        picture: require('../../assets/pic/pepsi-can.png'),
        category: 'Beverages',
        brand: 'Ifad',
    },
    {
        id: 7,
        title: 'Egg Chicken Red',
        subTitle: '4pcs, Price',
        price: '$1.99',
        picture: require('../../assets/pic/egg-chicken-red.png'),
        category: 'Eggs',
        brand: 'Kazi Farmas',
    },
    {
        id: 8,
        title: 'Egg Chicken White',
        subTitle: '180g, Price',
        price: '$1.50',
        picture: require('../../assets/pic/egg-chicken-white.png'),
        category: 'Eggs',
        brand: 'Kazi Farmas',
    },
    {
        id: 9,
        title: 'Egg Pasta',
        subTitle: '30gm, Price',
        price: '$15.99',
        picture: require('../../assets/pic/egg-pasta.png'),
        category: 'Noodles & Pasta',
        brand: 'Ifad',
    },
    {
        id: 10,
        title: 'Egg Noodles',
        subTitle: '2L, Price',
        price: '$15.99',
        picture: require('../../assets/pic/egg-noodles.png'),
        category: 'Noodles & Pasta',
        brand: 'Ifad',
    },
    {
        id: 11,
        title: 'Egg Noodles Purple',
        subTitle: '2L, Price',
        price: '$12.99',
        picture: require('../../assets/pic/egg-noodles-purple.png'),
        category: 'Noodles & Pasta',
        brand: 'Cocola',
    },
    {
        id: 12,
        title: 'Mayonnais Eggless',
        subTitle: '1pc, Price',
        price: '$4.99',
        picture: require('../../assets/pic/mayonnais-eggless.png'),
        category: 'Chips & Crisps',
        brand: 'Individual Callection',
    },
    {
        id: 13,
        title: 'Organic Bananas',
        subTitle: '7pcs, Price',
        price: '$4.99',
        picture: require('../../assets/pic/product-banana.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Individual Callection',
    },
    {
        id: 14,
        title: 'Red Apple',
        subTitle: '1kg, Price',
        price: '$4.99',
        picture: require('../../assets/pic/product-apple.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Kazi Farmas',
    },
    {
        id: 15,
        title: 'Bell Pepper Red',
        subTitle: '1kg, Price',
        price: '$4.99',
        picture: require('../../assets/pic/product-chilli.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Kazi Farmas',
    },
    {
        id: 16,
        title: 'Ginger',
        subTitle: '250gm, Price',
        price: '$2.99',
        picture: require('../../assets/pic/product-ginger.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Individual Callection',
    },
    {
        id: 17,
        title: 'Pulses',
        subTitle: '1kg, Price',
        price: '$3.99',
        picture: require('../../assets/pic/product-seeds.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Kazi Farmas',
    },
    {
        id: 18,
        title: 'Rice',
        subTitle: '5kg, Price',
        price: '$8.99',
        picture: require('../../assets/pic/product-rice.png'),
        category: 'Fresh Fruits & Vegetable',
        brand: 'Ifad',
    },
    {
        id: 19,
        title: 'Beef Bone',
        subTitle: '1kg, Price',
        price: '$9.99',
        picture: require('../../assets/pic/product-beef.png'),
        category: 'Meat & Fish',
        brand: 'Kazi Farmas',
    },
    {
        id: 20,
        title: 'Broiler Chicken',
        subTitle: '1kg, Price',
        price: '$5.99',
        picture: require('../../assets/pic/product-chicken.png'),
        category: 'Meat & Fish',
        brand: 'Kazi Farmas',
    },
];

export const getCategories = () => [...new Set(products.map(p => p.category))];

export const getBrands = () => [...new Set(products.map(p => p.brand))];

export const getByCategory = (category) => products.filter(p => p.category === category);

export const searchProducts = (query) => {
    if (!query || query.trim() === '') return products;
    const lowerQuery = query.toLowerCase().trim();
    return products.filter(p =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
};

export const applyFilter = (productList, selectedCategories, selectedBrands) => {
    const hasCategories = selectedCategories.length > 0;
    const hasBrands = selectedBrands.length > 0;
    if (!hasCategories && !hasBrands) return productList;
    return productList.filter(p => {
        const catMatch = !hasCategories || selectedCategories.includes(p.category);
        const brandMatch = !hasBrands || selectedBrands.includes(p.brand);
        return catMatch && brandMatch;
    });
};

export const exclusiveOffers = products.filter(p =>
    ['Organic Bananas', 'Red Apple', 'Egg Chicken Red', 'Bell Pepper Red'].includes(p.title)
);

export const bestSelling = products.filter(p =>
    ['Bell Pepper Red', 'Ginger', 'Beef Bone', 'Broiler Chicken'].includes(p.title)
);

export const groceries = [
    { id: 'g1', title: 'Pulses', picture: require('../../assets/pic/product-seeds.png'), backgroundColor: '#F8A44C' },
    { id: 'g2', title: 'Rice', picture: require('../../assets/pic/product-rice.png'), backgroundColor: '#53B175' },
    { id: 'g3', title: 'Meat', picture: require('../../assets/pic/product-beef.png'), backgroundColor: '#F7A593' },
    { id: 'g4', title: 'Chicken', picture: require('../../assets/pic/product-chicken.png'), backgroundColor: '#D3B0E0' },
];

export default products;
