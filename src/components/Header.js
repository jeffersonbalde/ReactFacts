
import reactlogo from "../images/react-logo.png";

const Header = () => {
    return (
        <nav>
            <img src={reactlogo} alt="React Logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Header;