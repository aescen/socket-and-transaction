export abstract class ISocketGateways {
  abstract handleMessage(message: any, socket?: any);
}
