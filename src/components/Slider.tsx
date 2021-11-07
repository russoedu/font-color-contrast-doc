import './Slider.css'

export function Slider ({ id = 'slider', className = 'slider', min, max, vertical, value, setValue }: {
  id?: string,
  className?: string,
  min: number,
  max: number,
  value: number,
  vrtical: boolean,
  setValue: React.Dispatch<React.SetStateAction<number>>
}) {
  function handleSlider(event: any) {
    setValue(event.target.value);
  }

  return (
    <div className="slidecontainer">
      <input
        type="range"
        className={className}
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={handleSlider}
      />
    </div>
  )
}