import Avatar from '../../../../../../../components/Avatar/Avatar'

const DrawerTitle = ({ watch }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <Avatar src={watch('name') || ''} />
    {watch('name') && watch('name').toUpperCase()}
  </div>
)

export default DrawerTitle
