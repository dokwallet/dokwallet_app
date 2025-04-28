package com.coinswallet;

import org.bouncycastle.crypto.digests.SHA256Digest;
import java.util.Arrays;
import wallet.core.jni.Base58;

public class Utils {
    public static String convertPrivateKeytoWIF(byte[] privatekey, boolean isTestNet, byte[] prefix,  byte[] testnetPrefix) {
        byte[] finalPrefix = prefix;
        if(isTestNet){
            finalPrefix = testnetPrefix;
        }
        byte[] step1 = concateByteArray(finalPrefix, privatekey);
        byte[] step1_1 = concateByteArray(step1, new byte[]{(byte) 0x01});
        byte[] step2to3 = SHA256hash(SHA256hash(step1_1));
        byte[] checksum = getCheckSum(step2to3);
        byte[] step5 = concateByteArray(step1_1, checksum);
        return Base58.encodeNoCheck(step5);
    }
    private static byte[] concateByteArray(byte[] firstarray, byte[] secondarray) {
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

    private static byte[] SHA256hash(byte[] tobeHashed) {
        SHA256Digest digester = new SHA256Digest();
        byte[] retValue = new byte[digester.getDigestSize()];
        digester.update(tobeHashed, 0, tobeHashed.length);
        digester.doFinal(retValue, 0);
        return retValue;
    }

    private static byte[] getCheckSum(byte[] checksum) {
        return Arrays.copyOfRange(checksum, 0, 4);
    }
}

