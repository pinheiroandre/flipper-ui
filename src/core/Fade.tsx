import { Fade as MuiFade } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
}

const Fade: FC<IProps> = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}) =>
    <MuiFade
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiFade>

export default Fade
