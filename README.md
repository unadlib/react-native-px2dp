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
import px,{px2dp} from 'react-native-px2dp';
const style = {
    width: 720 * px,//UI height size is 1280.
}
const otherStyle = {
    width: 720 * px2dp(480),//UI height size is 960. 
}
```