import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { CustomerStatus } from '../enums/customer-status.enum';

export interface CustomerSave extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: CustomerStatus;
	parentCustomerId: string;
	remitToCustomerId: string;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
}
