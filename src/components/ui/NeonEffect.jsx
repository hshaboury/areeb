import React from 'react';
import './NeonEffect.css'; // Import your CSS file for neon effect

const NeonEffect = ({ children }) => {
    return (
        <div className="neon-effect">
            {children}
        </div>
    );
};

export default NeonEffect;