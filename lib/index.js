/**
 * Author   : unadlib
 * Date     : 2017/4/18
 * Time     : 下午3:01
 * Project [ react-native-px2dp ] Coded on WebStorm.
 */

'use strict';

import {Dimensions} from 'react-native';

function px2dp(px, height = 640) {
    const deviceHeightDP = Dimensions.get('window').height;
    const dp = px *  deviceHeightDP / height;
    return dp;
}

export default px2dp;
