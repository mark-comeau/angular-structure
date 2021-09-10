import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { CustomerStatus } from '../enums/customer-status.enum';

export interface Customer extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: CustomerStatus;
	parentCustomer: IdAndCodeAndName<string>;
	remitToCustomer: IdAndCodeAndName<string>;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
	divisions: IdAndCodeAndName<string>[];
}
