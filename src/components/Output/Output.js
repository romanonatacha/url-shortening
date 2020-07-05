import React, { useState } from 'react';
import { copyToClipboard } from '../../utils/copyToClipboard';
import Button from '../Button/Button';
import './Output.scss';

const Output = ({ hashid, url }) => {
    const [copyState, setCopyState] = useState(false);
    const shortlink = `https://rel.ink/${hashid}`;

    const handleCopy = (event) => {
        event.preventDefault();
        copyToClipboard(shortlink, setCopyState);
        event.target.classList.add('btn-copied');
        setTimeout(() => {
            setCopyState(false);
            document.querySelector('.btn-copied').classList.remove('btn-copied');
        }, 2000);
    };

    return (
        <div className="output">
            <div className="output_link">
                {url.length > 30 ? `${url.substr(0, 30)}...` : url}
            </div>
            <div>
                <a href={shortlink} className="output_result">
                    {shortlink}
                </a>
                <Button
                    title={copyState ? 'Copied!' : 'Copy'}
                    variant="btn-copy"
                    action={handleCopy}
                />
            </div>
        </div>
    );
};

export default Output