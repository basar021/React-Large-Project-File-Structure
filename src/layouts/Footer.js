import React from 'react';
import { FaGlobe } from 'react-icons/fa';


export default function Footer() {
    return (
        <div>
            <footer>
                <p className="left">
                    Visit my{' '}
                    <a href="https://mrwebcoder.com/">
                        <FaGlobe className="footer__icon" />
                    </a>{' '}
                    channel
                </p>
                <p className="right">Developed with &hearts; by Abu Bashar</p>
            </footer>
        </div>
    );
};
