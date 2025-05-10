// FilecoinCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;

import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class FilecoinCoin extends CoinFactory.Coin {
    private final String address = "";
    private final String privateKey = "";

    private final String defaultHDPath = "m/44'/461'/0'/0/0";
    private final String testDefaultHDPath = "m/44'/1'/0'/0/0";

    public FilecoinCoin(String mnemonic) {
        super(mnemonic);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        String path = isTestNet ? testDefaultHDPath : defaultHDPath;
        String derivedAddress = CoinType.FILECOIN.deriveAddress(wallet.getKey(CoinType.FILECOIN, path));
        if (isTestNet) {
            return "t" + derivedAddress.substring(1);
        }
        return derivedAddress;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        String path = isTestNet ? testDefaultHDPath : defaultHDPath;
        return CoinFactory.Coin.toHex(wallet.getKey(CoinType.FILECOIN, path).data());
    }

    @Override
    public String signTransaction(String rawData) {
        return null;
    }
}