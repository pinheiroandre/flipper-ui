import LineAreaChart from '../charts/LineAreaChart'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const TestComponent = () =>
    <LineAreaChart
        xDateFormat={ 'yyyy-MM' }
        yDataType='percent'
        xTickAngle={ 0 }
        xTitle='period'
        yTitle='percentage'
        referenceLine={ 3 }
        referenceLegend='mark'
        yTooltipLegend='Porcentagem'
        xTooltipLegend='Período'
        labelTextSize={ 12 }
        tooltipFooter='footer example'
        data={
            [
                ['2019-01', 9.11],
                ['2019-02', 11],
                ['2019-03', 12],
                ['2019-04', 12],
                ['2019-05', 21],
                ['2019-06', 9.11],
                ['2019-07', 11],
                ['2019-08', 12],
                ['2019-09', 12],
                ['2019-10', 21]
            ]
        }
    />

test('Testing tooltip render', () => {
    const { container } = render(<TestComponent />)
    console.log(container.firstChild)
})
