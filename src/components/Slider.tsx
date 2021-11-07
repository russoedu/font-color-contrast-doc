import './Slider.css'

export function Slider ({ id = 'slider', className = 'slider', min, max, vertical = false, value, setValue }: {
  id?: string,
  className?: string,
  min: number,
  max: number,
  value: number,
  vertical?: boolean,
  setValue: (React.Dispatch<React.SetStateAction<number>>)
}) {
  function handleSlider(event: any) {
    setValue(event.target.value);
  }

  return (
    <div
      id={id}
      className={vertical ? className + ' vertical' : className}
    >
      <input
        type="range"
        className='slider'
        min={min}
        max={max}
        value={value}
        onChange={handleSlider}
      />
    </div>
  )
}