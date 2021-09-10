import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { VendorStatus } from '../enums/vendor-status.enum';

export interface VendorSave extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: VendorStatus;
	parentVendorId: string;
	remitToVendorId: string;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
}
