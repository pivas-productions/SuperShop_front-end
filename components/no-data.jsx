import { ConfigProvider, Empty } from 'antd'
import React from 'react'

const NoData = () => {
  return (
    <ConfigProvider
  theme={{
    token: {
      controlHeightLG: 90,
      fontSize: 20
    },
  }}
>
<Empty description='Nothing found'>
      
      </Empty>
</ConfigProvider>

  )
}

export default NoData