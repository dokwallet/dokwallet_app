// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class TonCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;

    public TonCoin(String mnemonic) {
        super(mnemonic);
        this.privateKey = wallet.getKeyForCoin(CoinType.TON);
        this.address = CoinType.TON.deriveAddress(this.privateKey);
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
