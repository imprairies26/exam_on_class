import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    desc: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    desc: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    desc: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
  },
];

const NotificationItem = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
      <Text style={styles.itemTime}>{item.time}</Text>
    </View>
  </TouchableOpacity>
);

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8faff',
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  itemTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});