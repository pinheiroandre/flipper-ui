import { withStyles } from '@material-ui/styles'
import MuiTableHead from '@material-ui/core/TableHead'
import React, { FC, createContext } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault, ISort {
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
    classes: {
        default: string
        inherit: string
        primary: string
        secondary: string
    }
}

interface ISort {
    active?: boolean
    direction?: 'asc' | 'desc'
    onSort?(): void
}

const styles = theme => ({
    default: {
        color: theme.palette.background.default
    },
    inherit: {
        color: 'inherit'
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
})

export const SortContext = createContext<ISort>({
    active: true,
    direction: 'asc',
    onSort: undefined
})

const TableHead: FC<IProps> = ({
    style,
    margin,
    padding,
    children,
    color,
    classes,
    active,
    direction,
    onSort,
    ...otherProps
}) =>
    <SortContext.Provider value={ { active, direction, onSort } }>
        <MuiTableHead
            { ...otherProps }
            style={ { padding, margin, ...style } }
            classes={
                color
                    ? {
                        root: classes[color]
                    }
                    : {}
            }>
            { children }
        </MuiTableHead>
    </SortContext.Provider>

export default withStyles(styles)(TableHead)
