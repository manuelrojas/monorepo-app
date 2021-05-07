import * as React from 'react'
import logo from '../logo.svg';

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = (props) => {
    return (
        <button {...props}>
            <img src={logo} alt="logo" />
            TEST CLICK</button>
    )
}

export default Button