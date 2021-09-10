import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { CompanyStatus } from '../enums/company-status.enum';

export interface Company extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: CompanyStatus;
	currency: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
	//divisions?: IdAndCodeAndName<string>[];
	divisions1?: CompanyDivision[];
}

interface CompanyDivision {
	id: string;
	code: string;
	name: string;
}