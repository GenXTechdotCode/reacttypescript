import React from "react"

type InputProps = {
    value: string
    handleChange: (events: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="text" value={value} onChange={handleChange} />
    
}