// @author erwbyel

/** funcion para agrupar las actividades por categoría y acumular cantidades
 * @param {Array} activities
 * @returns {Object}
 */
function organizeActivities(activities) {
  const result = {};

  for (const activity of activities) {
    const name = activity.name;
    const quantity = activity.quantity;
    const category = activity.category;

    if (result[category] === undefined) {
      result[category] = {};
    }

    if (result[category][name] === undefined) {
      result[category][name] = quantity;
    } else {
      result[category][name] = result[category][name] + quantity;
    }
  }

  return result;
}


// Demostracion
const activities = [
  { name: 'Snorkel', quantity: 5, category: 'Acuaticas' },
  { name: 'Kayak', quantity: 3, category: 'Acuaticas' },
  { name: 'Futbol', quantity: 2, category: 'Deportes' },
  { name: 'Kayak', quantity: 2, category: 'Acuaticas' },
  { name: 'Tenis', quantity: 4, category: 'Deportes' }
];
console.log('corriendo demostracion...');
console.log(organizeActivities(activities));
// Fin Demostracion