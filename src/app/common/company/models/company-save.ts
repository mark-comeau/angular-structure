import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { CompanyStatus } from '../enums/company-status.enum';

export interface CompanySave extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: CompanyStatus;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
}
