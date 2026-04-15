const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'ScreenShots');

const mapping = {
  3: "NumberInputScreen",
  4: "SignInScreen",
  5: "Verification",
  6: "SelectLocation",
  7: "LoginScreen",
  8: "HomeScreen",
  9: "AccountScreen", 
  10: "ExploreScreen",
  11: "BeveragesScreens",
  12: "ProductDetailScreen",
  13: "FilterScreens",
  14: "SearchScreens",
  15: "FavouriteScreen",
  16: "ErrorScreen",
  17: "MyCartScreen",
  18: "CheckOutScreen",
  19: "OrderAcceptedScreen",
  20: "OrdersScreen",
  21: "SignUpScreen" // Hình 21 và 9 khá giống nhau, tạm gán 21 cho SignUpScreen
};

try {
  const files = fs.readdirSync(screenshotsDir);
  let renamedCount = 0;

  files.forEach(file => {
    // Regex lấy số trong ngoặc đơn, ví dụ: "23810310039_01_screen (3).jpg" -> lấy số 3
    const match = file.match(/screen \((\d+)\)\.jpg$/i);
    if (match) {
      const sttNum = parseInt(match[1]);
      const sttStr = sttNum < 10 ? '0' + sttNum : '' + sttNum;
      const screenName = mapping[sttNum] || 'UnknownScreen';
      
      const newName = `23810310039_${sttStr}_${screenName}.jpg`;
      const oldPath = path.join(screenshotsDir, file);
      const newPath = path.join(screenshotsDir, newName);
      
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed:\n  ${file}\n  -> ${newName}\n`);
      renamedCount++;
    }
  });

  console.log(`Tổng cộng: Đã đổi tên thành công ${renamedCount} ảnh.`);
} catch (err) {
  console.error("Lỗi trong quá trình đổi tên:", err);
}
