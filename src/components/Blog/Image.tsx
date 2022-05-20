import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = ({ ...props }: ImageProps) => {
  console.log('In Image', props)

  if (props.src) {
    return (
      <img src={props.src} {...props} />
    )
  } else {
    return <img />
  }

}
