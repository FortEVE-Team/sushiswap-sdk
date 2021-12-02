import { USDC_ADDRESS, USD_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'
import { TokenMap } from '../types/TokenMap'

export const USDC: TokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, USDC_ADDRESS[ChainId.MAINNET], 6, 'USDC', 'USD Coin'),
  [ChainId.FINDORA_TESTNET]: new Token(ChainId.FINDORA_TESTNET, USDC_ADDRESS[ChainId.FINDORA_TESTNET], 18, 'USDC', 'USD Coin'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, USDC_ADDRESS[ChainId.ROPSTEN], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, USDC_ADDRESS[ChainId.BSC_TESTNET], 6, 'USDC', 'USD Coin'),
}

export const USD: TokenMap = {
  ...USDC,
  [ChainId.CELO]: new Token(ChainId.CELO, USD_ADDRESS[ChainId.CELO], 18, 'cUSD', 'Celo Dollar'),
}

export const WETH9: TokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, WETH9_ADDRESS[ChainId.MAINNET], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FINDORA_TESTNET]: new Token(ChainId.FINDORA_TESTNET, WETH9_ADDRESS[ChainId.FINDORA_TESTNET], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, WETH9_ADDRESS[ChainId.ROPSTEN], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, WETH9_ADDRESS[ChainId.BSC_TESTNET], 18, 'WETH', 'Wrapped Ether'),

}

export const WNATIVE: TokenMap = {
  [ChainId.MAINNET]: WETH9[ChainId.MAINNET],
  [ChainId.FINDORA_TESTNET]: new Token(ChainId.FINDORA_TESTNET, WNATIVE_ADDRESS[ChainId.FINDORA_TESTNET], 18, 'WETH', 'Wrapped Ether on Findora'),
  [ChainId.ROPSTEN]: WETH9[ChainId.ROPSTEN],
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, WNATIVE_ADDRESS[ChainId.BSC_TESTNET], 18, 'WBNB', 'Wrapped BNB'),
}
