import MuiTableRow from '@material-ui/core/TableRow'
import React, { FC } from 'react'
import { background } from '../colors'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    selected?: boolean
    hover?: boolean
    onClick?: () => void
}

const TableRow: FC<IProps> = ({
    style,
    margin,
    padding,
    children,
    ...otherProps
}) =>
    <MuiTableRow
        { ...otherProps }
        style={ {
            borderColor: background.light,
            margin,
            padding,
            ...style
        } }>
        { children }
    </MuiTableRow>

export default TableRow
