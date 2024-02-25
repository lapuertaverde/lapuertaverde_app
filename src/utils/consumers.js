export const consumersFlatter = (consumerGroups) =>
  consumerGroups
    .map(({ name, consumers, _id }) =>
      consumers.map((consumer) => ({ groupName: name, groupId: _id, ...consumer }))
    )
    .flat()
