import { Customizations } from '../interfaces/customizations';
import { defaults } from './defaults';

export const customizations: Customizations = {
   ...defaults,
   // Core
   fileConnection: true,
   // Structure
   schemas: false,
   tables: true,
   views: true,
   triggers: true,
   // Settings
   elementsWrapper: '"',
   stringsWrapper: '\'',
   tableAdd: true,
   viewAdd: true,
   triggerAdd: true,
   schemaEdit: false,
   tableSettings: true,
   tableRealCount: true,
   viewSettings: true,
   triggerSettings: true,
   indexes: true,
   foreigns: true,
   sortableFields: true,
   nullable: true,
   nullablePrimary: true,
   triggerSql: 'BEGIN\r\n\r\nEND',
   readOnlyMode: true
};
