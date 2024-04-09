import {Routes, Route} from 'react-router-dom';
import MainComponent from './MainComponent';

const LandingPage = () => {
    return(
        <div>
            <Routes>
                <Route path="/" Component={MainComponent}></Route>
            </Routes>
        </div>
    )
}

export default LandingPage;