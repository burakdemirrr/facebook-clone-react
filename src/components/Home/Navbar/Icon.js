import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import "./Icon.css"
const Icon = ({icon,title}) => {
  return (
    <div>
        <Tooltip title={title}>
            <IconButton className="icon-button">
                {icon}
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default Icon