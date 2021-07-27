require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name recipe sting evil half end army genuine'; 
let testAccounts = [
"0x70f7e0e35d34cc33b6783d92f3de03ce60e3af750652b4dff2febd81c2fe8528",
"0x22d3eb80f84d4917aa60199a0f8ed8d6855a395f036ac4ca63556fef81218aa3",
"0x01b1759b24485679afbcf6fb30a1031504550941bede427e47174f20508860d3",
"0x6daf4154d40999a066288a3d7aaf6c1ff1980e2f5143ffab6ccb53611d05e884",
"0x9680a1641280d38ecabd98a783d8682636d64a9fbe3a8f359c5f85b6179d6763",
"0x0602b6a83e021c5b94bc36b5eff622e4ff6e6669c0c631944f5391eb99c948f3",
"0x39eb2c2439bc9ea95f939993414270a6aa41e1a84d147ef82496033d471d975c",
"0x44393c70f53b05419cc4371aa0e3db0a5d435ae1e9a07fb103c3a08f1e29e45e",
"0x79e3bef13aa418d0c0b68c4054e527c2c90af4261d1e582f0c8b67b9ed5ee04f",
"0xb8a736a5d4ad203a15aaf4498594fc498f0193d71a086a88e402cfc782569d7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

