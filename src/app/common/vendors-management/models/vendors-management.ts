import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { VendorStatus } from '../../vendor/enums/vendor-status.enum';

export interface VendorsManagement extends CsBaseModel {
	vendor?: Vendor[];
}

interface Vendor {
	id: string;
	code: string;
	name: string;
	status: VendorStatus;
	parentVendor: IdAndCodeAndName<string>;
	remitToVendor: IdAndCodeAndName<string>;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
	divisions: IdAndCodeAndName<string>[];
}
