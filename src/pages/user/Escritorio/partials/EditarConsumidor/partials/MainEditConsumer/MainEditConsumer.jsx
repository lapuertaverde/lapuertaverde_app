import ConsumersCard from '../../../ConsumerCard/ConsumersCard'

const MainEditConsumer = ({ consumers, onClick, watch, open, width }) => (
  <div style={{ width }}>
    <ConsumersCard {...{ consumers, onClick, id: !open ? null : watch('_id') }} />
  </div>
)

export default MainEditConsumer
