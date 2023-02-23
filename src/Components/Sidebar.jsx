import SocialNetworks from './SocialNetworks';

import Avatar from '../img/euimage.jpeg';

import '../styles/components/sidebar.sass';
import InfromationContainer from './informationContainer';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Pedro Novais" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InfromationContainer />
        <a href="https://drive.google.com/file/d/1guUh0E1crw_5sJSGQ2bP1sAM4QdYlb5L/view?usp=sharing" className="btn">
            Download currículo
        </a>
    </aside>;

};

export default Sidebar;