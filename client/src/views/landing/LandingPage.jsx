import Image from '../../components/image/Image';
import {Link } from 'react-router-dom';

import {Boton} from './styledComponents';

const Landing = ()=>{
    return(
        <div>
            <Link to='/home'>
            <Boton>Soy el boton</Boton>
            </Link>
            

            <Image/>
       
            
        </div>
    )
}

export default Landing;