import ConsumersCard from '../../../ConsumerCard/ConsumersCard'

const MainEditConsumer = ({ consumers, reset, watch, open, setOpen, width }) => {
  const handleClick = (consumer) => {
    reset(consumer)
    if (!open) setOpen(true)
  }

  return (
    <div style={{ width }}>
      <ConsumersCard {...{ consumers, onClick: handleClick, id: !open ? null : watch('_id') }} />
    </div>
  )
}

export default MainEditConsumer
