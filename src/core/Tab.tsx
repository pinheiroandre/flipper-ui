import { Tab as MuiTab } from '@material-ui/core'
import React, { Component } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    disabled?: boolean
    icon?: string | JSX.Element
    label?: string
    value?: unknown
    disableRipple?: boolean
}

class Tab extends Component<IProps> {
    public static defaultProps = {
        disabled: false,
        margin: '0 4px'
    }

    public render() {
        const {
            style,
            margin,
            disableRipple,
            padding,
            ...otherProps
        } = this.props

        return (
            <MuiTab
                disableRipple
                style={ { margin, padding, ...style } }
                { ...otherProps }
            />
        )
    }
}

export default Tab
