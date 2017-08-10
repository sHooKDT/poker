export const { UPDATE_TABLE_STATE } = ['UPDATE_TABLE_STATE'];

export function updateTableData(data) {
  return {
    type: UPDATE_TABLE_STATE,
    payload: data,
  };
}
