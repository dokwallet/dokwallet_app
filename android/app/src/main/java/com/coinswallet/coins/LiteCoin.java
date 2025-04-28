// BitcoinCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;
import com.coinswallet.Utils;

import wallet.core.jni.CoinType;
import wallet.core.jni.HDWallet;


public class LiteCoin extends CoinFactory.Coin {
    private final HDWallet wallet;

    public LiteCoin(String mnemonic) {
        super(mnemonic);
        this.wallet = super.wallet;
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        // Derive a new private key for each call
        return CoinType.LITECOIN.deriveAddress(wallet.getKeyForCoin(CoinType.LITECOIN));
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        byte[] privateKeyBytes = wallet.getKeyForCoin(CoinType.LITECOIN).data();
        byte[] prefix = new byte[]{(byte) 0xb0};
        return Utils.convertPrivateKeytoWIF(privateKeyBytes,false,prefix,prefix);
    }

    @Override
    public String signTransaction(String rawData) {
        // You need to implement this method according to the specific requirements of
        // Bitcoin transactions.
        return null;
    }
}
