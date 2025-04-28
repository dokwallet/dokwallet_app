// BitcoinCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;
import com.coinswallet.Utils;
import wallet.core.jni.CoinType;
import wallet.core.jni.HDWallet;


public class DogeCoin extends CoinFactory.Coin {
    private final HDWallet wallet;

    public DogeCoin(String mnemonic) {
        super(mnemonic);
        this.wallet = super.wallet;
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        // Derive a new private key for each call
        return CoinType.DOGECOIN.deriveAddress(wallet.getKeyForCoin(CoinType.DOGECOIN));
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        byte[] privateKeyBytes = wallet.getKeyForCoin(CoinType.DOGECOIN).data();
        byte[] prefix = new byte[]{(byte) 0x9e};
        return Utils.convertPrivateKeytoWIF(privateKeyBytes,false,prefix,prefix);
    }

    @Override
    public String signTransaction(String rawData) {
        // You need to implement this method according to the specific requirements of
        // Bitcoin transactions.
        return null;
    }
}
