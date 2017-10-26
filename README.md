# native-bridge-RN-test
test app linking obj-c functions to React Native

`npm install --save`
run `react-native run-ios`

This simple test involves sending a number using the built-in `NativeModules` in RN where the function in the Objc file will square that number, when the promisified data is sent back, it will set the new state and display that number
ex: if you send 9, it should return 81.

the input field and button is in components/ValidateID
the Objc function is in ios/MyObjcClass.h and ios/MyObjcClass.m

Latest blocker: xcode does not recognize the `<React/RCTBridge>` import in ios/MyObjcClass

here's the offical docs for linking native modules and RN:
https://facebook.github.io/react-native/docs/native-modules-ios.html
