import React from "react"

interface ILandingPageLayoutProps {
    children: React.ReactNode
}

const LandingpageLayout = ({children}:ILandingPageLayoutProps) => {
  return (
    <div>
        {
            children
        }
    </div>
  )
}

export default LandingpageLayout