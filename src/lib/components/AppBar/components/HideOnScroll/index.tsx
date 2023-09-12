import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { HideOnScrollProps } from './types'

const HideOnScroll: React.FC<HideOnScrollProps> = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
