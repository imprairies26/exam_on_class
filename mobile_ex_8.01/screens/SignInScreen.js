import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';

export default function SignInScreen({ navigation }) {
  const { setIsLoggedIn } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }
    // Simulate successful login
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username here!"
          placeholderTextColor="#bbb"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          placeholderTextColor="#bbb"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>For got password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.signupRow}>
          <Text style={styles.notMember}>Not yet a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#111',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  forgot: {
    color: '#F5A623',
    textAlign: 'right',
    marginBottom: 24,
    fontSize: 13,
  },
  signInBtn: {
    backgroundColor: '#F5A623',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 16,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  googleBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  googleText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  facebookBtn: {
    flex: 1,
    backgroundColor: '#3b5998',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  facebookText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notMember: { color: '#888', fontSize: 13 },
  signUpLink: { color: '#F5A623', fontSize: 13, fontWeight: '600' },
});
