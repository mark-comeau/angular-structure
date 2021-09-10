import { CsBaseModel } from '../../../shared/models/base';
import { WarehouseStatus } from '../enums/warehouse-status.enum';

export interface WarehouseListItem extends CsBaseModel {
	id: string;
	code: string;
	name: string;
	status: WarehouseStatus;
	division: IdAndCodeAndName<string>;
	note?: string;
	tags?: string[];
}
