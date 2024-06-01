import { useState } from 'preact/hooks';
import Career from './Career';
import Learning from './Learning';
import Philosophy from './Philosophy';
import Contact from './Contact';
import styles from './Content.module.css'

export default function Content() {
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
            <nav class={styles.navbar}>
                <button
                    className={activeComponent === 'Career' ? 'active' : ''}
                    onClick={() => setActiveComponent('Career')}>Career</button>
                <button
                    className={activeComponent === 'Learning' ? 'active' : ''}
                    onClick={() => setActiveComponent('Learning')}>Learning</button>
                <button
                    className={activeComponent === 'Philosophy' ? 'active' : ''}
                    onClick={() => setActiveComponent('Philosophy')}>Philosphy</button>
                <button
                    className={activeComponent === 'Contact' ? 'active' : ''}
                    onClick={() => setActiveComponent('Contact')}>CV/Contact</button>
            </nav>
            <div>
                {renderComponent()}
            </div>
        </div>
    );
}
