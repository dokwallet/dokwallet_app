// BitcoinCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;
import com.coinswallet.Utils;

import wallet.core.jni.CoinType;
import wallet.core.jni.Derivation;
import wallet.core.jni.HDVersion;
import wallet.core.jni.HDWallet;
import wallet.core.jni.Purpose;


public class BitcoinCashCoin extends CoinFactory.Coin {
    private final HDWallet wallet;

    public BitcoinCashCoin(String mnemonic) {
        super(mnemonic);
        this.wallet = super.wallet;
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        // Derive a new private key for each call

        String address = wallet.getAddressForCoin(CoinType.BITCOINCASH);
        return address.replaceFirst("bitcoincash:","");
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        byte[] privateKeyBytes = wallet.getKeyForCoin(CoinType.BITCOINCASH).data();
        byte[] prefix = new byte[]{(byte) 0x80};
        byte[] testnetPrefix = new byte[]{(byte) 0xef};
        return Utils.convertPrivateKeytoWIF(privateKeyBytes,false,prefix,testnetPrefix);
    }

    @Override
    public String signTransaction(String rawData) {
        // You need to implement this method according to the specific requirements of
        // Bitcoin transactions.
        return null;
    }
}
