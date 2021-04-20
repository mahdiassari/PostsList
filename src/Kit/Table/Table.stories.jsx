import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './index';
import { province } from './Province';
import { tblConfig } from './tblConfig';
import  Col  from '../Grid/Column';

storiesOf('Table', module)
  .addParameters({
    component: Table
  })
  .add("default", () =>
    <Col
      xl={18}
      style={{
        height : "25rem",
        marginTop : "3.125rem",
        border : "0.0625rem solid red",
        justifyContent : "flex-start"
      }}
    >
      <Table
       pageHandler={(res) => {
        alert(`skip = ${res}`)
      }} 
      showPaging={false}
      height="25rem"
      tblData={province}
      // tblData={[]} 
      tblConfig={tblConfig} pageSize={5} count={250} visible={true} />
    </Col>
  )





