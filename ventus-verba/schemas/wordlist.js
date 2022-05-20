export default {
  name: 'wordlist',
  title: 'Add Words',
  type: 'document',
  fields: [
    {
      name: 'word',
      title: 'Word',
      description: 'Please add the word.',
      type: 'string',
    },
    {
      name: 'definition',
      title: 'Definition',
      description: 'Please add the definition of the word.',
      type: 'text',
    },
  ],
}
