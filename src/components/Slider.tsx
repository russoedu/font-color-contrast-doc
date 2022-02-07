import './Slider.css'

export function Slider ({ id= 'slider', className, min, max, vertical = false, value, setValue }: {
  id?: string,
  className?: string,
  min: number,
  max: number,
  value: number,
  vertical?: boolean,
  setValue: (React.Dispatch<React.SetStateAction<number>>),
}) {
  let cls: string = ''
  if (className && vertical) {
    cls = className + ' vertical'
  } else if (className) {
    cls = className
  } else if (vertical) {
    cls = 'vertical'
  }

  function handleSlider(event: any) {
    setValue(event.target.value)
  }

  return (
    <input
      id={id}
      className={cls}
      type='range'
      min={min}
      max={max}
      value={value}
      onChange={handleSlider}
    />
  )
}
