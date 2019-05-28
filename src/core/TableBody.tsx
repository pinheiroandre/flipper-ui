import MuiTableBody from '@material-ui/core/TableBody'
import React, { ReactNode, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactNode
}

const TableBody: FC<IProps> = ({
    style,
    margin,
    padding,
    children,
    ...otherProps
}) =>
    <MuiTableBody
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiTableBody>

export default TableBody
