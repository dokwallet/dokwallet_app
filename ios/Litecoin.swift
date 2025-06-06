//
//  BitcoinCoin.swift
//  coinswallet
//
//  Created by Tal Grynbaum on 30/06/2023.
//


import Foundation
import WalletCore

class LiteCoin: CoinFactory.Coin {
  private var addressIndex: Int = 0
  
  override init(mnemonic: String) {
    super.init(mnemonic: mnemonic)
  }
  
  override func getNewAddress(isTestNet:Bool) -> String {
   let address = CoinType.litecoin.deriveAddress(privateKey: wallet.getKeyForCoin(coin: .litecoin))
    return address
  }
  
  override func getPrivateKey(isTestNet:Bool) -> String {
    
    let privateKeyBytes = wallet.getKeyForCoin(coin: .litecoin).data
    return Utils.convertToWif(data: privateKeyBytes, isTestNet: false, prefix: [0xB0], testNetPrefix: [0xef])

  }
  
  override func signTransaction(rawData: String) -> String {
    // Implement the logic to sign a Bitcoin transaction using the provided raw data
    return ""
  }
}
