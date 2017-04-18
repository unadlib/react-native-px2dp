# react-native-px2dp
pixels convert to density-independent pixels.

### Default UI Size
Default UI design size is based on 1280x720.

### Installation
```bash
npm install react-native-px2dp --save
```

### Usage
```javascript
import px2dp from 'react-native-px2dp';
const style = {
    width: px2dp(720),//UI height size is 1280.
}
const otherStyle = {
    width: px2dp(720,480),//UI height size is 960. 
}
```