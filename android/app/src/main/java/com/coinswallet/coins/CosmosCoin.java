// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class CosmosCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;

    public CosmosCoin(String mnemonic) {
        super(mnemonic);
        this.address = CoinType.COSMOS.deriveAddress(wallet.getKeyForCoin(CoinType.COSMOS));
        this.privateKey = wallet.getKeyForCoin(CoinType.COSMOS);
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
