

import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Staff System</h1>
            <h2>Total: {employees}</h2>
            <h2>Bonus for: {increased}</h2>
        </div>
    )
}

export default AppInfo;