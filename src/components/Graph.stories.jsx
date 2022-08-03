import React from 'react';

import Graph from './Graph';

export default {
  title: 'Components/Graph',
  component: Graph,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <div style={{width: '100%', height: '300px'}}><Graph {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    data: [
        {x: 0, y: 25 },
        {x: 1, y: 50 },
        {x: 2, y: 75 },
        {x: 3, y: 35 },
        {x: 4, y: 10 },
    ],
    tickLabelX: [1, 2, 3, 4, 5],
    tickLabelY: [
        {y: 25, label: '25%'},
        {y: 50, label: '50%'},
        {y: 100, label: '100%'},
    ],
};

export const CenterTitleWithAxisLabels = Template.bind({});
CenterTitleWithAxisLabels.args = {
    data: [
        {x: 0, y: 67 },
        {x: 1, y: 75 },
        {x: 2, y: 59 },
        {x: 3, y: 40 },
        {x: 4, y: 36 },
        {x: 5, y: 24 },
        {x: 6, y: 17 },
        {x: 7, y: 30 },
        {x: 8, y: 55 },
    ],
    tickLabelX: ['7/12', '7/13', '7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20'],
    tickLabelY: [
        {y: 10, label: '10M'},
        {y: 50, label: '50M'},
        {y: 75, label: '75M'},
    ],
    title: 'Daily Usage',
    titleAlign: 'center',
    color: '#48CFAD',
    labelX: 'Days of Operation',
    labelY: 'Total Users',
};

export const CenterTitleWithAxisLabelsDarkMode = Template.bind({});
CenterTitleWithAxisLabelsDarkMode.args = {
    data: [
        {x: 0, y: 67 },
        {x: 1, y: 75 },
        {x: 2, y: 59 },
        {x: 3, y: 40 },
        {x: 4, y: 36 },
        {x: 5, y: 24 },
        {x: 6, y: 17 },
        {x: 7, y: 30 },
        {x: 8, y: 55 },
    ],
    tickLabelX: ['7/12', '7/13', '7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20'],
    tickLabelY: [
        {y: 10, label: '10M'},
        {y: 50, label: '50M'},
        {y: 75, label: '75M'},
    ],
    title: 'Daily Usage',
    titleColor: '#fff',
    titleAlign: 'center',
    color: '#48CFAD',
    labelX: 'Days of Operation',
    labelY: 'Total Users',
    axisColor: '#999',
    tickLabelColor: '#999',
    axisLabelColor: '#fff',
    backgroundColor: '#333',
};

export const RightTitleNoAxisLabels = Template.bind({});
RightTitleNoAxisLabels.args = {
    data: [
        {x: 0, y: 10 },
        {x: 1, y: 0 },
        {x: 2, y: 39 },
        {x: 3, y: 62 },
        {x: 4, y: 77 },
        {x: 5, y: 85 },
        {x: 6, y: 60 },
        {x: 7, y: 22 },
        {x: 8, y: 18 },
        {x: 9, y: 6 },
        {x: 10, y: 27 },
        {x: 11, y: 12 },
    ],
    tickLabelX: ['January', '', 'March', '', 'May', '', 'July', '', 'September', '', '', 'December'],
    tickLabelY: [
        {y: 25, label: '3,000'},
        {y: 50, label: '6,000'},
        {y: 75, label: '12,000'},
    ],
    title: 'Monthly Downloads',
    titleAlign: 'right',
    titleColor: '#999',
    color: '#67AEFF',
    tickLabelXOverflow: false,
    axisColor: '#999',
    tickLabelColor: '#999',
    axisLabelColor: '#555',
    labelX: '',
    labelY: '',
    yAxis: false,
};

export const EmptyDataNoBackground = Template.bind({});
EmptyDataNoBackground.args = {
    data: [],
    tickLabelX: ['2018', '2019', '2020', '2021', '2022'],
    tickLabelY: [{y: 80, label: '10M'}],
    titleAlign: 'left',
    emptyLabel: 'Empty data',
    emptyLabelColor: '#333',
    labelX: 'Years of Operation',
    labelY: 'Total Clients',
    axisLabelColor: '#333',
    backgroundColor: 'transparent',
    title: 'Annual Projects',
};

