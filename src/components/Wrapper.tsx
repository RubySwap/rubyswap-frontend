import React from 'react'
import ReactGa from 'react-ga'
import { useLocation } from 'react-router'

interface WrapperProps {
  initialized: boolean
  // children: React.PropsWithChildren<any>
}

export const Wrapper = (props: WrapperProps) => {
  const location = useLocation()

  React.useEffect(() => {
    if (props.initialized) {
      // console.log(location.pathname + location.search)
      ReactGa.pageview(location.pathname + location.search)
    }
  }, [props.initialized, location])
  return <></>
}
