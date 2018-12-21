export const ClientSchema = {
    name: 'Client',
    primaryKey: 'id',
    properties:{
      id:{ type: 'string'},
      name: { type: 'string' },
      fone: { type: 'string' },
      city: { type: 'string' },
      avatar: { type: 'string' }
    }
  } 