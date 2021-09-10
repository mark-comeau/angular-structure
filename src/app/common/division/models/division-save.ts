import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { DivisionStatus } from '../enums/division-status.enum';

export interface DivisionSave extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: DivisionStatus;
	companyId: string;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
}
