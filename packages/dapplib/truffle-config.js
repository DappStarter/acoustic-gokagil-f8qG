require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain unknown hidden arctic surge sugar'; 
let testAccounts = [
"0x87c34a0c0b6eae4e779b307c5fc97f6649fc37d30398e1e5c26aad7af2af9b38",
"0xfd9e63332aaa5cc742395a3bde14d624465992458b694cf71270a5c7ce9aa809",
"0x253cb75b07a0bfba1d7b89e1203fe884054ed79c60b3619367c8d8f0380b1944",
"0xe6e9131c99c8fc072864529f785e0ea0550005d24343e908fae5cbb0572c2fca",
"0x23adb89b46ac449dff8fb94b9526dbac906c1cd3b7202a9fb0ae3447c0b8512e",
"0xc93ba5e03774837c86bfd1617c8470d75ac8acf94dbea5e6e47cbc4c24224b2e",
"0x14c4f18fff0c5fda53398ec6910bd4b733a27725f816b4e2892b5b7bf79d3c86",
"0xa70149dc7c0f0179c803fa11b1b5df5f645e1042b55c2b01cddea82ce7faca3f",
"0x29b24412f6192a17a68b23d2852b6a6797fb16c013c7f977cb25309e3e3518ad",
"0xef8f404a8997c300d526d6a6363d515d49ae706b371a6820b4e87b676204d280"
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

