import React from 'react';
import Bar from './Bar';

export default {
  title: 'Components/Bar',
  component: Bar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <div style={{width: '100px', height: '300px'}}><Bar {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  value: 80,
};

export const Blue = Template.bind({});
Blue.args = {
    color: '#67AEFF',
    value: 80,
};

export const LargeValue = Template.bind({});
LargeValue.args = {
  value: 189,
};

export const NegativeValue = Template.bind({});
NegativeValue.args = {
  value: -37,
};
