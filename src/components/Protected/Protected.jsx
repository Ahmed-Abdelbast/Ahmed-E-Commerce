/* eslint-disable react/prop-types */

import Cookies  from 'js-cookie';
import PageNotFound from '../PageNotFound/PageNotFound';

export default function Protected({children}) {

    if(Cookies.get("userToken") != null){
        return children
    }else{
        return <PageNotFound/>
    }

}
