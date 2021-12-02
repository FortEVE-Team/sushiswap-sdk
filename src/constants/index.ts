import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'

// TODO: Lots of redudency here... let's fix this.
export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x54a9e70358a2466d2955d44ad99956f26d60819356b1a806d919ce5d310c5d20',//
  [ChainId.ROPSTEN]: '0x54a9e70358a2466d2955d44ad99956f26d60819356b1a806d919ce5d310c5d20',//
  [ChainId.FINDORA_TESTNET]: '0x54a9e70358a2466d2955d44ad99956f26d60819356b1a806d919ce5d310c5d20',//
  [ChainId.BSC_TESTNET]: '0x54a9e70358a2466d2955d44ad99956f26d60819356b1a806d919ce5d310c5d20',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
