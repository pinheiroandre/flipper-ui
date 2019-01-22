import MuiTable from '@material-ui/core/Table'
import React, { ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactNode
}

const Table: React.SFC<IProps> = ({ style, margin, padding, children, ...otherProps }) =>
    <MuiTable
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiTable>

export default Table
