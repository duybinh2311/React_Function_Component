import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs'
import React from 'react'

export default function DemoAntd() {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className="container my-5">
      <Space direction="vertical">
        <DatePicker
          onChange={onChange}
          showTime={true}
          showNow={true}
          format={dayjs().format('DD/MM/YYYY hh:mm:ss')}
        />
      </Space>
    </div>
  )
}
