// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.Base64;
import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class ThorCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;


    public ThorCoin(String mnemonic) {
        super(mnemonic);
        this.address = CoinType.THORCHAIN.deriveAddress(wallet.getKeyForCoin(CoinType.THORCHAIN));
        this.privateKey = wallet.getKeyForCoin(CoinType.THORCHAIN);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        return this.address;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        return Base64.encode(this.privateKey.data());
    }

    @Override
    public String signTransaction(String rawData) {
        return null;
    }
}
