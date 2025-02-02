import { RevoGrid } from '@a5601564/revogrid/dist/types/interfaces';
import { VueConstructor } from 'vue/types/umd';
import VueEditorAdapter from './vue-editor-adapter';
  
const vueEditor = (vueConstructor: VueConstructor) => {
    return (column: RevoGrid.ColumnDataSchemaModel, save: Function, close: Function) => {
        const adapter = new VueEditorAdapter(vueConstructor, column, save, close);
        return adapter;
    };
};

export default vueEditor;
