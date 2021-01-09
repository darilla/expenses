import React from 'react';
import { Statistic as AntdStatistic, Card, Row, Col } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

function Statistics() {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <AntdStatistic
              title='Saved'
              value={40020.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix='zł'
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <AntdStatistic
              title='Spent'
              value={4002}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix='zł'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Statistics;
