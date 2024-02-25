import Avatar from '../../../../../components/Avatar/Avatar'

import { cardContainer } from './consumerCard.module.scss'

const ConsumersCard = ({ consumers, onClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
      {consumers?.map((consumer, i) => {
        const { email, name, avatar, address, groupName } = consumer

        return (
          <div
            key={i}
            className={cardContainer}
            onClick={(e) => typeof onClick === 'function' && onClick(consumer, e)}
          >
            <p style={{ color: 'white' }}>{name}</p>
            <p style={{ color: 'white' }}>{email}</p>
            <p style={{ color: 'white' }}>{address}</p>
            <Avatar src={name}>{avatar || name}</Avatar>
            <p style={{ color: 'white' }}>{groupName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ConsumersCard
