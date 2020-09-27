#Solana的web3.js
如果之前接触过ETH，一定知道ETH的[web3.js](https://github.com/ethereum/web3.js/) ，主要提供了通过JavaScript与ETH上合约进行交互。而Solana也提供了与Solana的JSON RPC接口交互的[solana-web3.js](https://github.com/solana-labs/solana-web3.js) 。通过这个库，可以实现在dapp中用JavaScritp和Solana上的智能合约进行交互。

## 引用集成
solana/web3.js提供了npm包和yarn包的选择，使用yarn的话，可以在工程中用

    yarn add @solana/web3.js

进行引用，如果使用的npm的话，使用：

    npm install --save @solana/web3.js

如果想在自己已有的没有使用包管理的项目中使用，可以先checkout 出solana/web3.js的代码，然后checkout到最新的分支上，执行：

    cd your_solana_web3js_directory
    git clone https://github.com/solana-labs/solana-web3.js.git 
    git checkout v0.78.1
    npm install
    npm run build

编译出库文件后，然后时候用`<scritp />`进行引用


 
## 连接主链
## 查询余额
## 转账
## 触发合约

