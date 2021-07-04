import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

export class TransferAsset extends BaseAsset {
	public name = 'transfer';
  public id = 100;

  // Define schema for asset
	public schema = {
    $id: 'MesoToken/transfer-asset',
		title: 'TransferAsset transaction asset for MesoToken module',
		type: 'object',
		required: [],
		properties: {},
  };

  public validate({ asset }: ValidateAssetContext<{}>): void {
    // Validate your asset
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		throw new Error('Asset "transfer" apply hook is not implemented.');
	}
}
