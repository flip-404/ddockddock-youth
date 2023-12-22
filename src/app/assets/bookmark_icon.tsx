type IconProps = {
  color?: string
  width?: number
  height?: number
}

const BookmarkIcon = ({ color, width = 25, height = 25 }: IconProps) => {
  return (
    <>
      <svg
        fill="#000000"
        height={`${height}px`}
        width={`${width}px`}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 212.045 212.045"
      >
        <path
          fill={color}
          d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
        />
      </svg>
    </>
  )
}

export default BookmarkIcon
