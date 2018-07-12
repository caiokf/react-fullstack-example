export default {
  create: {
    authorize: () => true,
    validate: () => true,
    action: () => { },
  },

  list: {
    action: () => { },
  },

  item: {
    authorize: () => true,
    action: (req, res) => {
      res.send(`Document ${req.params.id}`)
    },
  },

  delete: {
    action: () => { },
  },

  update: {
    action: () => { },
  },
}
