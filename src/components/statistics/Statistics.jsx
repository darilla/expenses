import React, { useState } from 'react';
import { Statistic as AntdStatistic, Row, DatePicker } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { ResponsivePie } from '@nivo/pie';
import moment from 'moment';

import { ReactComponent as Coins } from '../../assets/coins.svg';
import { STATS_DATE_FORMAT } from '../../common/constants';
import { GRAY } from '../../common/colors';

import { Cards, ChartWrapper, StyledCard } from './Statistics.styles';

// @todo - Connect with table tags.
const data = [
  {
    id: 'cats',
    label: 'cats',
    value: 151,
    color: 'hsl(220, 70%, 50%)',
  },
  {
    id: 'food',
    label: 'food',
    value: 372,
    color: 'hsl(41, 70%, 50%)',
  },
  {
    id: 'clothes',
    label: 'clothes',
    value: 429,
    color: 'hsl(207, 70%, 50%)',
  },
  {
    id: 'gifts',
    label: 'gifts',
    value: 299,
    color: 'hsl(151, 70%, 50%)',
  },
  {
    id: 'apartment',
    label: 'apartment',
    value: 549,
    color: 'hsl(330, 70%, 50%)',
  },
];

function Statistics() {
  const [selectedDate, selectDate] = useState(moment);

  return (
    <div>
      <Row>
        <DatePicker
          className='stats-date-picker'
          size='large'
          picker='month'
          format={STATS_DATE_FORMAT}
          bordered={false}
          value={selectedDate}
          onChange={selectDate}
          allowClear={false}
        />
      </Row>
      <Cards>
        <StyledCard>
          <AntdStatistic
            title='Saved'
            value={40020.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix='zł'
          />
        </StyledCard>
        <StyledCard>
          <AntdStatistic
            title='Spent'
            value={4002}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix='zł'
          />
        </StyledCard>
        <StyledCard>
          <AntdStatistic
            title='Owned'
            value={20}
            precision={2}
            valueStyle={{ color: '#137acf' }}
            suffix='zł'
          />
          <Coins width='30px' height='30px' style={{ margin: '0 0 0 16px' }} />
        </StyledCard>
      </Cards>
      <ChartWrapper>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          colors={{ scheme: 'pastel1' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsTextColor={GRAY.GRAY_9}
          radialLabelsLinkColor={{ from: 'color' }}
          sliceLabelsTextColor={GRAY.GRAY_9}
          radialLabelsTextXOffset={10}
        />
      </ChartWrapper>
    </div>
  );
}

export default Statistics;
