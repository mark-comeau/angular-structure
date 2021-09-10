import { CsBaseModel } from '../../../shared/models/base';
import { CompanyStatus } from '../enums/company-status.enum';

export interface CompanyListItem extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: CompanyStatus;
	note?: string;
	tags?: string[];
}
