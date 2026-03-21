import { View, Text, StyleSheet } from "react-native";

import ScanIconSvg from '../../assets/scanIcon.svg';
import AlertIconSvg from '../../assets/alertIcon.svg';
import SuccessIconSvg from '../../assets/successIcon.svg';
import DirectoryIconSvg from '../../assets/directoryIcon.svg';

// Map tên icon sang component SVG
const ICON_MAP = {
  scanIcon: ScanIconSvg,
  alertIcon: AlertIconSvg,
  successIcon: SuccessIconSvg,
  directoryIcon: DirectoryIconSvg,
};

export default function InsightsCardComponent({
  iconName,
  title,
  description,
  containerColor = '#f8f8fb',
  iconBoxColor = '#dbdaf7',
  iconFill = '#5a5adf',
}) {
  const IconComponent = ICON_MAP[iconName];

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <View style={[styles.iconBox, { backgroundColor: iconBoxColor }]}>
        {IconComponent && <IconComponent width={30} height={30} color={iconFill} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 24,
    height: 160,
    width: '100%',
    marginBottom: 16,
  },
  iconBox: {
    height: 55,
    width: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 8,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    fontWeight: '600',
    color: '#b7b7c1',
  }
});
