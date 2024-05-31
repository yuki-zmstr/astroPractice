import { useState } from 'preact/hooks';
import Career from './Career';
import Learning from './Learning';
import Philosophy from './Philosophy';
import Contact from './Contact';

export default function NavBar() {
    const [activeComponent, setActiveComponent] = useState('Career');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Career':
                return <Career />;
            case 'Learning':
                return <Learning />;
            case 'Philosophy':
                return <Philosophy />;
            case 'Contact':
                return <Contact />;
            default:
                return <Career />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setActiveComponent('Career')}>Career</button>
                <button onClick={() => setActiveComponent('Learning')}>Learning</button>
                <button onClick={() => setActiveComponent('Philosophy')}>Philosphy</button>
                <button onClick={() => setActiveComponent('Contact')}>CV/Contact</button>
            </nav>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
}
