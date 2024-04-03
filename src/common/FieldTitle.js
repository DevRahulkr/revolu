import React from 'react'

import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const HeaderStyle = styled(Typography)`
font-family: 'Roboto';
font-size: 1rem;
color: #434649;
line-height: 1.55rem;
font-weight: 500
`

const StyledIcon = styled('div')`
  color: #ff0000;
  margin-left: 0.2rem;
`

const FieldContainer = styled('div')`
  display: flex;
`

const FieldTitle = ({ title, isMandatory = false }) => {
  return (
    <FieldContainer>
      <HeaderStyle
        variant="subtitle2"
        component="span"
        gutterBottom
        className="fieldContainer"
      >
        {title}
      </HeaderStyle>
      {
        isMandatory ? <StyledIcon>*</StyledIcon> : <></>
      }
    </FieldContainer>
  )
}

export default FieldTitle
