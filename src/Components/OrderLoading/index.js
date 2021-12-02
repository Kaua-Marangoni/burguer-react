import React from "react"
import ContentLoader from "react-content-loader"

import { SkeletonLoader } from "./styles"

const OrderLoading = () => {
  return (
    <SkeletonLoader>
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="gray"
        foregroundColor="#ecebeb"
      >
        <rect x="300" y="35" rx="8" ry="8" width="26" height="33" />
        <rect x="27" y="24" rx="5" ry="5" width="234" height="20" />
        <rect x="27" y="59" rx="5" ry="5" width="143" height="20" />
      </ContentLoader>
    </SkeletonLoader>
  )
}

export default OrderLoading
