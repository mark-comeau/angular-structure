import { CsBaseModel } from '../../../shared/models/base';
import { ChangeState } from '../../../shared/enums/change-state.enum';
import { WarehouseStatus } from '../enums/warehouse-status.enum';

export interface Warehouse extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: WarehouseStatus;
	division: IdAndCodeAndName<string>;
	note?: string;
	tags?: string[];
	changeState: ChangeState;
	concurrencyVersion: number;
}
