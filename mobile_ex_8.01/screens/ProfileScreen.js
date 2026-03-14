import {
  View, Text, TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

export default function ProfileScreen() {
  const { setIsLoggedIn } = useAppContext();

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Cyan header banner */}
      <View style={styles.banner} />

      <View style={styles.container}>
        {/* Avatar circle */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>HN</Text>
          </View>
        </View>

        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now i am learning
          React Native
        </Text>

        <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  banner: {
    height: 160,
    backgroundColor: '#29B6F6',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  avatarWrapper: {
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5A623',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  avatarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 4,
  },
  role: {
    fontSize: 15,
    color: '#F5A623',
    fontWeight: '600',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  signOutBtn: {
    backgroundColor: '#F5A623',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
