import {
  Binance,
  Ether,
} from '../entities/Native'

import { ChainId } from '../enums'

export const NATIVE = {
  [ChainId.MAINNET]: Ether.onChain(ChainId.MAINNET),
  [ChainId.ROPSTEN]: Ether.onChain(ChainId.ROPSTEN),
  [ChainId.FINDORA_TESTNET]: Ether.onChain(ChainId.FINDORA_TESTNET),
  [ChainId.BSC_TESTNET]: Binance.onChain(ChainId.BSC_TESTNET),
}
