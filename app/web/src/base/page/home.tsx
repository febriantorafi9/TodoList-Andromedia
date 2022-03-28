import Home from 'src/components/home'
import { page } from 'web-init'

export default page({
  url: '/',
  layout: 'blank',
  component: ({}) => {
    return <Home/>
  },
})
