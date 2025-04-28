// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class PolkadotCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;

    public PolkadotCoin(String mnemonic) {
        super(mnemonic);
        this.address = CoinType.POLKADOT.deriveAddress(wallet.getKeyForCoin(CoinType.POLKADOT));
        this.privateKey = wallet.getKeyForCoin(CoinType.POLKADOT);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        return this.address;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        return CoinFactory.Coin.toHex(this.privateKey.data());
    }
    public String signTransaction(String rawData) {
        return null;
    }
}
