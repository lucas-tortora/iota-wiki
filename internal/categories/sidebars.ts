module.exports = {
  libraries: [
    {
      type: 'category',
      label: 'Libraries',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'Libraries',
        description: 'The IOTA Foundation maintains and develops a collection of frameworks building on the Tangle.',
        slug: '/libraries',
        keywords: ['libraries'],
      },
      items: [
        {
          type: 'link',
          label: 'iota.rs',
          href: 'iota.rs/welcome',
        },
        {
          type: 'link',
          label: 'iotajs',
          href: 'iotajs/welcome',
        },
        {
          type: 'link',
          label: 'wallet.rs',
          href: 'wallet.rs/wallet.rs/welcome',
        },
        {
          type: 'link',
          label: 'streams',
          href: 'streams/welcome',
        },
        {
          type: 'link',
          label: 'identity.rs',
          href: 'identity.rs/welcome',
        },
        {
          type: 'link',
          label: 'stronghold.rs',
          href: 'stronghold.rs/welcome',
        },
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'Utilities',
        description: 'These are utilities to integrate and explore the Tangle.',
        slug: '/utilities',
        keywords: ['utilities'],
      },
      items: [
        {
          type: 'link',
          label: 'tangle-explorer',
          href: 'utilities/tangle-explorer',
        },
        {
          type: 'link',
          label: 'visualizer',
          href: 'utilities/visualizer',
        },
        {
          type: 'link',
          label: 'iota-ipfs',
          href: 'utilities/iota-ipfs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'Nodes',
        description: 'Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle.',
        slug: '/nodes-software',
        keywords: ['nodes'],
      },
      items: [
        {
          type: 'link',
          label: 'hornet',
          href: 'hornet/welcome',
        },
        {
          type: 'link',
          label: 'bee',
          href: 'bee/welcome',
        },
        {
          type: 'link',
          label: 'wasp',
          href: 'smart-contracts/guide/chains_and_nodes/running-a-node',
        },
      ],
    },
    {
      type: 'category',
      label: 'Extensions',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'Extensions',
        description: 'Nodes can be extended with additional functionality through the IOTA Node eXtention (INX) interface.',
        slug: '/extensions',
        keywords: ['extensions'],
      },
      items: [
        {
          type: 'link',
          label: 'inx-indexer',
          href: 'inx-indexer/develop/welcome',
        },
        {
          type: 'link',
          label: 'chronicle.rs',
          href: 'chronicle.rs/welcome',
        },
        {
          type: 'link',
          label: 'inx-dashboard', // The link label
          href: 'https://github.com/iotaledger/inx-dashboard',
        },
        {
          type: 'link',
          label: 'inx-spammer', // The link label
          href: 'https://github.com/iotaledger/inx-spammer',
        },
      ], 
    },
  ]
};
