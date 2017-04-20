/**
 * Author   : unadlib
 * Date     : 2017/4/18
 * Time     : 下午3:01
 * Project [ react-native-px2dp ] Coded on WebStorm.
 */

'use strict';

import {Dimensions} from 'react-native';

const defaultHeight = 640;
const deviceHeightDP = Dimensions.get('window').height;
const ratePX = deviceHeightDP / defaultHeight;

export function px2dp(height = defaultHeight) {
    return deviceHeightDP/height;
}

export default ratePX;
