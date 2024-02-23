export const getConsumerId = () => {
  const { consumer } = JSON.parse(sessionStorage.getItem('token'))
  return consumer
}
