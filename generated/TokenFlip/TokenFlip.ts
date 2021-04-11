// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GameChallenged extends ethereum.Event {
  get params(): GameChallenged__Params {
    return new GameChallenged__Params(this);
  }
}

export class GameChallenged__Params {
  _event: GameChallenged;

  constructor(event: GameChallenged) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get challenger(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GameCreated extends ethereum.Event {
  get params(): GameCreated__Params {
    return new GameCreated__Params(this);
  }
}

export class GameCreated__Params {
  _event: GameCreated;

  constructor(event: GameCreated) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GameDeleted extends ethereum.Event {
  get params(): GameDeleted__Params {
    return new GameDeleted__Params(this);
  }
}

export class GameDeleted__Params {
  _event: GameDeleted;

  constructor(event: GameDeleted) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GameRevealRequest extends ethereum.Event {
  get params(): GameRevealRequest__Params {
    return new GameRevealRequest__Params(this);
  }
}

export class GameRevealRequest__Params {
  _event: GameRevealRequest;

  constructor(event: GameRevealRequest) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get requestID(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class GameRevealed extends ethereum.Event {
  get params(): GameRevealed__Params {
    return new GameRevealed__Params(this);
  }
}

export class GameRevealed__Params {
  _event: GameRevealed;

  constructor(event: GameRevealed) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UpdateToken extends ethereum.Event {
  get params(): UpdateToken__Params {
    return new UpdateToken__Params(this);
  }
}

export class UpdateToken__Params {
  _event: UpdateToken;

  constructor(event: UpdateToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minAmountDeposit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get minAmountWager(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenFlip__gameMapResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class TokenFlip__tokensResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class TokenFlip extends ethereum.SmartContract {
  static bind(address: Address): TokenFlip {
    return new TokenFlip("TokenFlip", address);
  }

  balances(param0: Address, param1: Address): BigInt {
    let result = super.call("balances", "balances(address,address):(uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balances",
      "balances(address,address):(uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createGame(_token: Address, _amount: BigInt): BigInt {
    let result = super.call(
      "createGame",
      "createGame(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_createGame(
    _token: Address,
    _amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createGame",
      "createGame(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  denominator(): BigInt {
    let result = super.call("denominator", "denominator():(uint256)", []);

    return result[0].toBigInt();
  }

  try_denominator(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("denominator", "denominator():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  devAddress(): Address {
    let result = super.call("devAddress", "devAddress():(address)", []);

    return result[0].toAddress();
  }

  try_devAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("devAddress", "devAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  devFee(): BigInt {
    let result = super.call("devFee", "devFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_devFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("devFee", "devFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dividendAddress(): Address {
    let result = super.call(
      "dividendAddress",
      "dividendAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_dividendAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "dividendAddress",
      "dividendAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dmtAddress(): Address {
    let result = super.call("dmtAddress", "dmtAddress():(address)", []);

    return result[0].toAddress();
  }

  try_dmtAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("dmtAddress", "dmtAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameCount(): BigInt {
    let result = super.call("gameCount", "gameCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_gameCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gameCount", "gameCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameIDsByRequestID(param0: Bytes): BigInt {
    let result = super.call(
      "gameIDsByRequestID",
      "gameIDsByRequestID(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_gameIDsByRequestID(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "gameIDsByRequestID",
      "gameIDsByRequestID(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameMap(param0: BigInt): TokenFlip__gameMapResult {
    let result = super.call(
      "gameMap",
      "gameMap(uint256):(address,address,address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TokenFlip__gameMapResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBigInt()
    );
  }

  try_gameMap(param0: BigInt): ethereum.CallResult<TokenFlip__gameMapResult> {
    let result = super.tryCall(
      "gameMap",
      "gameMap(uint256):(address,address,address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TokenFlip__gameMapResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBigInt()
      )
    );
  }

  getBalance(_token: Address): BigInt {
    let result = super.call("getBalance", "getBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_token)
    ]);

    return result[0].toBigInt();
  }

  try_getBalance(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance(address):(uint256)", [
      ethereum.Value.fromAddress(_token)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRandomNumber(userProvidedSeed: BigInt): Bytes {
    let result = super.call(
      "getRandomNumber",
      "getRandomNumber(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(userProvidedSeed)]
    );

    return result[0].toBytes();
  }

  try_getRandomNumber(userProvidedSeed: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRandomNumber",
      "getRandomNumber(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(userProvidedSeed)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  routerAddress(): Address {
    let result = super.call("routerAddress", "routerAddress():(address)", []);

    return result[0].toAddress();
  }

  try_routerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "routerAddress",
      "routerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: Address): TokenFlip__tokensResult {
    let result = super.call("tokens", "tokens(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new TokenFlip__tokensResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_tokens(param0: Address): ethereum.CallResult<TokenFlip__tokensResult> {
    let result = super.tryCall("tokens", "tokens(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TokenFlip__tokensResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  wethAddress(): Address {
    let result = super.call("wethAddress", "wethAddress():(address)", []);

    return result[0].toAddress();
  }

  try_wethAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("wethAddress", "wethAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _routerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _dividendAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _wethAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _dmtAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _devAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChallengeGameCall extends ethereum.Call {
  get inputs(): ChallengeGameCall__Inputs {
    return new ChallengeGameCall__Inputs(this);
  }

  get outputs(): ChallengeGameCall__Outputs {
    return new ChallengeGameCall__Outputs(this);
  }
}

export class ChallengeGameCall__Inputs {
  _call: ChallengeGameCall;

  constructor(call: ChallengeGameCall) {
    this._call = call;
  }

  get _gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get userProvidedSeed(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChallengeGameCall__Outputs {
  _call: ChallengeGameCall;

  constructor(call: ChallengeGameCall) {
    this._call = call;
  }
}

export class CreateGameCall extends ethereum.Call {
  get inputs(): CreateGameCall__Inputs {
    return new CreateGameCall__Inputs(this);
  }

  get outputs(): CreateGameCall__Outputs {
    return new CreateGameCall__Outputs(this);
  }
}

export class CreateGameCall__Inputs {
  _call: CreateGameCall;

  constructor(call: CreateGameCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateGameCall__Outputs {
  _call: CreateGameCall;

  constructor(call: CreateGameCall) {
    this._call = call;
  }

  get gameID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DeleteGameCall extends ethereum.Call {
  get inputs(): DeleteGameCall__Inputs {
    return new DeleteGameCall__Inputs(this);
  }

  get outputs(): DeleteGameCall__Outputs {
    return new DeleteGameCall__Outputs(this);
  }
}

export class DeleteGameCall__Inputs {
  _call: DeleteGameCall;

  constructor(call: DeleteGameCall) {
    this._call = call;
  }

  get _gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteGameCall__Outputs {
  _call: DeleteGameCall;

  constructor(call: DeleteGameCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositTokenCall extends ethereum.Call {
  get inputs(): DepositTokenCall__Inputs {
    return new DepositTokenCall__Inputs(this);
  }

  get outputs(): DepositTokenCall__Outputs {
    return new DepositTokenCall__Outputs(this);
  }
}

export class DepositTokenCall__Inputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }
}

export class GetRandomNumberCall extends ethereum.Call {
  get inputs(): GetRandomNumberCall__Inputs {
    return new GetRandomNumberCall__Inputs(this);
  }

  get outputs(): GetRandomNumberCall__Outputs {
    return new GetRandomNumberCall__Outputs(this);
  }
}

export class GetRandomNumberCall__Inputs {
  _call: GetRandomNumberCall;

  constructor(call: GetRandomNumberCall) {
    this._call = call;
  }

  get userProvidedSeed(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetRandomNumberCall__Outputs {
  _call: GetRandomNumberCall;

  constructor(call: GetRandomNumberCall) {
    this._call = call;
  }

  get requestID(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RawFulfillRandomnessCall extends ethereum.Call {
  get inputs(): RawFulfillRandomnessCall__Inputs {
    return new RawFulfillRandomnessCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomnessCall__Outputs {
    return new RawFulfillRandomnessCall__Outputs(this);
  }
}

export class RawFulfillRandomnessCall__Inputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get randomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall__Outputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDevAddressCall extends ethereum.Call {
  get inputs(): SetDevAddressCall__Inputs {
    return new SetDevAddressCall__Inputs(this);
  }

  get outputs(): SetDevAddressCall__Outputs {
    return new SetDevAddressCall__Outputs(this);
  }
}

export class SetDevAddressCall__Inputs {
  _call: SetDevAddressCall;

  constructor(call: SetDevAddressCall) {
    this._call = call;
  }

  get _devAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDevAddressCall__Outputs {
  _call: SetDevAddressCall;

  constructor(call: SetDevAddressCall) {
    this._call = call;
  }
}

export class SetDevFeeCall extends ethereum.Call {
  get inputs(): SetDevFeeCall__Inputs {
    return new SetDevFeeCall__Inputs(this);
  }

  get outputs(): SetDevFeeCall__Outputs {
    return new SetDevFeeCall__Outputs(this);
  }
}

export class SetDevFeeCall__Inputs {
  _call: SetDevFeeCall;

  constructor(call: SetDevFeeCall) {
    this._call = call;
  }

  get _devFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDevFeeCall__Outputs {
  _call: SetDevFeeCall;

  constructor(call: SetDevFeeCall) {
    this._call = call;
  }
}

export class SetDividendAddressCall extends ethereum.Call {
  get inputs(): SetDividendAddressCall__Inputs {
    return new SetDividendAddressCall__Inputs(this);
  }

  get outputs(): SetDividendAddressCall__Outputs {
    return new SetDividendAddressCall__Outputs(this);
  }
}

export class SetDividendAddressCall__Inputs {
  _call: SetDividendAddressCall;

  constructor(call: SetDividendAddressCall) {
    this._call = call;
  }

  get _dividendAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDividendAddressCall__Outputs {
  _call: SetDividendAddressCall;

  constructor(call: SetDividendAddressCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetTokenCall extends ethereum.Call {
  get inputs(): SetTokenCall__Inputs {
    return new SetTokenCall__Inputs(this);
  }

  get outputs(): SetTokenCall__Outputs {
    return new SetTokenCall__Outputs(this);
  }
}

export class SetTokenCall__Inputs {
  _call: SetTokenCall;

  constructor(call: SetTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _minAmountDeposit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minAmountWager(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetTokenCall__Outputs {
  _call: SetTokenCall;

  constructor(call: SetTokenCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}