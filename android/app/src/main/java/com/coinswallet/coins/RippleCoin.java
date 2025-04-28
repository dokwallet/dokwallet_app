// EthereumCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class RippleCoin extends CoinFactory.Coin {
    private final String address;
    private final PrivateKey privateKey;

    public RippleCoin(String mnemonic) {
        super(mnemonic);
        this.privateKey = wallet.getKeyForCoin(CoinType.XRP);
        this.address = CoinType.XRP.deriveAddress(this.privateKey);
    }
    @Override
    public String getPublicKeyHex() {
        byte[] publicKeyBytes = this.privateKey.getPublicKey(CoinType.XRP).data();
        return CoinFactory.Coin.toHex(publicKeyBytes);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        return this.address;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        byte[] privateKeyBytes = this.privateKey.data();
        return CoinFactory.Coin.toHex(privateKeyBytes);
    }

    @Override
    public String signTransaction(String rawData) {
        return null;
    }
}
