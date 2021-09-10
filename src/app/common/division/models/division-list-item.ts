import { CsBaseModel } from '../../../shared/models/base';
import { DivisionStatus } from '../enums/division-status.enum';

export interface DivisionListItem extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: DivisionStatus;
	company: IdAndCodeAndName<string>;
	note?: string;
	tags?: string[];
}
