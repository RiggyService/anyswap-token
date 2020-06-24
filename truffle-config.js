module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 12001,
      network_id: 55555,
      gas: 4000000,
      gasPrice: 1000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.6.10",
      evmVersion: "constantinople",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500,
        }
      }
    }
  }
}
