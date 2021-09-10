import { CsBaseModel } from '../../../shared/models/base';
import { VendorStatus } from '../enums/vendor-status.enum';

export interface VendorList extends CsBaseModel {
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
}