import React, { useState } from 'react'
import Output from '../Output/Output'
import Button from '../Button/Button'
import './Input.scss'

const Input = () => {
    const [link, setLink] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState([])

    console.log('DATA ' + JSON.stringify(data))

    const handleSubmit = async (event) => {
        event.preventDefault()
        // if (!link) {
        //     setError('you need to add a link')
        //     document.querySelector('.input_form_input').classList.add('input_form_input-error')
        //     return
        // }
        try {
            setError('')
            setLoading(true)
            const response = await fetch('https://rel.ink/api/links/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: link }),
            })
            const result = await response.json()
            if (!response.ok) {
                setError(result.url)
                return
            }

            localStorage.setItem(result.hashid, JSON.stringify(result))
            setData([result, ...data])
            console.log('DATA ' + JSON.stringify(data))

            setLoading(false)
            setLink('')
        } catch (error) {
            setError('Error shortening link. Try again later')
            setLoading(false)
        }
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <div className="input_form">
                    {/* <label className="input_form_label" htmlFor="link" aria-hidden="true">
                        Shorten Link
                    </label> */}
                    <input
                        id="link"
                        aria-label="short link"
                        type="text"
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                        className={`input_form_input ${error ? 'input_form_input-error' : ''}`}
                        placeholder="enter here a link to shorten"
                    />
                    <p className="input_error">{error}</p>
                </div>
                <Button
                    title={`${loading && !error ? 'Loading...' : 'Shorten It!'}`}
                    variant={`${loading && !error ? 'btn-shorten btn-loading' : 'btn-shorten'}`}
                />
            </form>
            {data.map((item, index) => (
                item !== null &&
                <Output key={index} hashid={item.hashid} url={item.url} />

            ))}
        </div>
    )
}

export default Input