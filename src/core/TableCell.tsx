import MuiTableCell, { TableCellProps } from '@material-ui/core/TableCell'
import MuiTableSortLabel from '@material-ui/core/TableSortLabel'
import React, { FC, useContext } from 'react'
import { IDefault } from './Advertise'
import { Omit } from 'ramda'
import { SortContext } from './TableHead'

interface IProps extends IDefault {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: TableCellProps['padding']
    padding?: number | string
    align?:
        | 'inherit'
        | 'left'
        | 'center'
        | 'right'
        | 'justify'
}

const TableCell: FC<Omit<TableCellProps, 'padding'> & IProps> = ({
    style,
    margin,
    padding,
    children,
    spacing,
    ...otherProps
}) => {
    const { onSort, active, direction } = useContext(SortContext)

    const handleSort = () => {
        if (onSort) {
            onSort(otherProps.name || '')
        }
    }

    return (
        <MuiTableCell
            { ...otherProps }
            style={ { padding, margin, ...style } }
            padding={ spacing }>
            {
                onSort
                    ? (
                        <MuiTableSortLabel
                            onClick={ handleSort }
                            active={ otherProps.name === active }
                            direction={ direction }>
                            { children }
                        </MuiTableSortLabel>
                    )
                    : children
            }
        </MuiTableCell>
    )
}

export default TableCell
