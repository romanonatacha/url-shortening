import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="boxed footer">
                <div>
                    <a href="https://romanonatacha.github.io" target="_blank" rel="noopener noreferrer">
                        developed by <span>natacha romano</span>
                    </a>
                </div>
                <div className="divider"> | </div>
                <div>
                    <a href="https://trich.ai" target="_blank" rel="noopener noreferrer">
                        powered by <span>trich.ai</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer