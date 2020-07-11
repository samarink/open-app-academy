export const allBenches = ({ entities: { benches }}) => (
  Object.keys(benches).map(id => benches[id])
);
