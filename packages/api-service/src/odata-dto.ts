import { ODataModelInfo } from './odata-model-info';

export class ODataDto {
  constructor(modelInfo = new ODataModelInfo()) {
    this._odataInfo = modelInfo;
  }
  _odataInfo: ODataModelInfo;
}
