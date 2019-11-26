import React, { useState, useCallback } from 'react'
import {
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries,
    LineMarkSeries,
    LineSeries,
    LabelSeries,
    DiscreteColorLegend,
    Crosshair,
    FlexibleXYPlot
} from 'react-vis'
import { Wrapper } from './style'
import { format, parse } from 'date-fns'
import {
    TooltipText,
    compare,
    getMaxDomain,
    getYAxis,
    putReference,
    truncate,
    labelTruncate
} from './AreaChart'
import { ChartsTooltip } from './HorizontalBarChart'
import ptBR from 'date-fns/locale/pt-BR'
import { styleLegend } from './LineVerticalBarChart'
import styled from 'styled-components'

type TData = [number | string | Date, number]

interface IProps {
    xDateFormat: string
    height?: number
    areaColor?: string
    lineColor?: string
    areaOpacity?: number
    yDomainExtra?: number
    yDataType?: 'hour' | 'percent' | 'quantity'
    xTickAngle?: number
    yTitle?: string
    xTitle?: string
    referenceLine?: number
    referenceColor?: string
    referenceLegend?: string
    yTooltipLegend?: string
    xTooltipLegend?: string
    labelTextSize?: number
    tooltipFooter?: string
    marginLeft?: number
    marginRight?: number
    data: TData[]
}

interface IAreaChartProps {
    x: TData[0]
    y: TData[1]
}

export const toDate =
    (x: string, format: string) => parse(x as string, format, new Date())

export const legendPosition = {
    position: 'absolute',
    right: '18px',
    top: '0px'
}

const LegendContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -10px;
`

const LineAreaChart = (props: IProps) => {
    const {
        xDateFormat,
        height,
        data,
        areaColor,
        lineColor,
        areaOpacity,
        xTickAngle,
        referenceLine,
        referenceColor,
        referenceLegend,
        yDataType,
        yTitle,
        xTitle,
        yTooltipLegend,
        xTooltipLegend,
        yDomainExtra,
        labelTextSize,
        tooltipFooter,
        marginLeft,
        marginRight
    } = props
    const formatToCartesianPlan = ([x, y]: TData) => (
        {
            x: toDate(x as string, xDateFormat),
            y,
            style: { fontSize: (labelTextSize || 12) + 'px' },
            yOffset: -8
        }
    )

    const areaData = data.map(formatToCartesianPlan)
    const xAxisTicks = areaData.map(data => data.x)
    const extension = yDataType === 'hour' ? 'h' : '%'
    const legendInfo = [{
        title: referenceLegend || 'mark',
        color: referenceColor
    }]
    const [hoveredValue, setHoveredValue] =
        useState<{ x: TData[0], y: TData[1] }[]>([])

    const handleLeaveMouse = () => {
        setHoveredValue([])
    }

    const handleNearMouse = useCallback(
        (selected: unknown, { index }: { index: number }) => {
            setHoveredValue([areaData[index]])
        }, [])

    const renderPosition = () => {
        const values = hoveredValue.length && areaData
            .find(item => compare(item.x, hoveredValue[0].x))

        const xValue = values
            ? xTooltipLegend + ': ' +
            format(values.x as Date, 'MMM/yyyy', { locale: ptBR })
            : null
        const yValue = values
            ? yTooltipLegend + ': ' + truncate(values.y) + extension
            : null

        return (
            <div style={ { width: '110px' } }>
                <TooltipText>
                    { xValue }
                </TooltipText>
                <TooltipText>
                    { yValue }
                </TooltipText>
                <TooltipText>
                    { tooltipFooter }
                </TooltipText>
            </div>
        )
    }

    return (
        <Wrapper id='line-area-chart'>
            <FlexibleXYPlot
                margin={ { right: marginRight || 24, left: marginLeft || 44 } }
                yDomain={ [0, getMaxDomain(getYAxis(data), yDomainExtra)] }
                xType='time'
                yType='linear'
                onMouseLeave={ handleLeaveMouse }
                height={ height || 300 }>
                <VerticalGridLines tickTotal={ areaData.length } />
                <HorizontalGridLines />
                <LegendContainer>
                    {
                        referenceLine && (
                            <DiscreteColorLegend
                                orientation='horizontal'
                                className='line-area-chart-legend'
                                style={ styleLegend }
                                items={ legendInfo }
                            />
                        )
                    }
                </LegendContainer>
                <XAxis
                    title={ xTitle || null }
                    tickValues={ xAxisTicks }
                    tickFormat={ tick => format(tick, 'MMM/yy', { locale: ptBR }) }
                    tickLabelAngle={ xTickAngle || 0 }
                    tickSize={ xTickAngle ? 30 : 0 }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: (labelTextSize || 12) + 'px'
                        }
                    } }
                />
                <YAxis
                    title={ yTitle || null }
                    tickFormat={ (value: number) => truncate(value) + extension }
                    style={ {
                        text: {
                            fill: 'black',
                            fontSize: '12px'
                        }
                    } }
                />
                <AreaSeries
                    opacity={ areaOpacity || 0.8 }
                    color={ areaColor }
                    data={ areaData }
                />
                <LineMarkSeries
                    onNearestX={ handleNearMouse }
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: lineColor } }
                    markStyle={ {
                        stroke: lineColor,
                        fill: lineColor,
                        r: 2.5
                    } }
                    data={ areaData }
                />
                {
                    referenceLine &&
                    <LineSeries
                        data={ putReference(referenceLine, areaData) }
                        color={ referenceColor }
                    />
                }
                <LabelSeries
                    labelAnchorX='middle'
                    labelAnchorY='middle'
                    data={ areaData }
                    getLabel={
                        newData => labelTruncate(
                            newData.y,
                            labelTextSize || 12
                        )
                    }
                />
                <Crosshair
                    style={ { line: { backgroundColor: '#C1C1C1' } } }
                    values={ hoveredValue }>
                    <ChartsTooltip>
                        { renderPosition() }
                    </ChartsTooltip>
                </Crosshair>
            </FlexibleXYPlot>
        </Wrapper>
    )
}

export default LineAreaChart
