// TezosCoin.java
package com.coinswallet.coins;

import com.coinswallet.CoinFactory;
import wallet.core.jni.Base58;


import wallet.core.jni.CoinType;
import wallet.core.jni.PrivateKey;

public class TezosCoin extends CoinFactory.Coin {
    private final String address;
    private final String privateKey;


    public TezosCoin(String mnemonic) {
        super(mnemonic);
        PrivateKey privateKeyInfo = wallet.getKeyForCoin(CoinType.TEZOS);
        this.address = CoinType.TEZOS.deriveAddress(privateKeyInfo);
        byte[] privateKeyData = privateKeyInfo.data();
        byte[] publicKeyData = privateKeyInfo.getPublicKey(CoinType.TEZOS).data();
        byte[] privatePublicKeyData = concateByteArray(privateKeyData,publicKeyData);
        byte[] prefix = { 43, (byte) 246, 78, 7 };
        byte[] finalBytes = concateByteArray(prefix,privatePublicKeyData);
        this.privateKey = Base58.encode(finalBytes);
    }

    @Override
    public String getNewAddress(Boolean isTestNet) {
        return this.address;
    }

    @Override
    public String getPrivateKey(Boolean isTestNet) {
        return this.privateKey;
    }


    @Override
    public String signTransaction(String rawData) {
        return null;
    }

    private byte[] concateByteArray(byte[] firstarray, byte[] secondarray) {
        byte[] output = new byte[firstarray.length + secondarray.length];
        int i;
        for (i = 0; i < firstarray.length; i++) {
            output[i] = firstarray[i];
        }
        int index = i;
        for (i = 0; i < secondarray.length; i++) {
            output[index] = secondarray[i];
            index++;
        }
        return output;
    }
}
