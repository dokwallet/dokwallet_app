// CardanoCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class CardanoCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;

    public CardanoCoin(String mnemonic) {
        super(mnemonic);
        this.privateKey = wallet.getKeyForCoin(CoinType.CARDANO);
        this.address = CoinType.CARDANO.deriveAddress(this.privateKey);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        return this.address;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        return null;
    }
    public String signTransaction(String rawData) {
        return null;
    }
}
