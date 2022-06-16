export const CircularIcon =
  ({children,
    size='140px',
    bgColor = 'bg-grey-200',
    marginX = 'mx-auto',
    hoverColor = ''
  }) =>

  <figure className={`image radius-full grid-center ${marginX} ${bgColor}
    ${!!hoverColor ? hoverColor : '' }`}
    style={{width: size, height: size, minWidth: size, minHeight: size}}>
      {children}
  </figure>
